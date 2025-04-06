import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import setpassword from '../../assets/setpassword.jpg';
import CustomInput from '../../components/CustomInput';
import AuthNavBar from '../../myComponents/SimpleNav';

function SetNewPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(5); // Countdown for redirection

  const api_url = import.meta.env.VITE_API_URL;

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      notifyError('Please fill in both fields.');
      return;
    }

    if (!isPasswordValid(password)) {
      notifyError(
        'Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.',
      );
      return;
    }

    if (password !== confirmPassword) {
      notifyError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${api_url}/auth/reset-password`, {
        token,
        newPassword: password,
      });

      if (response.status === 200 || response.status === 201) {
        notifySuccess('Your password has been successfully reset.');
        setPassword('');
        setConfirmPassword('');

        // Start the countdown for redirection
        const timer = setInterval(() => setCountdown((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
        const redirectTimer = setTimeout(() => {
          navigate('/login');
        }, 5000);

        return () => {
          clearInterval(timer);
          clearTimeout(redirectTimer);
        };
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError('Failed to reset password. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthNavBar />
      <div className="mx-auto w-auto max-w-5xl px-4 py-4 lg:px-0 lg:py-2 sm:px-4 gap-9 flex flex-col md:flex-row justify-center items-center min-h-screen">
        <div className="w-full md:w-1/2 order-1">
          <img
            src={setpassword}
            alt="Set Password illustration"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-lg p-8 shadow-lg">
          <p className="text-2xl font-bold mb-4 text-tt-primary">Set New Password</p>
          <h2 className="text-3xl font-bold leading-snug pb-6">
            Set a new password for your IOTBTECH account
          </h2>
          <form onSubmit={handleSubmit}>
            <CustomInput
              type="password"
              placeholder="Create new password"
              label="Create new password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CustomInput
              type="password"
              placeholder="Re-enter your password"
              label="Re-enter your password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button
              type="submit"
              className="w-full p-3 mt-4 bg-tt-primary text-white rounded-md hover:bg-tt-secondary transition duration-300"
              disabled={loading}
            >
              {loading ? 'Setting Password...' : 'Set Password'}
            </button>
          </form>

          {countdown > 0 && (
            <p className="text-sm text-gray-500 mt-2">
              You will be automatically redirected to the login page in {countdown}s.
            </p>
          )}
        </div>

        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      </div>
    </>
  );
}

export default SetNewPassword;
