import { useState } from "react"; 
import FillInfo from "../components/FillInfo";
import MakePayment from "../components/MakePayment";
import ViewReceipt from "../components/ViewReceipt";
import { FaCreditCard, FaCheckCircle, FaReceipt, FaTv } from "react-icons/fa";

const TVSubscription = () => {
    const [step, setStep] = useState(1);
    const [isProcessing, setIsProcessing] = useState(false);

    const [formData, setFormData] = useState({
        smartcardNumber: "",
        provider: "",
        plan: "",
        amount: ""
    });

    const [paymentData, setPaymentData] = useState({
        paymentMethod: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardName: ""
    });

    const [transactionData, setTransactionData] = useState({
        transactionId: "",
        timestamp: "",
        status: "success"
    });

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const getStepTitle = () => {
        switch(step) {
            case 1: return "TV Subscription";
            case 2: return "Payment Details";
            case 3: return "Transaction Receipt";
            default: return "TV Subscription";
        }
    };

    const getStepIcon = () => {
        switch(step) {
            case 1: return <FaTv className="text-2xl text-blue-600" />;
            case 2: return <FaCreditCard className="text-2xl text-blue-600" />;
            case 3: return <FaCheckCircle className="text-2xl text-green-600" />;
            default: return <FaTv className="text-2xl text-blue-600" />;
        }
    };

    const reset = () => {
        setStep(1);
        setFormData({ smartcardNumber: '', provider: '', plan: '', amount: '' });
        setPaymentData({ paymentMethod: '', cardNumber: '', expiryDate: '', cvv: '', cardName: '' });
        setTransactionData({ transactionId: '', timestamp: '', status: 'success' });
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Stepper */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                    {/* Step 1 */}
                    <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md
                            ${step >= 1 ? 'primary-color' : 'bg-gray-200 text-gray-500'}`}>
                                1
                        </div>
                        <div className="ml-4">
                            <p className={`font-semibold hidden sm:block ${step >= 1 ? 'text-primary' : 'text-gray-500'}`}>
                                Select Details
                            </p>
                            <p className="text-sm text-gray-500 hidden sm:block">Choose your Cable & Amount</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex-1 h-1 bg-gray-200 mx-6 rounded-full">
                        <div className={`h-full transition-all duration-500 rounded-full 
                            ${step >= 2 ? 'primary-color w-full' : 'primary-color w-0'}`}>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md
                            ${step >= 2 ? 'primary-color' : 'bg-gray-200 text-gray-500'}`}>
                                2
                        </div>
                        <div className="ml-4">
                            <p className={`font-semibold hidden sm:block ${step >= 2 ? 'text-primary' : 'text-gray-500'}`}>
                                Make Payment
                            </p>
                            <p className="text-sm text-gray-500 hidden sm:block">Complete transaction</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex-1 h-1 bg-gray-200 mx-6 rounded-full">
                        <div className={`h-full transition-all duration-500 rounded-full 
                            ${step >= 3 ? 'primary-color w-full' : 'primary-color w-0'}`}>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-md
                            ${step >= 3 ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                                <FaReceipt />
                        </div>
                        <div className="ml-4">
                            <p className={`font-semibold hidden sm:block ${step >= 3 ? 'text-primary' : 'text-gray-500'}`}>
                                View Receipt
                            </p>
                            <p className="text-sm text-gray-500 hidden sm:block">Get confirmation</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Step Detail */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                            {getStepIcon()}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{getStepTitle()}</h2>
                        <p className="text-gray-600">
                            {step === 1 && "Select your preferred cable TV provider and package"}
                            {step === 2 && "Make a secure and quick payment for your subscription"}
                            {step === 3 && "Your TV subscription has been completed successfully"}
                        </p>
                    </div>
                    {step === 1 && (
                        <FillInfo
                            formData={formData}
                            setFormData={setFormData}
                            nextStep={nextStep}
                        />
                    )}
                    {step === 2 && (
                        <MakePayment
                            formData={formData}
                            paymentData={paymentData}
                            setPaymentData={setPaymentData}
                            isProcessing={isProcessing}
                            setIsProcessing={setIsProcessing}
                            setTransactionData={setTransactionData}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <ViewReceipt
                            formData={formData}
                            transactionData={transactionData}
                            reset={reset}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default TVSubscription