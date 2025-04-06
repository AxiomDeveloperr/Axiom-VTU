import { motion } from 'framer-motion';
import Apply from '../assets/Pictures/apply6.avif';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Application = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <section className="px-6">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto bg-white p-8 shadow-lg rounded-xl gap-10">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-extrabold text-gray-900">Cohort 4 Admission</h2>

          <div className="relative w-full overflow-hidden whitespace-nowrap">
            <motion.div
              className="inline-flex space-x-8 text-xl font-semibold text-gray-700"
              initial={{ x: '100%' }}
              animate={{ x: '-100%' }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            >
              <p>Application is now open • Application is now open • Application is now open •</p>
            </motion.div>
          </div>

          <hr className="border-t-2 border-gray-300 w-full my-2" />
          <p className="text-gray-600 text-lg">
            Become an industry expert with cutting-edge tech skills from IOTBTECH.
          </p>
          <p className="text-gray-700 text-lg">
            Click{' '}
            <Link
              to={isAuthenticated ? '/application-guidelines' : '/register'}
              className="text-blue-600 font-medium hover:underline"
              onClick={() => window.scrollTo(0, 0)}
            >
              here
            </Link>{' '}
            to apply.
          </p>

          <p className="font-semibold text-red-500 fadingText">
            Application closes on February 24, 2025
          </p>
        </div>

        {/* Right Content */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <img
            src={Apply}
            alt="Application Image"
            className="w-[280px] sm:w-[320px] md:w-[400px] lg:w-[450px] h-auto"
          />
          {/* Apply Now Button */}

          <button
            onClick={() => {
              const path = isAuthenticated ? '/application-guidelines' : '/register';
              navigate(path);
              window.scrollTo(0, 0); // Scroll to the top of the page
            }}
            className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Application;
