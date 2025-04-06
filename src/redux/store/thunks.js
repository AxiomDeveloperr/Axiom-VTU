import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearAuthState } from '../features/auth/authSlice';
import { clearApplicationsState } from '../features/application/applicationSlice';
import { clearError, resetGlobalState } from '../features/global/globalSlice';
import { clearMentorsState } from '../features/admin/mentorSlice';
import { clearPreAdmissionCourseState } from '../features/preAdmissionCourse/preAdmissionSlice';
import { clearCohortsState } from '../features/admin/cohortSlice';
import { clearCoursessState } from '../features/admin/courseSlice';

export const clearEntireState = createAsyncThunk(
  'global/clearEntireState',
  async (_, { dispatch }) => {
    try {
      // Clear Redux state
      dispatch(clearAuthState()); // Clear auth state
      dispatch(clearApplicationsState()); // Clear applications state
      dispatch(clearError()); // Clear global error
      dispatch(clearMentorsState());
      dispatch(clearPreAdmissionCourseState());
      dispatch(clearCohortsState());
      dispatch(clearCoursessState());
      dispatch(resetGlobalState()); // Reset global state to initial values

      // Clear cookies
      document.cookie.split(';').forEach((c) => {
        document.cookie = c
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`);
      });

      // Clear local storage and session storage
      localStorage.clear();
      sessionStorage.clear();

      console.log('You are now logged out safely.');
    } catch (error) {
      console.error('Failed to logout safely', error);
      throw error;
    }
  },
);
