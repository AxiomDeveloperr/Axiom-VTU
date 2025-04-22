import { FaGraduationCap, FaLightbulb, FaWifi } from "react-icons/fa";
import { guy } from "../assets/images";
import { FaMobileScreen } from "react-icons/fa6";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { GiPaperBagOpen } from "react-icons/gi";
import Button from "../components/Button";

const HomeHero = () => {
  return (
    <div className="relative">
      {/* Floating image on small screens */}
      <img
        src={guy}
        alt="Floating figure"
        className="block lg:hidden absolute top-[130px] right-4 w-32 h-auto z-10"
      />

      <section className="w-full bg-white py-12 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-between relative">
        {/* Left Side */}
        <div className="flex-1 mb-12 lg:mb-0 z-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 primary-font">
            The <span className="primary-text">BEST</span> place to subscribe / buy
            <br />
            <span className="primary-text">AIRTIME</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6 text-left md:text-center">What are you buying today?</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md relative z-0">
            {[
              { label: "Airtime", icon: <FaMobileScreen className="text-blue-500" /> },
              { label: "Data", icon: <FaWifi className="text-indigo-500" /> },
              { label: "Electricity", icon: <FaLightbulb className="text-yellow-500" /> },
              { label: "Cable TV", icon: <PiTelevisionSimpleDuotone className="text-purple-500" /> },
              { label: "Education", icon: <FaGraduationCap className="text-green-600" /> },
              { label: "Others", icon: <GiPaperBagOpen className="text-pink-500" /> },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-gray-50 border rounded-xl shadow hover:shadow-md transition duration-300 flex flex-col items-center p-4 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-sm font-medium text-gray-800">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button text="Get Started" />
          </div>
        </div>

        {/* Right Side image for large screens */}
        <div className="flex-1 w-full max-w-md lg:max-w-xl hidden lg:block">
          <img
            src={guy}
            alt="Dashboard preview"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
