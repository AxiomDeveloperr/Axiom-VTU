import React from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiOpenproject } from "react-icons/si";
import motion from "../assets/Pictures/motionGraphics.avif";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";

const ComingSoon = () => {
  return (
    <section className="mt-24 bg-white py-12 px-6 md:px-12 lg:px-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800">
          <Typewriter
            words={["Coming soon..!", "Anticipate..!"]}
            loop={0} // Infinite looping
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          These courses will soon be available in our organization:
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Course 1 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <GiArtificialIntelligence className="text-6xl text-blue-500 mb-4" />
          <p className="text-lg font-medium text-gray-700">
            AI and Machine Learning
          </p>
        </div>

        {/* Course 2 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <SiOpenproject className="text-6xl text-green-500 mb-4" />
          <p className="text-lg font-medium text-gray-700">
            Project Management
          </p>
        </div>

        {/* Course 3 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <img
            src={motion}
            alt=""
            className="text-6xl text-purple-500 mb-4 w-20 h-20"
          />
          <p className="text-lg font-medium text-gray-700">Motion Graphics</p>
        </div>

        {/* Course 4 */}
        <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
          <BiSolidBarChartAlt2 className="text-6xl text-yellow-500 mb-4" />
          <p className="text-lg font-medium text-gray-700">Data Analytics</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
