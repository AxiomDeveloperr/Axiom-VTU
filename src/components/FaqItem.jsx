import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between mt-8 rounded-md border-2 border-tt-primary p-2 px-3 transition-all duration-300 ease-in-out">
      <div className="flex-col">
        <h3 className="text-tt-black font-bold text-lg p-3">{question}</h3>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-tt-grey mt-5 mb-6 font-normal text-md">{answer}</p>
        </div>
      </div>
      <button
        onClick={handleClick}
        className="transition-transform duration-300 ease-in-out transform hover:scale-110"
      >
        <span
          className={`text-md font-bold transition-transform duration-1000 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>
    </div>
  );
};

export default FaqItem;
