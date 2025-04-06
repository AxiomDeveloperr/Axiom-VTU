import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { login, logout, refreshToken, register } from '../../api/auth.api';

// Async thunks
export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const data = await register(userData);
      return data; // { user, token }
    } catch (error) {
      const errorMessage = error || error.message || 'Registration failed, please try again later';
      // console.log('error is ', error);
      return rejectWithValue(errorMessage);
    }
  },
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await login(credentials);
      return data;
    } catch (error) {
      console.log('Login Error:', error); // Debug log
      console.log('Login Error message:', error.message); // Debug log

      const errorMessage = error.message || 'Login failed';
      return rejectWithValue(errorMessage || 'Login failed. Please try again later.');
    }
  },
);

export const refreshAccessToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, { rejectWithValue }) => {
    try {
      const data = await refreshToken();
      return data; // { token }
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to refresh token. Please try again.');
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      await logout();
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Logout failed');
    } finally {
      dispatch(clearAuthState()); // Reset auth state
    }
  },
);

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuthState: (state) => {
      Object.assign(state, initialState); // Reset state to initial values
    },
    clearAuthError: (state) => {
      state.error = null;
      state.status = 'idle'; // Clear the error
    },
    updateToken: (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        Object.assign(state, initialState); // Reset state on logout
      });
  },
});

// Persist config
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isAuthenticated'], // Persist only these fields
};

export const { clearAuthState, updateToken, clearAuthError } = authSlice.actions;
export const persistedAuthReducer = persistReducer(persistConfig, authSlice.reducer);
