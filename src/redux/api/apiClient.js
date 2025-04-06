import axios from 'axios';
import store from '../store/store';
import { updateToken, clearAuthState } from '../features/auth/authSlice';

// const api_url = 'https://api.iotbtech.org.ng';
// const api_url = 'http://localhost:3000';
const api_url = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include cookies in requests
});

let isRefreshing = false;
let failedRequestsQueue = [];

// Request interceptor to add the access token to headers
apiClient.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth?.token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error); // Debug log
    return Promise.reject(error);
  },
);

// Response interceptor to handle token refresh and errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error('Interceptor Error:', error.response.data.message); // Debug log

    const originalRequest = error.config;

    // Prevent refresh logic from running on login requests
    if (originalRequest.url.includes('/auth/login')) {
      return Promise.reject(error.response.data || error.message);
    }

    // Handle 401 Unauthorized errors (token expired)
    if (error.response.status === 401 && !originalRequest._retry) {
      console.log('Attempting token refresh...'); // Debug log
      originalRequest._retry = true;

      if (isRefreshing) {
        console.log('Token refresh already in progress. Queueing request...'); // Debug log
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return apiClient(originalRequest);
          })
          .catch((err) => {
            console.error('Failed to retry request after token refresh:', err); // Debug log
            return Promise.reject(err);
          });
      }

      isRefreshing = true;

      try {
        const refreshResponse = await axios.post(`${api_url}/auth/refresh-token`, null, {
          withCredentials: true,
        });

        const newAccessToken = refreshResponse.data.data.access_token;
        console.log('New access token:', newAccessToken); // Debug log

        store.dispatch(updateToken(newAccessToken));

        failedRequestsQueue.forEach(({ resolve }) => resolve(newAccessToken));
        failedRequestsQueue = [];

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError); // Debug log

        store.dispatch(clearAuthState());

        failedRequestsQueue.forEach(({ reject }) => reject(refreshError));
        failedRequestsQueue = [];

        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    // console.log('GOT ERROr ', error);
    return Promise.reject(error.response.data || error.response.data.message);
  },
);

export default apiClient;
