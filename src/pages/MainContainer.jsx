import { FaCopy, FaEdit, FaShare, FaWallet } from "react-icons/fa"
import Button from "../components/Button"
import { atm } from "../assets/images"
import { useState } from "react"
import FundWalletModal from "../components/FundWalletModal"

const MainContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="flex flex-col md:flex-row justify-between items-center space-x-12 space-y-6 md:space-y-0 p-4">
            <div className="w-full md:w-1/2">
                <div className="flex justify-between items-center space-x-20 bg-white border border-gray-500 p-4 rounded-xl mb-4">
                    <div className="text-lg font-semibold">
                        <h3 className="text-lg font-semibold mb-4">Wallet Balance</h3>
                        <h1 className="text-xl font-bold">₦3000</h1>
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <Button text="Fund Wallet" />
                    </div>
                </div>
                
                <div className="bg-white border border-gray-500 p-4 rounded-xl shadow mb-4 text-left">
                    <h3>Referral</h3>
                    <h3>Referral Code: <strong>18/52hao089</strong></h3>
                    <div className="flex items-center gap-3 primary-text text-base mt-4">
                        <FaCopy /> Copy
                        <FaEdit /> Edit
                        <FaShare /> Share
                    </div>
                </div>
                <div className="bg-white border border-gray-500 p-4 rounded-xl shadow">
                    <div className="flex items-center justify-between space-x-10">
                        <div className="text-left">
                            <h3 className="text-base">Total referrals made</h3>
                            <h2 className="font-bold">0</h2>
                        </div>
                        <div className="text-left">
                            <h3 className="text-base">Current wallet bonus</h3>
                            <h2 className="font-bold">₦0.00</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-left mt-4 primary-text">
                        <FaWallet  /> Cashout
                    </div>
                </div>
                {message && <p className="mt-4 text-green-600">{message}</p>}
            </div>
            <div>
                <img src={atm} alt="atm-card" className="w-full" />
            </div>

            {showModal && (
                <FundWalletModal 
                    onClose={() => setShowModal(false)}
                    onConfirm={(msg) => setMessage(msg)}
                />
            )}
        </div>
    )
}

export default MainContainer
