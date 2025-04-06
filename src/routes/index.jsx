import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import SetPassword from '../pages/auth/SetPassword';
import PostDetails from '../pages/blog/PostDetails';
import PostListing from '../pages/blog/PostListing';
import NotFound from '../pages/NotFound';
import Dashboard from '../pages/Dashboard';
import Admission from '../pages/Admission';
import RegistrationLogin from '../pages/auth/RegistrationLogin';
import AdminDashboard from '../pages/adminPanel/AdminDashboard';
import TrainingProgress from '../pages/adminPanel/TrainingProgress';
import ProfilePage from '../components/Profile';
import AssessmentPage from '../pages/AssessmentPage';
import QuestionPage from '../pages/QuestionPage';
import WebinarPage from '../components/Webinar';
import ResourcesPage from '../components/Resources';
import AdmittedStudents from '../pages/adminPanel/AdmittedStudents';
import TrainingModules from '../pages/adminPanel/TrainingModules';
import StudentDetails from '../pages/adminPanel/StudentDetails';
import StudentDetailsMany from '../pages/adminPanel/StudentDetailsMany';
import AddModule from '../pages/adminPanel/AddModule';
import AddStudentPage from '../pages/adminPanel/AddStudentPage';
import AttendanceStudent from '../pages/adminPanel/AttendanceStudent';
import AdminProfilePage from '../pages/adminPanel/AdminProfilePage';
import GeneralSettings from '../pages/adminPanel/GeneralSettings';
import MentorDetails from '../pages/adminPanel/MentorDetails';
import MentorDetailsMany from '../pages/adminPanel/MentorDetailsMany';
import ApplicationForm from '../pages/applicantPage/ApplicationForm';
import ApplicantsTable from '../pages/applicantPage/ApplicantsTable';
// import MentorAssign from '../pages/mentorManagement/MentorAssign';
import MentorView from '../pages/mentorManagement/MentorView';
import AddMentor from '../pages/mentorManagement/AddMentor';
import MentorLists from '../pages/mentorManagement/MentorLists';
import AdminLayout from '../pages/adminPanel/AdminLayout';
import StackPage from '../pages/programManagement/StackPage';
import JobsAndGigsPage from '../components/Jobs-Gigs';
import SurveyPage from '../components/Survey';
import SupportPage from '../components/Support';
import FaqPage from '../components/Faqs';
import OnlineLearning from '../components/Online-Learning';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy';
import TermsCondition from '../pages/policy/TermsCondition';
import VerifiedEmail from '../myComponents/VerifiedEmail/VerifiedEmail';
import Guidelines from '../myComponents/Application Guidelines/Guidelines';
import LandingPage from '../pages/LandingPage';
import TrainingMaterials from '../pages/programManagement/TrainingMaterials';
import ApplicantionFormPage from '../pages/ApplicantionFormPage';
import UnauthorizedPage from '../components/UnauthorizedPage';
import SetNewPassword from '../pages/auth/ResetToNewPassword';
// import Loaderr from '../components/Loaderr';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Authentication pages */}
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/reset-password" element={<SetNewPassword />} />
        <Route path="/registration-login" element={<RegistrationLogin />} />
        <Route path="/verify-email" element={<VerifiedEmail />} />
        <Route path="/application-guidelines" element={<Guidelines />} />
        <Route path="/application-form" element={<ApplicantionFormPage />} />
      </>

      {/* Website pages */}

      <Route index element={<LandingPage />} errorElement={<NotFound />}>
        {/* <Route index element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/component-test" element={<ComponentTest />} />
        <Route path="/guideline" element={<Guidelines />} /> */}
      </Route>

      {/* UNAUTHORIZED */}
      <Route path="/unauthorized" element={<UnauthorizedPage />} />
      {/* <Route path="/loaderr" element={<Loaderr />} /> */}

      {/* Dashboard pages */}

      <Route path="/dashboard/dashboard" element={<Dashboard />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/profile" element={<ProfilePage />} />
      <Route path="/dashboard/community/webinar" element={<WebinarPage />} />
      <Route path="/dashboard/community/resources" element={<ResourcesPage />} />
      <Route path="/dashboard/community/webinar" element={<WebinarPage />} />
      <Route path="/dashboard/community/resources" element={<ResourcesPage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/question" element={<QuestionPage />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/dashboard/job" element={<JobsAndGigsPage />} />
      <Route path="/dashboard/survey" element={<SurveyPage />} />
      <Route path="/dashboard/support" element={<SupportPage />} />
      <Route path="/dashboard/faqs" element={<FaqPage />} />
      {/* <Route path='/dashboard/settings' element={<SettingsPage/> } /> */}
      <Route path="/dashboard/online-learning" element={<OnlineLearning />} />

      {/* Admin Dashboard */}
      <Route path="/admin-dashboard" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-student" element={<AddStudentPage />} />
        <Route path="training-progress" element={<TrainingProgress />} />
        <Route path="all-students" element={<AdmittedStudents />} />
        <Route path="training-modules" element={<TrainingModules />} />
        <Route path="students-details" element={<StudentDetailsMany />} />
        <Route path="students-details/:studentId" element={<StudentDetails />} />
        <Route path="add-module" element={<AddModule />} />
        <Route path="students-attendance" element={<AttendanceStudent />} />

        <Route path="profile" element={<AdminProfilePage />} />
        <Route path="setting" element={<GeneralSettings />} />
        {/* <Route path="assign-mentor" element={<MentorAssign />} /> */}
        <Route path="all-mentors" element={<MentorLists />} />
        <Route path="mentors/details/:mentorId" element={<MentorDetails />} />
        <Route path="mentors-details" element={<MentorDetailsMany />} />

        {/* Applicant Pages */}
        <Route path="applicant-form" element={<ApplicationForm />} />
        <Route path="applicants-list" element={<ApplicantsTable />} />

        {/* Mentor Management */}
        {/* <Route path="assign-mentor" element={<MentorAssign />} /> */}
        <Route path="view/mentor" element={<MentorView />} />
        <Route path="add-mentor" element={<AddMentor />} />

        {/* Program Management */}
        <Route path="all-courses" element={<StackPage />} />
        <Route path="training-materials" element={<TrainingMaterials />} />
      </Route>

      {/* Blog pages */}
      <>
        <Route path="/blogs" element={<PostListing />} />
        <Route path="/blogs/:id" element={<PostDetails />} />
      </>

      {/* Policy Pages */}
      <>
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsCondition />} />
      </>
    </>,
  ),
);

export default router;
