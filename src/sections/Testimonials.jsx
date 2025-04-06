import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import TestimonialCard from "../components/TestimonialCard";
import testimonials from "../data/testimonials";
import useCarousel from "../hooks/useCarousel";

const Testimonials = () => {
  const { currentIndex, endIndex, visibleItems, handleNext, handlePrev } =
    useCarousel(testimonials, { lg: 2, sm: 1 });

  return (
    <div className="bg-tt-grey bg-opacity-10 px-4 sm:px-6 lg:px-8 py-10">
      <div className="mx-auto items-center">
        <div className="w-full max-w-5xl">
          <p className="text-2xl font-bold mb-4 text-tt-primary">Testimonial</p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-snug text-left">
            You still hesitate about working with us?{" "}
            <br className="hidden md:block" /> Check what they say about us
          </h2>
        </div>
        <div className="mt-4 flex flex-col items-center">
          <div className={`flex flex-row gap-20`}>
            {visibleItems.map((profile, index) => (
              <TestimonialCard
                key={index}
                quote={profile.quote}
                image={profile.image}
                name={profile.name}
                title={profile.title}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 pt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="disabled:opacity-50 text-tt-primary"
            >
              <BsArrowLeftCircle size={28} />
            </button>
            <button
              onClick={handleNext}
              disabled={endIndex >= testimonials.length}
              className="disabled:opacity-50 text-tt-primary "
            >
              <BsArrowRightCircle size={28} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
