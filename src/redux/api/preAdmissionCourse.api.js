import apiClient from './apiClient'; // Ensure this points to your Axios instance.

// Create a Pre-Admission Course
export const createPreAdmissionCourse = async (courseData) => {
  try {
    const response = await apiClient.post('/pre-admission-courses', courseData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to create course';
  }
};

// Get all Pre-Admission Courses
export const getAllPreAdmissionCourses = async () => {
  try {
    const response = await apiClient.get('/pre-admission-courses');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch courses';
  }
};

// Get a specific Pre-Admission Course by ID
export const getPreAdmissionCourseById = async (id) => {
  try {
    const response = await apiClient.get(`/pre-admission-courses/course/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch course';
  }
};

// Update a Pre-Admission Course
export const updatePreAdmissionCourse = async (id, updateData) => {
  try {
    const response = await apiClient.patch(`/pre-admission-courses/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to update course';
  }
};

// Delete a Pre-Admission Course
export const deletePreAdmissionCourse = async (id) => {
  try {
    const response = await apiClient.delete(`/pre-admission-courses/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to delete course';
  }
};
