import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  FaBars,
  FaBell,
  FaUserCircle,
  FaPhone,
  FaCreditCard,
  FaReceipt,
  FaTimes,
  FaMobile,
  FaDollarSign,
  FaLock,
  FaCheckCircle,
  FaUniversity,
  FaWallet,
  FaArrowLeft
} from "react-icons/fa";

export default function MakeAirtimePayment() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  
  const navigate = useNavigate();

  // Mock order details (would come from props or context in real app)
  const orderDetails = {
    phoneNumber: '08012345678',
    provider: 'MTN',
    airtimeType: 'VTU',
    amount: 5000
  };

  const paymentMethods = [
    {
      id: 'card',
      name: 'Debit/Credit Card',
      icon: FaCreditCard,
      description: 'Pay with your debit or credit card',
      color: 'bg-blue-500'
    },
    {
      id: 'bank',
      name: 'Bank Transfer',
      icon: FaUniversity,
      description: 'Transfer from your bank account',
      color: 'bg-green-500'
    },
    {
      id: 'wallet',
      name: 'Wallet Balance',
      icon: FaWallet,
      description: 'Pay from your wallet balance (₦12,500)',
      color: 'bg-purple-500'
    }
  ];

  const handleCardDetailsChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    // Format card number
    if (name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (value.length > 19) return;
    }

    // Format expiry date
    if (name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (value.length > 5) return;
    }

    // Format CVV
    if (name === 'cvv') {
      value = value.replace(/\D/g, '');
      if (value.length > 3) return;
    }

    setCardDetails({ ...cardDetails, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateCardForm = () => {
    const newErrors = {};
    
    if (!cardDetails.cardNumber || cardDetails.cardNumber.replace(/\s/g, '').length < 16) {
      newErrors.cardNumber = 'Valid card number is required';
    }
    if (!cardDetails.expiryDate || cardDetails.expiryDate.length < 5) {
      newErrors.expiryDate = 'Valid expiry date is required';
    }
    if (!cardDetails.cvv || cardDetails.cvv.length < 3) {
      newErrors.cvv = 'Valid CVV is required';
    }
    if (!cardDetails.cardholderName.trim()) {
      newErrors.cardholderName = 'Cardholder name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (selectedPaymentMethod === 'card' && !validateCardForm()) {
      return;
    }

    if (!selectedPaymentMethod) {
      setErrors({ paymentMethod: 'Please select a payment method' });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/view-receipt');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <div className="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-2"
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <button 
            onClick={() => setShowSidebar(!showSidebar)} 
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaBars className="text-xl text-gray-700" />
          </button>
        </div>
        <h1 className="text-lg font-semibold text-gray-800">Make Payment</h1>
        <div className="w-16"></div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center px-8 py-6 bg-white shadow-sm">
        <div className="flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors mr-4"
          >
            <FaArrowLeft className="text-gray-700" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Make Payment</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-semibold text-blue-600 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
            Upgrade to Merchant
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors relative">
            <FaBell size={20} className="text-gray-600" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-1 rounded-lg hover:bg-gray-100 transition-colors">
            <FaUserCircle size={28} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Sidebar for mobile */}
      {showSidebar && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setShowSidebar(false)}>
          <div className="absolute top-0 left-0 w-80 bg-white h-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                <button 
                  onClick={() => setShowSidebar(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <FaTimes className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center">
                <FaCheckCircle />
              </div>
              <div className="ml-3">
                <p className="font-semibold text-green-600">Fill Info</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
            <div className="flex-1 h-0.5 bg-green-600 mx-4"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                2
              </div>
              <div className="ml-3">
                <p className="font-semibold text-blue-600">Make Payment</p>
                <p className="text-sm text-gray-500">In progress</p>
              </div>
            </div>
            <div className="flex-1 h-0.5 bg-gray-200 mx-4"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                <FaReceipt />
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-500">View Receipt</p>
                <p className="text-sm text-gray-400">Pending</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <FaMobile className="mr-3 text-blue-600" />
              Order Summary
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Phone Number</span>
                <span className="font-semibold">{orderDetails.phoneNumber}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Network Provider</span>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="font-semibold">{orderDetails.provider}</span>
                </div>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Airtime Type</span>
                <span className="font-semibold">{orderDetails.airtimeType}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Amount</span>
                <span className="font-semibold">₦{orderDetails.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Service Fee</span>
                <span className="font-semibold">₦50</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-blue-50 rounded-lg px-4">
                <span className="text-lg font-bold text-gray-800">Total Amount</span>
                <span className="text-lg font-bold text-blue-600">₦{(orderDetails.amount + 50).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <FaLock className="mr-3 text-green-600" />
              Select Payment Method
            </h3>

            <div className="space-y-4 mb-6">
              {paymentMethods.map((method) => {
                const IconComponent = method.icon;
                return (
                  <label
                    key={method.id}
                    className={`block cursor-pointer rounded-xl border-2 p-4 transition-all hover:scale-102 ${
                      selectedPaymentMethod === method.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value={method.id}
                      onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className="flex items-center">
                      <div className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mr-4`}>
                        <IconComponent className="text-white text-xl" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{method.name}</h4>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                      {selectedPaymentMethod === method.id && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <FaCheckCircle className="text-white text-sm" />
                        </div>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>

            {errors.paymentMethod && (
              <p className="text-sm text-red-600 mb-4">{errors.paymentMethod}</p>
            )}

            {/* Card Details Form */}
            {selectedPaymentMethod === 'card' && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-4">Card Details</h4>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardDetailsChange}
                    placeholder="1234 5678 9012 3456"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errors.cardNumber ? 'border-red-300' : 'border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.cardNumber && <p className="mt-1 text-sm text-red-600">{errors.cardNumber}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      value={cardDetails.expiryDate}
                      onChange={handleCardDetailsChange}
                      placeholder="MM/YY"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        errors.expiryDate ? 'border-red-300' : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.expiryDate && <p className="mt-1 text-sm text-red-600">{errors.expiryDate}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      value={cardDetails.cvv}
                      onChange={handleCardDetailsChange}
                      placeholder="123"
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                        errors.cvv ? 'border-red-300' : 'border-gray-200 focus:border-blue-500'
                      }`}
                    />
                    {errors.cvv && <p className="mt-1 text-sm text-red-600">{errors.cvv}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                  <input
                    type="text"
                    name="cardholderName"
                    value={cardDetails.cardholderName}
                    onChange={handleCardDetailsChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                      errors.cardholderName ? 'border-red-300' : 'border-gray-200 focus:border-blue-500'
                    }`}
                  />
                  {errors.cardholderName && <p className="mt-1 text-sm text-red-600">{errors.cardholderName}</p>}
                </div>
              </div>
            )}

            {/* Bank Transfer Details */}
            {selectedPaymentMethod === 'bank' && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-4">Bank Transfer Details</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bank Name:</span>
                    <span className="font-semibold">First Bank Nigeria</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Number:</span>
                    <span className="font-semibold">1234567890</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Account Name:</span>
                    <span className="font-semibold">PayEase Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Amount:</span>
                    <span className="font-semibold text-blue-600">₦{(orderDetails.amount + 50).toLocaleString()}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Please use your phone number as the transfer reference for automatic confirmation.
                </p>
              </div>
            )}

            {/* Wallet Balance */}
            {selectedPaymentMethod === 'wallet' && (
              <div className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-4">Wallet Balance</h4>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Available Balance:</span>
                  <span className="font-bold text-green-600 text-lg">₦12,500</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-600">Amount to Deduct:</span>
                  <span className="font-bold text-blue-600">₦{(orderDetails.amount + 50).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center mt-2 pt-2 border-t">
                  <span className="text-gray-600">Remaining Balance:</span>
                  <span className="font-bold text-gray-800">₦{(12500 - orderDetails.amount - 50).toLocaleString()}</span>
                </div>
              </div>
            )}

            {/* Pay Button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className={`w-full mt-6 py-4 rounded-xl font-semibold text-white transition-all duration-200 ${
                isProcessing
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 shadow-lg'
              }`}
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing Payment...
                </div>
              ) : (
                <>
                  <FaLock className="inline mr-2" />
                  Pay ₦{(orderDetails.amount + 50).toLocaleString()} Securely
                </>
              )}
            </button>

            <div className="mt-4 flex items-center justify-center text-xs text-gray-500">
              <FaLock className="mr-1" />
              Your payment is secured with 256-bit SSL encryption
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}