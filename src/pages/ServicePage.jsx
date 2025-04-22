import { useState } from "react";

const ServicePage = () => {
  // const [hover, setHover] = useState (false);
  // const handleMouseEnter = () => setHover(true);
  // const handleMouseLeave = () => setHover (false);
  // const hoverStyle = {
  //   backgroundColor : hover ? "red" : "white"
  // }
    return (
        <>
             
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Our Services</h1>
        <p className="text-gray-600 text-lg">
          Fast, secure, and reliable transactions – anytime, anywhere.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
      >
      
        <div className="bg-white hover:bg-red-800 hover:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Airtime Top-Up</h3>
          <p className="text-gray-600 hover:text-white">
            Recharge your phone instantly on all networks (MTN, Glo, Airtel, 9mobile) with flexible amounts.
          </p>
        </div>

       
        <div className="bg-white hover:bg-red-800 hover:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Data Bundles</h3>
          <p className="text-gray-600 hover:text-white">
            Buy affordable data for yourself or loved ones — browse, stream, and stay connected with ease.
          </p>
        </div>

        
        <div className="bg-white hover:bg-red-800 hover:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Bill Payments</h3>
          <p className="text-gray-600 hover:text-white">
            Pay your electricity, cable TV (DSTV, GOtv, Startimes), and internet bills from one platform.
          </p>
        </div>

       
        <div className="bg-white hover:bg-red-800 hover:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Smart Wallet</h3>
          <p className="text-gray-600 hover:text-white">
            Fund your wallet for quick one-click payments across all services. Manage your balance in real-time.
          </p>
        </div>

        
        <div className="bg-white hover:bg-red-800 hover:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">24/7 Availability</h3>
          <p className="text-gray-600 hover:text-white">
            Access our platform anytime, anywhere – your convenience is our priority.
          </p>
        </div>

       
        <div className="bg-white hover:bg-red-800 hover:text-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2 text-primary">Dedicated Support</h3>
          <p className="text-gray-600 hover:text-white">
            Our friendly customer care team is always here to assist with any inquiries or complaints.
          </p>
        </div>
      </div>

      
      <div className="text-center mt-16">
        <h2 className="text-2xl font-semibold mb-2">Start Using Our Services Today</h2>
        <p className="text-gray-600 mb-4">Experience convenience and reliability like never before.</p>
        <a href="/register">
          <button className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark transition">
            Create an Account
          </button>
        </a>
      </div>
    </div>
    
          </>
    )
}

export default ServicePage;