import { FaBell, FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Axiom from "../assets/axiomdev.svg";

const Header = ({ currentPage, sidebarOpen, setSidebarOpen }) => {
    return (
        <div>
            <div className="bg-white border-b border-gray-200 shadow-sm">
                {/* Top row for logo and menu on mobile */}
                <div className="flex items-center justify-between p-4 md:hidden">
                    <img src={Axiom} alt="logo" className="h-6" />
                    <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-xl">
                        <FiMenu />
                    </button>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:flex items-center justify-between p-4">
                    <div className="text-lg font-semibold capitalize">
                        <Link to="/dashboard">
                            {currentPage.replace("-", " ")}
                        </Link>
                    </div>

                    <div className="flex items-center space-x-4 text-sm px-7">
                        <span className="font-semibold">Upgrade to Merchant</span>
                        <Link to="notification">
                            <FaBell size={20} className="cursor-pointer text-[#880d1e]" />
                        </Link>
                        <Link to="update-profile">
                            <FaUserAlt size={20} className="cursor-pointer text-[#880d1e]" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile welcome + icons */}
            <div className="flex flex-row items-start justify-between px-8 pb-2 space-y-2 md:hidden mt-6">
                <p className="text-sm font-medium text-gray-800">Welcome, Lawal Wahab</p>
                <div className="flex space-x-3 text-[#880d1e]">
                    <FaBell size={20} className="cursor-pointer" />
                    <Link to="update-profile">
                        <FaUserAlt size={20} className="cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
