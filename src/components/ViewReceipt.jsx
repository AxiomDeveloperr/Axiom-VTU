
const ViewReceipt = ({ formData, onClose }) => {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md w-full text-center">
            <h2 className="text-xl font-semibold mb-4">Payment Receipt</h2>
            <p>Payment for <strong>{formData.bundle}</strong> on <strong>{formData.provider}</strong> was successful!</p>
            <p className="mt-2">Smart Card Number: <strong>{formData.cardNumber}</strong></p>
            <p className="mt-2">Amount Paid: <strong>{formData.amount}</strong></p>
            <p className="mt-4 text-green-600 font-bold">Thank you for your payment!</p>
            <button
                onClick={onClose}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-medium"
            >
                Close
            </button>
        </div>
    )
}

export default ViewReceipt
