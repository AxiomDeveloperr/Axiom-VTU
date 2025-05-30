import { React, useState } from "react";
import InputField from "./InputField";
import Btn from "./Btn";

const AuthForm = ({
  mode,
  formData,
  onChange,
  onSubmit,
  switchMode,
  isSignup,
  errors,
  setErrors,
}) => {
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.password) newErrors.password = "Password is required.";
    if (isSignup) {
      if (!formData.firstName) newErrors.firstName = "First name is required.";
      if (!formData.lastName) newErrors.lastName = "Last name is required.";
      if (!formData.confirmPassword)
        newErrors.confirmPassword = "Please confirm your password.";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mt-20 md:mt-0">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
        {isSignup ? "Sign up" : "Log in"}
      </h2>

      <Btn
        text={isSignup ? "Sign up with Google" : "Login with Google"}
        onClick={() => {}}
        large={true}
      />

      <div className="flex items-center my-4 sm:my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="px-2 text-gray-500 text-sm">Or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <div className="bg-white p-6 sm:p-8 rounded-lg w-full max-w-md border border-[#880d1e]">
        <InputField
          label="Email Address"
          type="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          placeholder="Enter your email"
          error={errors.email}
        />

        {isSignup && (
          <>
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={onChange}
              placeholder="Enter first name"
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={onChange}
              placeholder="Enter last name"
              error={errors.lastName}
            />
          </>
        )}

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          showToggle
          placeholder="Enter password"
          error={errors.password}
        />

        {isSignup && (
          <InputField
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChange}
            showToggle
            placeholder="Confirm password"
            error={errors.confirmPassword}
          />
        )}

        <Btn type="submit" text={isSignup ? "Create Account" : "Log In"} />

        {/* <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            {isSignup ? "Already have an account?" : "Don't have an account?"}
          </span>
          <button
            type="button"
            onClick={switchMode}
            className="ml-1 text-blue-600 text-sm hover:underline"
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </div> */}
      </div>
    </form>
  );
};

export default AuthForm;
