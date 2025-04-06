import React, { useState, useEffect } from "react";

const Timer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="flex justify-center items-center bg-tt-grey bg-opacity-10 p-4 rounded shadow-sm">
      <p className="text-xl font-bold text-blue-600">
        Time Left: <span className="text-red-500">{formatTime(timeLeft)}</span>
      </p>
    </div>
  );
};

export default Timer;