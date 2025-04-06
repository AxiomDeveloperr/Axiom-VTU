import { useState } from "react";
// import { FaEdit, FaCog } from "react-icons/fa";
import CustomInput from "../../components/CustomInput";
// import { useNavigate } from "react-router-dom";
// import AdminHeader from "./AdminHeader";

const AdminProfilePage = () => {
    // const navigate = useNavigate();

    const initialProfile = {
        firstName: "",
        lastName: "",
        email: "",
        userName: "",
        phoneNumber: "",
        address: "",
        city: "",
        postalCode: "",
        state: "",
        country: "",
        currentpassword: "",
        newPassword: "",
        comfirmPassword: "",
    };

    const [profile, setProfile] = useState(initialProfile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        console.log("Profile Saved:", profile);
        alert("Profile changes saved successfully!");
    };

    const handleCancel = () => {
        setProfile(initialProfile);
        console.log("Profile reset to initial values");
    };


    return (
        <div>
            {/* <AdminHeader /> */}
            <div>
                <div className="container mx-auto p-6">
                    {/* <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-gray-700">Personal Information</h2>
                        <button className="text-gray-500 hover:text-gray-700">
                            <FaCog size={20} />
                        </button>
                        <button
                            onClick={() => navigate("/admin/panel")}
                            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                        >
                            Go Back to Dashboard
                        </button>
                    </div> */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg h-1/2">
                            <div className="border-b mb-2">
                                <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="flex items-center space-x-6">
                                    <img
                                        src="https://img.freepik.com/premium-vector/young-muslim-islamic-arab-man-with-beard-mustache-round-avatar-face-icon-traditional-clothes_768258-3377.jpg?ga=GA1.1.42202563.1737059081&semt=ais_hybrid"
                                        alt="Profile"
                                        className="rounded-full w-32 h-32 mb-4"
                                    />
                                    <div className="mt-2">
                                        <p className="font-semibold text-tt-black">Edit Your Photo</p>
                                        <button className="text-tt-black mr-4">Delete</button>
                                        <button className="text-blue-500">Update</button>
                                    </div>
                                </div>
                                <div className="border border-dashed p-4 mt-4 text-center w-full">
                                    <p className="text-blue-500 cursor-pointer">Click to Upload</p>
                                    <p className="text-sm text-gray-500">or drag and drop</p>
                                    <p className="text-sm text-gray-400">JPG or PNG (Max 450 x 450 px)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold">Personal Information</h3>
                                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                                        <FaEdit className="mr-2" /> Edit
                                    </button> */}
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={handleCancel} 
                                            className="bg-gray-200 text-tt-black px-4 py-2 rounded-md flex items-center">
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleSave} 
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <CustomInput
                                            type="text"
                                            name="firstName"
                                            label="First Name"
                                            value={profile.firstName}
                                            onChange={handleChange}
                                            placeholder="Enter First Name" 
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="text"
                                            name="lastName"
                                            label="Last Name"
                                            value={profile.lastName}
                                            onChange={handleChange}
                                            placeholder="Enter First Name" 
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <CustomInput
                                            type="email"
                                            name="email"
                                            label="Email Address"
                                            value={profile.email}
                                            onChange={handleChange}
                                            placeholder="Enter Email" 
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="text"
                                            name="userName"
                                            label="User Name"
                                            value={profile.userName}
                                            onChange={handleChange}
                                            placeholder="Enter User Name" 
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="text"
                                            name="phoneNumber"
                                            label="Phone Number"
                                            value={profile.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="Enter Phone Number" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold">Address Information</h3>
                                    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                                        <FaEdit className="mr-2" /> Edit
                                    </button> */}
                                    <div className="flex items-center space-x-4">
                                        <button 
                                            onClick={handleCancel}
                                            className="bg-gray-200 text-tt-black px-4 py-2 rounded-md flex items-center">
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={handleSave}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="address"
                                        label="Address"
                                        value={profile.address}
                                        onChange={handleChange}
                                        placeholder="Enter Address" 
                                    />
                                </div>
                                <div className="flex items-center mt-3 space-x-8">
                                    <div className="flex-1">
                                        <CustomInput
                                            type="text"
                                            name="country"
                                            label="Country"
                                            value={profile.country}
                                            onChange={handleChange}
                                            placeholder="Enter Country" 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <CustomInput
                                            type="text"
                                            name="state"
                                            label="State / Province"
                                            value={profile.state}
                                            onChange={handleChange}
                                            placeholder="Enter State" 
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center mt-3 space-x-8">
                                    <div className="flex-1">
                                        <CustomInput
                                            type="text"
                                            name="city"
                                            label="City"
                                            value={profile.city}
                                            onChange={handleChange}
                                            placeholder="City" 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <CustomInput
                                            type="text"
                                            name="postalCode"
                                            label="Postal Code"
                                            value={profile.postalCode}
                                            onChange={handleChange}
                                            placeholder="Enter Postal Code" 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg mt-5">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-lg font-bold">Password</h3>
                                    <div className="flex items-center space-x-4">
                                        <button 
                                            onClick={handleCancel}
                                            className="bg-gray-200 text-tt-black px-4 py-2 rounded-md flex items-center">
                                            Cancel
                                        </button>
                                        <button 
                                            onClick={handleSave}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md flex items-center">
                                            Save Changes
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <CustomInput
                                        type="text"
                                        name="currentPassword"
                                        label="Current Password"
                                        value={profile.currentpassword}
                                        onChange={handleChange}
                                        placeholder="Current Password" 
                                    />
                                </div>
                                <div className="flex items-center mt-3 space-x-8">
                                    <div className="flex-1">
                                        <CustomInput
                                            type="password"
                                            name="newPassword"
                                            label="New Password"
                                            value={profile.newPassword}
                                            onChange={handleChange}
                                            placeholder="New Password" 
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <CustomInput
                                            type="password"
                                            name="comfirmPassword"
                                            label="Confirm Password"
                                            value={profile.comfirmPassword}
                                            onChange={handleChange}
                                            placeholder="Confirm Password" 
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminProfilePage;
