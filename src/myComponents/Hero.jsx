import { useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

// eslint-disable-next-line react/prop-types
const Hero = ({ onImageLoad }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    console.log('Hero image loaded'); // Debugging
    setImageLoaded(true);
    onImageLoad(); // Notify the parent component
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${
            imageLoaded
              ? 'https://res.cloudinary.com/domu5mpva/image/upload/v1738622542/web%20pages/d8om33hfum55iatp9abd.png' // Full image
              : 'https://res.cloudinary.com/domu5mpva/image/upload/c_thumb,w_200,g_face/v1738622542/web%20pages/d8om33hfum55iatp9abd.png' // Low-res placeholder
          })`,
        }}
      >
        {/* Loading Spinner */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Content overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
          {/* Main Heading */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold text-center leading-tight md:leading-snug font-Nunito">
            <Typewriter
              words={['Revolutionize', 'Transform']}
              loop={0} // Infinite looping
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />{' '}
            your <br className="hidden md:block" />
            future
            <br /> with IOTB TECH
          </h1>

          {/* Subheading with Typewriter effect */}
          <p className="text-white text-lg md:text-2xl lg:text-3xl mt-6 md:mt-10 font-medium text-center font-Nunito">
            We are on a mission to{' '}
            <span className="text-blue-400 font-bold">
              <Typewriter
                words={['liberate lives', 'make you world-class']}
                loop={0} // Infinite looping
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>

        {/* Preload full image */}
        <img
          src="https://res.cloudinary.com/domu5mpva/image/upload/v1738622542/web%20pages/d8om33hfum55iatp9abd.png"
          alt="Hero Background"
          onLoad={handleImageLoad}
          className="hidden"
        />
      </section>
    </>
  );
};

export default Hero;
