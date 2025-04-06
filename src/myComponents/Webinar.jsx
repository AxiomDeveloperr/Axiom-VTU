import React, { useState } from "react";
import { FaPlayCircle, FaVideo, FaUserCircle } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import DashboardNavBar from "../components/DashboardNavBar";
import Layout from "./Layout";

const WebinarPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [webinars, setWebinars] = useState([
    {
      title: "Webinar on React Development",
      date: "October 12, 2024",
      speaker: "Professor Adewuyi Muhammad Awwal",
      video: "https://",
    },
    {
      title: "Cloud Technology",
      date: "November 8, 2024",
      speaker: "Professor Ibn Ahmad Abdurrahman Kishy",
      video: "https://",
    },
    {
      title: "LinkedIn Optimization",
      date: "December 5, 2024",
      speaker: "Dr. Tijani Usman",
      video: "https://",
    },
  ]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 flex w-full">
        <div
          className={`fixed md:relative ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
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
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white">
                Webinars
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {webinars.map((webinar, index) => (
                <div
                  className="bg-white rounded-lg border shadow-sm p-6"
                  key={index}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <FaVideo className="w-16 h-16 text-tt-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {webinar.title}
                    </h2>
                    <p className="text-gray-500">{webinar.speaker}</p>
                    <p className="text-gray-500 text-sm">{webinar.date}</p>
                    <div className="mt-4 space-x-2">
                      <a
                        href={webinar.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-tt-primary text-white rounded-lg hover:bg-opacity-90"
                      >
                        Watch Video
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarPage;
