import React from "react";
import { FaChevronLeft, FaBars } from "react-icons/fa6";
import logo from "../assets/axiomdev.svg";

const Head = ({ switchMode, isSignup }) => {
  return (
    <div className="bg-white fixed top-0 md:static flex justify-between items-center w-full px-4 md:px-4 py-4 md:py-0 mb-8 shadow-md md:shadow-none z-20">
      <div>
        <img className="block md:hidden" src={logo} alt="" width={150} />
        <button
          type="button"
          onClick={switchMode}
          className="hidden md:flex items-center gap-2 text-[#880d1e]"
        >
          <FaChevronLeft />
          <p className="font-medium">Home</p>
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={switchMode}
          className="ml-1 bg-[#880d1e] text-white text-sm md:text-md font-medium px-8 md:px-12 py-3 md:py-4 rounded-2xl"
        >
          {isSignup ? "Login" : "Sign up"}
        </button>
        <FaBars className="block md:hidden text-[#880d1e] text-3xl" />
      </div>
    </div>
  );
};

export default Head;
