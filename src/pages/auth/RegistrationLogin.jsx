import { useState } from "react"
import CustomInput from "../../components/CustomInput"
// import Button from "../../components/Button"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import { iotbTech, loginImg } from "../../assets/images"
import line from "../../assets/images/line.svg";
import SelectOptions from "../../components/SelectOptions";
import stackLists from "../../data/stackLists";
// import genderOptions from "../../data/genderOptions";
// import stateLists from "../../data/stateLists";

const RegistrationLogin = () => {
    // const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        // password: "",
        // confirmPassword: "",
        phoneNumber: "",
        altPhoneNumber: "",
        // occupation: "",
        cohort: 4,
        // gender: "Male",
        // stateOfOrigin: "",
        programme: "",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted", formData)
        navigate("/dashboard")
    }

    const handleSocialLogin = (provider) => {
        alert(`Redirecting to ${provider} login...`);
    }

    return (
        <div className="min-h-screen">
            <img
                src={line}
                alt=""
                className="absolute w-full -left-10 -right-10 bottom-5 -z-10 hidden md:block"
            />
            <div className="flex justify-center">
                <img src={iotbTech} alt="iotb logo" className="h-32" />
            </div>
            <h2 className="text-3xl font-bold mt-5 text-center text-tt-primary">Ready to join the next cohort?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center mx-8 md:mx-40 gap-10">
                <div className="w-full md:w-1/2 flex flex-col md:flex-row mx-auto">
                    <div className="flex items-center justify-center">
                        <form onSubmit={handleSubmit}>
                            <p className="text-base text-tt-black mb-9 mt-8">
                                Kindly complete this form and proceed to apply for the cohort.
                                Fields marked with * are required
                            </p>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <CustomInput 
                                    type="text"
                                    placeholder="Enter your first name"
                                    label="First Name"
                                    value={formData.firstName}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    required={true}
                                />
                                <CustomInput 
                                type="text"
                                placeholder="Enter your last name"
                                label="Last Name"
                                value={formData.lastName}
                                name="lastName"
                                onChange={handleInputChange}
                                required={true}
                                    />
                            </div>
                            <CustomInput 
                                type="email"
                                placeholder="iotbtech@example.com"
                                label="Email"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                                required={true}
                            />
                            {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <CustomInput 
                                    type="password"
                                    placeholder="Enter password"
                                    label="Password"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    required={true}
                                />
                                <CustomInput 
                                    type="password"
                                    placeholder="Confirm password"
                                    label="Confirm Password"
                                    value={formData.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleInputChange}
                                    required={true}
                                />
                            </div> */}
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <CustomInput
                                    type="text"
                                    placeholder="+234 906 060 9721"
                                    label="Phone Number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    required={true}
                                />
                                <CustomInput
                                    type="text"
                                    placeholder="+234 906 060 9721"
                                    label="Alternate Phone Number"
                                    name="altPhoneNumber"
                                    value={formData.altPhoneNumber}
                                    onChange={handleInputChange}
                                    required={false}
                                />
                            </div>
                            {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <SelectOptions
                                    label="Gender"
                                    options={genderOptions}
                                    onChange={handleInputChange}
                                    name="gender"
                                    required={true}
                                />
                                <SelectOptions
                                    label="States"
                                    options={stateLists}
                                    onChange={handleInputChange}
                                    name="stateOfOrigin"
                                />
                            </div> */}
                            {/* <CustomInput
                                type="text"
                                placeholder="Enter your answer"
                                label="Occupation"
                                name="occupation"
                                value={formData.occupation}
                                onChange={handleInputChange}
                                required={true}
                            /> */}
                            <h3 className="text-2xl text-tt-black mt-5 mb-5">Application Details</h3>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <SelectOptions
                                    label="Stack/Programme"
                                    name="programme"
                                    onChange={handleInputChange}
                                    options={stackLists}
                                    required={true}
                                />
                                <CustomInput
                                    type="text"
                                    placeholder="Cohort"
                                    label="Cohort"
                                    name="cohort"
                                    value={4}
                                    onChange={handleInputChange}
                                    required={true}
                                    disabled={true}
                                />
                            </div>
                            {/* <Button text="Submit" type="Submit" /> */}
                            {/* <button 
                                className="w-full p-3 mt-9 bg-tt-primary text-white rounded-md hover:bg-tt-primary transition duration-300">
                                {isLogin ? "Login" : "Register"}
                            </button> */}
                            <button className="w-full p-3 mt-9 bg-tt-primary text-white rounded-md hover:bg-tt-primary transition duration-300">
                                Apply
                            </button>

                            {/* <div className="flex justify-between items-center mt-4">
                                <button 
                                    onClick={() => setIsLogin(!isLogin)} 
                                    className="p-3 text-tt-black rounded-md hover:underline">
                                        {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
                                </button>
                                {isLogin && (
                                    <button className="text-sm text-red-500 hover:underline">
                                        <Link to="/forget-password">Forgot Password?</Link> 
                                    </button>
                                )}
                            </div> */}

                            <div className="mt-6">
                                <p className="text-center text-gray-500 mb-2">Or continue with</p>
                                <div className="flex justify-center space-x-4">
                                    <button 
                                        onClick={() => handleSocialLogin("Google")}
                                        className="flex items-center px-4 py-2 border rounded-md text-tt-black">
                                            <FaGoogle className="mr-2 text-red-500" /> Google 
                                    </button> 
                                    <button 
                                        onClick={() => handleSocialLogin("LinkedIn")}
                                        className="flex items-center px-4 py-2 border rounded-md text-tt-black">
                                            <FaLinkedin className="mr-2 text-blue-700" /> LinkedIn 
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                            
                <div className="hidden md:block md:w-1/2 relative h-screen">
                    <img
                        src={loginImg}
                        alt="Login illustration"
                        className="w-full h-full object-cover rounded-md"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default RegistrationLogin