import React from 'react';
import { 
  FaRocket, 
  FaCreditCard, 
  FaUser, 
  FaStore, 
  FaShieldAlt, 
  FaGlobe, 
  FaMobileAlt, 
  FaClock, 
  FaUsers, 
  FaMapMarkerAlt,
  FaAward,
  FaCheckCircle 
} from "react-icons/fa";

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f4] via-white to-[#880d1e]/5 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFC8C8]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-[#880d1e]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-[#FFC8C8]/30 rounded-full blur-xl animate-bounce"></div>
      </div>

      {/* Hero Section with Parallax Effect */}
      <section className="relative pt-32 pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#880d1e]/10 via-[#FFC8C8]/5 to-[#880d1e]/5"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-2xl mb-8 border border-[#FFC8C8]/50">
            <FaAward className="text-[#880d1e] text-xl" />
            <span className="font-semibold text-[#880d1e] text-lg">Pioneering African Fintech Since 2024</span>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#880d1e] via-[#880d1e]/90 to-gray-900 bg-clip-text text-transparent mb-8 leading-tight animate-float">
              Subsumb
              <span className="block text-2xl lg:text-3xl bg-gradient-to-r from-[#FFC8C8] to-transparent bg-clip-text text-transparent font-light mt-2">
                Africa's Payment Revolution
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed opacity-90">
              We bridge Africa's fragmented payment landscape with a single platform that works everywhere – from bustling Lagos markets 
              to remote Nigerian villages. 5M+ transactions powered, 50K+ merchants onboarded.
            </p>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-12 text-center">
            {[
              { num: '50K+', label: 'Active Merchants' },
              { num: '5M+', label: 'Transactions' },
              { num: '99.9%', label: 'Uptime' },
              { num: '24h', label: 'Verification' }
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-3xl lg:text-4xl font-black text-[#880d1e] mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.num}
                </div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Animated Rocket */}
          <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-[#880d1e] to-[#880d1e]/60 rounded-3xl flex items-center justify-center mx-auto text-4xl text-white shadow-2xl animate-bounce-slow">
            <FaRocket />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-32">

        {/* The Problem We Solve */}
        <section className="mb-28 lg:mb-40">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-transparent via-transparent to-[#880d1e] bg-clip-text">
              The African Payment Puzzle
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#880d1e] to-[#FFC8C8] mx-auto mb-12 rounded-full"></div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-[#880d1e]/5 to-[#FFC8C8]/10 backdrop-blur-sm rounded-3xl p-10 lg:p-12 border border-[#880d1e]/10 shadow-2xl">
                  <h3 className="text-3xl font-bold text-[#880d1e] mb-6 flex items-center gap-3">
                    <FaMobileAlt className="text-3xl" /> Fragmented Systems
                  </h3>
                  <ul className="space-y-4 text-lg text-gray-700">
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#880d1e] mt-1 flex-shrink-0" />
                      <span>10+ mobile wallets (OPay, PalmPay, MTN MoMo)</span>
                    </li>
                   
                    <li className="flex items-start gap-3">
                      <FaCheckCircle className="text-[#880d1e] mt-1 flex-shrink-0" />
                      <span>Verification takes hours, not weeks</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#880d1e]/90 to-[#880d1e] text-white rounded-3xl p-12 lg:p-16 shadow-3xl transform rotate-3 hover:rotate-0 transition-all duration-500 hover:scale-105">
                  <h3 className="text-3xl font-bold mb-6 text-[#FFC8C8]">Our Solution</h3>
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                      <FaClock className="text-2xl text-[#FFC8C8]" /> <span>24hr verification</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                      <FaCreditCard className="text-2xl text-[#FFC8C8]" /> <span>5+ payment methods</span>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                      <FaGlobe className="text-2xl text-[#FFC8C8]" /> <span>Global + Local</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Features */}
        <section className="mb-28 lg:mb-40">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">Powering Every Transaction</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From street vendors to enterprise merchants – we've got every use case covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <FaRocket className="text-3xl" />,
                title: "Lightning Onboarding",
                desc: "Profile setup in 60 seconds. NIN/selfie verification in 24hrs. Offline mode ready.",
                bg: "from-emerald-500 to-emerald-600"
              },
              {
                icon: <FaCreditCard className="text-3xl" />,
                title: "Universal Payments",
                desc: "Stripe • Paystack • Flutterwave • OPay • PalmPay • ATM Cards • USSD. One checkout.",
                bg: "from-blue-500 to-blue-600"
              },
              {
                icon: <FaShieldAlt className="text-3xl" />,
                title: "Fort Knox Security",
                desc: "3D Secure • Real-time fraud detection • 48hr manual merchant review • End-to-end encryption.",
                bg: "from-purple-500 to-purple-600"
              },
              {
                icon: <FaStore className="text-3xl" />,
                title: "Merchant Dashboard",
                desc: "Real-time analytics • Bulk payouts • Customer management • Automated tax reports.",
                bg: "from-orange-500 to-orange-600"
              },
              {
                icon: <FaUser className="text-3xl" />,
                title: "Consumer Wallet",
                desc: "Instant top-up • Cashback rewards • Split payments • Recurring subscriptions.",
                bg: "from-pink-500 to-pink-600"
              },
              {
                icon: <FaGlobe className="text-3xl" />,
                title: "Pan-African Scale",
                desc: "NGN • GHS • KES • ZAR • USD. Cross-border payments. Local compliance everywhere.",
                bg: "from-indigo-500 to-indigo-600"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-10 lg:p-12 shadow-2xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 border border-[#FFC8C8]/30 hover:border-[#880d1e]/40 overflow-hidden"
              >
                {/* Feature Badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-[#880d1e] to-[#880d1e]/80 text-white px-4 py-2 rounded-bl-2xl font-bold text-sm shadow-lg transform group-hover:rotate-12 transition-transform duration-300">
                  # {index + 1}
                </div>
                
                {/* Icon Background */}
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#880d1e]/10 to-[#FFC8C8]/20 rounded-3xl flex items-center justify-center mb-8 shadow-xl mx-auto group-hover:bg-gradient-to-br group-hover:from-[#880d1e] group-hover:to-[#880d1e]/60 group-hover:scale-110 transition-all duration-500">
                  <div className="text-4xl text-[#880d1e] drop-shadow-lg group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-black text-gray-900 mb-6 text-center group-hover:text-[#880d1e] transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg text-center mb-8 opacity-90">
                  {feature.desc}
                </p>
                
                <div className="h-1 bg-gradient-to-r from-[#880d1e]/30 to-transparent rounded-full group-hover:from-[#880d1e] group-hover:w-full transition-all duration-500 w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        </section>

        {/* Team & Coverage */}
        <section className="bg-gradient-to-r from-[#880d1e]/5 via-white to-[#FFC8C8]/5 backdrop-blur-sm rounded-4xl p-20 lg:p-28 mb-28 border border-[#880d1e]/10 shadow-3xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-[#880d1e] mb-8">
                  Built by Africans. For Africans.
                </h2>
                <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
                  <p>
                    Founded in Abuja, Nigeria by fintech veterans who lived the payment pain points. 
         </p>
                  <p className="flex items-center gap-4 pt-6 border-t border-[#FFC8C8]/30">
                    <FaMapMarkerAlt className="text-2xl text-[#880d1e]" />
                    <span className="font-semibold">Serving Nigeria, Ghana, Kenya, South Africa + 12 more</span>
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 border border-[#FFC8C8]/30 text-center">
                  <FaUsers className="text-5xl text-[#880d1e] mx-auto mb-6" />
                  <div className="text-3xl font-black text-[#880d1e]">25+</div>
                  <div className="text-gray-600 font-semibold">Team Members</div>
                </div>
                <div className="bg-gradient-to-br from-[#880d1e] to-[#880d1e]/80 text-white rounded-3xl p-8 shadow-3xl hover:shadow-4xl hover:scale-105 transition-all duration-300">
                  <FaCheckCircle className="text-5xl text-[#FFC8C8] mx-auto mb-6" />
                  <div className="text-3xl font-black text-[#FFC8C8]">₦50B+</div>
                  <div className="font-semibold opacity-90">Volume Processed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ultimate CTA */}
        <section className="text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#880d1e]/60 to-[#880d1e] opacity-95"></div>
          <div className="relative bg-gradient-to-r from-[#880d1e] via-[#880d1e]/90 to-gray-900 rounded-4xl p-16 lg:p-24 shadow-4xl transform -rotate-2 hover:rotate-0 transition-all duration-1000 hover:scale-105">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 drop-shadow-2xl leading-tight">
                Join the Payment Revolution
              </h2>
              <p className="text-2xl text-[#FFC8C8]/95 mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                50K merchants. 5M transactions. One platform that just works. 
                Be part of Africa's biggest fintech success story.
              </p>
              
              <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
                <button className="group relative bg-[#FFC8C8] hover:bg-[#FFC8C8]/90 text-[#880d1e] font-black px-12 lg:px-16 py-6 lg:py-7 rounded-3xl text-xl shadow-3xl hover:shadow-4xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <span className="relative z-10">Start Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-[120%] group-hover:translate-x-[120%] transition-transform duration-700"></div>
                </button>
                
                <button className="group border-3 border-white/30 hover:border-white/70 backdrop-blur-xl bg-white/10 hover:bg-white/20 text-white font-black px-12 lg:px-16 py-6 lg:py-7 rounded-3xl text-xl hover:shadow-3xl transition-all duration-500 flex items-center gap-3">
                  <span>Download App</span>
                </button>
              </div>

              <div className="mt-16 pt-12 border-t border-white/20 flex flex-wrap gap-6 justify-center text-white/80 text-lg">
                <span>Trusted by 50K+ merchants</span>
                <span>100% uptime guarantee</span>
                <span> 24/7 support</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AboutUsPage;
