




import React, { useState } from 'react';
import { useNavigate } from "react-router";

import {
  FaWallet,
  FaCreditCard,
  FaUniversity,
  FaCheckCircle,
  FaBars,
  FaBell,
  FaUserCircle,
  FaArrowLeft
} from 'react-icons/fa';

export default function MakePayment() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);
  };
const navigate= useNavigate()
  const goBack = () => {
    

    navigate('/electricBill')

  };

  return (
    <div className="min-h-screen">
            <div className='md:hidden tertiary-color h-9 '>
        
        <button onClick={() => setShowSidebar(!showSidebar)} className="md:hidden  mr-4 flex justify-self-end">
        <FaBars className="text-xl primary-text mt-1 " />
        </button>
        </div>

      
     
       <div className="hidden md:flex justify-between mt-8  items-center mb-6">
            <h2 className="text-xl font-bold xl:ml-44 sm:ml-64">Pay electric bill</h2>
            <div className="flex items-center sm:mr-14 lg:mr-56 gap-4">
              <button className="px-3 py-1 text-sm font-semibold  primary-text rounded hidden sm:hidden xl:block lg:block">
                Upgrade to Merchant
              </button>
              <FaBell size={20} />
              <FaUserCircle size={24} />
            </div>
          </div>

      
      {showSidebar && (
        <div
          className="fixed inset-0 z-50 bg-blue-100 bg-opacity-30"
          onClick={() => setShowSidebar(false)}
        >
          <div
            className="absolute top-0 left-0 w-64 bg-white h-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            
            
          </div>
        </div>
      )}

      
      <div className="p-4">
        <div className="xl:max-w-md sm:max-w-md mx-auto sm:ml-60 bg-white xl:ml-96 shadow-md max-sm:mt-4 rounded-lg p-6">
          
          <div className="flex justify-between mb-6 text-sm">
            <div className="flex-1 text-center  font-semibold border-b-2 primary-text mr-4 pb-1">
              Fill Info
            </div>
            <div className="flex-1 text-center font-semibold border-b-2 mr-4 pb-1">
              Make Payment
            </div>
            <div className="flex-1 text-center text-gray-400 border-b-2 border-gray-300 pb-1">
              View Receipt
            </div>
          </div>

        
          <div className="border p-4 tertiary-color rounded-xl">
            <h3 className="text-center font-semibold mb-4">Confirm Transaction Details</h3>
            <div className="space-y-3 text-sm text-gray-700">
              {[
                ['Service Provider:', 'KWARA'],
                ['Meter Number:', '14315422742'],
                ['Meter Type:', 'Prepaid'],
                ['Amount:', '₦5000 + ₦100'],
                ['Total Payable:', '₦5100'],
                ['Transaction ID:', '23456789987654322234'],
                ['Status:', 'Initiated'],
              ].map(([label, value], index) => (
                <div key={index} className="flex justify-between">
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            
            <div className="mt-6">
              <p className="text-center font-semibold text-sm mb-4">Choose Payment Method</p>
              <div className="space-y-3">
                <button
                  onClick={() => handlePaymentSelection('Wallet')}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2  rounded-md text-white ${
                    paymentMethod === 'Wallet' ? 'bg-red-900' :'bg-red-800'
                  } hover:bg-red-700`}
                >
                  <FaWallet /> <span>Pay With Wallet</span>
                </button>
                <div className="flex gap-3">
                  <button
                    onClick={() => handlePaymentSelection('Card')}
                    className={`w-1/2 flex items-center justify-center gap-2 px-4 py-2 max-sm:h-12 border rounded-md ${
                      paymentMethod === 'Card'
                        ? 'bg-gray-100 '
                        : 'bg-white text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <FaCreditCard /> <span>With Card</span>
                  </button>
                  <button
                    onClick={() => handlePaymentSelection('Bank Transfer')}
                    className={`w-1/2 flex items-center justify-center gap-2 px-4 py-2 max-sm:h-12 border rounded-md ${
                      paymentMethod === 'Bank Transfer'
                        ? 'bg-gray-100  '
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <FaUniversity /> <span>Bank Transfer</span>
                  </button>
                </div>
              </div>
              {paymentMethod && (
                <div className="mt-6 flex justify-center items-center gap-2 primary-text text-sm">
                  <FaCheckCircle className="text-lg" />
                  <span>You have selected: <strong>{paymentMethod}</strong></span>
                </div>
              )}
            </div>
          </div>

          {/* Go Back Button */}
          <div className="mt-6 text-center">
            <button
              onClick={goBack}
              className="inline-flex items-center gap-2 primary-text text-sm hover:underline"
            >
              <FaArrowLeft /> <span>Go Back to Electric Bill</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

