import { useState } from "react";
import { FaCheckCircle, FaCreditCard, FaIdCard, FaReceipt } from "react-icons/fa";
import dstv from "../assets/images/dstv.png";
import gotv from "../assets/images/gotv.png";
import startimes from "../assets/images/startimes.png";

const FillInfo = ({ formData, setFormData, nextStep }) => {
    const [smartcardError, setSmartcardError] = useState("");

    const providers = [
        { value: "dstv", label: "DStv", image: dstv },
        { value: "gotv", label: "GOtv", image: gotv },
        { value: "startimes", label: "StarTimes", image: startimes }
    ];

    const plans = {
        dstv: [
        { id: "dstv-padi", name: "Padi", price: 2500 },
        { id: "dstv-yanga", name: "Yanga", price: 3500 },
        { id: "dstv-confam", name: "Confam", price: 6200 }
        ],
        gotv: [
        { id: "gotv-smallie", name: "Smallie", price: 2000 },
        { id: "gotv-jolli", name: "Jolli", price: 3800 },
        { id: "gotv-max", name: "Max", price: 5200 }
        ],
        startimes: [
        { id: "startimes-basic", name: "Basic", price: 1700 },
        { id: "startimes-smart", name: "Smart", price: 2500 },
        { id: "startimes-classic", name: "Classic", price: 3500 }
        ]
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;

        if (name === "smartcardNumber") {
            setSmartcardError(
                value === "" ? "Smartcard number is required" :
                !/^\d+$/.test(value) ? "Only numbers are allowed" :
                value.length < 10 ? "Too short — must be at least 10 digits" :
                value.length > 12 ? "Too long — must be 12 digits max" :
                ""
            );
        }

        setFormData({ ...formData, [name]: value });
    };



    const handlePlanSelect = (plan) => {
        setFormData({
        ...formData,
        plan: plan.id,
        amount: plan.price.toString()
        });
    };

    return (
        <div className="space-y-6">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <FaIdCard className="inline mr-2 primary-text" />
                    Smartcard Number
                </label>
                <input
                    type="text"
                    name="smartcardNumber"
                    value={formData.smartcardNumber}
                    onChange={handleFormChange}
                    placeholder="Enter Smartcard Number"
                    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none transition-colors
                        ${smartcardError ? "border-red-500" : "border-gray-200"}`}
                />
                {smartcardError && (
                    <p className="text-red-500 text-sm mt-2">{smartcardError}</p>
                )}
            </div>

            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                    TV Cable Provider
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {providers.map((provider) => (
                        <label
                            key={provider.value}
                            className={`relative cursor-pointer rounded-xl border-2 p-5 text-center transition-all duration-200 hover:scale-105 hover:shadow-lg
                                ${formData.provider === provider.value ? 'tertiary-color shadow-lg transform scale-105'
                                : 'border-gray-200 hover:border-gray-300'}`
                            }
                        >
                            <input
                                type="radio"
                                name="provider"
                                value={provider.value}
                                onChange={handleFormChange}
                                className="sr-only"
                            />
                            <img src={provider.image} alt={provider.label} className="w-12 h-12 rounded-full mx-auto mb-3 shadow-md object-cover" />
                            <span className="font-semibold">{provider.label}</span>
                            {formData.provider === provider.value && (
                                <div className="absolute -top-2 -right-2 w-6 h-6 primary-color rounded-full flex items-center justify-center shadow-lg">
                                    <FaCheckCircle className="text-white text-sm" />
                                </div>
                            )}
                        </label>
                    ))}
                </div>
            </div>

            {formData.provider && (
                <div className="grid grid-cols-1 gap-3">
                {plans[formData.provider].map((plan) => (
                    <div key={plan.id} onClick={() => handlePlanSelect(plan)}
                        className={`p-4 rounded-xl border-2 cursor-pointer flex justify-between ${
                            formData.plan === plan.id ? "border-blue-500" : "border-gray-200"
                        }`}
                    >
                        <span className="font-semibold">{plan.name}</span>
                        <span>₦{plan.price}</span>
                    </div>
                ))}
                </div>
            )}

            {/* Purchase Summary */}
            {formData.provider && formData.amount && (
                <div className="tertiary-color rounded-xl p-6">
                    <h4 className="font-bold primary-text mb-4 flex items-center">
                        <FaReceipt className="mr-2" />
                        Purchase Summary
                    </h4>
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Smartcard Number:</span>
                            <span className="font-semibold text-gray-800">{formData.smartcardNumber || 'Not entered'}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Provider:</span>
                            <span className="font-semibold text-gray-800">
                            {providers.find(p => p.value === formData.provider)?.label}
                            </span>
                        </div>
                        <hr className="border-blue-200" />
                        <div className="flex justify-between items-center text-xl font-bold">
                            <span className="text-gray-800">Total Amount:</span>
                            <span className="primary-text">₦{parseInt(formData.amount || 0).toLocaleString()}</span>
                        </div>
                    </div>
                </div>
            )}

            <button
                onClick={nextStep}
                disabled={!formData.smartcardNumber || !formData.provider || !formData.plan}
                className={`w-full font-bold py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg text-lg
                    ${formData.smartcardNumber && formData.provider && formData.plan ?
                        'primary-color text-white hover:shadow-xl' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
            >
                <FaCreditCard className="inline mr-2" /> Proceed to Payment
            </button>
        </div>
    );
}

export default FillInfo