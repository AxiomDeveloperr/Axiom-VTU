import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import EditProfileModal from "../components/EditProfilModal";
import UploadImage from "../components/UploadImage";

const ProfileUpdate = () => {
    const [activeTab, setActiveTab] = useState("password");
    const [showEditModal, setShowEditModal] = useState(false);
    const [formData, setFormData] = useState({
        name: "Axiom Developerr",
        phone: "09012345678",
        referral: "www.axiondev/dew.tre/wd...",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleConfirm = () => {
        // Optionally: Save to backend
        setShowEditModal(false);
    };

    return (
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-4">
            {/* Left Panel */}
            <div className="flex flex-col gap-4 w-full md:w-1/2 mt-3">
                <UploadImage />
                <div className="bg-white border border-gray-500 rounded-xl p-4 space-y-4">
                    <div className="flex justify-between text-left">
                        <span className="font-semibold text-black">Name</span>
                        <span className="text-right">{formData.name}</span>
                    </div>
                    <div className="flex justify-between text-left">
                        <span className="font-semibold text-black">Email</span>
                        <span className="text-right truncate max-w-xs">axiomdeveloperr@gmail.com</span>
                    </div>
                    <div className="flex justify-between text-left">
                        <span className="font-semibold text-black">Phone Number</span>
                        <span className="text-right">{formData.phone}</span>
                    </div>
                    <div className="flex justify-between text-left">
                        <span className="font-semibold text-black">Account Status</span>
                        <span className="text-right text-green-500">Active</span>
                    </div>
                    <div className="flex justify-between text-left">
                        <span className="font-semibold text-black">Referral link</span>
                        <a href="#" className="text-black truncate max-w-xs">{formData.referral}</a>
                    </div>
                    <div className="flex justify-end items-center space-x-2 text-blue-500 cursor-pointer">
                        <FaCopy />
                        <span className="text-sm">Copy</span>
                    </div>
                    <div className="flex justify-start">
                        <button
                            onClick={() => setShowEditModal(true)}
                            className="text-blue-500 text-sm font-medium mt-2"
                        >
                            Edit Details
                        </button>
                    </div>
                    {showEditModal && (
                        <EditProfileModal
                            formData={formData}
                            onChange={handleChange}
                            onClose={() => setShowEditModal(false)}
                            onConfirm={handleConfirm}
                        />
                    )}
                </div>
            </div>

            {/* Right Panel */}
            <div className="flex flex-col w-full md:w-1/2 rounded-xl mt-0 md:-mt-32">
                <div className="flex border border-gray-500 rounded-full overflow-hidden mb-6">
                    <button
                        onClick={() => setActiveTab("password")}
                        className={`w-1/2 py-2 text-sm font-medium ${
                            activeTab === "password"
                                ? "bg-[#880d1e] text-white"
                                : "text-[#880d1e] bg-white"
                        }`}
                    >
                        Change Password
                    </button>
                    <button
                        onClick={() => setActiveTab("pin")}
                        className={`w-1/2 py-2 text-sm font-medium ${
                            activeTab === "pin"
                                ? "bg-[#880d1e] text-white"
                                : "text-[#880d1e] bg-white"
                        }`}
                    >
                        Change PIN
                    </button>
                </div>

                <div className="bg-white border border-gray-500 rounded-xl p-6">
                    {activeTab === "password" && (
                        <form className="space-y-4">
                            <input
                                type="password"
                                placeholder="Enter Current Password"
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                            />
                            <input
                                type="password"
                                placeholder="Enter New Password"
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                            />
                            <input
                                type="password"
                                placeholder="Confirm New Password"
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#880d1e] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#6e0b19]"
                            >
                                Submit
                            </button>
                        </form>
                    )}

                    {activeTab === "pin" && (
                        <form className="space-y-4">
                            <input
                                type="password"
                                placeholder="Enter Current PIN"
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                            />
                            <input
                                type="password"
                                placeholder="Enter New PIN"
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                            />
                            <input
                                type="password"
                                placeholder="Confirm New PIN"
                                className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                            />
                            <button
                                type="submit"
                                className="w-full bg-[#880d1e] text-white py-2 rounded-lg font-medium text-sm hover:bg-[#6e0b19]"
                            >
                                Submit
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileUpdate;
