import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import ProfilePage from '../components/Profile';
import WebinarPage from '../components/Webinar';
import ResourcesPage from '../components/Resources';
import AssessmentPage from '../pages/AssessmentPage';
import QuestionPage from '../pages/QuestionPage';
import JobsAndGigsPage from '../components/Jobs-Gigs';
import SurveyPage from '../components/Survey';
import SupportPage from '../components/Support';
import FaqPage from '../components/Faqs';
import OnlineLearning from '../components/Online-Learning';

const dashboardRoutes = (
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/dashboard/profile" element={<ProfilePage />} />
    <Route path="/dashboard/community/webinar" element={<WebinarPage />} />
    <Route path="/dashboard/community/resources" element={<ResourcesPage />} />
    <Route path="/assessment" element={<AssessmentPage />} />
    <Route path="/question" element={<QuestionPage />} />
    <Route path="/dashboard/job" element={<JobsAndGigsPage />} />
    <Route path="/dashboard/survey" element={<SurveyPage />} />
    <Route path="/dashboard/support" element={<SupportPage />} />
    <Route path="/dashboard/faqs" element={<FaqPage />} />
    <Route path="/dashboard/online-learning" element={<OnlineLearning />} />
  </Routes>
);

export default dashboardRoutes;
