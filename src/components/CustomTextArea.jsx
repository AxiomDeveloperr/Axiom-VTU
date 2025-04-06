const CustomTextArea = ({ name, label, placeholder }) => {
  return (
    <div>
      <label className="font-medium" htmlFor={name}>
        {label}
      </label>
      <textarea
        required
        className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none outline-none border focus:border-tt-primary shadow-sm rounded-lg"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
