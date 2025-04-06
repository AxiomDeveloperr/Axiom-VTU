export const validateRegistration = (formData) => {
  const errors = {};

  // Validate first name
  if (!formData.firstName.trim()) {
    errors.firstName = 'First name is required';
  }

  // Validate last name
  if (!formData.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  // Validate password
  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long';
  } else if (!/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]+$/.test(formData.password)) {
    errors.password = 'Password must contain letters and numbers only';
  }

  // Validate confirm password
  if (!formData.confirmPassword) {
    errors.confirmPassword = 'Please confirm your password';
  } else if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  return errors;
};
export const validateLogin = (formData) => {
  const errors = {};

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};
