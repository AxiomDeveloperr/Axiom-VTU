import { useEffect, useState, useRef } from "react";
import { FaEllipsisH, FaTrash, FaSyncAlt } from "react-icons/fa";

const AssignedMentorTable = () => {
  const [assignedMentors, setAssignedMentors] = useState([]);
  const [actionIndex, setActionIndex] = useState(null);
  const actionMenuRef = useRef(null);

  useEffect(() => {
    const storedAssignedMentors = JSON.parse(localStorage.getItem("assignedMentors")) || [];
    setAssignedMentors(storedAssignedMentors);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (actionMenuRef.current && !actionMenuRef.current.contains(event.target)) {
        setActionIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deleteMentor = (index) => {
    const updatedMentors = assignedMentors.filter((_, i) => i !== index);
    setAssignedMentors(updatedMentors);
    localStorage.setItem("assignedMentors", JSON.stringify(updatedMentors));
  };

  const reassignMentor = (index) => {
    const mentorToReassign = assignedMentors[index];
    deleteMentor(index);
    alert(`Reassign ${mentorToReassign.fullName} to a new stack.`);
  };

  const toggleActions = (index) => {
    setActionIndex(actionIndex === index ? null : index);
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md mt-6">
        <h2 className="text-xl font-bold mb-4">Assigned Mentors Table</h2>
        {assignedMentors.length === 0 ? (
          <p className="text-gray-600">No mentors assigned yet.</p>
        ) : (
          <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Full Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Phone Number</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Stack Assigned</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignedMentors.map((mentor, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="border border-gray-200 px-4 py-2">{mentor.fullName}</td>
                  <td className="border border-gray-200 px-4 py-2">{mentor.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{mentor.phoneNumber}</td>
                  <td className="border border-gray-200 px-4 py-2">{mentor.stack}</td>
                  <td className="border border-gray-200 px-4 py-2 relative">
                    <button 
                      className="text-gray-500 hover:text-gray-700" 
                      onClick={() => toggleActions(index)}
                    >
                      <FaEllipsisH />
                    </button>
                    {actionIndex === index && (
                      <div ref={actionMenuRef} className="absolute left-10 top-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10">
                        <ul>
                          <li
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                            onClick={() => reassignMentor(index)}
                          >
                            <FaSyncAlt className="mr-2 text-blue-500" /> Reassign
                          </li>
                          <li
                            className="px-4 py-2 hover:bg-red-100 cursor-pointer flex items-center text-red-600"
                            onClick={() => deleteMentor(index)}
                          >
                            <FaTrash className="mr-2" /> Delete
                          </li>
                        </ul>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AssignedMentorTable;
