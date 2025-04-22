import { card, contactAlarm, stamp, transfer } from "../assets/images";
import Button from "../components/Button";

const WalletFundingComponent = () => {
    return (
        <div className="px-4 md:px-12 lg:px-24 py-10 space-y-12">
            <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800">
                Buy & Fund your wallet Seamlessly
            </h2>

            {/* Fund Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#f2f5ff] shadow-lg rounded-xl p-6 flex flex-col items-start justify-center space-y-4 text-left">
                    <h3 className="text-xl font-semibold">Fund & Buy with your Card</h3>
                    <p className="text-gray-600">
                        Access any of our services with a card, even virtual ones. Secure, seamless, and accessible from anywhere.
                    </p>
                    <div className="flex items-end justify-center ml-72">
                        <img src={card} alt="Card Payment" className="w-52 h-52" />
                    </div>
                </div>

                <div className="bg-[#f2f5ff] shadow-lg rounded-xl p-6 flex flex-col items-start space-y-4 text-left">
                    <h3 className="text-xl font-semibold">Fund & Buy with Bank Transfer</h3>
                    <p className="text-gray-600">
                        Access any of our services with an online or offline bank transfer. Easy, reliable and secure.
                    </p>
                    <div className="flex items-end justify-center ml-72">
                        <img src={transfer} alt="Card Payment" className="w-52 h-52" />
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-[#f2f5ff] shadow-lg rounded-xl p-6 flex justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1 items-center justify-center">
                    <img src={contactAlarm} alt="Card Payment" className="w-64 h-auto" />
                </div>
                <div className="flex flex-col items-center space-x-4 gap-5">
                    <div>
                        <h3 className="text-2xl font-bold">Contact Us</h3>
                        <p className="text-gray-600 max-w-md text-justify">
                            We're here to listen, assist, and respond to your queries. Whether it's a question, feedback, or assistance you need, reaching out to us is the first step.
                        </p>
                    </div>
                    <Button text="Contact Us"/>
                </div>
            </div>

            {/* Get Started Section */}
            <div className="bg-[#f2f5ff] shadow-lg rounded-xl p-6 flex justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-1 items-center justify-center">
                    <img src={stamp} alt="Get Started" className="w-64 h-auto" />
                </div>
                <div className="flex flex-col items-center space-x-4 gap-5">
                    <div>
                        <h3 className="text-2xl font-bold">Get Started</h3>
                        <p className="text-gray-600 max-w-md text-justify">
                        Getting started is simple. We’re here to guide you through the process, ensuring that your journey with us is smooth and efficient.
                        </p>
                    </div>
                    <Button text="Get Started"/>
                </div>
            </div>
        </div>
    );
}

export default WalletFundingComponent;