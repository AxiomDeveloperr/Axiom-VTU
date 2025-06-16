const MakePayment = ({ formData, onPay, onBack }) => {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md w-full text-center">
            <div className="flex items-center mb-6">
                <button
                    onClick={onBack}
                    className="flex items-center text-gray-600 hover:text-gray-800"
                >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h2 className="text-lg font-semibold flex-1 text-center">Confirm Payment</h2>
            </div>
            <p><strong>Provider:</strong> {formData.provider}</p>
            <p><strong>Card Number:</strong> {formData.cardNumber}</p>
            <p><strong>Bundle:</strong> {formData.bundle}</p>
            <p><strong>Amount:</strong> {formData.amount}</p>

            <button
                onClick={onPay}
                className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
            >
                Make Payment
            </button>
        </div>
    )
}

export default MakePayment

