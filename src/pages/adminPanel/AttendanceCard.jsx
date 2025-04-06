import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import studentLists from "../../data/studentLists";
import mentorLists from "../../data/mentorLists";

const AttendanceCard = () => {
    const [activeTab, setActiveTab] = useState("Students");
    const navigate = useNavigate();

    const studentData = {
        present: Math.floor(studentLists.length * 0.8),
        absent: Math.floor(studentLists.length * 0.2),
        attendancePercentage: (
        studentLists.reduce((acc, student) => acc + student.progress, 0) / studentLists.length
        ).toFixed(1),
    };

    const mentorData = {
        present: Math.floor(mentorLists.length * 0.85),
        absent: Math.floor(mentorLists.length * 0.15),
        attendancePercentage: (
        mentorLists.reduce((acc, mentor) => acc + (mentor.progress || 0), 0) / mentorLists.length
        ).toFixed(1),
    };

    const data = activeTab === "Students" ? studentData : mentorData;

    return (
        <div className="w-[50%] bg-white shadow-lg rounded-lg p-6 relative">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Attendance</h2>
                <button className="text-gray-500 hover:text-gray-700">
                    <FaCalendarAlt size={20} />
                </button>
            </div>

            <div className="flex space-x-4 border-b pb-2">
                <button
                    onClick={() => setActiveTab("Students")}
                    className={`text-sm font-semibold pb-1 ${
                        activeTab === "Students" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
                    }`}
                >
                    Students
                </button>
                <button
                    onClick={() => setActiveTab("Mentors")}
                    className={`text-sm font-semibold pb-1 ${
                        activeTab === "Mentors" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
                    }`}
                >
                    Mentors
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 my-4">
                <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{data.present}</p>
                    <p className="text-gray-500 text-sm">Present</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-orange-500">{data.absent}</p>
                    <p className="text-gray-500 text-sm">Absent</p>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                        className="text-blue-500 stroke-current"
                        strokeWidth="4"
                        fill="none"
                        strokeDasharray="100,100"
                        d="M18 2a16 16 0 1 1 0 32 16 16 0 1 1 0-32"
                        strokeDashoffset={100 - data.attendancePercentage}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-blue-500">
                        {data.attendancePercentage}%
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate(activeTab === "Students" ? "students/attendance" : " mentor-attendance")}
                    className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                    View All
                </button>
            </div>
        </div>
    );
};

export default AttendanceCard;
