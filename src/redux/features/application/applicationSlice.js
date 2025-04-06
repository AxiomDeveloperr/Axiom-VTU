import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createApplication,
  getAllApplications,
  getApplicationById,
  getApplicationByUserId,
  updateApplication,
  deleteApplication,
  admitApplicant,
} from '../../api/application.api';

// Thunks
export const fetchAllApplications = createAsyncThunk(
  'applications/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllApplications();
      console.log('API Response:', response); // Check if this logs
      return response;
    } catch (error) {
      console.error('API Error:', error); // Log the error
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

export const fetchApplicationById = createAsyncThunk(
  'applications/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await getApplicationById(id);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

export const fetchApplicationByUserId = createAsyncThunk(
  'applications/fetchByUserId',
  async (userId, { rejectWithValue }) => {
    try {
      return await getApplicationByUserId(userId);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

export const addApplication = createAsyncThunk(
  'applications/add',
  async (applicationData, { rejectWithValue }) => {
    try {
      return await createApplication(applicationData);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

export const modifyApplication = createAsyncThunk(
  'applications/update',
  async ({ id, updateData }, { rejectWithValue }) => {
    try {
      return await updateApplication(id, updateData);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

export const removeApplication = createAsyncThunk(
  'applications/delete',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteApplication(id);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

export const admitAnApplicant = createAsyncThunk(
  'applications/admit',
  async (admitData, { rejectWithValue }) => {
    try {
      return await admitApplicant(admitData);
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error);
    }
  },
);

const initialState = {
  allApplications: [],
  currentApplication: null,
  loading: false,
  error: null,
};

// Slice
const applicationSlice = createSlice({
  name: 'applications',
  initialState,
  reducers: {
    clearApplicationsState: (state) => {
      Object.assign(state, initialState); // Reset state to initial values
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch All Applications
      .addCase(fetchAllApplications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllApplications.fulfilled, (state, action) => {
        console.log('Previous state:', state.allApplications); // Debugging
        console.log('Fetched payload:', action.payload); // Debugging
        state.loading = false;
        state.allApplications = action.payload; // Correctly access the `data` property
        console.log('Updated state:', state.allApplications); // Debugging
      })
      .addCase(fetchAllApplications.rejected, (state, action) => {
        console.error('Fetch failed:', action.payload); // Debugging
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch applications';
      })
      // Fetch Application By ID
      .addCase(fetchApplicationById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicationById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentApplication = action.payload.data;
      })
      .addCase(fetchApplicationById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch application by ID';
      })
      // Fetch Application By User ID
      .addCase(fetchApplicationByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchApplicationByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.currentApplication = action.payload.data;
      })
      .addCase(fetchApplicationByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch application by user ID';
      })
      // Add Application
      .addCase(addApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.allApplications.push(action.payload.data);
      })
      .addCase(addApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to add application';
      })
      // Modify Application
      .addCase(modifyApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(modifyApplication.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.allApplications.findIndex((app) => app.id === action.payload.data.id);
        if (index !== -1) {
          state.allApplications[index] = action.payload.data;
        }
      })
      .addCase(modifyApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to update application';
      })
      // Remove Application
      .addCase(removeApplication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeApplication.fulfilled, (state, action) => {
        state.loading = false;
        state.allApplications = state.allApplications.filter(
          (app) => app.id !== action.payload.data.id,
        );
      })
      .addCase(removeApplication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to delete application';
      })
      // Admit Applicant
      .addCase(admitAnApplicant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(admitAnApplicant.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(admitAnApplicant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to admit applicant';
      });
  },
});
export const { clearApplicationsState } = applicationSlice.actions;
export default applicationSlice.reducer;
