import React, { useState, useCallback } from 'react';
import { FaQuestionCircle, FaSearch, FaRocket, FaCreditCard, FaUser, FaStore } from "react-icons/fa";

const FAQ_CATEGORIES = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: <FaRocket />,
    faqs: [
      {
        question: 'How do I get started?',
        answer: 'Download the Subsumb app or visit our website to create an account. Complete your profile setup in just a few minutes to start using our services.'
      },
      {
        question: 'Can Subsumb work without internet?',
        answer: 'Subsumb requires an internet connection for real-time features. Offline mode is available for viewing cached data, but transactions need connectivity.'
      },
      {
        question: 'How do I add a profile?',
        answer: 'Go to your account settings, select \'Add Profile\', upload a photo, and fill in your details. Verification takes up to 24 hours.'
      }
    ]
  },
  {
    id: 'payments',
    title: 'Payments',
    icon: <FaCreditCard />,
    faqs: [
      {
        question: 'What payment gateway?',
        answer: 'We support Stripe, Paystack, and Flutterwave for secure, global payments. Choose your preferred gateway during checkout.'
      },
      {
        question: 'Can I use wallet?',
        answer: 'Yes! Link your mobile wallet (e.g., OPay, PalmPay) or bank card to our wallet for quick transactions and cashback rewards.'
      },
      {
        question: 'Can I use my ATM card?',
        answer: 'Absolutely. Enter your 16-digit card number, expiry date, and CVV for seamless payments. 3D Secure is enabled for safety.'
      }
    ]
  },
  {
    id: 'account',
    title: 'Account',
    icon: <FaUser />,
    faqs: [
      {
        question: 'User verification?',
        answer: 'Upload a valid ID (NIN, driver\'s license) and selfie. Our team verifies within 48 hours to ensure platform security.'
      }
    ]
  },
  {
    id: 'merchant',
    title: 'Merchant',
    icon: <FaStore />,
    faqs: [
      {
        question: 'How do I add profile with internet?',
        answer: 'Log in to your merchant dashboard, navigate to \'Profile\', upload documents via our secure uploader, and submit for approval.'
      }
    ]
  }
];

function FAQPAGE() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = useCallback((faqs) => {
    if (!searchQuery.trim()) return faqs;
    const query = searchQuery.toLowerCase();
    return faqs.filter(faq => 
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const toggleFaq = (categoryId, index) => {
    setOpenFaq(openFaq === `${categoryId}-${index}` ? null : `${categoryId}-${index}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f3f4] to-[#880d1e]/10">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <section className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#880d1e] mb-4 leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            We have answers to your questions. Contact us if you can't find answers here.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              className="w-full pl-12 pr-14 py-4 text-lg border-2 border-[#FFC8C8]/50 rounded-full focus:border-[#880d1e] focus:ring-4 focus:ring-[#880d1e]/10 transition-all duration-300 shadow-lg"
              placeholder="Search here to find answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-[#880d1e]/60 hover:text-[#880d1e] transition-colors" aria-label="Search">
              <FaSearch />
            </button>
          </div>
        </section>

        {/* FAQ Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-8">
          {FAQ_CATEGORIES.map((category) => (
            <div key={category.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="p-8 pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#880d1e] to-[#880d1e]/60 rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg mx-auto text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {filteredFaqs(category.faqs).map((faq, index) => (
                    <div key={`${category.id}-${index}`} className="faq-item">
                      <button
                        className="w-full text-left p-5 bg-gradient-to-r from-gray-50 to-[#FFC8C8]/30 rounded-xl hover:from-[#880d1e]/10 hover:to-[#FFC8C8]/50 transition-all duration-300 flex justify-between items-center group hover:shadow-md"
                        onClick={() => toggleFaq(category.id, index)}
                      >
                        <span className="font-medium text-gray-900 group-hover:text-[#880d1e]">
                          {faq.question}
                        </span>
                        <span className={`text-2xl transition-transform duration-300 ${
                          openFaq === `${category.id}-${index}` ? 'rotate-45' : ''
                        }`}>
                          +
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-500 ease-out ${
                        openFaq === `${category.id}-${index}` 
                          ? 'max-h-48 py-4 px-5 bg-[#f5f3f4]/50 rounded-b-xl border-t border-[#FFC8C8]/30' 
                          : 'max-h-0'
                      }`}>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                  {filteredFaqs(category.faqs).length === 0 && (
                    <p className="text-center text-gray-500 py-8 italic">
                      No results found for "{searchQuery}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default FAQPAGE;
