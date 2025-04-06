/* eslint-disable react/prop-types */
const SelectOptions = ({ label, options, required, onChange, name }) => {
  return (
    <div>
      {label && (
        <label className="font-medium">
          {label} {required && "*"}
        </label>
      )}
      <select
        className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
        required={required}
        onChange={onChange}
        name={name}
      >
        <option value={options} className="text-tt-black">
          Select
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
