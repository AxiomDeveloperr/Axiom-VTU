// Import necessary components and React Router functions
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import SetPassword from '../pages/auth/SetPassword';
import RegistrationLogin from '../pages/auth/RegistrationLogin';
import VerifiedEmail from '../myComponents/VerifiedEmail/VerifiedEmail';
import Guidelines from '../myComponents/Application Guidelines/Guidelines';

// Define all the routes for authentication
const authRoutes = (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/forget-password" element={<ForgotPassword />} />
    <Route path="/set-password" element={<SetPassword />} />
    <Route path="/registration-login" element={<RegistrationLogin />} />
    <Route path="/verified" element={<VerifiedEmail />} />
    <Route path="/application-guidelines" element={<Guidelines />} />
  </Routes>
);

export default authRoutes;
