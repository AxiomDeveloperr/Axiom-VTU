import apiClient from './apiClient';

/**
 *
 * @param {*} cohortData
 * @returns
 */

// Create a new cohort
export const createCohort = async (cohortData) => {
  try {
    const response = await apiClient.post('/cohorts', cohortData);
    return response.data; // { success, message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to create cohort';
  }
};

// Get cohort by ID
export const getCohortById = async (id) => {
  try {
    const response = await apiClient.get(`/cohorts/${id}`);
    return response.data; // { success, message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to fetch cohort';
  }
};

// Get all cohorts
export const getCohorts = async () => {
  try {
    const response = await apiClient.get('/cohorts');
    return response.data; // { success, message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to fetch cohorts';
  }
};

// Update cohort
export const updateCohort = async (id, cohortData) => {
  try {
    const response = await apiClient.patch(`/cohorts/${id}`, cohortData);
    return response.data; // { success, message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to update cohort';
  }
};

// Delete cohort
export const deleteCohort = async (id) => {
  try {
    const response = await apiClient.delete(`/cohorts/${id}`);
    return response.data; // { success, message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to delete cohort';
  }
};

/**
 *
 * @param {*} courseData
 * @returns
 */
// Create a new course
export const createCourse = async (courseData) => {
  try {
    const response = await apiClient.post('/course/create', courseData);
    return response.data; // { message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to create course';
  }
};

// Get all courses
export const getAllCourses = async () => {
  try {
    const response = await apiClient.get('/course');
    return response.data; // { message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to fetch courses';
  }
};

// Get course by ID
export const getCourseById = async (id) => {
  try {
    const response = await apiClient.get(`/course/${id}`);
    return response.data; // { message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to fetch course';
  }
};

// Update course
export const updateCourse = async (id, updateData) => {
  try {
    const response = await apiClient.patch(`/course/${id}`, updateData);
    return response.data; // { message, data }
  } catch (error) {
    throw error.response?.data || 'Failed to update course';
  }
};

/**
 *
 * @param {*} mentorData
 * @returns
 */

// Create a new mentor
export const createMentor = async (mentorData) => {
  try {
    const response = await apiClient.post('/mentors', mentorData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to create mentor';
  }
};

// Get all mentors
export const getAllMentors = async () => {
  try {
    const response = await apiClient.get('/mentors');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch mentors';
  }
};

// Get mentor by ID
export const getMentorById = async (id) => {
  try {
    const response = await apiClient.get(`/mentors/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch mentor';
  }
};

// Get mentor by COurse ID
export const getMentorByCourseId = async (id) => {
  try {
    const response = await apiClient.get(`/mentors/course/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch mentor';
  }
};

// Update mentor
export const updateMentor = async (id, updateData) => {
  try {
    const response = await apiClient.patch(`/mentors/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to update mentor';
  }
};

// Delete mentor
export const deleteMentor = async (id) => {
  try {
    const response = await apiClient.delete(`/mentors/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to delete mentor';
  }
};

// Assign mentor to course
export const assignMentorToCourse = async (assignmentData) => {
  try {
    const response = await apiClient.post('/mentors/assign', assignmentData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to assign mentor to course';
  }
};

// Unassign mentor from course
export const unassignMentorFromCourse = async (assignmentData) => {
  try {
    const response = await apiClient.post('/mentors/unassign', assignmentData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to unassign mentor from course';
  }
};

// Get mentors by course
export const getMentorsByCourse = async (courseId) => {
  try {
    const response = await apiClient.get(`/mentors/course/${courseId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch mentors by course';
  }
};

// Get courses by mentor
export const getCoursesByMentor = async (mentorId) => {
  try {
    const response = await apiClient.get(`/mentors/mentor/${mentorId}/courses`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch courses by mentor';
  }
};

/**
 *
 * @param {*} applicationData
 * @returns
 */
// Create a new application
export const createApplication = async (applicationData) => {
  try {
    const response = await apiClient.post('/applications', applicationData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to create application';
  }
};

// Get all applications
export const getAllApplications = async () => {
  try {
    const response = await apiClient.get('/applications');
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch applications';
  }
};

// Get application by ID
export const getApplicationById = async (id) => {
  try {
    const response = await apiClient.get(`/applications/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to fetch application';
  }
};

// Update application
export const updateApplication = async (id, updateData) => {
  try {
    const response = await apiClient.patch(`/applications/${id}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to update application';
  }
};

// Delete application
export const deleteApplication = async (id) => {
  try {
    const response = await apiClient.delete(`/applications/${id}`);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to delete application';
  }
};

// Admit an applicant
export const admitApplicant = async (admitData) => {
  try {
    const response = await apiClient.post('/applications/admit', admitData);
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Failed to admit applicant';
  }
};
