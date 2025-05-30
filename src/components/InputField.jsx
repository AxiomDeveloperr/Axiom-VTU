import React, { useState } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  showToggle = false,
  error,
}) => {
  const [visible, setVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={name}
          name={name}
          type={isPassword && !visible ? "password" : "text"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {showToggle && isPassword && (
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
          >
            {visible ? (
              <MdOutlineVisibilityOff className="text-[#880d1e] text-xl" />
            ) : (
              <MdOutlineVisibility className="text-[#880d1e] text-xl" />
            )}
          </button>
        )}
      </div>
      {error ? <p className="text-red-700 text-sm">{error}</p> : ""}
    </div>
  );
};

export default InputField;
