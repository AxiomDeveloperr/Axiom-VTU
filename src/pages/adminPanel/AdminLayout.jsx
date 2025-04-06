import { Outlet, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import AdminHeader from './AdminHeader';
import Breadcrumb from '../../components/Breadcrumb';
import AdminSideBar from './AdminSideBar';
import { fetchCohortById, fetchCohorts } from '../../redux/features/admin/cohortSlice'; // Import the cohort actions

const AdminLayout = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { currentCohort, cohorts, loading: cohortsLoading } = useSelector((state) => state.cohorts); // Get currentCohort, cohorts, and loading state
  const dispatch = useDispatch();
  const [showCohortModal, setShowCohortModal] = useState(false); // State to control the modal

  useEffect(() => {
    // Fetch cohorts when the component mounts
    dispatch(fetchCohorts());
  }, [dispatch]);

  useEffect(() => {
    // Show the cohort selection modal if no cohort is selected and cohorts are available
    if (!currentCohort && cohorts.length > 0 && !cohortsLoading) {
      setShowCohortModal(true);
    }
  }, [currentCohort, cohorts, cohortsLoading]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== 'ADMIN') {
    return <Navigate to="/unauthorized" replace />;
  }

  const handleCohortSelect = (cohortId) => {
    dispatch(fetchCohortById(cohortId)); // Fetch the selected cohort by ID
    setShowCohortModal(false); // Close the modal after selection
  };

  return (
    <div>
      {/* Cohort Selection Modal */}
      {showCohortModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Select a Cohort</h2>
              <button
                onClick={() => setShowCohortModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="space-y-2">
              {cohortsLoading ? (
                <p>Loading cohorts...</p>
              ) : cohorts.length > 0 ? (
                cohorts.map((cohort) => (
                  <div
                    key={cohort.id}
                    onClick={() => handleCohortSelect(cohort.id)}
                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer rounded-md"
                  >
                    {cohort.name}
                  </div>
                ))
              ) : (
                <p>No cohorts available.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className="relative flex overflow-hidden">
        {/* Sidebar Navigation */}
        <AdminSideBar />
        <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
          {/* Admin Header */}
          <AdminHeader />
          <div className="p-2">
            <div
              className="bg-[url('./assets/images/bg.jpg')] bg-cover bg-center -z-50 absolute inset-0"
              style={{
                opacity: '0.1',
              }}
            ></div>
            <Breadcrumb />
            {/* Show a fallback message if no cohort is selected */}
            {!currentCohort && !cohortsLoading && (
              <div className="bg-yellow-100 p-4 rounded-md mb-4">
                <p className="text-yellow-800">
                  No cohort selected. Please select a cohort to proceed.
                </p>
              </div>
            )}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

// import { Outlet, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import AdminHeader from './AdminHeader';
// import Breadcrumb from '../../components/Breadcrumb';
// import AdminSideBar from './AdminSideBar';

// const AdminLayout = () => {
//   const { user, isAuthenticated } = useSelector((state) => state.auth);
// //   console.log(user);

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//     if (user.role !== 'ADMIN') {
//       return <Navigate to="/unauthorized" replace />;
//     }

//   return (
//     <div>
//       <div className="relative flex overflow-hidden">
//         {/* Sidebar Navigation */}
//         <AdminSideBar />
//         <div className="flex-1 flex flex-col min-h-screen w-full bg-opacity-50">
//           {/* Admin Header */}
//           <AdminHeader />
//           <div className="p-2">
//             <div
//               className="bg-[url('./assets/images/bg.jpg')] bg-cover bg-center -z-50 absolute inset-0"
//               style={{
//                 opacity: '0.1',
//               }}
//             ></div>
//             <Breadcrumb />
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
