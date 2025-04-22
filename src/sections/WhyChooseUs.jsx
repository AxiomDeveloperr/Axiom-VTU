import { customer, fast, security } from "../assets/images";

const WhyChooseUs = () => {
    const features = [
        {
          title: "Efficient Customer Support",
          image: customer,
          bg: "bg-blue-50",
        },
        {
          title: "Safe & Secure Transaction",
          image: security,
          bg: "bg-yellow-50",
        },
        {
          title: "Fast & Reliable Service",
          image: fast,
          bg: "bg-indigo-50",
        },
    ];
    return (
        <div>
            <section className="w-full py-16 px-4 md:px-16 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 primary-font">Why Choose Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
                    Because we stand for excellence in every aspect. Our commitment to delivering top-notch service,
                    innovative solutions, and customer satisfaction sets us apart.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`rounded-xl p-6 relative shadow hover:shadow-md transition duration-300 flex flex-col items-center ${feature.bg}`}
                    >
                        <h3 className="text-md md:text-2xl absolute right-40 pl-3 font-semibold text-gray-700 text-left">
                            {feature.title}
                        </h3>
                        <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-52 h-52 object-contain mb-4 relative top-7 left-18 rounded-md"
                        />
                    </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default WhyChooseUs
