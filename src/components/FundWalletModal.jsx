import { useState } from "react";

const FundWalletModal = ({ onClose, onConfirm }) => {
    const banks = [
        { name: "Access Bank", accountNumber: "1234567890" },
        { name: "GTBank", accountNumber: "2345678901" },
        { name: "Zenith Bank", accountNumber: "3456789012" },
    ];

    const [method, setMethod] = useState("card");
    const [cardData, setCardData] = useState({
        number: "",
        expiry: "",
        cvv: "",
        name: "",
    });

    const [selectedBank, setSelectedBank] = useState(banks[0]);

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onConfirm(`Funding via ${method} successful!`);
        onClose();
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg font-bold"
                    >
                    &times;
                </button>

                <h2 className="text-xl font-semibold text-[#880d1e] mb-4">Fund Wallet</h2>

                <div className="flex space-x-2 mb-4">
                    <button
                        onClick={() => setMethod("card")}
                        className={`w-1/2 py-2 rounded-lg font-medium text-sm ${
                        method === "card"
                            ? "bg-[#880d1e] text-white"
                            : "border border-[#880d1e] text-[#880d1e]"
                        }`}
                    >
                        Fund with Card
                    </button>
                    <button
                        onClick={() => setMethod("bank")}
                        className={`w-1/2 py-2 rounded-lg font-medium text-sm ${
                        method === "bank"
                            ? "bg-[#880d1e] text-white"
                            : "border border-[#880d1e] text-[#880d1e]"
                        }`}
                    >
                        Fund with Bank
                    </button>
                </div>

                {method === "card" && (
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="number"
                            placeholder="Card Number"
                            maxLength="19"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            value={cardData.number}
                            onChange={handleCardChange}
                            required
                        />
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                name="expiry"
                                placeholder="MM/YY"
                                maxLength="5"
                                className="w-1/2 border border-gray-300 p-2 rounded-md"
                                value={cardData.expiry}
                                onChange={handleCardChange}
                                required
                            />
                            <input
                                type="text"
                                name="cvv"
                                placeholder="CVV"
                                maxLength="4"
                                className="w-1/2 border border-gray-300 p-2 rounded-md"
                                value={cardData.cvv}
                                onChange={handleCardChange}
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Cardholder Name"
                            className="w-full border border-gray-300 p-2 rounded-md"
                            value={cardData.name}
                            onChange={handleCardChange}
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-[#880d1e] text-white py-2 rounded-lg"
                        >
                            Pay Now
                        </button>
                    </form>
                )}

                {method === "bank" && (
                    <div className="space-y-4">
                        <select
                            className="w-full border border-gray-300 p-2 rounded-md"
                            value={selectedBank.name}
                            onChange={(e) =>
                                setSelectedBank(
                                banks.find((bank) => bank.name === e.target.value)
                                )}
                        >
                            {banks.map((bank) => (
                                <option key={bank.name} value={bank.name}>
                                    {bank.name}
                                </option>
                            ))}
                        </select>
                        <div className="bg-gray-100 rounded-md p-4">
                            <p className="font-semibold text-gray-800">
                                Bank Name: {selectedBank.name}
                            </p>
                            <p className="text-sm text-gray-600">
                                Account Number: {selectedBank.accountNumber}
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                                Use the above details to make a transfer. Your wallet will be credited automatically.
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                onConfirm("Transfer initiated. Awaiting confirmation.");
                                onClose();}}
                            className="w-full bg-[#880d1e] text-white py-2 rounded-lg"
                        >
                            I’ve Transferred
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FundWalletModal;
