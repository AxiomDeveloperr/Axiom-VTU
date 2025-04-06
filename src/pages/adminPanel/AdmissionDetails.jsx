import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";

const AdmissionDetails = () => {
  // const navigate = useNavigate();

  // Sample applicants data
  const [applicants] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      appliedStack: "Web Development",
      status: "Accepted",
      applicationDate: "2024-01-15",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      appliedStack: "Graphics Design",
      status: "Pending",
      applicationDate: "2024-01-18",
    },
    {
      id: 3,
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      appliedStack: "Cloud DevOps",
      status: "Rejected",
      applicationDate: "2024-01-10",
    },
    {
      id: 4,
      name: "Emily White",
      email: "emily.white@example.com",
      appliedStack: "Product Design",
      status: "Pending",
      applicationDate: "2024-01-20",
    },
  ]);

  return (
    <div>
      {/* <Header /> */}
      {/*  */}
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-700">Admission Details</h2>
          {/* <button
            onClick={() => navigate("/admin/panel")}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Go Back to Dashboard
          </button> */}
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Applied Stack</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Application Date</th>
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{applicant.name}</td>
                  <td className="border border-gray-200 px-4 py-2">{applicant.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{applicant.appliedStack}</td>
                  <td
                    className={`border border-gray-200 px-4 py-2 font-semibold ${getStatusColor(
                      applicant.status
                    )}`}
                  >
                    {applicant.status}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">{applicant.applicationDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Function to dynamically set status colors
const getStatusColor = (status) => {
  switch (status) {
    case "Accepted":
      return "text-green-600";
    case "Rejected":
      return "text-red-600";
    case "Pending":
      return "text-yellow-600";
    default:
      return "text-gray-600";
  }
};

export default AdmissionDetails;
