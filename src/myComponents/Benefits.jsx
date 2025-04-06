import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { BsGlobeAmericas } from "react-icons/bs";
import { GiFlexibleLamp } from "react-icons/gi";
import { TbWorldSearch } from "react-icons/tb";
import NoPay from "../assets/Pictures/nopay.jpg";
import { motion, useInView } from "framer-motion"; // Import framer-motion

const Benefits = () => {
  const sectionRef = React.useRef(null); // Reference to the section
  const isInView = useInView(sectionRef, { once: true }); // Check if section is in view

  return (
    <section
      className="mt-24 bg-gray-50 py-12 px-4 md:px-12 lg:px-20 relative overflow-hidden"
      ref={sectionRef} // Attach ref to the section
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          Why Choose IOTB-TECH?
        </h2>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Check out some of the reasons why studying at IOTB-TECH is such a
          great deal!
        </p>
      </div>

      {/* Scrolling Wrapper */}
      <motion.div
        className="overflow-hidden"
        initial={{ x: "-100%", opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.0 }}
      >
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Benefit 1 */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <FaLaptopCode className="text-5xl text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Online and Personalized Classes
            </h3>
            <p className="text-gray-600 mt-2">
              Learn from industry experts at your own pace with tailored
              lessons.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <BsGlobeAmericas className="text-5xl text-green-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Recognized Certificate
            </h3>
            <p className="text-gray-600 mt-2">
              Earn a globally recognized certificate upon course completion.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <GiFlexibleLamp className="text-5xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Flexible Routine
            </h3>
            <p className="text-gray-600 mt-2">
              Our schedules are tailored to suit everyone; even 9-5 workers.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <TbWorldSearch className="text-5xl text-purple-500 mb-4" />
            <h3 className="text-xl font-bold text-gray-800">
              Job Market Ready
            </h3>
            <p className="text-gray-600 mt-2">
              Gain skills that make you competitive in the job market.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
            <img
              src={NoPay}
              alt="No Cost Study"
              className="w-20 h-20 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">
              Study at NO COST
            </h3>
            <p className="text-gray-600 mt-2">
              Learn any course of your choice completely free of charge.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
