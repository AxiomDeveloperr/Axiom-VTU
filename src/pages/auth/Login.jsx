import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { clearAuthError, clearAuthState, loginUser } from '../../redux/features/auth/authSlice';
import CustomInput from '../../components/CustomInput';
import login from '../../assets/login.png';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { validateLogin } from '../../utils/validation';
import AuthNavBar from '../../myComponents/SimpleNav';
import { persistor } from '../../redux/store/store';
import { clearEntireState } from '../../redux/store/thunks';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, isAuthenticated, user, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    dispatch(clearAuthError());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated && !user && status === 'idle') {
      dispatch(clearAuthState());
      persistor.purge().catch(console.error);
    }
  }, [dispatch, isAuthenticated, user, status]);

  useEffect(() => {
    if (isAuthenticated && user) {
      navigate('/');
    }
  }, [isAuthenticated, user, navigate]);

  useEffect(() => {
    if (error && status === 'failed') {
      setSnackbarMessage(error || 'An error occurred. Please try again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      dispatch(clearEntireState());
    }
  }, [error, status, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSnackbarMessage('Please fix validation errors.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }
    setErrors({});
    try {
      const response = await dispatch(loginUser(formData)).unwrap();
      setSnackbarMessage(response.message || 'Login successful!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
      setFormData({ email: '', password: '' });
      navigate('/');
    } catch (err) {
      setSnackbarMessage(err || 'Login failed. Please try again later.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      dispatch(clearEntireState());
    }
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <>
      <AuthNavBar />
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="hidden md:block md:w-1/2 max-w-lg">
            <img
              src={login}
              alt="Login illustration"
              className="w-full h-auto max-h-[500px] object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 max-w-lg bg-white rounded-xl p-8 flex flex-col shadow-lg">
            <h2 className="text-3xl font-bold text-center md:text-left mb-8">WELCOME BACK!</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <CustomInput
                type="email"
                label="Enter Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="text-lg"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <div className="relative">
                <CustomInput
                  type={showPassword ? 'text' : 'password'}
                  label="Enter Your Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="text-lg pr-10"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-11 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  {showPassword ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

              <button
                type="submit"
                className="w-full p-4 bg-tt-primary text-white rounded-md hover:bg-tt-primary-dark transition duration-300 flex justify-center items-center text-lg"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <span className="animate-spin h-6 w-6 border-2 border-white border-t-transparent rounded-full"></span>
                ) : (
                  'Login'
                )}
              </button>
            </form>

            <div className="mt-6 text-center md:text-left space-y-3">
              <p className="text-gray-700 text-base">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="text-tt-primary hover:underline">
                  Sign Up
                </Link>
              </p>
              <p className="text-gray-700 text-base">
                Forgot Password?{' '}
                <Link to="/forget-password" className="text-tt-primary hover:underline">
                  Reset here
                </Link>
              </p>
              {/* <div className="space-y-2 pt-2">
                <p className="text-gray-700 text-base">
                  <Link to="/privacy" className="text-tt-primary hover:underline">
                    Privacy Policy
                  </Link>
                </p>
                <p className="text-gray-700 text-base">
                  <Link to="/terms" className="text-tt-primary hover:underline">
                    Terms & Conditions
                  </Link>
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={5000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default Login;
