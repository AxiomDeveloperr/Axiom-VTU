import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Upcoming = () => {
  const sectionRef = useRef(null); // Ref for the section
  const isInView = useInView(sectionRef, { once: true }); // Check if section has come up

  const slideInFromLeft = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-gray-50 py-12 px-6 md:px-16 lg:px-24 pb-8"
      ref={sectionRef} // Attach ref to track visibility
      initial="initial" // Link to the `initial` key in `variants`
      animate={isInView ? "animate" : "initial"} // Link to the `animate` key in `variants`
      variants={slideInFromLeft}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Upcoming Events
        </h2>
        <p className="text-gray-600 mt-2">
          Stay updated with our latest schedules and activities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Event 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Application for the next cohort
          </p>
          <p className="text-blue-500 font-medium mb-4">February 10, 2025</p>
          <button className="mt-auto bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">
            Learn More
          </button>
        </div>

        {/* Event 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Entrance exam for applicants
          </p>
          <p className="text-blue-500 font-medium mb-auto">February 24, 2025</p>
        </div>

        {/* Event 3 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Interview for selected applicants
          </p>
          <p className="text-blue-500 font-medium mb-auto">February 26, 2025</p>
        </div>

        {/* Event 4 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
          <p className="text-xl font-semibold text-gray-800 mb-2">
            Onboarding ceremony for selected candidates
          </p>
          <p className="text-blue-500 font-medium mb-auto">March 1, 2025</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Upcoming;
