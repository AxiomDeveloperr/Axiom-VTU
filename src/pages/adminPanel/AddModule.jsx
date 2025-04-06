import CustomInput from "../../components/CustomInput"
import { useState } from "react";
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";

const AddModule = () => {
    // const navigate = useNavigate();
    const [formData, setFormData] = useState({
        moduleId: "",
        moduleName: "",
        moduleStack: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        // navigate("/dashboard");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="container mx-auto p-6">
                {/* <div className="mb-6 flex items-center justify-between space-x-2">
                    <h2 className="text-2xl font-bold text-gray-700">Add New Student</h2>
                    <button
                        onClick={() => navigate("/admin/panel")}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                    >
                        Go Back to Dashboard
                    </button>
                </div> */}
                <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-10">
                    <h2 className="text-tt-black text-2xl font-bold mb-6">Add New Module</h2>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <CustomInput 
                            type="text"
                            placeholder=""
                            label="Module Id"
                            name="moduleId"
                            value={formData.moduleId}
                            onChange={handleInputChange}
                            required={true}
                        />
                        <CustomInput 
                            type="text"
                            placeholder=""
                            label="Module Name"
                            name="moduleName"
                            value={formData.moduleName}
                            onChange={handleInputChange}
                            required={true}
                        />
                        <CustomInput 
                            type="text"
                            placeholder=""
                            label="Module Stack"
                            name="moduleStack"
                            value={formData.moduleStack}
                            onChange={handleInputChange}
                            required={true}
                        />
                        <div className="flex justify-between">
                            <button className="w-20 p-3 mt-9 bg-emerald-600 text-white rounded-md hover:bg-tt-primary transition duration-300">
                                    Save  
                            </button>
                            <button className="p-3 mt-9 bg-emerald-600 text-white rounded-md hover:bg-tt-primary transition duration-300">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddModule
