// eslint-disable-next-line react/prop-types
const Button = ({ text, type, icon }) => {
  const buttonStyles = {
    solid:
      "primary-color hover:bg-white hover:text-[#880d1e] px-4 py-2 rounded-md shadow hover:cursor-pointer h-[40px] md:h-[50px] flex items-center justify-center space-x-2 text-sm md:text-base",
    outline:
      "border-2 border-[#880d1e] px-4 py-2 rounded-md hover:bg-[#880d1e] hover:text-[#FFC8C8] h-[40px] md:h-[50px] flex items-center justify-center space-x-2 text-sm md:text-base",
  };

  const buttonStyle = buttonStyles[type] || buttonStyles.solid;

  return (
    <button
      className={`flex items-center w-full lg:w-auto justify-center space-x-2 ${buttonStyle}`}
    >
      <span>{text}</span>
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default Button;
