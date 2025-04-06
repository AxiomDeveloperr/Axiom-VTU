import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createCohort,
  getCohorts,
  getCohortById,
  updateCohort,
  deleteCohort,
} from '../../api/admin.api';

// Async Thunks
export const fetchCohorts = createAsyncThunk('cohorts/fetchCohorts', async () => {
  const response = await getCohorts();
  return response.data;
});

export const fetchCohortById = createAsyncThunk('cohorts/fetchCohortById', async (id) => {
  const response = await getCohortById(id);
  return response.data;
});

export const addCohort = createAsyncThunk('cohorts/addCohort', async (cohortData) => {
  const response = await createCohort(cohortData);
  return response.data;
});

export const editCohort = createAsyncThunk('cohorts/editCohort', async ({ id, cohortData }) => {
  const response = await updateCohort(id, cohortData);
  return response.data;
});

export const removeCohort = createAsyncThunk('cohorts/removeCohort', async (id) => {
  const response = await deleteCohort(id);
  return response.data;
});

const initialState = {
  cohorts: [],
  currentCohort: null,
  status: 'idle',
  error: null,
};

// Slice
const cohortsSlice = createSlice({
  name: 'cohorts',
  initialState,
  reducers: {
    clearCohortsState: (state) => {
      Object.assign(state, initialState); // Reset state to initial values
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCohorts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCohorts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cohorts = action.payload;
      })
      .addCase(fetchCohorts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchCohortById.fulfilled, (state, action) => {
        console.log('CURRENT COHORT', action.payload);
        state.currentCohort = action.payload;
      })
      .addCase(addCohort.fulfilled, (state, action) => {
        state.cohorts.push(action.payload);
      })
      .addCase(editCohort.fulfilled, (state, action) => {
        const index = state.cohorts.findIndex((cohort) => cohort.id === action.payload.id);
        if (index !== -1) {
          state.cohorts[index] = action.payload;
        }
      })
      .addCase(removeCohort.fulfilled, (state, action) => {
        state.cohorts = state.cohorts.filter((cohort) => cohort.id !== action.payload.id);
      });
  },
});

export const { clearCohortsState } = cohortsSlice.actions;
export default cohortsSlice.reducer;
