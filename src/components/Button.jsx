// eslint-disable-next-line react/prop-types
const Button = ({ text, type, icon }) => {
  const buttonStyles = {
    solid:
      "bg-tt-primary text-white px-4 py-2 rounded-md shadow hover:cursor-pointer h-[50px] md:h-[56px] flex items-center justify-center space-x-2 text-sm md:text-base",
    outline:
      "border-2 border-tt-primary text-tt-primary px-4 py-2 rounded-md hover:bg-tt-primary hover:text-white h-[50px] md:h-[56px] flex items-center justify-center space-x-2 text-sm md:text-base",
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
