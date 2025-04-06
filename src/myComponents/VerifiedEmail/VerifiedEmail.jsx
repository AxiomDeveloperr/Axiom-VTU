import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Logo from './iotbtech.svg';
import { SiVerizon } from 'react-icons/si';
import Loader from './Loader';

const VerifiedEmail = () => {
  const [loading, setLoading] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('');
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const apiUrl = import.meta.env.VITE_API_URL;
  const clientUrl = import.meta.env.VITE_CLIENT_URL;
  const [countdown, setCountdown] = useState(5);

  const verifyEmail = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${apiUrl}/auth/verify-email`, { token });
      setVerificationStatus(response.data.message || 'Email verified successfully.');
    } catch (error) {
      console.error('Verification error:', error);
      setVerificationStatus(
        error.response?.data?.message || 'Failed to verify email. Please try again later.',
      );
    } finally {
      setLoading(false);
    }
  }, [token, apiUrl]);

  useEffect(() => {
    if (token) {
      verifyEmail();
    } else {
      setVerificationStatus('Invalid verification link. Token is missing.');
    }
  }, [token, verifyEmail]);

  useEffect(() => {
    const timer = setInterval(() => setCountdown((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    const redirectTimer = setTimeout(() => {
      window.location.href = `${clientUrl}/login`;
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [clientUrl]);

  const handleLoginClick = () => {
    window.location.href = `${clientUrl}/login`;
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="absolute top-6 left-6">
        <button onClick={() => (window.location.href = clientUrl)}>
          <img src={Logo} alt="IOTB Tech Logo" className="w-28 h-28 md:w-32 md:h-32 -mt-8" />
        </button>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-full max-w-md">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div
              role="img"
              aria-label="Verification Status Icon"
              className="flex justify-center items-center bg-green-100 text-green-600 w-16 h-16 rounded-full mx-auto"
            >
              <SiVerizon size={40} />
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-4">{verificationStatus}</h2>

            <p className="text-gray-600 mt-2">
              {verificationStatus === 'Email verified successfully.'
                ? 'Your email has been successfully verified. You can now proceed to log in.'
                : 'Please check the status and proceed to log in.'}
            </p>
          </>
        )}

        <button
          onClick={handleLoginClick}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
        >
          Log In {countdown > 0 ? `(${countdown}s)` : ''}
        </button>

        <p className="text-sm text-gray-500 mt-2">
          You will be automatically redirected to the login page in {countdown}s.
        </p>
      </div>
    </section>
  );
};

export default VerifiedEmail;
