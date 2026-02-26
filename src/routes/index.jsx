import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import LandingPage from "../pages/LandingPage"
import ContactPage from '../pages/ContactPage';

import Dashboard from '../pages/Dashboard';
import MainContainer from '../pages/MainContainer';
import ProfileUpdate from '../pages/ProfileUpdate';
import TransactionHistory from '../pages/TransactionHistory';
import AirtimeToCash from '../pages/AirtimeToCash';
import TVSubscription from '../pages/TVSubscription';
import AuthPage from "../pages/AuthPage";
import Airtime from '../components/Airtime';
import BuyData from '../components/BuyData';
import NotificationPage from '../components/NotificationPage';
import FAQPage from '../pages/faq';



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/signup" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage />} />
      <Route path='/' element={<AppLayout />}>
        <Route index element={<LandingPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='faq' element={<FAQPage />} />
      </Route>

      {/* Dashboard Pages */}
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<MainContainer />} />
        <Route path='notification' element={<NotificationPage />} />
        <Route path='update-profile' element={<ProfileUpdate />} />
        <Route path='transaction-history' element={<TransactionHistory />} />
        <Route path="airtime-to-cash" element={<AirtimeToCash />} />
        <Route path="tv-subscription" element={<TVSubscription />} />
        <Route path="buy-airtime" element={<Airtime />} />
        <Route path='buy-data' element={<BuyData />} />
 

      </Route>
    </>
  )
);

export default router;
