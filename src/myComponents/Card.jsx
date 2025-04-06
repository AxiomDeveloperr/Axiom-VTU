import React from 'react';
import { GrCertificate } from 'react-icons/gr';
import { RiBook2Fill } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';

const Card = () => {
  return (
    <div>
      <div className="py-16 -mt-36 z-999 relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 px-4">
          {/* Certificate Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-full md:w-52 lg:w-52 lg:h-48 md:h-48 h-36 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <GrCertificate className="text-blue-500 w-16 h-16 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center lg:text-2xl md:text-2xl text-2xl font-bold">
              Recognized Certificates
            </p>
          </div>
          {/* Book Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-full md:w-52 lg:w-52 lg:h-48 md:h-48 h-36 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <RiBook2Fill className="text-blue-500 w-16 h-16 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-2xl font-bold">In-demand Courses</p>
          </div>
          {/* Teacher Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-full md:w-52 lg:w-52 lg:h-48 md:h-48 h-36 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <GiTeacher className="text-blue-500 w-16 h-16 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-2xl font-bold">Qualified Trainers</p>
          </div>
          {/* Free Learning Card */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow-lg w-full md:w-52 lg:w-52 lg:h-48 md:h-48 h-36 p-4 transform transition-transform hover:scale-105 hover:shadow-2xl">
            <FaChalkboardTeacher className="text-blue-500 lg:w-16 lg:h-16 md:w-16 w-12 h-12 mb-4 hover:bg-blue-100 p-2 transition-colors" />
            <p className="text-gray-700 text-center text-2xl font-bold">Learning at no cost</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
