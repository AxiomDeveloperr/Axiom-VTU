import { BiAlarm } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

const Header = ({ currentPage, sidebarOpen, setSidebarOpen }) => {
    return (
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
            {/* Mobile menu button */}
            <button
                className="md:hidden text-xl"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                <FiMenu />
            </button>

            {/* Page title - Hidden on mobile */}
            <div className="text-lg font-semibold capitalize hidden md:block">
                <Link to="/dashboard">
                    {currentPage.replace("-", " ")}
                </Link>
            </div>

            {/* Right-side icons */}
            <div className="flex justify-between items-center primary-text space-x-3">
                <h3 className="hidden md:block text-sm font-semibold">Upgrade to Merchant</h3>
                <div className="flex md:hidden">
                    <Link to="/dashboard">
                        <GrPrevious size={20} className="text-[#880d1e] cursor-pointer"/>
                    </Link>
                </div>
                <BiAlarm size={20} className="cursor-pointer" />
                <Link to="update-profile" className="cursor-pointer">
                    <FaUserAlt size={20} />
                </Link>
            </div>
        </div>
    );
};

export default Header;
