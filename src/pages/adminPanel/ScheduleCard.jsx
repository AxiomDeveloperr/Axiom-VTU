import { useState } from "react";
import { FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import dayjs from "dayjs";

const ScheduleCard = () => {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const daysInMonth = currentMonth.daysInMonth();
  const firstDay = currentMonth.startOf('month').day();
  const today = dayjs().date();

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth.subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth.add(1, "month"));
  };

  return (
    <div className="w-[50%] bg-white shadow-lg rounded-lg p-6 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Schedules</h2>
        <button className="text-blue-500 hover:text-blue-700 flex items-center">
          <FaPlus className="mr-1" /> Add New
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePrevMonth} className="text-gray-500 hover:text-gray-700">
          <FaChevronLeft size={20} />
        </button>
        <h3 className="text-lg font-semibold">{currentMonth.format("MMMM YYYY")}</h3>
        <button onClick={handleNextMonth} className="text-gray-500 hover:text-gray-700">
          <FaChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="font-semibold text-gray-700">{day}</div>
        ))}
        {Array.from({ length: firstDay }).map((_, index) => (
          <div key={`empty-${index}`} className=""></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-md cursor-pointer ${
              index + 1 === today && currentMonth.isSame(dayjs(), "month")
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
