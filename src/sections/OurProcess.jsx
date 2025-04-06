import { proccessNextArrowDown, proccessNextArrowUp } from "../assets/icons";
import processes from "../data/processCards";
import ProcessCard from "../components/ProcessCard";

const OurProcess = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="flex flex-col items-left justify-left">
          <h2 className="text-2xl font-semibold text-tt-primary mb-4">
            Our Process
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 text-left lg:text-left mt-4">
            <h3 className="text-tt-black text-3xl font-bold mb-0 lg:mb-8 max-w-screen-lg">
              Our Working Process help you to get the best from our team skill
            </h3>
            <p className="font-normal">
              We offer a variety of services to help you to grow and build your
              brand and help you with developing your Products
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 items-stretch justify-between w-full lg:my-32">
          {processes.map((s, idx) => (
            <div key={s.title} className="relative">
              {idx == 1 && (
                <img
                  src={proccessNextArrowDown}
                  alt="arrowNextDown"
                  className="hidden lg:block absolute left-1/2 -top-28"
                />
              )}
              <ProcessCard
                key={s.title}
                index={s.index}
                title={s.title}
                description={s.description}
              />
              {(idx === 0 || idx === 2) && (
                <img
                  src={proccessNextArrowUp}
                  alt="arrowNextDown"
                  className="hidden lg:block absolute left-1/2"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
