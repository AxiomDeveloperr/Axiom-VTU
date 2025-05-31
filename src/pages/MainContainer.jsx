import { FaCopy, FaEdit, FaShare, FaWallet } from "react-icons/fa"
import Button from "../components/Button"
import { atm } from "../assets/images"
import { useState } from "react"
import FundWalletModal from "../components/FundWalletModal"

const MainContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const [message, setMessage] = useState("");

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-4">
            <div className="w-full md:w-1/2 space-y-4">
                <div className="flex justify-between items-center bg-white border border-gray-300 p-4 rounded-xl shadow">
                    <div>
                        <h3 className="text-base md:text-lg font-semibold mb-2">Wallet Balance</h3>
                        <h1 className="text-xl font-bold">₦3000</h1>
                    </div>
                    <div onClick={() => setShowModal(true)}>
                        <Button text="Fund Wallet" />
                    </div>
                </div>

                <div className="bg-white border border-gray-300 p-4 rounded-xl shadow text-left">
                    <h3 className="text-base font-semibold">Referral</h3>
                    <p className="text-sm mt-2">Referral Code: <strong>18/52hao089</strong></p>
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-blue-600 cursor-pointer">
                        <div className="flex items-center gap-1"><FaCopy /> Copy</div>
                        <div className="flex items-center gap-1"><FaEdit /> Edit</div>
                        <div className="flex items-center gap-1"><FaShare /> Share</div>
                    </div>
                </div>

                <div className="bg-white border border-gray-300 p-4 rounded-xl shadow">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                        <div>
                            <h3 className="text-sm">Total referrals made</h3>
                            <h2 className="font-bold">0</h2>
                        </div>
                        <div>
                            <h3 className="text-sm">Current wallet bonus</h3>
                            <h2 className="font-bold">₦0.00</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 mt-4 cursor-pointer">
                        <FaWallet /> Cashout
                    </div>
                </div>

                {message && <p className="mt-4 text-green-600">{message}</p>}
            </div>

            <div className="w-full md:w-1/2">
                <img src={atm} alt="atm-card" className="w-full " />
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
