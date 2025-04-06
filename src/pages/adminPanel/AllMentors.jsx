import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaEllipsisH } from "react-icons/fa";
// import Header from "./Header";
import mentorLists from "../../data/mentorLists";

const AllMentors = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [menuOpen, setMenuOpen] = useState(null);
    const [mentors, setMentors] = useState(mentorLists);
    const [editMentor, setEditMentor] = useState(null);
    const [filterOption, setFilterOption] = useState("mentorId");

    const filteredMentors = mentors.filter((mentor) => {
        const searchTerm = searchQuery.toLowerCase();
        if (filterOption === "mentorId") {
            return mentor.mentorId.includes(searchTerm);
        } else if (filterOption === "stack") {
            return mentor.stack.toLowerCase().includes(searchTerm);
        } else if (filterOption === "status") {
            return mentor.status.toLowerCase().includes(searchTerm);
        }
        return false;
    });

    const handleEdit = (mentor) => {
        setEditMentor(mentor);
        setMenuOpen(null);
    };

    const handleSave = () => {
        setMentors((prev) =>
            prev.map((m) => (m.mentorId === editMentor.mentorId ? { ...editMentor } : m))
        );
        setEditMentor(null);
    };

    const handleDelete = (id) => {
        setMentors(mentors.filter((mentor) => mentor.mentorId !== id));
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
                                <option value="mentorId">Filter by Mentor ID</option>
                                <option value="stack">Filter by Stack</option>
                                <option value="status">Filter by Status</option>
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

                {/* Mentor Table */}
                <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left">Mentor Id</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Stack</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMentors.length > 0 ? (
                            filteredMentors.map((mentor) => (
                                <tr key={mentor.mentorId} className="hover:bg-gray-50">
                                    <td className="border border-gray-200 px-4 py-2">{mentor.mentorId}</td>
                                    <td className="border border-gray-200 px-4 py-2">
                                        {editMentor?.mentorId === mentor.mentorId ? (
                                            <input
                                                type="text"
                                                value={editMentor.name}
                                                onChange={(e) =>
                                                    setEditMentor({
                                                        ...editMentor,
                                                        name: e.target.value,
                                                    })
                                                }
                                                className="border px-2 py-1 rounded-md"
                                            />
                                        ) : (
                                            mentor.name
                                        )}
                                    </td>
                                    <td className="border border-gray-200 px-4 py-2">{mentor.email}</td>
                                    <td className="border border-gray-200 px-4 py-2">{mentor.stack}</td>
                                    <td className="border border-gray-200 px-4 py-2 relative">
                                        <FaEllipsisH
                                            className="cursor-pointer"
                                            onClick={() =>
                                                setMenuOpen(
                                                    menuOpen === mentor.mentorId ? null : mentor.mentorId
                                                )
                                            }
                                        />
                                        {menuOpen === mentor.mentorId && (
                                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-10">
                                                <ul>
                                                    <li
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() => handleEdit(mentor)}
                                                    >
                                                        Edit
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                        onClick={() =>
                                                            navigate(`mentors/details/${mentor.mentorId}`)
                                                        }
                                                    >
                                                        Details
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 hover:bg-red-100 cursor-pointer text-red-600"
                                                        onClick={() => handleDelete(mentor.mentorId)}
                                                    >
                                                        Delete
                                                    </li>
                                                    <li
                                                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-gray-600"
                                                        onClick={() => setMenuOpen(null)}
                                                    >
                                                        Close
                                                    </li>
                                                </ul>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-4 text-center">
                                    No results found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {editMentor && (
                    <div className="mt-4">
                        <button
                            onClick={handleSave}
                            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditMentor(null)}
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


export default AllMentors;
