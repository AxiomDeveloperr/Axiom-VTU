// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { iotbTech } from '../../assets/images';
// import line from '../../assets/images/line.svg';
// import Alert from '../../components/Alert';
// import Button from '../../components/Button';
// import CustomInput from '../../components/CustomInput';
// import SelectOptions from '../../components/SelectOptions';
// import genderOptions from '../../data/genderOptions';
// import stackLists from '../../data/stackLists';
// import stateLists from '../../data/stateLists';
// // import { fellowService } from "../../services";

// const FellowRegistration = () => {
//   const [notification, setNotification] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     otherName: '',
//     email: '',
//     phoneNumber: '',
//     altPhoneNumber: '',
//     dob: '',
//     occupation: '',
//     cohort: 4,
//     gender: 'Male',
//     stateOfOrigin: '',
//     programme: '',
//   });
//   const navigate = useNavigate();
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     setIsSubmitting(true);
//     e.preventDefault();
//     const data = {
//       ...formData,
//       dob: new Date(formData.dob).toISOString(),
//     };

//     try {
//       await fellowService.createFellow(data);
//       setNotification((prev) => ({
//         ...prev,
//         type: 'success',
//         message:
//           'Registration successful! The admission team will reachout to you shortly on the next steps.',
//       }));
//       setTimeout(() => {
//         navigate('/', { replace: true });
//       }, 5000);
//     } catch (e) {
//       setNotification((prev) => ({
//         ...prev,
//         type: 'error',
//         message: `Registration failed! ${e.message}.`,
//       }));
//     }

//     setIsSubmitting(false);
//   };
//   return (
//     <div className="mx-auto leading-snug max-w-screen-xl px-4 sm:px-6 lg:px-8 py-10">
//       {notification && <Alert type={notification.type} message={notification.message} />}
//       <img
//         src={line}
//         alt=""
//         className="absolute w-full -left-10 -right-10 -bottom-44 -z-10 hidden md:block"
//       />
//       <div className="max-w-2xl mx-auto mb-10 space-y-5 relative z-10">
//         <img src={iotbTech} alt="iotb" className="w-96 mx-auto" />
//         <div className="text-left lg:text-center">
//           <h2 className="text-tt-primary text-2xl font-bold">Register for the next cohort</h2>
//           <p className="text-base text-tt-black">
//             Kindly complete this form and proceed to apply for the cohort. Fields marked with * are
//             required
//           </p>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <h3 className="text-2xl text-tt-black">Personal Details</h3>
//           <CustomInput
//             type="text"
//             placeholder="Enter your first name"
//             label="First Name"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleInputChange}
//             required={true}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Enter your last name"
//             label="Last Name"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleInputChange}
//             required={true}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Enter your other name"
//             label="Other Name"
//             name="otherName"
//             value={formData.otherName}
//             onChange={handleInputChange}
//             required={false}
//           />
//           <CustomInput
//             type="email"
//             placeholder="iotbtech@example.com"
//             label="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required={true}
//           />
//           <CustomInput
//             type="number"
//             placeholder="2349060609721"
//             label="Phone Number"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleInputChange}
//             required={true}
//           />
//           <CustomInput
//             type="number"
//             placeholder="2349060609721"
//             label="Alternate Phone Number"
//             name="altPhoneNumber"
//             value={formData.altPhoneNumber}
//             onChange={handleInputChange}
//             required={false}
//           />
//           <SelectOptions
//             label="Gender"
//             options={genderOptions}
//             onChange={handleInputChange}
//             name="gender"
//             required={true}
//           />
//           <CustomInput
//             type="date"
//             placeholder="DD/MM/YYYY"
//             label="Date of Birth"
//             name="dob"
//             value={formData.dob}
//             onChange={handleInputChange}
//             required={true}
//           />
//           <SelectOptions
//             label="States"
//             options={stateLists}
//             onChange={handleInputChange}
//             name="stateOfOrigin"
//           />
//           <CustomInput
//             type="text"
//             placeholder="Enter your answer"
//             label="Occupation"
//             name="occupation"
//             value={formData.occupation}
//             onChange={handleInputChange}
//             required={true}
//           />
//           <h3 className="text-2xl text-tt-black">Application Details</h3>
//           <SelectOptions
//             label="Stack/Programme"
//             name="programme"
//             onChange={handleInputChange}
//             options={stackLists}
//             required={true}
//           />
//           <CustomInput
//             type="text"
//             placeholder="Cohort"
//             label="Cohort"
//             name="cohort"
//             value={4}
//             onChange={handleInputChange}
//             required={true}
//             disabled={true}
//           />

//           <div className="flex justify-center items-center">
//             <Button text={isSubmitting ? 'Submitting...' : 'Submit'} disabled={isSubmitting} />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FellowRegistration;
