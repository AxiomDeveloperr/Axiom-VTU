import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50 relative">
  {sidebarOpen && (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/40 z-50 md:hidden transition-opacity duration-300"
      onClick={() => setSidebarOpen(false)}
    ></div>
  )}
  <Sidebar
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
    sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}
  />
  <div className="flex-1">
    <Header
      currentPage={currentPage}
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    />
    <div className="p-4">
      <Outlet />
    </div>
  </div>
</div>

  );
};

export default Dashboard;
