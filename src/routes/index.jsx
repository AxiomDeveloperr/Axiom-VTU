import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import LandingPage from "../pages/LandingPage"
import ContactPage from '../pages/ContactPage';

import Dashboard from '../pages/Dashboard';
import MainContainer from '../pages/MainContainer';
import ProfileUpdate from '../pages/ProfileUpdate';
import TransactionHistory from '../pages/TransactionHistory';
import AirtimeToCash from '../pages/AirtimeToCash';




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
        <Route path='dashboard/transaction-history' element={<TransactionHistory />} />
        <Route path="dashboard/airtime-to-cash" element={<AirtimeToCash />} />
      </Route>
    </>,
  ),
);

export default router;
