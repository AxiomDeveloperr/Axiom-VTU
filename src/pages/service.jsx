import React from 'react';
import { 
  FaCreditCard, FaShieldAlt, FaStore, FaChartLine, FaMobileAlt, 
  FaGlobe, FaClock, FaRocket, FaUsers, FaGem, FaBolt, FaCheckCircle
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 'universal-payments',
      title: 'Universal Payment Gateway',
      icon: FaCreditCard,
      description: 'One checkout for ALL African payment methods',
      features: [
        'Paystack • Flutterwave • Stripe',
        'OPay • PalmPay • Paga • MTN MoMo',
        'All Nigerian Bank Cards & USSD',
        '3D Secure & PCI DSS Level 1',
        'Auto currency conversion',
        'Split payments & escrow'
      ],
      stats: '5M+ transactions processed',
      cta: 'Integrate Now'
    },
    {
      id: 'lightning-verification',
      title: '24hr Lightning Verification',
      icon: FaClock,
      description: 'Profile verification in hours, not weeks',
      features: [
        'NIN, BVN, Driver\'s License, Passport',
        'AI-powered selfie matching',
        'Manual review within 24 hours',
        '48hr merchant approval',
        'Real-time status tracking',
        '99.9% approval rate'
      ],
      stats: '50K+ profiles verified',
      cta: 'Verify Instantly'
    },
    {
      id: 'merchant-dashboard',
      title: 'Enterprise Merchant Dashboard',
      icon: FaStore,
      description: 'Complete business management platform',
      features: [
        'Real-time transaction analytics',
        'Bulk customer payouts',
        'Customer 360 profiles',
        'Automated tax reporting',
        'API & webhook integration',
        'White-label checkout pages'
      ],
      stats: '50K+ active merchants',
      cta: 'Launch Dashboard'
    },
    {
      id: 'security-fortress',
      title: 'Bank-Grade Security',
      icon: FaShieldAlt,
      description: 'Military-grade protection for every transaction',
      features: [
        'End-to-end encryption (AES-256)',
        'AI real-time fraud detection',
        '3D Secure 2.0 authentication',
        '48hr manual merchant review',
        'ISO 27001 & PCI DSS certified',
        '99.99% fraud prevention'
      ],
      stats: '₦0 lost to fraud',
      cta: 'Secure Your Business'
    }
  ];

  const consumerFeatures = [
    '5% cashback on every transaction',
    'Split payments with friends',
    'Auto-recurring subscriptions',
    'Instant wallet top-up',
    'Transaction history & receipts',
    'Freeze card instantly'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f4] to-[#880d1e]/5 overflow-hidden">
      {/* Navigation Bar */}


      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#880d1e]/5 via-transparent to-[#FFC8C8]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 items-center gap-16">
            <div className="lg:pr-12">
              <div className="inline-flex items-center gap-3 bg-[#880d1e]/10 px-6 py-3 rounded-2xl border border-[#880d1e]/20 mb-8">
                <FaBolt className="text-[#880d1e]" />
                <span className="font-semibold text-[#880d1e]">Enterprise-Ready Services</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black bg-gradient-to-r from-[#880d1e] to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
                Complete Payment 
                <span className="block text-4xl lg:text-5xl bg-gradient-to-r from-[#FFC8C8] to-transparent bg-clip-text text-transparent font-light mt-4">
                  Infrastructure
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-12 max-w-2xl leading-relaxed">
                Power your African business with our battle-tested payment stack. 
                From street vendors to enterprises – we've engineered the complete solution.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <button className="bg-gradient-to-r from-[#880d1e] to-[#880d1e]/90 text-white font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500 flex items-center gap-3">
                  <FaRocket /> Start Building
                </button>
                <button className="border-2 border-[#880d1e]/50 hover:border-[#880d1e] text-[#880d1e] font-bold px-12 py-6 rounded-3xl text-xl hover:bg-[#880d1e]/5 transition-all duration-500">
                  View Documentation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/70 backdrop-blur-xl rounded-5xl p-12 lg:p-20 shadow-3xl border border-[#FFC8C8]/30">
                <div className="grid grid-cols-2 gap-8 mb-12">
                  <div className="text-center p-6">
                    <div className="text-4xl font-black text-[#880d1e] mb-2">24h</div>
                    <div className="text-sm font-semibold text-gray-600">Verification</div>
                  </div>
                  <div className="text-center p-6">
                    <div className="text-4xl font-black text-[#880d1e] mb-2">7+</div>
                    <div className="text-sm font-semibold text-gray-600">Payment Methods</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {['Paystack', 'Flutterwave', 'Stripe', 'OPay', 'Cards', 'USSD'].map((method) => (
                    <div key={method} className="flex items-center gap-3 p-4 bg-gradient-to-r from-[#880d1e]/5 to-[#FFC8C8]/10 rounded-2xl">
                      <div className="w-3 h-3 bg-[#880d1e] rounded-full" />
                      <span className="font-semibold text-gray-900">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 lg:py-44 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 lg:mb-32">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Battle-tested infrastructure powering Africa's payment revolution
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`group bg-white rounded-4xl p-10 lg:p-12 shadow-xl hover:shadow-3xl hover:-translate-y-4 transition-all duration-700 border border-[#FFC8C8]/20 hover:border-[#880d1e]/40 overflow-hidden h-full ${index % 2 ? 'lg:row-span-2' : ''}`}
              >
                {/* Header */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#880d1e] to-[#880d1e]/70 rounded-3xl flex items-center justify-center text-3xl text-white mb-8 shadow-2xl group-hover:scale-110 transition-transform duration-500 mx-auto">
                  <service.icon />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 text-center group-hover:text-[#880d1e] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-700 mb-8 text-center leading-relaxed">
                  {service.description}
                </p>

                {/* Stats */}
                <div className="text-2xl font-bold text-[#880d1e] mb-8 text-center bg-[#880d1e]/5 px-6 py-3 rounded-2xl">
                  {service.stats}
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 hover:bg-[#FFC8C8]/20 rounded-2xl group-hover:pl-6 transition-all duration-300">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#880d1e] to-[#880d1e]/70 rounded-lg flex items-center justify-center text-white text-sm font-bold mt-1 flex-shrink-0">
                        ✓
                      </div>
                      <span className="text-lg font-semibold text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full bg-gradient-to-r from-[#880d1e] to-[#880d1e]/90 text-white font-bold py-5 px-8 rounded-3xl text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-500 group-hover:ring-4 group-hover:ring-[#880d1e]/20">
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer Section */}
      <section className="py-32 lg:py-44 bg-gradient-to-r from-[#880d1e]/5 to-[#FFC8C8]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black bg-gradient-to-r from-[#880d1e] to-gray-900 bg-clip-text text-transparent mb-6">
              Consumer Super App
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Beyond merchants – power your customers too
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-6 mb-16">
                {consumerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-x-4 transition-all duration-500 border border-[#FFC8C8]/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#880d1e] to-[#880d1e]/70 rounded-2xl flex items-center justify-center text-xl text-white font-bold flex-shrink-0 mt-1">
                      0{index + 1}
                    </div>
                    <span className="text-xl font-semibold text-gray-900 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-to-r from-[#880d1e] to-[#880d1e]/90 text-white font-bold px-12 py-6 rounded-3xl text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
                Download Consumer App
              </button>
            </div>
            
            <div className="relative lg:pl-16">
              <div className="relative bg-gradient-to-br from-[#880d1e] to-[#880d1e]/70 text-white rounded-5xl p-16 lg:p-20 shadow-3xl max-w-md mx-auto lg:ml-auto">
                <div className="absolute top-6 right-6 w-32 h-32 bg-[#FFC8C8]/20 rounded-4xl"></div>
                <div className="text-6xl mb-8 flex justify-center">
                  <FaMobileAlt />
                </div>
                <div className="space-y-4 text-2xl font-bold">
                  <div>Super Wallet</div>
                  <div>5% Cashback</div>
                  <div>One-Tap Pay</div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/30 text-4xl font-black text-center">
                  Live Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-32 lg:py-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">Technical Foundation</h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto">
              Built for scale. Engineered for Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Performance',
                metrics: ['99.99% uptime', '50ms avg response', '<1% failure rate'],
                icon: FaChartLine
              },
              {
                title: 'Scale',
                metrics: ['₦50B+ processed', '5M+ transactions', '50K+ merchants'],
                icon: FaGlobe
              },
              {
                title: 'Coverage',
                metrics: ['NGN, GHS, KES, ZAR, USD', '16 African countries', 'Global gateways'],
                icon: FaUsers
              }
            ].map((spec, index) => (
              <div key={index} className="bg-white rounded-4xl p-12 shadow-2xl hover:shadow-3xl hover:-translate-y-3 transition-all duration-500 border border-[#FFC8C8]/20 text-center group">
                <div className="w-20 h-20 mx-auto mb-8">
                  <spec.icon className="text-3xl text-[#880d1e] group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-8">{spec.title}</h3>
                <div className="space-y-4">
                  {spec.metrics.map((metric, i) => (
                    <div key={i} className="text-xl font-semibold text-gray-700">{metric}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-[#880d1e] to-[#880d1e]/90 text-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 drop-shadow-2xl leading-tight">
            Ready to Power 
            <span className="block text-[#FFC8C8] bg-gradient-to-r from-[#FFC8C8] to-transparent bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>
          <p className="text-2xl lg:text-3xl mb-16 max-w-2xl mx-auto opacity-95 leading-relaxed">
            Join 50K+ merchants crushing it with Subsumb's enterprise payment stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-[#FFC8C8] hover:bg-[#FFC8C8]/90 text-[#880d1e] font-black px-16 py-8 rounded-4xl text-2xl shadow-3xl hover:shadow-4xl hover:-translate-y-3 transition-all duration-500">
              Start Integration
            </button>
            <button className="border-4 border-white/50 hover:border-white text-white font-black px-16 py-8 rounded-4xl text-2xl hover:bg-white/20 backdrop-blur-xl transition-all duration-500">
              Book Demo Call
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
