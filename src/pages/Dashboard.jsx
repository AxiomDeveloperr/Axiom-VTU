import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import DashboardNavBar from '../components/DashboardNavBar';
import { fetchApplicationByUserId } from '../redux/features/application/applicationSlice';
import { CircularProgress } from '@mui/material';
import { clearMentorsState } from '../redux/features/admin/mentorSlice';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [admissionStatus, setAdmissionStatus] = useState('inReview');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const sidebarRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const currentApplication = useSelector((state) => state.applications.currentApplication);
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // Redirect to login if user is not authenticated
  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate('/login');
      return;
    }
  }, [isAuthenticated, user, navigate]);

  // Fetch application data
  useEffect(() => {
    const fetchInitialData = async () => {
      if (!user?.id) return;

      setIsLoading(true);
      setError(null);

      try {
        await dispatch(fetchApplicationByUserId(user.id)).unwrap();
      } catch (err) {
        console.error('Error fetching application:', err);
        setError('Failed to load your application data');
        setTimeout(() => navigate('/'), 3000);
      }
    };

    fetchInitialData();
  }, [dispatch, user?.id, navigate]);

  // Update admission status and loading state
  useEffect(() => {
    if (currentApplication) {
      setAdmissionStatus(currentApplication.status);
      dispatch(clearMentorsState());
      setIsLoading(false);
    }
  }, [currentApplication, dispatch]);

  // Close sidebar on navigation to sub-items or outside click
  useEffect(() => {
    const subItemPaths = [
      '/dashboard/community/webinar',
      '/dashboard/community/resources',
      '/dashboard/online-learning',
    ];
    if (subItemPaths.includes(location.pathname)) {
      console.log('Navigation detected - Closing Sidebar');
      setIsSidebarOpen(false);
    }

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        console.log('Clicked outside - Closing Sidebar');
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen, location.pathname]);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => {
      console.log('Toggle Sidebar - New State:', !prev);
      return !prev;
    });
  };

  // Get admission status style
  const getAdmissionStatusStyle = () => {
    switch (admissionStatus) {
      case 'ADMISSION_APPROVED':
        return 'bg-green-500 text-white';
      case 'ADMISSION_REJECTED':
        return 'bg-red-500 text-white';
      case 'ADMISSION_PENDING':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-200 text-gray-600';
    }
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <CircularProgress size={60} />
        <p className="mt-4 text-gray-600">Loading your dashboard...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
        <p className="text-gray-600">Redirecting you to safety...</p>
      </div>
    );
  }

  if (!currentApplication) {
    const handleRetry = async () => {
      setIsLoading(true);
      setError(null);
      try {
        await dispatch(fetchApplicationByUserId(user.id)).unwrap();
      } catch (err) {
        console.error('Error refetching application:', err);
        setError('Failed to reload your application data');
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">No Application Found</h2>
        <p className="text-gray-600 mb-6">We couldn’t find your application. Please try again.</p>
        <button
          onClick={handleRetry}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Retry Fetching Application
        </button>
      </div>
    );
  }

  return (
    <div className="relative flex h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-center opacity-30" />

      <div className="relative z-10 flex w-full">
        <div
          ref={sidebarRef}
          className={`fixed inset-y-0 left-0 transition-transform duration-300 ease-in-out z-30 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 md:w-64`}
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
          <DashboardNavBar application={currentApplication} toggleSidebar={toggleSidebar} />

          <div className="block md:hidden w-full">
            <div className={`mt-4 p-4 text-center ${getAdmissionStatusStyle()}`}>
              <span className="font-medium text-sm">
                {admissionStatus === 'ADMISSION_APPROVED' && 'Admitted'}
                {admissionStatus === 'ADMISSION_REJECTED' && 'Not Admitted'}
                {admissionStatus === 'ADMISSION_PENDING' && 'Admission in Review'}
                {!admissionStatus && 'Status Unknown'}
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
            <div className="rounded-2xl p-6 sm:p-8 mb-8 bg-gradient-to-r from-black to-green-600 shadow-lg hover:scale-105 transition-all duration-500">
              <h1 className="text-xl sm:text-2xl md:text-3xl text-white">
                Welcome, {currentApplication.fullName}!
              </h1>
              <p className="mt-4 text-white text-base sm:text-lg">
                Thank you for applying to <span className="font-bold">IOTB TECH</span>. You’re
                almost there!
              </p>
              <p className="mt-2 text-white">
                This is your personalized IOTB TECH Dashboard. Stay tuned for updates and next steps
                in your application process.
              </p>
            </div>

            <div className="rounded-2xl p-8 bg-gradient-to-r from-black to-green-600 shadow-xl hover:scale-105 transition-transform duration-500">
              <h1 className="text-xl md:text-4xl font-extrabold text-white text-center leading-tight">
                Click here to access your Pre-admission Course material <br />
                <span className="text-md md:text-xl font-medium block mt-2">
                  Available from 24th February 2025
                </span>
              </h1>
              <div className="mt-6 text-center">
                <Link
                  to="/dashboard/online-learning"
                  className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg bg-white text-green-700 font-bold text-lg shadow-md hover:bg-green-700 hover:text-white transition-all duration-300"
                >
                  Access Course
                </Link>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-800">Meet the Mentors</h2>
              <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-center">
                <p className="text-lg text-gray-600">
                  Our mentors are currently under wraps! Stay tuned to meet the brilliant minds who
                  will guide you on your journey.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:cursor-pointer transition-all duration-300 transform hover:shadow-lg">
              <Link className="block">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  Take Your Pre-Admission Assessment Test
                </h2>
                <p className="text-gray-600 mb-4">
                  Ready to take the next step? Assess your skills and knowledge to unlock your
                  potential.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  Available starting from <span className="font-semibold">11th March 2025</span>.
                </p>
                <div className="mt-4">
                  <p className="text-blue-600 font-medium hover:underline">
                    Click here to get started →
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import Sidebar from '../components/Sidebar';
// import DashboardNavBar from '../components/DashboardNavBar';
// import { fetchApplicationByUserId } from '../redux/features/application/applicationSlice';
// // import { fetchMentorByCourseId } from '../redux/features/admin/mentorSlice';
// import { CircularProgress } from '@mui/material';
// import { clearMentorsState } from '../redux/features/admin/mentorSlice';

// function Dashboard() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [admissionStatus, setAdmissionStatus] = useState('inReview');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const currentApplication = useSelector((state) => state.applications.currentApplication);
//   // const currentMentor = useSelector((state) => state.mentors.currentMentor);
//   const { user, isAuthenticated } = useSelector((state) => state.auth);

//   // Redirect to login if user is not authenticated
//   useEffect(() => {
//     if (!isAuthenticated || !user) {
//       navigate('/login');
//       return;
//     }
//   }, [isAuthenticated, user, navigate]);

//   // Fetch application data when the component mounts or user ID changes
//   useEffect(() => {
//     const fetchInitialData = async () => {
//       if (!user?.id) return;

//       setIsLoading(true);
//       setError(null);

//       try {
//         await dispatch(fetchApplicationByUserId(user.id)).unwrap();
//       } catch (err) {
//         console.error('Error fetching application:', err);
//         setError('Failed to load your application data');
//         setTimeout(() => navigate('/'), 3000); // Redirect to home after 3 seconds
//       }
//     };

//     fetchInitialData();
//   }, [dispatch, user?.id, navigate]);

//   // Fetch dependent data (mentors) when application data is available
//   useEffect(() => {
//     // const fetchDependentData = async () => {
//     //   if (!currentApplication?.Course?.id) return;

//     //   try {
//     //     await dispatch(fetchMentorByCourseId(currentApplication.Course.id)).unwrap();
//     //   } catch (err) {
//     //     console.error('Error fetching dependent data:', err);
//     //     setError('Failed to load some dashboard data');
//     //   } finally {
//     //     setIsLoading(false);
//     //   }
//     // };

//     if (currentApplication) {
//       setAdmissionStatus(currentApplication.status);
//       dispatch(clearMentorsState()); // this is temporary remove when admissions starts
//       // fetchDependentData();
//       setIsLoading(false); //temporary remove when mentors are visible
//     }
//   }, [currentApplication, dispatch]);

//   // Toggle sidebar visibility
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Get admission status style based on status
//   const getAdmissionStatusStyle = () => {
//     switch (admissionStatus) {
//       case 'admitted':
//         return 'bg-green-500 text-white';
//       case 'notAdmitted':
//         return 'bg-red-500 text-white';
//       case 'inReview':
//         return 'bg-yellow-500 text-black';
//       default:
//         return '';
//     }
//   };

//   // Show loading spinner while data is being fetched
//   if (isLoading) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//         <CircularProgress size={60} />
//         <p className="mt-4 text-gray-600">Loading your dashboard...</p>
//       </div>
//     );
//   }

//   // Show error message if data fetching fails
//   if (error) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//         <div className="text-red-500 text-xl mb-4">⚠️ {error}</div>
//         <p className="text-gray-600">Redirecting you to safety...</p>
//       </div>
//     );
//   }

//   // Show retry option if no application data is found
//   if (!currentApplication) {
//     const handleRetry = async () => {
//       setIsLoading(true);
//       setError(null);
//       try {
//         await dispatch(fetchApplicationByUserId(user.id)).unwrap();
//       } catch (err) {
//         console.error('Error refetching application:', err);
//         setError('Failed to reload your application data');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
//         <h2 className="text-2xl font-bold mb-4">No Application Found</h2>
//         <p className="text-gray-600 mb-6">We couldn’t find your application. Please try again.</p>
//         <button
//           onClick={handleRetry}
//           className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
//         >
//           Retry Fetching Application
//         </button>
//       </div>
//     );
//   }

//   // Main dashboard content
//   return (
//     <div className="relative flex h-screen overflow-hidden">
//       <div className="absolute inset-0 bg-[url('./assets/images/bg.jpg')] bg-cover bg-center opacity-30" />

//       <div className="relative z-10 flex w-full">
//         {/* Sidebar */}
//         <div
//           className={`fixed md:relative ${
//             isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
//           } transition-transform duration-300 ease-in-out h-full z-30 md:z-auto`}
//         >
//         <Sidebar
//             application={currentApplication}
//             isOpen={isSidebarOpen}
//             onToggle={toggleSidebar}
//           />
//         </div>

//         {isSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
//             onClick={toggleSidebar}
//           />
//         )}

//         <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
//           <DashboardNavBar application={currentApplication} toggleSidebar={toggleSidebar} />

//           {/* Mobile Admission Status Banner */}
//           <div className="block md:hidden w-full">
//             <div className={`mt-4 p-4 text-center ${getAdmissionStatusStyle()}`}>
//               <span className="font-medium text-sm">
//                 {admissionStatus === 'admitted' && 'Admitted'}
//                 {admissionStatus === 'notAdmitted' && 'Not Admitted'}
//                 {admissionStatus === 'inReview' && 'Admission in Review'}
//               </span>
//             </div>
//           </div>

//           <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
//             {/* Welcome Banner */}
//             <div className="rounded-2xl p-6 sm:p-8 mb-8 bg-gradient-to-r from-black to-green-600 shadow-lg hover:scale-105 transition-all duration-500">
//               <h1 className="text-xl sm:text-2xl md:text-3xl text-white">
//                 Welcome, {currentApplication.fullName}!
//               </h1>
//               <p className="mt-4 text-white text-base sm:text-lg">
//                 Thank you for applying to <span className="font-bold">IOTB TECH</span>. You’re
//                 almost there!
//               </p>
//               <p className="mt-2 text-white">
//                 This is your personalized IOTB TECH Dashboard. Stay tuned for updates and next steps
//                 in your application process.
//               </p>
//             </div>

//             {/* Cohort Enrollment */}
//             <div className="rounded-2xl p-8 bg-gradient-to-r from-black to-green-600 shadow-xl hover:scale-105 transition-transform duration-500">
//               <h1 className="text-xl md:text-4xl font-extrabold text-white text-center leading-tight">
//                 Click here to access your Pre-admission Course material <br />
//                 <span className="text-md md:text-xl font-medium block mt-2">
//                   Available from 24th February 2025
//                 </span>
//               </h1>
//               <div className="mt-6 text-center">
//                 <Link
//                   to="/dashboard/online-learning"
//                   className="inline-block px-4 py-2 md:px-6 md:py-3 rounded-lg bg-white text-green-700 font-bold text-lg shadow-md hover:bg-green-700 hover:text-white transition-all duration-300"
//                 >
//                   Access Course
//                 </Link>
//               </div>
//             </div>

//             {/* Mentors Section */}
//             <div className="mt-8">
//               <h2 className="text-lg font-semibold text-gray-800">Meet the Mentors</h2>
//               <div className="mt-6 p-6 bg-white rounded-xl shadow-md text-center">
//                 <p className="text-lg text-gray-600">
//                   Our mentors are currently under wraps! Stay tuned to meet the brilliant minds who
//                   will guide you on your journey.
//                 </p>
//               </div>
//             </div>
//             {/* <div className="mt-8">
//               <h2 className="text-lg font-semibold text-gray-800">Meet the Mentors</h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//                 {currentMentor?.map((mentor, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition-all duration-500"
//                   >
//                     <div className="flex flex-col items-center text-center">
//                       <img
//                         src={mentor.profileImage || '/api/placeholder/150/150'}
//                         alt={mentor.name}
//                         className="w-32 h-32 rounded-full mb-4"
//                       />
//                       <h3 className="text-2xl font-semibold text-gray-800">{mentor.name}</h3>
//                       <p className="text-lg text-gray-600">{mentor.expertise}</p>
//                       <p className="mt-4 text-gray-700">Email: {mentor.email}</p>
//                       <p className="mt-2 text-gray-700">Contact: {mentor.contact}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div> */}

//             {/* Pre-Admission Courses */}
//             <div className="mt-8 bg-white p-6 rounded-xl shadow-md hover:scale-105 hover:cursor-pointer transition-all duration-300 transform hover:shadow-lg">
//               <Link className="block">
//                 <h2 className="text-xl font-bold text-gray-800 mb-2">
//                   Take Your Pre-Admission Assessment Test
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Ready to take the next step? Assess your skills and knowledge to unlock your
//                   potential.
//                 </p>
//                 <p className="text-sm text-gray-500 mb-4">
//                   Available starting from <span className="font-semibold">11th March 2025</span>.
//                 </p>
//                 <div className="mt-4">
//                   <p className="text-blue-600 font-medium hover:underline">
//                     Click here to get started →
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;
