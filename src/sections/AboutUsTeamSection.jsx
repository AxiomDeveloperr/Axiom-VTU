import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import team from "../data/team";
import useCarousel from "../hooks/useCarousel";
import AboutUsTeamcard from "../components/AboutUsTeamCard";

const TeamCard = () => {
  const { currentIndex, endIndex, visibleItems, handleNext, handlePrev } =
    useCarousel(team, { lg: 5, sm: 2 });

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-screen-xl">
      <p className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-tt-primary text-left sm:text-left">
        The Team
      </p>
      <h2 className="text-2xl sm:text-4xl font-bold leading-snug text-left">
        Meet The Awesome and Creative Members of Our Team
      </h2>

      <div className="grid gap-8 grid-cols-2 lg:grid-cols-5 mt-5 w-full">
        {visibleItems.map((profile, index) => (
          <AboutUsTeamcard
            key={index}
            image={profile.image}
            name={profile.name}
            portfolio={profile.portfolio}
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
          disabled={endIndex >= team.length}
        >
          <BsArrowRightCircle size={28} />
        </button>
      </div>
    </div>
  );
};

export default TeamCard;
