import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { clearAuthState, logoutUser } from '../../redux/features/auth/authSlice';
import { persistor } from '../../redux/store/store';
import { fetchCohorts, fetchCohortById } from '../../redux/features/admin/cohortSlice'; // Import the cohort actions
import { clearEntireState } from '../../redux/store/thunks';

const AdminHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { cohorts, currentCohort } = useSelector((state) => state.cohorts); // Get cohorts and currentCohort from the state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cohortDropdownOpen, setCohortDropdownOpen] = useState(false); // State for cohort dropdown
  const dropdownRef = useRef(null); // Reference to the dropdown menu to detect clicks outside
  const cohortDropdownRef = useRef(null); // Reference to the cohort dropdown menu

  // eslint-disable-next-line no-unused-vars
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleCohortDropdown = () => {
    setCohortDropdownOpen(!cohortDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
    if (cohortDropdownRef.current && !cohortDropdownRef.current.contains(e.target)) {
      setCohortDropdownOpen(false);
    }
  };

  const handleLogout = () => {
    dispatch(clearEntireState());
    persistor.purge(); // Clear persisted Redux state (if using Redux Persist)
    navigate('/login'); // Redirect to login after logout
  };

  const handleCohortSelect = (cohortId) => {
    dispatch(fetchCohortById(cohortId)); // Fetch the selected cohort by ID
    setCohortDropdownOpen(false); // Close the dropdown after selection
  };

  useEffect(() => {
    // Fetch cohorts when the component mounts
    dispatch(fetchCohorts());
  }, [dispatch]);

  useEffect(() => {
    // Add event listener to detect clicks outside of the dropdowns
    document.addEventListener('click', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-tt-white border-b-2 z-40">
      <div className="mx-auto px-4 sm:px-6 py-4 flex items-center justify-between ml-12 md:ml-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <div className="p-3 bg-tt-grey bg-opacity-15 rounded-full">
              <img
                src={
                  user.profileImage ||
                  'https://res.cloudinary.com/domu5mpva/image/upload/v1738711109/web%20pages/dpnxr4e3dqxdoq8ckkle.png'
                }
                alt="User Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <div className="ml-2 md:ml-8">
              <h1 className="text-tt-black text-3xl font-bold">
                {user.firstName + ' ' + user.lastName}
              </h1>
              <p className="text-base ml-3">Administrator</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Cohort Dropdown */}
          <div className="relative" ref={cohortDropdownRef}>
            <button
              onClick={toggleCohortDropdown}
              className="bg-[#ADD8E6] text-black px-5 py-2.5 rounded-md cursor-pointer text-base font-bold transition-colors duration-300 ease-in-out hover:bg-[#87CEEB]"
            >
              {currentCohort ? currentCohort.name : 'Select Cohort'}
            </button>
            {cohortDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                {cohorts.map((cohort) => (
                  <div
                    key={cohort.id}
                    onClick={() => handleCohortSelect(cohort.id)}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {cohort.name}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="bg-[#ADD8E6] text-black px-5 py-2.5 rounded-md cursor-pointer text-base font-bold transition-colors duration-300 ease-in-out hover:bg-[#87CEEB]"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
