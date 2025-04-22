import services from "../data/services";

const OurService = () => {
  return (
    <section className="w-full py-16 px-4 md:px-16 text-center">
      <div className="mb-4">
        <span className="inline-block px-4 py-1 text-xs font-medium primary-color rounded-full">
          ★ Services ★
        </span>
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Your All-in-One Subscription Hub
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base">
        Say goodbye to the hassle of multiple apps and platforms, and hello to
        the simplicity and convenience of managing your subscriptions with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition"
          >
            <div className="grid grid-cols-4 gap-2 mb-4">
              {service.logos.map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="logo"
                  className="w-10 h-10 object-contain mx-auto"
                />
              ))}
            </div>
            <h3 className="text-md md:text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
