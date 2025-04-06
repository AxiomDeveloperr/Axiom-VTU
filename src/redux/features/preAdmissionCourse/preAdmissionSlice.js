import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createPreAdmissionCourse,
  getAllPreAdmissionCourses,
  getPreAdmissionCourseById,
  updatePreAdmissionCourse,
  deletePreAdmissionCourse,
} from '../../api/preAdmissionCourse.api';

// Async Thunks
export const fetchPreAdmissionCourses = createAsyncThunk(
  'preAdmissionCourses/fetchAll',
  async () => {
    const response = await getAllPreAdmissionCourses();
    return response.data;
  },
);

export const fetchPreAdmissionCourseById = createAsyncThunk(
  'preAdmissionCourses/fetchById',
  async (id) => {
    const response = await getPreAdmissionCourseById(id);
    return response.data;
  },
);

export const addPreAdmissionCourse = createAsyncThunk(
  'preAdmissionCourses/add',
  async (courseData) => {
    const response = await createPreAdmissionCourse(courseData);
    return response.data;
  },
);

export const editPreAdmissionCourse = createAsyncThunk(
  'preAdmissionCourses/edit',
  async ({ id, updateData }) => {
    const response = await updatePreAdmissionCourse(id, updateData);
    return response.data;
  },
);

export const removePreAdmissionCourse = createAsyncThunk(
  'preAdmissionCourses/remove',
  async (id) => {
    const response = await deletePreAdmissionCourse(id);
    return response.data;
  },
);

const initialState = {
  courses: [],
  currentCourse: null,
  status: 'idle',
  error: null,
};

// Slice
const preAdmissionCourseSlice = createSlice({
  name: 'preAdmissionCourses',
  initialState,
  reducers: {
    clearPreAdmissionCourseState: (state) => {
      Object.assign(state, initialState); // Reset state to initial values
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPreAdmissionCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPreAdmissionCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchPreAdmissionCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchPreAdmissionCourseById.fulfilled, (state, action) => {
        state.currentCourse = action.payload;
      })
      .addCase(addPreAdmissionCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(editPreAdmissionCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      })
      .addCase(removePreAdmissionCourse.fulfilled, (state, action) => {
        state.courses = state.courses.filter((course) => course.id !== action.meta.arg);
      });
  },
});
export const { clearPreAdmissionCourseState } = preAdmissionCourseSlice.actions;
export default preAdmissionCourseSlice.reducer;
