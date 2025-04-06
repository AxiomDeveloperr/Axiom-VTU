import apiClient from './apiClient';

// Register user
export const register = async (userData) => {
  try {
    const response = await apiClient.post('/auth/register', userData);
    return response.data; // { user, token }
  } catch (error) {
    // Handle network errors (no response from server)
    if (!error) {
      throw 'Network error. Please check your internet connection.';
    }

    // Handle specific error messages from the server
    const errorMessage = error.message || 'Registration failed. Please try again later.';
    throw errorMessage;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error || error.message || { message: 'Login failed. Please try again later.' };
  }
};

// Refresh access token
export const refreshToken = async () => {
  try {
    const response = await apiClient.post('/auth/refresh-token', null);
    return response.data; // { token }
  } catch (error) {
    throw error.message || 'Failed to refresh token. Please try again.'; // Throw error for handling in the slice
  }
};

// Logout user
export const logout = async () => {
  try {
    await apiClient.post('/auth/logout', null);
  } catch (error) {
    throw error.message || 'Logout failed. Please try again.'; // Throw error for handling in the slice
  }
};
