import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-semibold text-red-600 mb-4">Unauthorized Access</h2>
        <p className="text-lg text-gray-600 mb-6">You do not have permission to view this page.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Go Back to Home
        </button>
        <p className="text-sm text-gray-500 mt-4">
          You will be redirected to the home page in 5 seconds...
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
