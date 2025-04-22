import { FaBookOpen, FaCheckCircle, FaHeadphones } from "react-icons/fa"
import Button from "../components/Button"

const OtherServices = () => {
    const serviceData = [
        {
            description: "We’ve made it straightforward and user-friendly, ensuring that you can seamlessly connect to our system without hassle.",
            icon: <FaBookOpen />,
            bgColor: 'bg-purple-100',
            title: 'Concise API Documentation',
        },
        {
            description: "Our responsive tech support team is here to help you whenever you encounter tech challenges. Quick solutions, always.",
            icon: <FaHeadphones />,
            bgColor: 'bg-blue-100',
            title: 'Timely Tech Support',
        },
        {
            description: "“Reliable Service, No Downtime. Count on us for uninterrupted service. We keep you connected, always.”",
            icon: <FaCheckCircle />,
            bgColor: 'bg-yellow-100',
            title: 'Reliable Service Uptime',
            hasLink: true,
        },
    ]
    return (
        <section className="px-4 py-10 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-[#f2f5ff] rounded-xl shadow-md p-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800">Integrate our API</h3>
                    <p className="text-gray-600 text-sm md:text-base">
                        Integrate our well-documented API, which allows you to build your custom payment platform 
                        and earn by serving a vast user base. Regardless of the scale or complexity of your vision, 
                        you can bring it to life.
                    </p>
                    <div className="flex items-center justify-center">
                        <Button text="Learn More"/>
                    </div>
                </div>
                <div>
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png" 
                        alt="API Integration" 
                        className="w-full max-h-48 object-contain mx-auto"
                    />
                </div>
            </div>

            {/* Right Card */}
            <div className="bg-[#f2f5ff] rounded-xl shadow-md p-6 space-y-6">
                {serviceData.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className={`p-2 ${item.bgColor} rounded-md`}>
                            {item.icon}
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800">{item.title}</h4>
                            <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                            {item.hasLink && (
                                <a href="#" className="primary-text text-sm font-medium mt-1 inline-block">
                                    Learn More
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OtherServices
