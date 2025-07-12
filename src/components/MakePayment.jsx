import { useState } from "react";
import { FaCreditCard, FaDollarSign, FaSpinner, FaLock, FaReceipt, FaShieldAlt, FaCheckCircle, FaArrowLeft } from "react-icons/fa";

const MakePayment = ({ formData, paymentData, setPaymentData, isProcessing, setIsProcessing, setTransactionData, nextStep, prevStep}) => {
    const [errors, setErrors] = useState({});
    
    const selectedPlan = formData.plan && formData.provider
        ? {
            name: formData.plan,
            price: parseInt(formData.amount)
        }
        : null;

    const handlePaymentChange = (e) => {
        setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
    };

    const processPayment = () => {
        if (paymentData.paymentMethod === "card") {
            const newErrors = {};

            if (!/^\d{16}$/.test(paymentData.cardNumber || "")) {
                newErrors.cardNumber = "Card number must be 16 digits";
            }

            if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentData.expiryDate || "")) {
                newErrors.expiryDate = "Expiry must be in MM/YY format";
            }

            if (!/^\d{3}$/.test(paymentData.cvv || "")) {
                newErrors.cvv = "CVV must be 3 digits";
            }

            if (!paymentData.cardName?.trim()) {
                newErrors.cardName = "Cardholder name is required";
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return;
            }
        }

        setErrors({}); // Clear errors if valid
        setIsProcessing(true);
        setTimeout(() => {
            setTransactionData({
                transactionId: 'TV' + Math.random().toString(36).substr(2, 9).toUpperCase(),
                timestamp: new Date().toISOString(),
                status: 'success'
            });
            setIsProcessing(false);
            nextStep();
        }, 3000);

    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-4 flex items-center">
                    <FaReceipt className="mr-2 primary-text" /> Summary
                </h3>
                <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Smartcard:</span>
                      <span className="font-semibold">{formData.smartcardNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Provider:</span>
                      <span className="font-semibold">{formData.provider}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plan:</span>
                      <span className="font-semibold">{selectedPlan?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Amount:</span>
                      <span className="font-semibold">₦{selectedPlan?.price}</span>
                    </div>
                </div>
            </div>

            <div>
                <label className="block mb-2 font-semibold">
                    <FaShieldAlt className="inline mr-2 text-green-600" /> Payment Method
                </label>
                <div className="space-y-3">
                    <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md 
                        ${paymentData.paymentMethod === 'card' ? 'tertiary-color shadow-md' : 'border-gray-200'}`}
                    >
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

                    <label className={`flex items-center p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md 
                        ${paymentData.paymentMethod === 'wallet' ? 'border-green-500 bg-green-50 shadow-md' : 'border-gray-200'}`}
                    >
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
            </div>

            {/* Card Details */}
            {paymentData.paymentMethod === "card" && (
                <div className="space-y-4">
                    <input
                        type="text"
                        name="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={handlePaymentChange}
                        placeholder="Card Number"
                        className={`w-full px-4 py-3 border-2 rounded-xl ${errors.cardNumber ? "border-red-500" : "border-gray-200"}`}
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="expiryDate"
                            value={paymentData.expiryDate}
                            onChange={(e) => {
                                let val = e.target.value.replace(/\D/g, ""); // Remove non-digits
                                if (val.length > 2) {
                                val = val.slice(0, 2) + "/" + val.slice(2, 4); // Add slash after MM
                                }
                                setPaymentData({ ...paymentData, expiryDate: val.slice(0, 5) }); // Limit to MM/YY
                            }}
                            placeholder="MM/YY"
                            maxLength={5}
                            className={`w-full px-4 py-3 border-2 rounded-xl ${errors.expiryDate ? "border-red-500" : "border-gray-200"}`}
                        />
                        {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                        <input
                            type="text"
                            name="cvv"
                            value={paymentData.cvv}
                            onChange={(e) => {
                                const val = e.target.value.replace(/\D/g, "").slice(0, 3);
                                setPaymentData({ ...paymentData, cvv: val });
                            }}
                            placeholder="CVV"
                            maxLength={3}
                            className={`w-full px-4 py-3 border-2 rounded-xl ${errors.cvv ? "border-red-500" : "border-gray-200"}`}
                        />
                        {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                    </div>
                    <input
                        type="text"
                        name="cardName"
                        value={paymentData.cardName}
                        onChange={handlePaymentChange}
                        placeholder="Cardholder Name"
                        className="w-full px-4 py-3 border-2 rounded-xl border-gray-200"
                    />
                </div>
            )}

            <button
                onClick={processPayment}
                disabled={isProcessing || !paymentData.paymentMethod}
                className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg
                    ${isProcessing ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:shadow-xl'}`}
            >
                {isProcessing ? (
                    <><FaSpinner className="animate-spin inline mr-2" /> Processing...</>
                    ) : (
                    <><FaLock className="inline mr-2" /> Pay Now</>
                )}
            </button>

            <button
                onClick={prevStep}
                className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
                <FaArrowLeft className="inline mr-2" /> Back
            </button>
        </div>
    );
}

export default  MakePayment