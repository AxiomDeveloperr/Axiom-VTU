import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createMentor,
  getAllMentors,
  getMentorByCourseId,
  updateMentor,
  deleteMentor,
  assignMentorToCourse,
  unassignMentorFromCourse,
} from '../../api/admin.api';


// Async Thunks
export const fetchMentors = createAsyncThunk('mentors/fetchMentors', async () => {
  const response = await getAllMentors();
  return response.data;
});

export const fetchMentorById = createAsyncThunk('mentors/fetchMentorById', async (id) => {
  const response = await getMentorByCourseId(id);
  return response.data;
});

export const fetchMentorByCourseId = createAsyncThunk(
  'mentors/fetchMentorByCourseId',
  async (id) => {
    const response = await getMentorByCourseId(id);
    return response.data;
  },
);

export const addMentor = createAsyncThunk('mentors/addMentor', async (mentorData) => {
  const response = await createMentor(mentorData);
  return response.data;
});

export const editMentor = createAsyncThunk('mentors/editMentor', async ({ id, updateData }) => {
  const response = await updateMentor(id, updateData);
  return response.data;
});

export const removeMentor = createAsyncThunk('mentors/removeMentor', async (id) => {
  const response = await deleteMentor(id);
  return response.data;
});

export const assignMentor = createAsyncThunk('mentors/assignMentor', async (assignmentData) => {
  const response = await assignMentorToCourse(assignmentData);
  return response.data;
});

export const unassignMentor = createAsyncThunk('mentors/unassignMentor', async (assignmentData) => {
  const response = await unassignMentorFromCourse(assignmentData);
  return response.data;
});


const initialState = {
  mentors: [],
  currentMentor: null,
  stackMentors: [],
  status: 'idle',
  error: null,
};

// Slice
const mentorsSlice = createSlice({
  name: 'mentors',
  initialState,
  reducers: {
    clearMentorsState: (state) => {
      Object.assign(state, initialState); // Reset state to initial values
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Mentors
      .addCase(fetchMentors.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMentors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors = action.payload;
      })
      .addCase(fetchMentors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch Mentor By ID
      .addCase(fetchMentorById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMentorById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentMentor = action.payload;
      })
      .addCase(fetchMentorById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Fetch Mentor By Course ID
      .addCase(fetchMentorByCourseId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMentorByCourseId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentMentor = action.payload;
      })
      .addCase(fetchMentorByCourseId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Add Mentor
      .addCase(addMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors.push(action.payload);
      })
      .addCase(addMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Edit Mentor
      .addCase(editMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.mentors.findIndex((mentor) => mentor.id === action.payload.id);
        if (index !== -1) {
          state.mentors[index] = action.payload;
        }
      })
      .addCase(editMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Remove Mentor
      .addCase(removeMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.mentors = state.mentors.filter((mentor) => mentor.id !== action.payload.id);
      })
      .addCase(removeMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Assign Mentor to Course
      .addCase(assignMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(assignMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the mentor's assigned courses in the state if needed
        const mentor = state.mentors.find((mentor) => mentor.id === action.payload.mentorId);
        if (mentor) {
          mentor.assignedCourses = mentor.assignedCourses || [];
          mentor.assignedCourses.push(action.payload.courseId);
        }
      })
      .addCase(assignMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // Unassign Mentor from Course
      .addCase(unassignMentor.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(unassignMentor.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Update the mentor's assigned courses in the state if needed
        const mentor = state.mentors.find((mentor) => mentor.id === action.payload.mentorId);
        if (mentor) {
          mentor.assignedCourses = mentor.assignedCourses.filter(
            (courseId) => courseId !== action.payload.courseId,
          );
        }
      })
      .addCase(unassignMentor.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { clearMentorsState } = mentorsSlice.actions;
export default mentorsSlice.reducer;
