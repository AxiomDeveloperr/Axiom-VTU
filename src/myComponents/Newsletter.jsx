import React from "react";
// import { motion, useInView } from "framer-motion"; // Import framer-motion

const Newsletter = () => {
  const sectionRef = React.useRef(null); // Reference to the section
  // const isInView = useInView(sectionRef, { once: true }); // Check if section is in view

  return (
    <section
      className="mt-24 bg-blue-50 py-12 px-6 md:px-16 lg:px-24"
      ref={sectionRef} // Attach ref to the section
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0"
        // initial={{ x: "100%", opacity: 0 }} // Start position (offscreen to the right)
        // animate={isInView ? { x: 0, opacity: 1 } : {}} // Animate when in view
        // transition={{ duration: 0.6, ease: "easeOut" }} // Smooth animation
      >
        {/* Left Section */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800">
            Sign up for the IOTB-TECH Newsletter
          </h2>
          <p className="text-gray-600 mt-4">
            Be the first to be notified of everything that happens around here.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 px-6 py-3 pr-16 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
