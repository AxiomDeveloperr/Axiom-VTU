import React, { useState } from "react";
import {
  FaBars,
  FaBell,
  FaUserCircle,
  FaPhone,
  FaCreditCard,
  FaReceipt,
  FaTimes,
  FaWifi,
  FaDollarSign,
  FaCalendarAlt,
  FaCheckCircle,
  FaLock,
  FaDownload,
  FaPrint,
  FaShare,
  FaArrowLeft,
  FaSpinner
} from "react-icons/fa";
import mtn from "../assets/images/mtn.png";
import glo from "../assets/images/glo.png";
import airtel from "../assets/images/airtel.png";
import nmobile from "../assets/images/9mobile.png";

export default function BuyDataComplete() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    provider: '',
    dataPlan: '',
    amount: '',
  });
  
  const [paymentData, setPaymentData] = useState({
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
  });

  const [transactionData, setTransactionData] = useState({
    transactionId: '',
    timestamp: '',
    status: 'success'
  });
  
  const [showSidebar, setShowSidebar] = useState(false);
  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handlePaymentChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.provider) newErrors.provider = 'Provider is required';
    if (!formData.dataPlan) newErrors.dataPlan = 'Data plan is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!paymentData.paymentMethod) newErrors.paymentMethod = 'Payment method is required';
    if (paymentData.paymentMethod === 'card') {
      if (!paymentData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!paymentData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!paymentData.cvv) newErrors.cvv = 'CVV is required';
      if (!paymentData.cardName) newErrors.cardName = 'Card holder name is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const proceedToPayment = () => {
    if (validateStep1()) {
      setCurrentStep(2);
    }
  };

  const processPayment = async () => {
    if (validateStep2()) {
      setIsProcessing(true);
      
      // Simulate payment processing
      setTimeout(() => {
        const transactionId = 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
        setTransactionData({
          transactionId,
          timestamp: new Date().toISOString(),
          status: 'success'
        });
        setIsProcessing(false);
        setCurrentStep(3);
      }, 3000);
    }
  };

  const resetTransaction = () => {
    setCurrentStep(1);
    setFormData({
      phoneNumber: '',
      provider: '',
      dataPlan: '',
      amount: '',
    });
    setPaymentData({
      paymentMethod: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardName: '',
    });
    setTransactionData({
      transactionId: '',
      timestamp: '',
      status: 'success'
    });
    setErrors({});
  };

  const providers = [
    { value: 'mtn', label: 'MTN', color: 'bg-yellow-500', Image: mtn },
    { value: 'glo', label: 'Glo', color: 'bg-green-500', Image: glo },
    { value: 'airtel', label: 'Airtel', color: 'bg-red-500', Image: airtel },
    { value: '9mobile', label: '9Mobile', color: 'bg-green-600', Image: nmobile }
  ];

  const dataPlans = {
    mtn: [
      { id: 'mtn-500mb-30', data: '500MB', validity: '30 days', price: 200 },
      { id: 'mtn-1gb-30', data: '1GB', validity: '30 days', price: 350 },
      { id: 'mtn-2gb-30', data: '2GB', validity: '30 days', price: 700 },
      { id: 'mtn-3gb-30', data: '3GB', validity: '30 days', price: 1000 },
      { id: 'mtn-5gb-30', data: '5GB', validity: '30 days', price: 1500 },
      { id: 'mtn-10gb-30', data: '10GB', validity: '30 days', price: 2500 },
      { id: 'mtn-15gb-30', data: '15GB', validity: '30 days', price: 3300 },
      { id: 'mtn-20gb-30', data: '20GB', validity: '30 days', price: 4000 }
    ],
    glo: [
      { id: 'glo-500mb-30', data: '500MB', validity: '30 days', price: 200 },
      { id: 'glo-1gb-30', data: '1GB', validity: '30 days', price: 350 },
      { id: 'glo-2gb-30', data: '2GB', validity: '30 days', price: 700 },
      { id: 'glo-3gb-30', data: '3GB', validity: '30 days', price: 1000 },
      { id: 'glo-5gb-30', data: '5GB', validity: '30 days', price: 1500 },
      { id: 'glo-10gb-30', data: '10GB', validity: '30 days', price: 2500 }
    ],
    airtel: [
      { id: 'airtel-500mb-30', data: '500MB', validity: '30 days', price: 200 },
      { id: 'airtel-1gb-30', data: '1GB', validity: '30 days', price: 350 },
      { id: 'airtel-2gb-30', data: '2GB', validity: '30 days', price: 700 },
      { id: 'airtel-5gb-30', data: '5GB', validity: '30 days', price: 1500 },
      { id: 'airtel-10gb-30', data: '10GB', validity: '30 days', price: 2500 },
      { id: 'airtel-20gb-30', data: '20GB', validity: '30 days', price: 4000 }
    ],
    '9mobile': [
      { id: '9mobile-500mb-30', data: '500MB', validity: '30 days', price: 200 },
      { id: '9mobile-1gb-30', data: '1GB', validity: '30 days', price: 350 },
      { id: '9mobile-2gb-30', data: '2GB', validity: '30 days', price: 700 },
      { id: '9mobile-3gb-30', data: '3GB', validity: '30 days', price: 1000 },
      { id: '9mobile-5gb-30', data: '5GB', validity: '30 days', price: 1500 }
    ]
  };

  const handlePlanSelect = (plan) => {
    setFormData({ 
      ...formData, 
      dataPlan: plan.id,
      amount: plan.price.toString()
    });
  };

  const selectedPlan = formData.provider && formData.dataPlan 
    ? dataPlans[formData.provider]?.find(plan => plan.id === formData.dataPlan)
    : null;

  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "Buy Data Bundle";
      case 2: return "Payment Details";
      case 3: return "Transaction Receipt";
      default: return "Buy Data Bundle";
    }
  };

  const getStepIcon = () => {
    switch(currentStep) {
      case 1: return <FaWifi className="text-2xl text-primary" />;
      case 2: return <FaCreditCard className="text-2xl primary-text" />;
      case 3: return <FaCheckCircle className="text-2xl text-green-600" />;
      default: return <FaWifi className="text-2xl text-primary" />;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen ">

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= 1 ? 'primary-color text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <div className="ml-3">
               <p className={`font-semibold hidden sm:block ${currentStep >= 1 ? 'text-primary' : 'text-gray-500'}`}>
  Select Plan
</p>
<p className="text-sm text-gray-500 hidden sm:block">Choose your data plan</p>

              </div>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4">
              <div className={`h-full transition-all duration-500 ${
                currentStep >= 2 ? 'primary-color w-full' : 'primary-color w-0'
              }`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                currentStep >= 2 ? 'primary-color text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <div className="ml-3">
                <p className={`font-semibold hidden sm:block ${currentStep >= 2 ? 'text-primary' : 'text-gray-500'}`}>
  Make Payment
</p>
<p className="text-sm text-gray-400 hidden sm:block">Complete transaction</p>
              </div>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4">
              <div className={`h-full transition-all duration-500 ${
                currentStep >= 3 ? 'primary-color w-full' : 'primary-color w-0'
              }`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'primary-color text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <FaReceipt />
              </div>
              <div className="ml-3">
               <p className={`font-semibold hidden sm:block ${currentStep >= 3 ? 'text-primary' : 'text-gray-500'}`}>
  View Receipt
</p>
<p className="text-sm text-gray-400 hidden sm:block">Get confirmation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {getStepIcon()}
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{getStepTitle()}</h2>
              <p className="text-gray-600">
                {currentStep === 1 && "Get affordable data plans for your mobile device"}
                {currentStep === 2 && "Complete your payment securely"}
                {currentStep === 3 && "Your transaction has been completed successfully"}
              </p>
            </div>

            {/* Step 1: Data Plan Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaPhone className="inline mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleFormChange}
                    placeholder="08012345678"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                      errors.phoneNumber 
                        ? 'border-red-300 focus:border-red-500' 
                        : 'border-gray-200 focus:border-green-800'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                  )}
                </div>

                {/* Provider Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Network Provider
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {providers.map((provider) => (
  <label
    key={provider.value}
    className={`relative cursor-pointer rounded-xl border-2 p-5 text-center transition-all duration-200 hover:scale-105 hover:shadow-lg ${
      formData.provider === provider.value
        ? 'tertiary-color shadow-lg transform scale-105'
        : 'border-gray-200 hover:border-gray-300'
    }`}
  >
    <input
      type="radio"
      name="provider"
      value={provider.value}
      onChange={handleFormChange}
      className="sr-only"
    />
    <img
      src={provider.Image}
      alt={provider.label}
      className="w-12 h-12 rounded-full mx-auto mb-3 shadow-md object-cover"
    />
    <span className="font-bold text-gray-800">{provider.label}</span>
    {formData.provider === provider.value && (
      <div className="absolute -top-2 -right-2 w-6 h-6 primary-color rounded-full flex items-center justify-center shadow-lg">
        <FaCheckCircle className="text-white text-sm" />
      </div>
    )}
  </label>
))}

                  </div>
                  {errors.provider && (
                    <p className="mt-1 text-sm text-red-600">{errors.provider}</p>
                  )}
                </div>

                {/* Data Plans */}
                {formData.provider && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Select Data Plan
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-80 overflow-y-auto">
                      {dataPlans[formData.provider]?.map((plan) => (
                        <div
                          key={plan.id}
                          onClick={() => handlePlanSelect(plan)}
                          className={`cursor-pointer rounded-xl border-2 p-4 transition-all hover:scale-105 ${
                            formData.dataPlan === plan.id
                              ? 'tertiary-color'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-bold text-lg text-gray-800">{plan.data}</h3>
                              <p className="text-sm text-gray-600 flex items-center">
                                <FaCalendarAlt className="mr-1" />
                                {plan.validity}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-primary">₦{plan.price}</p>
                              {formData.dataPlan === plan.id && (
                                <div className="w-5 h-5 primary-color rounded-full flex items-center justify-center mt-1">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {errors.dataPlan && (
                      <p className="mt-1 text-sm text-red-600">{errors.dataPlan}</p>
                    )}
                  </div>
                )}

                {/* Selected Plan Summary */}
                {selectedPlan && (
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                    <h4 className="font-semibold text-primary mb-2">Selected Plan</h4>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-gray-800">{selectedPlan.data} - {selectedPlan.validity}</p>
                        <p className="text-sm text-gray-600">
                          {providers.find(p => p.value === formData.provider)?.label}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-2xl text-primary">₦{selectedPlan.price}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Next Button */}
                <button
                  onClick={proceedToPayment}
                  disabled={!selectedPlan}
                  className={`w-full font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    selectedPlan
                      ? 'primary-color text-white'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FaCreditCard className="inline mr-2" />
                  Proceed to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-4">Order Summary</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone Number:</span>
                      <span className="font-semibold">{formData.phoneNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Network:</span>
                      <span className="font-semibold">
                        {providers.find(p => p.value === formData.provider)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data Plan:</span>
                      <span className="font-semibold">{selectedPlan?.data} - {selectedPlan?.validity}</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-primary">₦{selectedPlan?.price}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentData.paymentMethod === 'card' ? 'tertiary-color' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        onChange={handlePaymentChange}
                        className="sr-only"
                      />
                      <FaCreditCard className="primary-text mr-3" />
                      <span className="font-semibold">Credit/Debit Card</span>
                      {paymentData.paymentMethod === 'card' && (
                        <FaCheckCircle className="primary-text ml-auto" />
                      )}
                    </label>
                    <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      paymentData.paymentMethod === 'wallet' ? 'tertiary-color' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="wallet"
                        onChange={handlePaymentChange}
                        className="sr-only"
                      />
                      <FaDollarSign className="text-green-600 mr-3" />
                      <span className="font-semibold">Wallet Balance</span>
                      {paymentData.paymentMethod === 'wallet' && (
                        <FaCheckCircle className="primary-text ml-auto" />
                      )}
                    </label>
                  </div>
                  {errors.paymentMethod && (
                    <p className="mt-1 text-sm text-red-600">{errors.paymentMethod}</p>
                  )}
                </div>

                {/* Card Details */}
                {paymentData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="1234 5678 9012 3456"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          errors.cardNumber 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                      />
                      {errors.cardNumber && (
                        <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={paymentData.expiryDate}
                          onChange={handlePaymentChange}
                          placeholder="MM/YY"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                            errors.expiryDate 
                              ? 'border-red-300 focus:border-red-500' 
                              : 'border-gray-200 focus:border-blue-500'
                          }`}
                        />
                        {errors.expiryDate && (
                          <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={paymentData.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                            errors.cvv 
                              ? 'border-red-300 focus:border-red-500' 
                              
                                                            : 'border-gray-200 focus:border-blue-500'
                          }`}
                        />
                        {errors.cvv && (
                          <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={paymentData.cardName}
                        onChange={handlePaymentChange}
                        placeholder="Full Name"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          errors.cardName 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-gray-200 focus:border-blue-500'
                        }`}
                      />
                      {errors.cardName && (
                        <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Pay Button */}
                <button
                  onClick={processPayment}
                  disabled={isProcessing}
                  className={`w-full font-semibold py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg ${
                    isProcessing
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'primary-color text-white'
                  }`}
                >
                  {isProcessing ? (
                    <span className="flex items-center justify-center">
                      <FaSpinner className="animate-spin mr-2" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      <FaLock className="inline mr-2" />
                      Pay Now
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Step 3: Transaction Receipt */}
            {currentStep === 3 && (
              <div className="space-y-6 text-center">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800">Payment Successful!</h3>
                <p className="text-gray-600 mb-4">Your data purchase was completed successfully.</p>

                <div className="bg-gray-50 rounded-xl p-6 text-left">
                  <h4 className="font-semibold text-gray-800 mb-4">Transaction Details</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Transaction ID:</span>
                      <span className="font-semibold">{transactionData.transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-semibold">{formatDate(transactionData.timestamp)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone Number:</span>
                      <span className="font-semibold">{formData.phoneNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Network:</span>
                      <span className="font-semibold">
                        {providers.find(p => p.value === formData.provider)?.label}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Data Plan:</span>
                      <span className="font-semibold">{selectedPlan?.data} - {selectedPlan?.validity}</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Paid:</span>
                      <span className="text-primary">₦{formData.amount}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-6 flex-wrap">
                  <button className="px-4 py-2 rounded-xl bg-green-100 text-green-700 hover:bg-green-200 flex items-center gap-2">
                    <FaDownload />
                    Download Receipt
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-blue-100 text-primary hover:bg-blue-200 flex items-center gap-2">
                    <FaPrint />
                    Print Receipt
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-purple-100 text-primary hover:bg-purple-200 flex items-center gap-2">
                    <FaShare />
                    Share Receipt
                  </button>
                </div>

                <button
                  onClick={resetTransaction}
                  className="mt-6 text-sm text-gray-600 underline hover:text-gray-800"
                >
                  Make another purchase
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
