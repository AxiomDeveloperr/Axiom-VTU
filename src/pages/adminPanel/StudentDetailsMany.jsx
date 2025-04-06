import { useState } from "react";
import studentLists from "../../data/studentLists";
import { FaEdit, FaPrint, FaDownload, FaUserAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa";

const StudentDetailsMany = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const studentsPerPage = 3;

    const totalPages = Math.ceil(studentLists.length / studentsPerPage);

    const indexOfLastStudent = currentPage * studentsPerPage;
    const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
    const currentStudents = studentLists.slice(indexOfFirstStudent, indexOfLastStudent);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 gap-6">
                    {currentStudents.map((student) => (
                        <div key={student.studentId} className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
                            <div className="flex items-center justify-between space-x-4 mb-4">
                                <div className="rounded-full w-32 h-32 bg-gray-200 flex items-center justify-center">
                                    <FaUserAlt size={72} className="text-gray-500" />
                                </div>

                                <div className="flex space-x-3">
                                    <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
                                        <FaEdit className="text-gray-700" />
                                    </button>
                                    <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
                                        <FaPrint className="text-gray-700" />
                                    </button>
                                    <button className="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
                                        <FaDownload className="text-gray-700" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-2">
                                {student.name} is currently studying {student.stack}. Their current progress is {student.progress}%.
                            </p>
                            <div className="space-y-2">
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
                                <p><strong>Stack:</strong> {student.stack}</p>
                                <p><strong>Progress:</strong> {student.progress}%</p>
                                <p><strong>Status:</strong> {student.status}</p>
                                <p><strong>Application Date:</strong> {student.applicationDate}</p>
                                <p><strong>Current Module:</strong> {student.currentModule}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="flex justify-center mt-6 space-x-4">
                    <button 
                        onClick={prevPage} 
                        disabled={currentPage === 1} 
                        className={`px-4 py-2 rounded-md text-white ${currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-tt-primary hover:bg-tt-primary"}`}
                    >
                        <FaArrowLeft className="inline-block mr-2" /> Previous
                    </button>

                    <span className="px-4 py-2 text-gray-700">Page {currentPage} of {totalPages}</span>

                    <button 
                        onClick={nextPage} 
                        disabled={currentPage === totalPages} 
                        className={`px-4 py-2 rounded-md text-white ${currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-tt-primary hover:bg-tt-primary"}`}
                    >
                        Next <FaArrowRight className="inline-block ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentDetailsMany;
