import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false, // Example global state for loading
  error: null, // Example global state for error messages
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetGlobalState: (state) => {
      Object.assign(state, initialState); // Reset global state to initial values
    },
  },
});

// Export actions
export const { setLoading, setError, clearError, resetGlobalState } = globalSlice.actions;

// Export reducer
export default globalSlice.reducer;
  