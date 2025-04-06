import React, { useState } from 'react';
import { FaUserCog, FaLock, FaBell, FaPaintBrush, FaLanguage, FaLink } from 'react-icons/fa';
import Sidebar from "../components/Sidebar";
import DashboardNavBar from "../components/DashboardNavBar";

const SettingsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [password, setPassword] = useState({ current: "", new: "" });
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");
  const [socialLinked, setSocialLinked] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSavePassword = () => {
    console.log("Updated Password:", password);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const toggleSocialLink = () => {
    setSocialLinked(!socialLinked);
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-center opacity-30" />
      <div className="relative z-10 flex w-full">
        <div
          className={`fixed md:relative ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          transition-transform duration-300 ease-in-out h-full z-30 md:z-auto`}
        >
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="rounded-2xl p-6 sm:p-8 md:p-9 bg-tt-primary shadow-lg mb-8">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white">Settings</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Password Settings */}
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaLock className="text-tt-primary" /> Change Password
                </h2>
                <div className="mt-4">
                  <input
                    type="password"
                    name="current"
                    placeholder="Current Password"
                    value={password.current}
                    onChange={handlePasswordChange}
                    className="w-full p-3 border rounded-lg mb-3"
                  />
                  <input
                    type="password"
                    name="new"
                    placeholder="New Password"
                    value={password.new}
                    onChange={handlePasswordChange}
                    className="w-full p-3 border rounded-lg"
                  />
                  <button
                    onClick={handleSavePassword}
                    className="mt-3 px-4 py-2 bg-tt-primary text-white rounded-lg hover:bg-opacity-90"
                  >
                    Update Password
                  </button>
                </div>
              </div>

              {/* Theme Settings */}
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaPaintBrush className="text-tt-primary" /> Theme Settings
                </h2>
                <div className="mt-4">
                  <select
                    value={theme}
                    onChange={handleThemeChange}
                    className="w-full p-3 border rounded-lg mb-3"
                  >
                    <option value="light">Light Theme</option>
                    <option value="dark">Dark Theme</option>
                  </select>
                  <button
                    onClick={() => console.log(`Theme changed to ${theme}`)}
                    className="mt-3 px-4 py-2 bg-tt-primary text-white rounded-lg hover:bg-opacity-90"
                  >
                    Save Theme
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Language Settings */}
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaLanguage className="text-tt-primary" /> Language Settings
                </h2>
                <div className="mt-4">
                  <select
                    value={language}
                    onChange={handleLanguageChange}
                    className="w-full p-3 border rounded-lg mb-3"
                  >
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                  </select>
                  <button
                    onClick={() => console.log(`Language changed to ${language}`)}
                    className="mt-3 px-4 py-2 bg-tt-primary text-white rounded-lg hover:bg-opacity-90"
                  >
                    Save Language
                  </button>
                </div>
              </div>

              {/* Social Media Link Settings */}
              <div className="bg-white rounded-lg border shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <FaLink className="text-tt-primary" /> Social Media Link
                </h2>
                <div className="mt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={socialLinked}
                      onChange={toggleSocialLink}
                      className="mr-2"
                    />
                    <span className="text-gray-800">Link to Social Media</span>
                  </div>
                  <button
                    onClick={() => console.log(socialLinked ? "Linked" : "Unlinked")}
                    className="mt-3 px-4 py-2 bg-tt-primary text-white rounded-lg hover:bg-opacity-90"
                  >
                    Save Social Link
                  </button>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-white rounded-lg border shadow-sm p-6 mt-8">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <FaBell className="text-tt-primary" /> Notifications
              </h2>
              <div className="mt-4 flex items-center">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                  className="mr-2"
                />
                <span className="text-gray-800">Enable Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
