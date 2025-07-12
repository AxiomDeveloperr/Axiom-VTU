import Axiom from "../assets/axiomdev.svg";
import {
  MdClose,
  MdDashboard,
  MdOutlineHistory,
  MdOutlineSupportAgent,
  MdLogout,
} from "react-icons/md";
import { BsPhone, BsWifi } from "react-icons/bs";
import { RiTvLine } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
// import { path } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ currentPage, setCurrentPage, sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate()
  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, key: "Dashboard" },
    { label: "Buy Airtime", icon: <BsPhone />, key: "Buy Airtime", path: "buy-airtime" },
    { label: "Buy Data", icon: <BsWifi />, key: "Buy Data", path: "buy-data" },
    { label: "TV Subscription", icon: <RiTvLine />, key: "Tv Subscription", path: "tv-subscription" },
    { label: "Pay Electric Bill", icon: <BiWallet />, key: "Pay Electric Bill", path: "pay-electric-bill" },
    { label: "Airtime to Cash", icon: <AiOutlineCreditCard />, key: "Airtime to Cash", path: "airtime-to-cash" },
    { label: "Transaction History", icon: <MdOutlineHistory />, key: "Transaction History", path: "transaction-history" },
    { label: "Help & Support", icon: <MdOutlineSupportAgent />, key: "Help & Support", path: "support" },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 min-h-screen w-64 bg-white border-r border-gray-200 p-4 space-y-2
        transform transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} z-50
      `}
    >
      <div className="flex justify-between items-center mb-8">
        <img src={Axiom} alt="logo" className="primary-text w-40 md:w-full" />
        {/* Close icon, only visible on mobile */}
        <div onClick={() => setSidebarOpen(false)} className="flex md:hidden primary-text p-1 rounded-full text-2xl -ml-44 hover:bg-gray-200">
          <MdClose />
        </div>
      </div>

      {menuItems.map((item) => (
        <button
          key={item.key}
          onClick={() => {
            navigate (item.path);
            setCurrentPage(item.key);
            setSidebarOpen(false);
          }}
          className={`flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-[#ffc8c8] hover:text-[#880d1e] ${
            currentPage === item.key ? "primary-color" : ""
          }`}
        >
          {item.icon} {item.label}
        </button>
      ))}
      <button className="flex items-center gap-3 mt-auto w-full text-left p-2 rounded-lg primary-text hover:bg-[#ffc8c8] hover:text-[#880d1e]">
        <MdLogout /> Log Out
      </button>
    </div>
  )
}

export default Sidebar
