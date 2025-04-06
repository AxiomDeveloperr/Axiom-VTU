import { useState } from 'react';
import { iotbTech } from '../../assets/images';
import {
  FaChalkboardTeacher,
  FaChartBar,
  FaChevronLeft,
  FaClipboardList,
  FaCog,
  FaLayerGroup,
  FaUserGraduate,
  FaUserShield,
} from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const AdminSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openSection, setOpenSection] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSection = (section) => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true);
    }
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div className="z-50">
      <div
        className={`h-screen border-r-2 bg-white text-tt-black p-4 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'}`}
      >
        <div className="relative">
          {isSidebarOpen && (
            <Link to="/">
              <img src={iotbTech} alt="iotb logo" />
            </Link>
          )}
          <div>
            <button
              onClick={toggleSidebar}
              className="absolute -right-8 top-16 bg-white border border-gray-200 rounded-full p-2
                                        hover:bg-gray-50 md:block transition-colors duration-200 text-tt-black"
            >
              <FaChevronLeft
                size={20}
                className={`transition-transform duration-300 ${!isSidebarOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          <nav className="mt-5">
            {/* Admin Section */}
            <div className="flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200">
              <FaUserShield size={20} />
              {isSidebarOpen && (
                <Link to="">
                  <span className="ml-3">Admin</span>
                </Link>
              )}
            </div>

            {/* Student Management */}
            <div>
              <div
                onClick={() => toggleSection('student')}
                className="flex items-center p-3 rounded-md cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              >
                <FaUserGraduate size={20} />
                {isSidebarOpen && <span className="ml-3">Student Management</span>}
              </div>
              {openSection === 'student' && isSidebarOpen && (
                <div className="pl-8">
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="all-students"
                  >
                    All Students
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="students-details"
                  >
                    Student Details
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="add-student"
                  >
                    Add Student
                  </NavLink>
                  {/* <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="training-progress"
                  >
                    Student Training Progress
                  </NavLink> */}
                  {/* <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="students/graduations"
                  >
                    Graduations
                  </NavLink> */}
                </div>
              )}
            </div>

            {/* Mentor Management */}
            <div>
              <div
                className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                onClick={() => toggleSection('mentors')}
              >
                <FaChalkboardTeacher size={20} />
                {isSidebarOpen && <span className="ml-3">Mentor Management</span>}
              </div>
              {openSection === 'mentors' && isSidebarOpen && (
                <div className="pl-8">
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="all-mentors"
                  >
                    All Mentors
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="mentors-details"
                  >
                    Mentor Details
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="add-mentor"
                  >
                    Add Mentor
                  </NavLink>
                </div>
              )}
            </div>

            {/* Program Management */}
            <div>
              <div
                className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                onClick={() => toggleSection('programs')}
              >
                <FaLayerGroup size={20} />
                {isSidebarOpen && <span className="ml-3">Program Management</span>}
              </div>
              {openSection === 'programs' && isSidebarOpen && (
                <div className="pl-8">
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="all-courses"
                  >
                    All Stacks
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="training-materials"
                  >
                    Training Materials
                  </NavLink>
                </div>
              )}
            </div>

            {/* Application Management */}
            <div>
              <div
                className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                onClick={() => toggleSection('applicant')}
              >
                <FaClipboardList size={24} />
                {isSidebarOpen && <span className="ml-3">Application for next cohort</span>}
              </div>
              {openSection === 'applicant' && isSidebarOpen && (
                <div className="pl-8">
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="applicant-form"
                  >
                    New Applicant
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="applicants-list"
                  >
                    All Applicants
                  </NavLink>
                </div>
              )}
            </div>

            {/* Report & Analytics */}
            <NavLink
              className="flex items-center p-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
              // to="reports"
            >
              <FaChartBar size={20} />
              {isSidebarOpen && <span className="ml-3">Reports & Analytics</span>}
            </NavLink>

            {/* Settings */}
            <div>
              <div
                className="flex items-center p-3 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                // onClick={() => toggleSection('settings')}
              >
                <FaCog size={20} />
                {isSidebarOpen && <span className="ml-3">Settings</span>}
              </div>
              {openSection === 'settings' && isSidebarOpen && (
                <div className="pl-8">
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="settings/profile"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    className="block py-2 px-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    to="settings/preferences"
                  >
                    Preferences
                  </NavLink>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
