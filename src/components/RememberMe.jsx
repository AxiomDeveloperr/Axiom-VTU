const RememberMe = ({ formData, onChange }) => {
  return (
    <label className="w-full md:w-1/2 flex justify-center md:justify-start space-x-2 cursor-pointer order-2 md:order-1">
      <div className="">
        <input
          type="checkbox"
          name="remember"
          checked={formData.remember}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-8 h-5 p-0.5  rounded-full shadow-inner  transition-all duration-300 ${
            formData.remember ? "bg-[#880d1e]" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
              formData.remember ? "translate-x-3" : ""
            }`}
          ></div>
        </div>
      </div>
      <div className="text-sm">Remember me</div>
    </label>
  );
};

export default RememberMe;
