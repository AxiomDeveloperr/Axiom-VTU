import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import LandingPage from "../pages/LandingPage"
import ContactPage from '../pages/ContactPage';

import Dashboard from '../pages/Dashboard';
import MainContainer from '../pages/MainContainer';
import ProfileUpdate from '../pages/ProfileUpdate';




const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path='/' element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='contact' element={<ContactPage />} />

      </Route>

      {/* Dashboard Pages */}
      <Route path='/dashboard' element={<Dashboard />} >
        <Route index element={<MainContainer />} />
        <Route path='update-profile' element={<ProfileUpdate />} />
      </Route>
    </>,
  ),
);

export default router;
