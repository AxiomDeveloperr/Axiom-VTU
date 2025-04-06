import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";


const FaqPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page and follow the instructions to reset your password.",
    },
    {
      question: "How can I contact support?",
      answer: "You can send us an email at support@example.com or use the contact form on the Support page.",
    },
    {
      question: "Where can I watch past webinars?",
      answer: "Recorded webinars are available on the 'Webinars' page with the provided links.",
    },
    {
      question: "How do I update my profile information?",
      answer: "Go to the Profile section in your dashboard, edit your details, and save the changes.",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 flex w-full">
        <div
          className={`fixed md:relative ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          transition-transform duration-300 ease-in-out h-full z-30 md:z-auto`}
        >
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="rounded-2xl p-6 sm:p-8 md:p-9 bg-tt-primary shadow-lg mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white">Frequently Asked Questions</h1>
            </div>

            <div className="bg-white rounded-lg border shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FaQuestionCircle className="text-tt-primary" /> FAQs
              </h2>
              <div className="mt-4 space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-3">
                    <h3
                      className="font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span>{openIndex === index ? '−' : '+'}</span>
                    </h3>
                    {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
