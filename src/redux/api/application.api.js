import apiClient from './apiClient';

// Create application
export const createApplication = async (applicationData) => {
  try {
    const response = await apiClient.post('/applications', applicationData);
    return response.data; // { success, message, data }
  } catch (error) {
    throw error.response.data;
  }
};

// Get all applications
export const getAllApplications = async () => {
  try {
    const response = await apiClient.get('/applications');
    // console.log('FROM API', response.data);
    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get application by ID
export const getApplicationById = async (id) => {
  try {
    const response = await apiClient.get(`/applications/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Get application by user ID
export const getApplicationByUserId = async (userId) => {
  try {
    const response = await apiClient.get(`/applications/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Update application
export const updateApplication = async (id, updateData) => {
  try {
    const response = await apiClient.patch(`/applications/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Delete application
export const deleteApplication = async (id) => {
  try {
    const response = await apiClient.delete(`/applications/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Admit applicant
export const admitApplicant = async (admitData) => {
  try {
    const response = await apiClient.post('/applications/admit', admitData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
