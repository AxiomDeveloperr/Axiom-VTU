/* eslint-disable react/prop-types */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FaUserAlt,
  FaBars,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaVideo,
  FaBook,
  FaChevronDown,
  FaGraduationCap,
  FaRProject,
  FaQuestion,
  FaHeadphones,
  FaInfo,
  FaHome,
} from 'react-icons/fa';

const Sidebar = ({ isOpen = true, onToggle }) => {
  const currentApplication = useSelector((state) => state.applications.currentApplication) || {};
  const fullName = currentApplication.fullName || 'Unknown User';
  const firstName = fullName.split(' ')[0];
  const admissionStatus = currentApplication.admission_status;

  const [activeExpandable, setActiveExpandable] = useState(null);

  const menuItems = [
    { path: '/', name: 'Home', icon: <FaHome size={20} /> },
    { path: '/dashboard', name: 'Dashboard', icon: <FaBars size={20} /> },
    { path: '/dashboard/profile', name: 'Profile', icon: <FaUserAlt size={20} /> },
    {
      name: 'Community',
      icon: <FaUsers size={20} />,
      isExpandable: true,
      subItems: [
        { path: '/dashboard/community/webinar', name: 'Webinar', icon: <FaVideo size={20} /> },
        { path: '/dashboard/community/resources', name: 'Resources', icon: <FaBook size={20} /> },
      ],
    },
    {
      name: 'My Courses',
      icon: <FaGraduationCap size={20} />,
      isExpandable: true,
      subItems: [
        {
          path: '/dashboard/online-learning',
          name: 'Online Learning Contents',
          icon: <FaBook size={20} />,
        },
      ],
    },
    { path: '/dashboard/job', name: 'Jobs & Gigs', icon: <FaRProject size={20} /> },
    { path: '/dashboard/survey', name: 'Survey', icon: <FaQuestion size={20} /> },
    { path: '/dashboard/support', name: 'Support', icon: <FaHeadphones size={20} /> },
    { path: '/dashboard/faqs', name: 'FAQs', icon: <FaInfo size={20} /> },
  ];

  const toggleExpandable = (menuName) => {
    if (isOpen) {
      setActiveExpandable((prev) => (prev === menuName ? null : menuName));
    }
  };

  const handleToggle = () => {
    setActiveExpandable(null);
    onToggle();
  };

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

  return (
    <aside
      className={`bg-tt-white border-r-2 h-screen flex flex-col transition-all duration-300 relative
        ${isOpen ? 'w-64' : 'w-28'} overflow-y-auto scrollbar-hidden`}
    >
      <button
        onClick={handleToggle}
        className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors duration-200"
        aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isOpen ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
      </button>

      <div className="mx-4 mb-6 my-9">
        <div className="bg-tt-primary text-white p-4 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="bg-black min-w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
              {fullName[0] || '?'}
            </div>
            <div
              className={`flex-1 transition-all duration-300 ${!isOpen ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}
            >
              <h1 className="text-xl font-bold leading-tight truncate">{firstName}</h1>
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              {item.isExpandable ? (
                <div>
                  <button
                    onClick={() => toggleExpandable(item.name)}
                    className={`w-full flex items-center gap-x-3 py-3 px-3 rounded-lg transition-all duration-200
                      ${activeExpandable === item.name && isOpen ? 'bg-tt-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                  >
                    <div className="min-w-[24px] flex items-center justify-center">{item.icon}</div>
                    <span
                      className={`text-sm font-medium whitespace-nowrap transition-opacity duration-200 flex-1 text-left ${!isOpen ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}
                    >
                      {item.name}
                    </span>
                    {isOpen && (
                      <FaChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${activeExpandable === item.name ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                  {activeExpandable === item.name && isOpen && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.path}>
                          <NavLink
                            to={subItem.path}
                            className={({ isActive }) =>
                              `flex items-center gap-x-3 py-2 px-3 rounded-lg transition-all duration-200
                              ${isActive ? 'bg-tt-primary bg-opacity-90 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                          >
                            <div className="min-w-[24px] flex items-center justify-center">
                              {subItem.icon}
                            </div>
                            <span className="text-sm font-medium">{subItem.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-x-3 py-3 px-3 rounded-lg transition-all duration-200
                    ${isActive ? 'bg-tt-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  <div className="min-w-[24px] flex items-center justify-center">{item.icon}</div>
                  <span
                    className={`text-sm font-medium whitespace-nowrap transition-opacity duration-200 ${!isOpen ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t border-gray-200">
        <div className={`mt-4 p-4 text-center ${getAdmissionStatusStyle()}`}>
          <span className="font-medium text-sm">
            {admissionStatus === 'ADMISSION_APPROVED' && 'Admitted'}
            {admissionStatus === 'ADMISSION_REJECTED' && 'Not Admitted'}
            {admissionStatus === 'ADMISSION_PENDING' && 'Admission in Review'}
            {!admissionStatus && 'Status Unknown'}
          </span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

// /* eslint-disable react/prop-types */
// import { useState, useEffect } from 'react';
// import { NavLink, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {
//   FaUserAlt,
//   FaBars,
//   FaChevronLeft,
//   FaChevronRight,
//   FaUsers,
//   FaVideo,
//   FaBook,
//   FaChevronDown,
//   FaGraduationCap,
//   FaRProject,
//   FaQuestion,
//   FaHeadphones,
//   FaInfo,
//   FaHome,
// } from 'react-icons/fa';

// const Sidebar = ({ isOpen = true, onToggle }) => {
//   const currentApplication = useSelector((state) => state.applications.currentApplication) || {};
//   const fullName = currentApplication.fullName || 'Unknown User';
//   const firstName = fullName.split(' ')[0];
//   const admissionStatus = currentApplication.admission_status;

//   const [activeExpandable, setActiveExpandable] = useState(null);
//   const location = useLocation();

//   const menuItems = [
//     { path: '/', name: 'Home', icon: <FaHome size={20} /> },
//     { path: '/dashboard', name: 'Dashboard', icon: <FaBars size={20} /> },
//     { path: '/dashboard/profile', name: 'Profile', icon: <FaUserAlt size={20} /> },
//     {
//       name: 'Community',
//       icon: <FaUsers size={20} />,
//       isExpandable: true,
//       subItems: [
//         { path: '/dashboard/community/webinar', name: 'Webinar', icon: <FaVideo size={20} /> },
//         { path: '/dashboard/community/resources', name: 'Resources', icon: <FaBook size={20} /> },
//       ],
//     },
//     {
//       name: 'My Courses',
//       icon: <FaGraduationCap size={20} />,
//       isExpandable: true,
//       subItems: [
//         {
//           path: '/dashboard/online-learning',
//           name: 'Online Learning Contents',
//           icon: <FaBook size={20} />,
//         },
//       ],
//     },
//     { path: '/dashboard/job', name: 'Jobs & Gigs', icon: <FaRProject size={20} /> },
//     { path: '/dashboard/survey', name: 'Survey', icon: <FaQuestion size={20} /> },
//     { path: '/dashboard/support', name: 'Support', icon: <FaHeadphones size={20} /> },
//     { path: '/dashboard/faqs', name: 'FAQs', icon: <FaInfo size={20} /> },
//   ];

//   useEffect(() => {
//     const isSubItemActive = menuItems.some((item) =>
//       item.isExpandable && item.subItems.some((subItem) => subItem.path === location.pathname)
//     );
//     if (isSubItemActive && isOpen) {
//       const activeMenu = menuItems.find((item) =>
//         item.isExpandable && item.subItems.some((subItem) => subItem.path === location.pathname)
//       );
//       setActiveExpandable(activeMenu?.name || null);
//     } else if (!isOpen) {
//       setActiveExpandable(null);
//     }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [location.pathname, isOpen]);

//   const toggleExpandable = (menuName) => {
//     setActiveExpandable((prev) => (prev === menuName ? null : menuName));
//   };

//   const handleToggle = () => {
//     if (isOpen) {
//       setActiveExpandable(null);
//     }
//     onToggle();
//   };

//   const getAdmissionStatusStyle = () => {
//     switch (admissionStatus) {
//       case 'ADMISSION_APPROVED':
//         return 'bg-green-500 text-white';
//       case 'ADMISSION_REJECTED':
//         return 'bg-red-500 text-white';
//       case 'ADMISSION_PENDING':
//         return 'bg-yellow-500 text-black';
//       default:
//         return 'bg-gray-200 text-gray-600';
//     }
//   };

//   return (
//     <aside
//       className={`bg-tt-white border-r-2 h-screen flex flex-col transition-all duration-300 relative
//     ${isOpen ? 'w-64' : 'w-28'} overflow-y-auto scrollbar-hidden`}
//     >
//       <button
//         onClick={handleToggle}
//         className="absolute -right-3 top-20 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors duration-200"
//         aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
//       >
//         {isOpen ? <FaChevronLeft size={14} /> : <FaChevronRight size={14} />}
//       </button>

//       <div className="mx-4 mb-6 my-9">
//         <div className="bg-tt-primary text-white p-4 rounded-xl">
//           <div className="flex items-center gap-4">
//             <div className="bg-black min-w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shrink-0">
//               {fullName[0] || '?'}
//             </div>
//             <div
//               className={`flex-1 transition-all duration-300 ${!isOpen ? 'w-0 opacity-0 hidden' : 'w-auto opacity-100'}`}
//             >
//               <h1 className="text-xl font-bold leading-tight truncate">{firstName}</h1>
//             </div>
//           </div>
//         </div>
//       </div>

//       <nav className="flex-1 px-4">
//         <ul className="space-y-2">
//           {menuItems.map((item) => (
//             <li key={item.name}>
//               {item.isExpandable ? (
//                 <div>
//                   <button
//                     onClick={() => toggleExpandable(item.name)}
//                     className={`w-full flex items-center gap-x-3 py-3 px-3 rounded-lg transition-all duration-200
//                       ${activeExpandable === item.name ? 'bg-tt-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`}
//                   >
//                     <div className="min-w-[24px] flex items-center justify-center">{item.icon}</div>
//                     <span
//                       className={`text-sm font-medium whitespace-nowrap transition-opacity duration-200 flex-1 text-left ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}
//                     >
//                       {item.name}
//                     </span>
//                     {isOpen && (
//                       <FaChevronDown
//                         size={12}
//                         className={`transition-transform duration-200 ${activeExpandable === item.name ? 'rotate-180' : ''}`}
//                       />
//                     )}
//                   </button>
//                   {activeExpandable === item.name && isOpen && (
//                     <ul className="mt-2 ml-4 space-y-2">
//                       {item.subItems.map((subItem) => (
//                         <li key={subItem.path}>
//                           <NavLink
//                             to={subItem.path}
//                             className={({ isActive }) =>
//                               `flex items-center gap-x-3 py-2 px-3 rounded-lg transition-all duration-200
//                               ${isActive ? 'bg-tt-primary bg-opacity-90 text-white' : 'text-gray-600 hover:bg-gray-100'}`
//                             }
//                           >
//                             <div className="min-w-[24px] flex items-center justify-center">
//                               {subItem.icon}
//                             </div>
//                             <span className="text-sm font-medium">{subItem.name}</span>
//                           </NavLink>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ) : (
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `flex items-center gap-x-3 py-3 px-3 rounded-lg transition-all duration-200
//                     ${isActive ? 'bg-tt-primary text-white' : 'text-gray-600 hover:bg-gray-100'}`
//                   }
//                 >
//                   <div className="min-w-[24px] flex items-center justify-center">{item.icon}</div>
//                   <span
//                     className={`text-sm font-medium whitespace-nowrap transition-opacity duration-200 ${!isOpen ? 'opacity-0 w-0' : 'opacity-100'}`}
//                   >
//                     {item.name}
//                   </span>
//                 </NavLink>
//               )}
//             </li>
//           ))}
//         </ul>
//       </nav>

//       <div className="mt-auto border-t border-gray-200">
//         <div className={`mt-4 p-4 text-center ${getAdmissionStatusStyle()}`}>
//           <span className="font-medium text-sm">
//             {admissionStatus === 'ADMISSION_APPROVED' && 'Admitted'}
//             {admissionStatus === 'ADMISSION_REJECTED' && 'Not Admitted'}
//             {admissionStatus === 'ADMISSION_PENDING' && 'Admission in Review'}
//             {!admissionStatus && 'Status Unknown'}
//           </span>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;
