import { useState, useEffect } from "react";

const EditProfileModal = ({ formData, onClose, onConfirm }) => {
    // Local state initialized from formData on mount/open
    const [localData, setLocalData] = useState({
        name: "",
        phone: "",
        referral: "",
    });

    // Initialize localData whenever formData changes (i.e., when modal opens)
    useEffect(() => {
        setLocalData({
        name: formData.name || "",
        phone: formData.phone || "",
        referral: formData.referral || "",
        });
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLocalData((prev) => ({ ...prev, [name]: value }));
    };

    const handleConfirm = () => {
        onConfirm(localData);
    };

    return (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/40 z-50 flex justify-center items-center">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md shadow-lg space-y-4 relative">
                <h2 className="text-lg font-semibold text-[#880d1e]">Edit Profile Details</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={localData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={localData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                />
                <input
                    type="text"
                    name="referral"
                    placeholder="Referral Link"
                    value={localData.referral}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:border-[#880d1e]"
                />

                <div className="flex justify-end gap-4 mt-4">
                    <button onClick={onClose} className="text-gray-500 hover:text-black text-sm">
                        Cancel
                    </button>
                    <button onClick={handleConfirm} className="bg-[#880d1e] text-white px-4 py-2 rounded-lg text-sm">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;
