import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
// import NotFound from '../pages/NotFound';

const websiteRoutes = (
  <Routes>
    <Route index element={<LandingPage />} />
  </Routes>
);

export default websiteRoutes;
