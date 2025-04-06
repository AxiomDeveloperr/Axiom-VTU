import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaEllipsisH, FaTrash, FaTimes, FaEdit, FaBook } from "react-icons/fa";
// import Header from "./Header";
import studentLists from "../../data/studentLists";

const AdmittedStudents = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(null);
    const [students, setStudents] = useState(studentLists);
    const [editStudent, setEditStudent] = useState(null);
    const [filterOption, setFilterOption] = useState("studentId");

    const filteredStudents = students.filter((student) => {
        const searchTerm = searchQuery.toLowerCase();
        if (filterOption === "studentId") {
            return student.studentId.includes(searchTerm);
        } else if (filterOption === "stack") {
            return student.stack.toLowerCase().includes(searchTerm);
        } else if (filterOption === "cohort") {
            const cohort = student.cohort ? student.cohort.toLowerCase() : "";
            return cohort.includes(searchTerm);
        }
        return false;
    });

    const handleEdit = (student) => {
        setEditStudent(student);
        setMenuOpen(null);
    };

    const handleSave = () => {
        setStudents((prev) =>
            prev.map((s) => (s.studentId === editStudent.studentId ? { ...editStudent } : s))
        );
        setEditStudent(null);
    };

    const handleDelete = (id) => {
        setStudents(students.filter((student) => student.studentId !== id));
        setMenuOpen(null);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
        setSearchQuery("");
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="container mx-auto p-6">
                {/* Filter and Search Bar */}
                <div className="mb-6 flex items-center justify-between space-x-2">
                    <div className="flex items-center space-x-5">
                        <div className="relative w-full max-w-xs">
                            <select
                                value={filterOption}
                                onChange={handleFilterChange}
                                className="w-56 py-2 pl-5 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="studentId">Filter by Student ID</option>
                                <option value="stack">Filter by Stack</option>
                                <option value="cohort">Filter by Cohort</option>
                            </select>
                        </div>
                        <div className="relative w-full max-w-xs">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={`Search by ${filterOption.charAt(0).toUpperCase() + filterOption.slice(1)}`}
                                className="w-56 py-2 pl-5 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="absolute top-3 left-48">
                                <FaSearch size={16} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                    {/* <button
                        onClick={() => navigate("/admin/panel")}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                    >
                        Go Back to Dashboard
                    </button> */}
                </div>

                {/* Student Table */}
                <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left">Student Id</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Stack</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Cohort</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Progress (%)</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <tr key={student.studentId} className="hover:bg-gray-50">
                                    <td className="border border-gray-200 px-4 py-2">{student.studentId}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        {editStudent?.studentId === student.studentId ? (
                                            <input
                                                type="text"
                                                value={editStudent.name}
                                                onChange={(e) =>
                                                    setEditStudent({
                                                        ...editStudent,
                                                        name: e.target.value,
                                                    })
                                                }
                                                className="border px-2 py-1 rounded-md"
                                            />
                                        ) : (
                                            student.name
                                        )}
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2">{student.email}</td>
                                    <td className="border border-gray-200 px-4 py-2">{student.stack}</td>
                                    <td className="border border-gray-200 px-4 py-2">{student.cohort}</td>
                                    <td
                                        className={`border border-gray-200 px-4 py-2 font-semibold ${getProgressColor(student.progress)}`}
                                    >
                                        {student.progress}%
                                    </td>
                                    <td
                                        className={`border border-gray-200 px-4 py-2 font-semibold ${getStatusColor(student.status)}`}
                                    >
                                        {student.status}
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2 relative">
                                        <FaEllipsisH
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setMenuOpen(
                                                    menuOpen === student.studentId ? null : student.studentId
                                                )
                                            }
                                        />
                                        {menuOpen === student.studentId && (
                                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10">
                                                <ul>
                                                    <li
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                                        onClick={() => handleEdit(student)}
                                                    >
                                                       <FaEdit className="mr-2 text-blue-500" /> Edit
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                                                        onClick={() =>
                                                            navigate(`/students/details/${student.studentId}`)
                                                        }
                                                    >
                                                       <FaBook className="mr-2 text-grey-600" /> Details
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 hover:bg-red-100 cursor-pointer flex items-center"
                                                        onClick={() => handleDelete(student.studentId)}
                                                    >
                                                       <FaTrash className="mr-2 text-red-600" /> Delete
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer flex items-center"
                                                        onClick={() => setMenuOpen(null)}
                                                    >
                                                       <FaTimes className="mr-2 text-grey-600" /> Close
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="p-4 text-center">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {editStudent && (
                    <div className="mt-4">
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditStudent(null)}
                            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300"
                        >
                            Cancel
                        </button>
                    </div>
                )}
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

const getProgressColor = (score) => {
    if (score >= 70) return "text-green-600";
    if (score >= 30) return "text-yellow-600";
    return "text-red-600";
};

export default AdmittedStudents;
