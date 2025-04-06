import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import OurServiceWithImage from "../components/OurServiceWithImage";
import { stacks } from "../data/stacks";
import useCarousel from "../hooks/useCarousel";

const ServicesList = () => {
  const { currentIndex, endIndex, visibleItems, handleNext, handlePrev } =
    useCarousel(stacks, { lg: 1, sm: 1 });

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 ">
      <div className="lg:max-w-7xl mx-auto ">
        <div>
          {visibleItems.map((item, idx) => (
            <OurServiceWithImage
              key={idx}
              title={item.title}
              description={item.description}
              img={item.image}
            />
          ))}
        </div>
        <div className="flex lg:justify-end justify-center gap-6 pt-4">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="text-tt-primary cursor-pointer disabled:opacity-50"
            disabled={currentIndex === 0}
          >
            <BsArrowLeftCircle size={28} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="text-tt-primary cursor-pointer disabled:opacity-50"
            disabled={endIndex >= stacks.length}
          >
            <BsArrowRightCircle size={28} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ServicesList;
