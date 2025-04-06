import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import ForgotPasswordImg from '../../assets/forgotpassword.jpg';
import CustomInput from '../../components/CustomInput';
import AuthNavBar from '../../myComponents/SimpleNav';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  // const api_url = 'http://localhost:3000';
  // const api_url = 'https://api.iotbtech.org.ng';
  const api_url = import.meta.env.VITE_API_URL;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!email) {
      setError('Please enter your email.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${api_url}/auth/forgot-password`, { email });

      if (response.status === 200 || response.status === 201) {
        toast.success(
          response.data.message || 'Password recovery instructions sent to your email.',
        );
        setEmail(''); // Clear input
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to connect. Please check your network and try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <AuthNavBar />
      <div className="mx-auto w-auto max-w-5xl px-4 py-10 flex flex-col md:flex-row gap-10 items-center min-h-screen">
        <ToastContainer />
        <div className="w-full md:w-1/2">
          <img
            src={ForgotPasswordImg}
            alt="Forgot Password illustration"
            className="w-full h-auto object-cover rounded-md shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-tt-primary mb-2">Reset Password</p>
          <h2 className="text-3xl font-bold leading-snug mb-4">Forgot your password?</h2>
          <p className="text-gray-600 mb-6">
            Don’t worry—it happens to the best of us. Enter your email below to recover your
            password.
          </p>

          <form onSubmit={handleSubmit}>
            <CustomInput
              type="email"
              placeholder="your-email@gmail.com"
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              className="w-full p-3 mt-4 bg-tt-primary text-white rounded-md hover:bg-tt-secondary transition duration-300"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
