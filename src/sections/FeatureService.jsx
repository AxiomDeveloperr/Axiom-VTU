import { deposit, gold, star } from "../assets/images";
import Button from "../components/Button";

const FeatureService = () => {
  const features = [
    {
      title: "Become an Agent",
      text: "As an agent, you receive a commission for every transaction you facilitate on behalf of your valued customers.",
      button: "Become an Agent",
      bg: "bg-[#f2f5ff]",
      image: star,
    },
    {
      title: "Your Loyalty is Rewarded!",
      text: "It’s not just about convenience. We reward loyal customers, and you could earn awesome bonuses too!",
      bg: "bg-[#fff7ed]",
      image: gold,
    },
    {
      title: "Instant Withdrawal",
      text: "Withdraw your funds instantly to your bank account, no delay, no stress.",
      bg: "bg-[#eef4ff]",
      image: deposit,
    },
  ];

  return (
        <section className="px-4 md:px-16 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 spans two rows on the left */}
            <div className={`rounded-xl p-6 shadow-md flex flex-col gap-y-1 ${features[0].bg} row-span-2`}>
                <div className="mt-10">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {features[0].title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mt-2">{features[0].text}</p>
                    {features[0].button && (
                        <div className="flex items-center justify-center mt-4">
                            <Button text={features[0].button} />
                        </div>
                    )}
                </div>
                <div className="mt-2">
                    <img
                        src={features[0].image}
                        alt={features[0].title}
                        className="w-full max-h-64 object-contain"
                    />
                </div>
            </div>

            {/* Feature 2 & 3 with map */}
            {features.slice(1).map((feature, index) => (
                <div key={index} className={`rounded-xl p-6 shadow-md flex flex-col gap-y-4 ${feature.bg}`}>
                    <div className="mt-10">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                            {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base mt-2">
                            {feature.text}
                        </p>
                    </div>
                    <div>
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className={`w-full ${index === 1 ? "max-h-32" : "max-h-48"} object-contain`}
                        />
                    </div>
                </div>
            ))}
        </section>
  );
};

export default FeatureService;
