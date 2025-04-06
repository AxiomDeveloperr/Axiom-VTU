// eslint-disable-next-line react/prop-types
const CustomInput = ({ name, type, label, placeholder, required, value, onChange, disabled }) => {
  return (
    <div>
      {label && (
        <label htmlFor={name} className="font-medium">
          {label} {required && '*'}
        </label>
      )}
      <input
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
        aria-describedby={`${name}-error`} // Associate with error message
      />
    </div>
  );
};
export default CustomInput;
