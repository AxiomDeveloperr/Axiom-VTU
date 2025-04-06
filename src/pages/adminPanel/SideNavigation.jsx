import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaChevronLeft, FaChevronRight, FaUserGraduate, FaBook, FaUserTie, FaChartBar, FaCog, FaUserPlus } from 'react-icons/fa';
import { iotbTech } from '../../assets/images';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleSection = (section) => {
        if (!isSidebarOpen) {
            setIsSidebarOpen(true);
        }
        setOpenSection(prevSection => (prevSection === section ? null : section));
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="z-50">
            {/* Sidebar Toggle Button */}
            <button
                className={`text-white p-3 fixed top-6 left-1 z-50 rounded-md md:hidden transition-all duration-300 
                    ${isSidebarOpen ? 'left-64' : 'left-5'}`}
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? "" : <FaBars size={24} className="text-emerald-600" />}
            </button>

            {/* Overlay with blur effect when sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md transition-opacity duration-300 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:relative border-r-2 flex flex-col transition-all duration-300 h-full ease-in-out bg-tt-white bordertext-tt-black shadow-lg
                    ${isSidebarOpen ? 'w-52 md:w-64' : 'w-16 md:w-[90px]'} 
                    ${isSidebarOpen ? 'left-0' : '-left-64'} md:left-0 md:w-48`}
            >
                <div className="flex justify-between items-center p-5">
                <button
                    onClick={toggleSidebar}
                    className="absolute -right-4 top-20 bg-white border border-gray-200 rounded-full p-1.5 
                    hover:bg-gray-50 md:block transition-colors duration-200 text-tt-black"
                >
                    {isSidebarOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
                </button>


                    <div className={`transition-all duration-300 ${isSidebarOpen ? 'w-full' : 'w-20'}`}>
                        <Link to="/">
                            <img src={iotbTech} alt="iotb logo" />
                        </Link>
                    </div>
                </div>

                <nav className="mt-5">
                    <div>
                        <div
                            className="flex items-center py-3 px-5 hover:bg-emerald-500 cursor-pointer"
                            onClick={() => toggleSection('student')}
                        >
                            <FaUserGraduate size={20} />
                            {isSidebarOpen && <span className="ml-3">Student Management</span>}
                        </div>
                        {openSection === 'student' && isSidebarOpen && (
                            <div className="pl-8">
                                <NavLink className="block py-2 hover:bg-emerald-500" to="students/all/students" onClick={closeSidebar}>All Students</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="students/details" onClick={closeSidebar}>Student Details</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="students/add/student" onClick={closeSidebar}>Add Student</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="students/training" onClick={closeSidebar}>Student Training Progress</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="students/attendance" onClick={closeSidebar}>Attendance</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="students/graduations" onClick={closeSidebar}>Graduations</NavLink>
                            </div>
                        )}
                    </div>

                    <div>
                        <div
                            className="flex items-center py-3 px-5 hover:bg-emerald-500 cursor-pointer"
                            onClick={() => toggleSection('programs')}
                        >
                            <FaBook size={20} />
                            {isSidebarOpen && <span className="ml-3">Program Management</span>}
                        </div>
                        {openSection === 'programs' && isSidebarOpen && (
                            <div className="pl-8">
                                <NavLink className="block py-2 hover:bg-emerald-500" to="all/courses" onClick={closeSidebar}>All Courses</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="add/courses" onClick={closeSidebar}>Add Courses</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="training/modules" onClick={closeSidebar}>Training Modules</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="upload/module" onClick={closeSidebar}>Upload Training Module</NavLink>
                            </div>
                        )}
                    </div>

                    <div>
                        <div
                            className="flex items-center py-3 px-5 hover:bg-emerald-500 cursor-pointer"
                            onClick={() => toggleSection('mentors')}
                        >
                            <FaUserTie size={20} />
                            {isSidebarOpen && <span className="ml-3">Mentor Management</span>}
                        </div>
                        {openSection === 'mentors' && isSidebarOpen && (
                            <div className="pl-8">
                                <NavLink className="block py-2 hover:bg-emerald-500" to="all/mentors" onClick={closeSidebar}>All Mentors</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="mentors/details" onClick={closeSidebar}>Mentor Details</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="mentors/add/mentor" onClick={closeSidebar}>Add Mentor</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="mentors/assign/mentor" onClick={closeSidebar}>Assign Mentor</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="mentors/assignments" onClick={closeSidebar}>Assignments</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="mentors/mentor/attendance" onClick={closeSidebar}>Attendance</NavLink>
                            </div>
                        )}
                    </div>

                    <div>
                        <div
                            className="flex items-center py-3 px-5 hover:bg-emerald-500 cursor-pointer"
                            onClick={() => toggleSection('applicant')}
                        >
                            <FaUserPlus size={24} />
                            {isSidebarOpen && <span className="ml-3">Application for next cohort</span>}
                        </div>
                        {openSection === 'applicant' && isSidebarOpen && (
                            <div className="pl-8">
                                <NavLink className="block py-2 hover:bg-emerald-500" to="applicant/form" onClick={closeSidebar}>New Applicant</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="applicants/list" onClick={closeSidebar}>All Applicants</NavLink>
                            </div>
                        )}
                    </div>
                    
                    <NavLink className="flex items-center py-3 px-5 hover:bg-emerald-500" to="/reports" onClick={closeSidebar}>
                        <FaChartBar size={20} />
                        {isSidebarOpen && <span className="ml-3">Reports & Analytics</span>}
                    </NavLink>

                    <div>
                        <div
                            className="flex items-center py-3 px-5 hover:bg-emerald-500 cursor-pointer"
                            onClick={() => toggleSection('settings')}
                        >
                            <FaCog size={20} />
                            {isSidebarOpen && <span className="ml-3">Settings</span>}
                        </div>
                        {openSection === 'settings' && isSidebarOpen && (
                            <div className="pl-8">
                                <NavLink className="block py-2 hover:bg-emerald-500" to="/settings/profile" onClick={closeSidebar}>Profile</NavLink>
                                <NavLink className="block py-2 hover:bg-emerald-500" to="/settings/preferences" onClick={closeSidebar}>Preferences</NavLink>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
