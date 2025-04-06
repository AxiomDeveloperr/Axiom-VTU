import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllApplications } from '../../redux/features/application/applicationSlice';
import { fetchMentors } from '../../redux/features/admin/mentorSlice';
import { fetchCohortById } from '../../redux/features/admin/cohortSlice';
import { useNavigate } from 'react-router-dom';

// Reusable DashboardItem Component
// eslint-disable-next-line react/prop-types
const DashboardItem = ({ title, description, value, navigateTo }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded shadow-lg flex justify-between">
      <div>
        <button onClick={() => navigate(navigateTo)}>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </button>
      </div>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

// Main Component with Data
const AdminDashboardItemDisplayBox = () => {
  const dispatch = useDispatch();
  const { allApplications, loading: applicationsLoading } = useSelector(
    (state) => state.applications,
  );
  const { mentors, loading: mentorsLoading } = useSelector((state) => state.mentors);
  const { currentCohort, loading: cohortLoading } = useSelector((state) => state.cohorts);

  // Fetch data if not available
  useEffect(() => {
    if (!allApplications || allApplications.length === 0) {
      dispatch(fetchAllApplications());
    }
    if (!mentors || mentors.length === 0) {
      dispatch(fetchMentors());
    }
    if (!currentCohort || !currentCohort.courses) {
      dispatch(fetchCohortById(currentCohort?.id)); // Fetch the current cohort by ID
    }
  }, [dispatch, allApplications, mentors, currentCohort]);

  // Fallback values if data is not available
  const totalApplicants = applicationsLoading ? 'Loading...' : allApplications?.length || 0;
  const totalMentors = mentorsLoading ? 'Loading...' : mentors?.length || 0;
  const courseLength = cohortLoading ? 'Loading...' : currentCohort?.courses?.length || 0;

  // Data for the dashboard items
  const items = [
    {
      title: 'Total Applicants',
      description: 'All Applicants for this cohort',
      value: totalApplicants,
      navigateTo: '/admin-dashboard/applicants-list',
    },
    {
      title: 'Total Admitted Students',
      description: 'Cohort Students',
      value: 0, // Replace with actual data if available
      navigateTo: '',
    },
    {
      title: 'Total Mentors',
      description: 'Mentors available',
      value: totalMentors,
      navigateTo: '/admin-dashboard/all-mentors',
    },
    {
      title: 'Courses Covered',
      description: 'Various tech skills',
      value: courseLength,
      navigateTo: '/admin-dashboard/all-courses',
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
        {items.map((item, index) => (
          <DashboardItem
            key={index}
            title={item.title}
            description={item.description}
            value={item.value}
            navigateTo={item.navigateTo}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardItemDisplayBox;
