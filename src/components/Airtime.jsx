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
  FaSpinner,
  FaMobileAlt,
  FaShieldAlt
} from "react-icons/fa";
import mtn from "../assets/images/mtn.png";
import glo from "../assets/images/glo.png";
import airtel from "../assets/images/airtel.png";
import nmobile from "../assets/images/9mobile.png";

export default function BuyAirtime() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: '',
    provider: '',
    airtimePlan: '',
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
    if (!formData.amount || formData.amount <= 0) newErrors.amount = 'Please enter a valid amount';
    
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
      airtimePlan: '',
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
    { value: 'mtn', label: 'MTN', Image: mtn },
    { value: 'glo', label: 'Glo',  Image: glo },
    { value: 'airtel', label: 'Airtel',  Image: airtel },
    { value: '9mobile', label: '9Mobile',  Image: nmobile }
  ];

  const quickAmounts = [100, 200, 500, 1000, 2000, 5000];

  const getStepTitle = () => {
    switch(currentStep) {
      case 1: return "Buy Airtime";
      case 2: return "Payment Details";
      case 3: return "Transaction Receipt";
      default: return "Buy Airtime";
    }
  };

  const getStepIcon = () => {
    switch(currentStep) {
      case 1: return <FaMobileAlt className="text-2xl text-blue-600" />;
      case 2: return <FaCreditCard className="text-2xl text-blue-600" />;
      case 3: return <FaCheckCircle className="text-2xl text-green-600" />;
      default: return <FaMobileAlt className="text-2xl text-blue-600" />;
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

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{0,4})(\d{0,3})(\d{0,4})$/);
    if (match) {
      return !match[2] ? match[1] : `${match[1]} ${match[2]}${match[3] ? ` ${match[3]}` : ''}`;
    }
    return value;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phoneNumber: formatted });
    if (errors.phoneNumber) {
      setErrors({ ...errors, phoneNumber: '' });
    }
  };

  return (
    <div className="min-h-screen ">
     
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md ${
                currentStep >= 1 ? 'primary-color' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <div className="ml-4">
                 <p className={`font-semibold hidden sm:block ${currentStep >= 1 ? 'text-primary' : 'text-gray-500'}`}>
  Select Details
</p>
<p className="text-sm text-gray-500 hidden sm:block">Choose your Network & Amount</p>
                
              </div>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-6 rounded-full">
              <div className={`h-full transition-all duration-500 rounded-full ${
                currentStep >= 2 ? 'primary-color w-full' : 'primary-color w-0'
              }`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md ${
                currentStep >= 2 ? 'primary-color text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <div className="ml-4">
               <p className={`font-semibold hidden sm:block ${currentStep >= 2 ? 'text-primary' : 'text-gray-500'}`}>
  Make Payment
</p>
<p className="text-sm text-gray-400 hidden sm:block">Complete transaction</p>
              </div>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-6 rounded-full">
              <div className={`h-full transition-all duration-500 rounded-full ${
                currentStep >= 3 ? 'primary-color w-full' : 'primary-color w-0'
              }`}></div>
            </div>
            <div className="flex items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-md ${
                currentStep >= 3 ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                <FaReceipt />
              </div>
              <div className="ml-4">
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
              <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                {getStepIcon()}
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{getStepTitle()}</h2>
              <p className="text-gray-600">
                {currentStep === 1 && "Top up your phone with instant airtime credit"}
                {currentStep === 2 && "Complete your payment securely and safely"}
                {currentStep === 3 && "Your airtime purchase has been completed successfully"}
              </p>
            </div>

            {/* Step 1: Airtime Purchase Form */}
            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <FaPhone className="inline mr-2 primary-text" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="0801 234 5678"
                    maxLength="13"
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all text-lg font-medium ${
                      errors.phoneNumber 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50'
                    }`}
                  />
                  {errors.phoneNumber && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Providers Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Network Provider
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {errors.provider}
                    </p>
                  )}
                </div>

                {/* Quick Amount Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    Quick Amount Selection
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                    {quickAmounts.map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => setFormData({ ...formData, amount: amount.toString() })}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all duration-200 hover:scale-105 ${
                          formData.amount === amount.toString()
                            ? 'tertiary-color shadow-md'
                            : 'border-gray-200 hover:border-gray-300 text-gray-700'
                        }`}
                      >
                        ₦{amount}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Amount */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <FaDollarSign className="inline mr-2 primary-text" />
                    Amount (₦)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleFormChange}
                    placeholder="Enter amount"
                    min="50"
                    max="50000"
                    className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none transition-all text-lg font-medium ${
                      errors.amount 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-blue-500 focus:bg-blue-50'
                    }`}
                  />
                  <p className="mt-2 text-sm text-gray-500">Minimum: ₦50, Maximum: ₦50,000</p>
                  {errors.amount && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {errors.amount}
                    </p>
                  )}
                </div>

                {/* Purchase Summary */}
                {formData.provider && formData.amount && (
                  <div className="tertiary-color rounded-xl p-6">
                    <h4 className="font-bold primary-text mb-4 flex items-center">
                      <FaReceipt className="mr-2" />
                      Purchase Summary
                    </h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Phone Number:</span>
                        <span className="font-semibold text-gray-800">{formData.phoneNumber || 'Not entered'}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Network:</span>
                        <span className="font-semibold text-gray-800">
                          {providers.find(p => p.value === formData.provider)?.label}
                        </span>
                      </div>
                      <hr className="border-blue-200" />
                      <div className="flex justify-between items-center text-xl font-bold">
                        <span className="text-gray-800">Total Amount:</span>
                        <span className="primary-text">₦{formData.amount}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Next Button */}
                <button
                  onClick={proceedToPayment}
                  disabled={!formData.phoneNumber || !formData.provider || !formData.amount}
                  className={`w-full font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-lg ${
                    formData.phoneNumber && formData.provider && formData.amount
                      ? 'primary-color text-white hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <FaCreditCard className="inline mr-3" />
                  Proceed to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <FaReceipt className="mr-2 primary-text" />
                    Order Summary
                  </h3>
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
                    <hr className="my-3 border-gray-300" />
                    <div className="flex justify-between text-xl font-bold">
                      <span>Total Amount:</span>
                      <span className="primary-text">₦{formData.amount}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-4">
                    <FaShieldAlt className="inline mr-2 text-green-600" />
                    Payment Method
                  </label>
                  <div className="space-y-3">
                    <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                      paymentData.paymentMethod === 'card' ? 'tertiary-color shadow-md' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        onChange={handlePaymentChange}
                        className="sr-only"
                      />
                      <FaCreditCard className="primary-text mr-4 text-xl" />
                      <div className="flex-1">
                        <span className="font-semibold text-gray-800">Credit/Debit Card</span>
                        <p className="text-sm text-gray-500">Visa, Mastercard, Verve accepted</p>
                      </div>
                      {paymentData.paymentMethod === 'card' && (
                        <FaCheckCircle className="primary-text text-xl" />
                      )}
                    </label>
                    <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
                      paymentData.paymentMethod === 'wallet' ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="wallet"
                        onChange={handlePaymentChange}
                        className="sr-only"
                      />
                      <FaDollarSign className="text-green-600 mr-4 text-xl" />
                      <div className="flex-1">
                        <span className="font-semibold text-gray-800">Wallet Balance</span>
                        <p className="text-sm text-gray-500">Pay from your account balance</p>
                      </div>
                      {paymentData.paymentMethod === 'wallet' && (
                        <FaCheckCircle className="text-green-600 text-xl" />
                      )}
                    </label>
                  </div>
                  {errors.paymentMethod && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <span className="w-1 h-1 bg-red-600 rounded-full mr-2"></span>
                      {errors.paymentMethod}
                    </p>
                  )}
                </div>

                {/* Card Details */}
                {paymentData.paymentMethod === 'card' && (
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4 border">
                    <h4 className="font-semibold text-gray-800 mb-4">Card Information</h4>
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
                            ? 'border-red-300 focus:border-red-500 bg-red-50' 
                            : 'border-gray-200 focus:border-blue-500 bg-white'
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
                              ? 'border-red-300 focus:border-red-500 bg-red-50' 
                              : 'border-gray-200 focus:border-blue-500 bg-white'
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
                          maxLength="4"
                          className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                            errors.cvv 
                              ? 'border-red-300 focus:border-red-500 bg-red-50' 
                              : 'border-gray-200 focus:border-blue-500 bg-white'
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
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                          errors.cardName 
                            ? 'border-red-300 focus:border-red-500 bg-red-50' 
                            : 'border-gray-200 focus:border-blue-500 bg-white'
                        }`}
                      />
                      {errors.cardName && (
                        <p className="mt-1 text-sm text-red-600">{errors.cardName}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="flex-1 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
                  >
                    <FaArrowLeft className="inline mr-2" />
                    Back
                  </button>
                  <button
                    onClick={processPayment}
                    disabled={isProcessing}
                    className={`flex-2 font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg ${
                      isProcessing
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-xl'
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
                        Pay ₦{formData.amount}
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Receipt */}
            {currentStep === 3 && (
              <div className="space-y-6 text-center">
                <div className="flex items-center justify-center text-green-600 text-5xl">
                  <FaCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Payment Successful</h3>
                <p className="text-gray-600">Your airtime has been sent successfully.</p>

                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between text-gray-700">
                    <span>Transaction ID:</span>
                    <span className="font-mono">{transactionData.transactionId}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Phone Number:</span>
                    <span>{formData.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Network:</span>
                    <span>{providers.find(p => p.value === formData.provider)?.label}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Amount:</span>
                    <span className="text-green-700">₦{formData.amount}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Timestamp:</span>
                    <span>{formatDate(transactionData.timestamp)}</span>
                  </div>
                </div>

                <div className="flex justify-center space-x-4 pt-6">
                  <button
                    onClick={resetTransaction}
                    className="px-6 py-3 bg-blue-100 primary-text rounded-xl hover:bg-blue-200 transition-all"
                  >
                    Make Another Purchase
                  </button>
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-all"
                  >
                    <FaPrint className="inline mr-2" />
                    Print Receipt
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
