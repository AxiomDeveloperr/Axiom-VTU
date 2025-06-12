import React from "react";
import { FcGoogle } from "react-icons/fc";

const Btn = ({ text, onClick, type = "button", full = true, large }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${full ? "w-full" : ""} ${
        large
          ? "bg-white rounded-xl py-3 px-4 shadow-2xl border border-[#880d1e] [#FFC8C8] text-lg font-medium"
          : "bg-[#880d1e] text-white rounded-lg hover: py-2 px-4 mt-8"
      }    transition flex items-center justify-center gap-4`}
    >
      {large ? <FcGoogle className="text-3xl" /> : ""}
      {text}
    </button>
  );
};

export default Btn;
