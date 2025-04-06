// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// // import AssignedMentorTable from "./AssignedMentorTable";
// import stackLists from "../../data/stackLists";

// const MentorAssign = () => {
//   const dispatch = useDispatch();
//   const { mentors } = useSelector((state) => state.mentors); // Fetch mentors from Redux store
//   const { currentCohort } = useSelector((state) => state.cohorts); // Fetch current cohort from Redux store
//   const [selectedMentor, setSelectedMentor] = useState(null);
//   const [selectedStack, setSelectedStack] = useState("");
//   const [assignedMentors, setAssignedMentors] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

//   // Load mentors and assigned mentors from Redux
//   useEffect(() => {
//     // Fetch mentors from API or a predefined list when the component is mounted
//     if (mentors.length === 0) {
//       dispatch(fetchMentors());
//     }

//     // Load assigned mentors from Redux (if applicable)
//     const storedAssignedMentors = []; // Replace this with a redux selector if needed
//     setAssignedMentors(storedAssignedMentors);
//   }, [dispatch, mentors]);

//   // Handle mentor selection and auto-fill details
//   const handleMentorChange = (e) => {
//     const mentorName = e.target.value;
//     if (!mentorName) {
//       setSelectedMentor(null);
//       return;
//     }

//     const mentor = mentors.find(m => m.fullName === mentorName) || null;
//     setSelectedMentor(mentor);

//     if (mentor) {
//       setValue("email", mentor.email);
//       setValue("phoneNumber", mentor.phoneNumber);
//       setValue("expertise", mentor.expertise);
//     } else {
//       setValue("email", "");
//       setValue("phoneNumber", "");
//       setValue("expertise", "");
//     }
//   };

//   const onSubmit = (data) => {
//     if (!selectedMentor) {
//       alert("Please select a mentor before assigning a stack.");
//       return;
//     }
//     console.log(data);

//     const newAssignment = {
//       id: `${selectedMentor.fullName}-${selectedStack}`,
//       fullName: selectedMentor.fullName,
//       email: selectedMentor.email,
//       phoneNumber: selectedMentor.phoneNumber,
//       expertise: selectedMentor.expertise,
//       stack: selectedStack
//     };

//     if (assignedMentors.some(assignment => assignment.id === newAssignment.id)) {
//       alert("This mentor is already assigned to this stack!");
//       return;
//     }

//     const updatedAssignments = [...assignedMentors, newAssignment];
//     setAssignedMentors(updatedAssignments);

//     setShowModal(true);
//     reset();
//     setSelectedMentor(null);
//     setSelectedStack("");
//   };

//   return (
//     <div>
//         <div className="container mx-auto p-6">
//           <h2 className="text-2xl font-bold text-center text-tt-grey">Assign Mentor to Stack</h2>

//           <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
//             <form onSubmit={handleSubmit(onSubmit)}>

//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Select Mentor</label>
//                 <select
//                     {...register("mentor", { required: "Please select a mentor" })}
//                     className="w-full p-2 border rounded"
//                     onChange={handleMentorChange}
//                 >
//                     <option value="">-- Select Mentor --</option>
//                     {mentors.map((mentor, index) => (
//                         <option key={index} value={mentor.fullName}>{mentor.fullName}</option>
//                     ))}
//                 </select>
//                 {errors.mentor && <p className="text-red-500">{errors.mentor.message}</p>}
//               </div>

//               {selectedMentor && (
//                 <>
//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       {...register("email")}
//                       className="w-full p-2 border rounded bg-gray-100"
//                       readOnly
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//                     <input
//                       type="text"
//                       {...register("phoneNumber")}
//                       className="w-full p-2 border rounded bg-gray-100"
//                       readOnly
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700">Expertise</label>
//                     <input
//                       type="text"
//                       {...register("expertise")}
//                       className="w-full p-2 border rounded bg-gray-100"
//                       readOnly
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-sm font-medium text-gray-700">Assign Stack</label>
//                     <select
//                         {...register("stack", { required: "Please select a stack" })}
//                         className="w-full p-2 border rounded"
//                         onChange={(e) => setSelectedStack(e.target.value)}
//                     >
//                         <option value="">-- Select Stack --</option>
//                         {stackLists.map((stack, index) => (
//                             <option key={index} value={stack.value}>{stack.label}</option>
//                         ))}
//                     </select>
//                     {errors.stack && <p className="text-red-500">{errors.stack.message}</p>}
//                   </div>

//                   <button
//                     type="submit"
//                     className="p-3 mt-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300"
//                   >
//                     Assign Mentor
//                   </button>
//                 </>
//               )}
//             </form>

//             {showModal && selectedMentor && (
//               <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                 <div className="bg-white p-6 rounded shadow-lg">
//                   <p className="text-lg font-semibold">{selectedMentor?.fullName} is assigned to {selectedStack}.</p>
//                   <button
//                     onClick={() => setShowModal(false)}
//                     className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* <div>
//             <AssignedMentorTable assignedMentors={assignedMentors} />
//           </div> */}
//         </div>
//     </div>
//   );
// };

// export default MentorAssign;
