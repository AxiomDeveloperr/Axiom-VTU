import { FaEdit, FaPrint, FaDownload, FaUserAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import studentLists from "../../data/studentLists";

const StudentDetailLists = () => {
    const { studentId } = useParams();
    const student = studentLists.find((s) => s.studentId === studentId);

    if (!student) {
        return <div className="text-center text-red-600 font-bold mt-10">Student Not Found</div>;
    }


    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Me</h2>
                <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-8">
                    <div className="flex-shrink-0">
                        {/* <img
                            src="https://via.placeholder.com/150"
                            alt="Profile"
                            className="rounded-lg w-48 h-48 object-cover"
                        /> */}
                        <div className="rounded-full w-32 h-32 bg-gray-200 flex items-center justify-center">
                            <FaUserAlt size={72} className="text-gray-500" />
                        </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex-grow">
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold text-gray-900">{student.name}</h3>
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
                        <p className="text-gray-600 mt-2">
                            {student.name} is currently studying {student.stack}. Their current progress is {student.progress}%.
                        </p>
                        <div className="mt-4 space-y-2">
                            <div className="mt-4 space-y-2">
                                <p><strong>Email:</strong> {student.email}</p>
                                <p><strong>Phone Number:</strong> {student.phoneNumber}</p>
                                <p><strong>Stack:</strong> {student.stack}</p>
                                <p><strong>Progress:</strong> {student.progress}%</p>
                                <p><strong>Status:</strong> {student.status}</p>
                                <p><strong>Application Date:</strong> {student.applicationDate}</p>
                                <p><strong>Current Module:</strong> {student.currentModule}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetailLists
