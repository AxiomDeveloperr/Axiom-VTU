import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web
import { combineReducers } from 'redux';

// Import your slices
import { persistedAuthReducer } from '../features/auth/authSlice';
import cohortsReducer from '../features/admin/cohortSlice';
import coursesReducer from '../features/admin/courseSlice';
import mentorsReducer from '../features/admin/mentorSlice';
import applicationsReducer from '../features/application/applicationSlice';
import preAdmissionReducer from '../features/preAdmissionCourse/preAdmissionSlice';
import globalReducer from '../features/global/globalSlice';

// Persist configuration
const persistConfig = {
  key: 'root', // Key for the persisted state
  storage, // Storage engine (localStorage by default)
  whitelist: ['auth', 'cohorts', 'applications', 'global'], // Persist auth, cohorts, and global state
};

// Combine all reducers
const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  cohorts: cohortsReducer,
  courses: coursesReducer,
  mentors: mentorsReducer,
  applications: applicationsReducer,
  preAdmissionCourse: preAdmissionReducer, // Fixed typo
  global: globalReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Create the persistor
export const persistor = persistStore(store);

export default store;
