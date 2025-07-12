import { FaCheckCircle, FaDownload, FaPrint, FaShare } from "react-icons/fa";

const ViewReceipt = ({ formData, transactionData, reset }) => {
    const providers = {
        dstv: "DStv",
        gotv: "GOtv",
        startimes: "StarTimes"
    };

    const plans = {
        "dstv-padi": "Padi",
        "dstv-yanga": "Yanga",
        "dstv-confam": "Confam",
        "gotv-smallie": "Smallie",
        "gotv-jolli": "Jolli",
        "gotv-max": "Max",
        "startimes-basic": "Basic",
        "startimes-smart": "Smart",
        "startimes-classic": "Classic"
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        });
    };

    return (
        <div className="space-y-4 text-center">
            {/* <FaCheckCircle className="text-green-500 text-4xl mx-auto" />
            <h3 className="text-xl font-bold">Payment Successful</h3>
            <p className="text-gray-600">Your TV subscription has been processed.</p> */}

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-300 rounded-xl p-6 space-y-4">
                <div className="flex justify-between text-gray-700">
                    <span>Transaction ID:</span>
                    <span className="font-mono">{transactionData.transactionId}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Date:</span>
                    <span className="font-mono">{formatDate(transactionData.timestamp)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Smartcard:</span>
                    <span className="font-mono">{formData.smartcardNumber}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Provider:</span>
                    <span className="font-mono">{providers[formData.provider]}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Plan:</span>
                    <span className="font-mono">{plans[formData.plan]}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Amount Paid:</span>
                    <span className="font-mono">₦{parseInt(formData.amount || 0).toLocaleString()}</span>
                </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
                <button className="bg-green-100 text-green-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
                    <FaDownload /> Download
                </button>
                <button 
                    onClick={() => window.print()}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer"
                >
                    <FaPrint /> Print
                </button>
                <button className="bg-purple-100 text-purple-700 px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer">
                    <FaShare /> Share
                </button>
            </div>

            <button onClick={reset} className="px-6 py-3 bg-blue-100 primary-text rounded-xl hover:bg-blue-200 transition-all">
                Make another purchase
            </button>
        </div>
    );
}

export default ViewReceipt