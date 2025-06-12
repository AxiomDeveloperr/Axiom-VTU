import { useState, useEffect } from "react";
import bundleOptions from "../data/bundleOptions";

const FillInfo = ({ onNext }) => {
    const [provider, setProvider] = useState("GOTV");
    const [cardNumber, setCardNumber] = useState("");
    const [bundle, setBundle] = useState(bundleOptions["GOTV"][0]);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        const defaultBundle = bundleOptions[provider][0];
        setBundle(defaultBundle);
    }, [provider]);

    useEffect(() => {
        // Live validation for correct length only (10 digits)
        if (cardNumber.length === 10) {
            setMessage("Card Verified: John Doe");
            setError(""); // clear error on valid length
        } else {
            setMessage(""); // no message when typing invalid length
        }
    }, [cardNumber]);

    const handleSubmit = () => {
        if (cardNumber.length !== 10 && cardNumber.length > 10) {
            setError("Invalid number. Smart Card Number must be 10 digits.");
            setMessage(""); // clear success message on invalid submit
            return;
        }
        setError("");
        setMessage("Card Verified: John Doe");

        onNext({
            provider,
            cardNumber,
            bundle: `${bundle.name} - ${bundle.amount}`,
            amount: bundle.amount,
        });
    };

    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1 text-sm font-medium">Service Provider</label>
                    <select
                        value={provider}
                        onChange={(e) => setProvider(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                    >
                        {Object.keys(bundleOptions).map((prov) => (
                            <option key={prov} value={prov}>
                                {prov}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block mb-1 text-sm font-medium">Smart Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full border border-gray-300 rounded-md p-2"
                        placeholder="Enter 10-digit card number"
                    />
                    {message && (
                        <p
                            className={`text-sm mt-1 ${
                                message.includes("Invalid") ? "text-red-500" : "text-green-600"
                            }`}
                        >
                            {message}
                        </p>
                    )}
                    {error && (
                        <p className="text-red-500 text-sm mt-1">
                            {error}
                        </p>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <label className="block mb-1 text-sm font-medium">Bundle</label>
                <select
                    value={bundle.name}
                    onChange={(e) => {
                        const selected = bundleOptions[provider].find(
                            (b) => b.name === e.target.value
                        );
                        setBundle(selected);
                    }}
                    className="w-full border border-gray-300 rounded-md p-2"
                >
                    {bundleOptions[provider].map((b) => (
                        <option key={b.name} value={b.name}>
                            {b.name} - {b.amount}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label className="block mb-1 text-sm font-medium">Amount</label>
                <input
                    type="text"
                    value={bundle.amount}
                    className="w-full bg-gray-100 border border-gray-300 rounded-md p-2"
                    disabled
                />
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
                Proceed
            </button>
        </div>
    );
};

export default FillInfo;
