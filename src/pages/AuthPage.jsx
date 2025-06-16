import React, { useState, useEffect } from "react";
import AuthForm from "../components/AuthForm";
import Head from "../components/Head";
import dash from "../assets/images/dashImg.png";
import { useLocation } from "react-router-dom";

const AuthPage = () => {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const getInitialFormData = () => ({
    email: "",
    password: "",
    ...(!isSignup && { remember: false }),
    ...(isSignup && {
      firstName: "",
      lastName: "",
      confirmPassword: "",
    }),
  });

  const [formData, setFormData] = useState(getInitialFormData());
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(getInitialFormData());
    setErrors({});
  }, [location.pathname]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(location.pathname.toUpperCase(), formData);
    setFormData(getInitialFormData());
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative hidden md:block md:w-1/3 bg-gradient-to-t from-[#880d1e] via-[#FFC8C8] to-[#880d1e] overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={dash}
            alt="Auth Visual"
            className="h-full w-full object-cover object-top-left ml-10 mt-10 rounded-tl-4xl border-4 border-[#FFC8C8]"
          />
        </div>
        <div className="bg-gradient-to-t from-[#880d1e]/90 from-15% to-transparent absolute inset-0"></div>
        <p className="w-[30%] fixed bottom-10 left-8 text-2xl text-white font-bold">
          The BEST place to subscribe/buy
        </p>
      </div>
      <div className="w-full md:w-2/3 flex flex-col items-center p-4 md:p-6">
        <Head isSignup={isSignup} />
        <AuthForm
          formData={formData}
          isSignup={isSignup}
          onChange={handleChange}
          onSubmit={handleSubmit}
          errors={errors}
          setErrors={setErrors}
        />
      </div>
    </div>
  );
};

export default AuthPage;
