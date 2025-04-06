import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createCourse, getAllCourses, getCourseById, updateCourse } from '../../api/admin.api';

// Async Thunks
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
  const response = await getAllCourses();
  return response.data;
});

export const fetchCourseById = createAsyncThunk('courses/fetchCourseById', async (id) => {
  const response = await getCourseById(id);
  return response.data;
});

export const addCourse = createAsyncThunk('courses/addCourse', async (courseData) => {
  const response = await createCourse(courseData);
  return response.data;
});

export const editCourse = createAsyncThunk('courses/editCourse', async ({ id, updateData }) => {
  const response = await updateCourse(id, updateData);
  return response.data;
});

const initialState = {
  courses: [],
  currentCourse: null,
  status: 'idle',
  error: null,
};

// Slice
const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    clearCoursessState: (state) => {
      Object.assign(state, initialState); // Reset state to initial values
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCourseById.fulfilled, (state, action) => {
        state.currentCourse = action.payload;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.courses.push(action.payload);
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        const index = state.courses.findIndex((course) => course.id === action.payload.id);
        if (index !== -1) {
          state.courses[index] = action.payload;
        }
      });
  },
});

export const { clearCoursessState } = coursesSlice.actions;
export default coursesSlice.reducer;
