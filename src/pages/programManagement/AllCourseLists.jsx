import { useEffect, useState, useRef } from "react";
import { FaBook, FaEllipsisH, FaTimes, FaTrash } from "react-icons/fa";
// import Header from "../adminPanel/Header";
// import { useNavigate } from "react-router-dom";

const AllCourseLists = () => {
    // const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [actionIndex, setActionIndex] = useState(null);
    const [modalMessage, setModalMessage] = useState("");
    const actionRef = useRef(null);
    const [filterOption, setFilterOption] = useState("courseTitle");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const storedCourses = JSON.parse(localStorage.getItem("newCourses")) || [];
        setCourses(storedCourses);
    }, []);

    const deleteCourse = (index) => {
        const updatedCourses = courses.filter((_, i) => i !== index);
        setCourses(updatedCourses);
        localStorage.setItem("newCourses", JSON.stringify(updatedCourses));
    };

    const toggleActions = (index) => {
        setActionIndex(actionIndex === index ? null : index);
    };

    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
        setSearchQuery("");
    };

    const filteredCourses = courses.filter((course) => {
        const searchTerm = searchQuery.toLowerCase();
        return filterOption === "courseTitle"
            ? course.courseTitle.toLowerCase().includes(searchTerm)
            : course.courseCode.toLowerCase().includes(searchTerm);
    });

    const showCourseDetails = (course) => {
        setModalMessage(course.shortDescription);
    };

    return (
        <div>
            {/* <Header /> */}
            <div className="container mx-auto p-6">
                <div className="mb-6 flex items-center justify-between space-x-2">
                    <div className="flex items-center space-x-5">
                        <div className="relative w-full max-w-xs">
                            <select
                                value={filterOption}
                                onChange={handleFilterChange}
                                className="w-56 py-2 pl-5 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="courseTitle">Filter by Course Title</option>
                                <option value="courseCode">Filter by Course Code</option>
                            </select>
                        </div>
                        <div className="relative w-full max-w-xs">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder={`Search by ${filterOption === "courseTitle" ? "Title" : "Code"}`}
                                className="w-56 py-2 pl-5 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    {/* <button
                        onClick={() => navigate("/admin/panel")}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
                    >
                        Go Back to Dashboard
                    </button> */}
                </div>

                <div className="mx-auto bg-white rounded-lg max-w-screen-xl px-4 shadow-lg sm:px-6 lg:px-5 py-8">
                    {courses.length === 0 ? (
                        <p className="text-gray-600">No courses added yet.</p>
                    ) : (
                        <div>
                            <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="border border-gray-200 px-4 py-2 text-left">Course Title</th>
                                        <th className="border border-gray-200 px-4 py-2 text-left">Course Code</th>
                                        <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredCourses.map((course, index) => (
                                        <tr key={index} className="border-b border-gray-200">
                                            <td className="border border-gray-200 px-4 py-2">
                                                {course.courseTitle}
                                            </td>
                                            <td className="border border-gray-200 px-4 py-2">
                                                {course.courseCode}
                                            </td>
                                            <td className="border border-gray-200 px-4 py-2 relative" ref={actionRef}>
                                                <>
                                                    <button
                                                        className="text-gray-500 hover:text-gray-700"
                                                        onClick={() => toggleActions(index)}
                                                    >
                                                        <FaEllipsisH />
                                                    </button>
                                                    {actionIndex === index && (
                                                        <div className="absolute bottom-3 z-50 bg-white border border-gray-200 rounded shadow-md mt-2 right-0 w-32">
                                                            <button
                                                                className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                onClick={() => showCourseDetails(course)}
                                                            >
                                                                <FaBook className="mr-2 text-blue-500" /> Details
                                                            </button>
                                                            <button
                                                                className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                onClick={() => deleteCourse(index)}
                                                            >
                                                                <FaTrash className="mr-2 text-red-600" /> Delete
                                                            </button>
                                                            <button
                                                                className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                onClick={() => setActionIndex(null)}
                                                            >
                                                                <FaTimes className="mr-2 text-grey-600" /> Close
                                                            </button>
                                                        </div>
                                                    )}
                                                </>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for Course Details */}
            {modalMessage && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
                    <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-semibold mb-4">Course Details</h3>
                        <p>{modalMessage}</p>
                        <button
                            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => setModalMessage("")}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllCourseLists;
