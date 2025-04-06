// Importing necessary components and React Router functions
import { Routes, Route } from 'react-router-dom';

// Importing the components for each route
import AdminDashboard from '../pages/adminPanel/AdminDashboard';
import AddStudentPage from '../pages/adminPanel/AddStudentPage';
import TrainingProgress from '../pages/adminPanel/TrainingProgress';
import AdmittedStudents from '../pages/adminPanel/AdmittedStudents';
import TrainingModules from '../pages/adminPanel/TrainingModules';
import StudentDetails from '../pages/adminPanel/StudentDetails';
import StudentDetailsMany from '../pages/adminPanel/StudentDetailsMany';
import AddModule from '../pages/adminPanel/AddModule';
import AttendanceStudent from '../pages/adminPanel/AttendanceStudent';
import AdminProfilePage from '../pages/adminPanel/AdminProfilePage';
import GeneralSettings from '../pages/adminPanel/GeneralSettings';
// import MentorAssign from '../pages/mentorManagement/MentorAssign';
import MentorLists from '../pages/mentorManagement/MentorLists';
import MentorDetails from '../pages/mentorManagement/MentorDetails';
import MentorDetailsMany from '../pages/mentorManagement/MentorDetailsMany';
import ApplicationForm from '../pages/applicantPage/ApplicationForm';
import ApplicantsTable from '../pages/applicantPage/ApplicantsTable';
import AdminLayout from '../pages/adminPanel/AdminLayout';

// Define all the routes for the admin section in a `Routes` array
const adminRoutes = (
  <Routes>
    <Route path="/admin/panel" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="students/add/student" element={<AddStudentPage />} />
      <Route path="students/training" element={<TrainingProgress />} />
      <Route path="students/all/students" element={<AdmittedStudents />} />
      <Route path="training/modules" element={<TrainingModules />} />
      <Route path="students/details" element={<StudentDetailsMany />} />
      <Route path="students/details/:studentId" element={<StudentDetails />} />
      <Route path="programs/add/module" element={<AddModule />} />
      <Route path="students/attendance" element={<AttendanceStudent />} />
      <Route path="profile" element={<AdminProfilePage />} />
      <Route path="setting" element={<GeneralSettings />} />
      {/* <Route path="mentors/assign/mentor" element={<MentorAssign />} /> */}
      <Route path="all/mentors" element={<MentorLists />} />
      <Route path="mentors/details/:mentorId" element={<MentorDetails />} />
      <Route path="mentors/details" element={<MentorDetailsMany />} />
      <Route path="applicant/form" element={<ApplicationForm />} />
      <Route path="applicants/list" element={<ApplicantsTable />} />
    </Route>
  </Routes>
);

export default adminRoutes;
