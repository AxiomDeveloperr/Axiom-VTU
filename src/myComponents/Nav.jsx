/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Logo from '../assets/icons/iotbtech.svg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApplicationByUserId } from '../redux/features/application/applicationSlice';

const Nav = ({
  scrollToCourses,
  scrollToAbout,
  scrollToTeam,
  scrollToContact,
  scrollToTestimonial,
  isAuthenticated,
  user,
  handleLogout,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const currentApplication = useSelector((state) => state.applications.currentApplication || null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchApplicationByUserId(user.id));
    }
  }, [dispatch, user?.id]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const NavItem = ({ label, onClick = () => {} }) => (
    <li
      className="hover:text-blue-500 cursor-pointer transition-all duration-300"
      onClick={() => {
        onClick();
        setIsMenuOpen(false); // Close menu on item click
      }}
    >
      {label}
    </li>
  );

  return (
    <nav className="flex items-center justify-between px-8 shadow-md bg-white relative z-[1000] h-16 font-montserrat mt-4">
      {/* Logo */}
      <img src={Logo} alt="IOTB Tech Logo" className="w-28 h-28 md:w-32 md:h-32" />

      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="flex space-x-6 text-gray-700 font-medium items-center">
          {[
            { label: 'HOME', onClick: () => {} },
            { label: 'COURSES', onClick: scrollToCourses },
            { label: 'ABOUT', onClick: scrollToAbout },
            { label: 'TEAM', onClick: scrollToTeam },
            { label: 'CONTACT', onClick: scrollToContact },
            { label: 'TESTIMONIAL', onClick: scrollToTestimonial },
          ].map((item, index) => (
            <NavItem key={index} label={item.label} onClick={item.onClick} />
          ))}
        </ul>

        <div className="flex items-center ml-6 space-x-4">
          {isAuthenticated && user ? (
            <>
              {user.role === 'ADMIN' ? (
                <Link to="/admin-dashboard">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300">
                    Admin Dashboard
                  </button>
                </Link>
              ) : currentApplication ? (
                <Link to="/dashboard">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300">
                    Dashboard
                  </button>
                </Link>
              ) : (
                <Link to="/application-guidelines">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300">
                    Apply
                  </button>
                </Link>
              )}
              <button
                aria-label="Logout"
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300">
                  Login
                </button>
              </Link>
              <Link to="/application-guidelines">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300">
                  Apply
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="z-50 lg:hidden flex items-center">
        {isMenuOpen ? (
          <IoMdClose
            className="w-10 h-10 text-gray-700 cursor-pointer rounded-full border-2 border-gray-700 p-2 mr-4"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <HiMenuAlt3
            className="w-10 h-10 text-gray-700 cursor-pointer rounded-full border-2 border-gray-700 p-2 mr-4"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={menuRef} className="absolute top-16 left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-6 py-6 text-gray-700 font-medium">
            {[
              { label: 'HOME', onClick: () => {} },
              { label: 'COURSES', onClick: scrollToCourses },
              { label: 'ABOUT', onClick: scrollToAbout },
              { label: 'TEAM', onClick: scrollToTeam },
              { label: 'CONTACT', onClick: scrollToContact },
              { label: 'TESTIMONIAL', onClick: scrollToTestimonial },
            ].map((item, index) => (
              <NavItem key={index} label={item.label} onClick={item.onClick} />
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-4 my-4">
            {isAuthenticated && user ? (
              <>
                {user.role === 'ADMIN' ? (
                  <Link to="/admin-dashboard">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                      Admin Dashboard
                    </button>
                  </Link>
                ) : currentApplication ? (
                  <Link to="/dashboard">
                    <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                      Dashboard
                    </button>
                  </Link>
                ) : (
                  <Link to="/application-guidelines">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                      Apply
                    </button>
                  </Link>
                )}
                <button
                  aria-label="Logout"
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                    Login
                  </button>
                </Link>
                <Link to="/application-guidelines">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-md transition-all duration-300">
                    Apply
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

Nav.propTypes = {
  scrollToCourses: PropTypes.func,
  scrollToAbout: PropTypes.func,
  scrollToTeam: PropTypes.func,
  scrollToContact: PropTypes.func,
  scrollToTestimonial: PropTypes.func,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    role: PropTypes.string,
  }),
  handleLogout: PropTypes.func.isRequired,
};

export default Nav;
