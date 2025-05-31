import { useState } from "react";
import FillInfo from "../components/FillInfo";
import MakePayment from "../components/MakePayment";
import ViewReceipt from "../components/ViewReceipt";
import ConfirmPaymentModal from "../components/ConfirmPaymentModal";

const TVSubscription = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleNext = (data) => {
        setFormData(data);
        setStep(2);
    };

    const handlePay = () => {
        setShowModal(true);
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleClose = () => {
        setStep(1);
        setFormData(null);
    };

    const handleConfirm = () => {
        setShowModal(false);
        setStep(3);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const getStepStatus = (stepNumber) => {
        if (stepNumber < step) return 'completed';
        if (stepNumber === step) return 'active';
        return 'inactive';
    };

    const getStepClass = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-600 text-white border-green-600';
            case 'active':
                return 'bg-blue-600 text-white border-blue-600';
            default:
                return 'bg-gray-200 text-gray-500 border-gray-200';
        }
    };

    return (
        <div className="max-w-md w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-4 px-4 sm:px-6">
            {/* Progress Steps */}
            <div className="flex flex-row space-x-3 bg-white gap-4 sm:gap-0 px-2 sm:px-6 py-4 border-b border-b-gray-300">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center flex-1">
                        <div
                            className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${getStepClass(getStepStatus(num))}`}
                        >
                            {getStepStatus(num) === 'completed' ? '✓' : num}
                        </div>
                        <span
                            className={`ml-2 text-base sm:text-sm font-bold ${step >= num ? 'text-blue-600' : 'text-gray-400'}`}
                        >
                            {num === 1 ? 'Fill Info' : num === 2 ? 'Make Payment' : 'View Receipt'}
                        </span>
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <div className="p-2 sm:p-4">
                {step === 1 && <FillInfo onNext={handleNext} />}
                {step === 2 && <MakePayment formData={formData} onPay={handlePay} onBack={handleBack} />}
                {step === 3 && <ViewReceipt formData={formData} onClose={handleClose} />}
            </div>

            {/* Modal */}
            {showModal && (
                <ConfirmPaymentModal onConfirm={handleConfirm} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default TVSubscription;
