import { Routes, Route } from 'react-router-dom';
import PrivacyPolicy from '../pages/policy/PrivacyPolicy';
import TermsCondition from '../pages/policy/TermsCondition';

const policyRoutes = (
  <Routes>
    <Route path="/privacy" element={<PrivacyPolicy />} />
    <Route path="/terms" element={<TermsCondition />} />
  </Routes>
);

export default policyRoutes;
