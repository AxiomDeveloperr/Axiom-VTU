import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import UploadImage from '../../components/UploadImage';
import { useDispatch, useSelector } from 'react-redux';
import {
  addApplication,
  fetchApplicationByUserId,
} from '../../redux/features/application/applicationSlice';
import { useNavigate } from 'react-router-dom';
import { fetchCohortById, fetchCohorts } from '../../redux/features/admin/cohortSlice';
import Loaderr from '../../components/Loaderr';

const ApplicationForm = () => {
  const dispatch = useDispatch();
  const { currentCohort, cohorts } = useSelector((state) => state.cohorts);
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const { currentApplication } = useSelector((state) => state.applications);
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state for the Loader component

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    reset,
  } = useForm();

  const [profilePicture, setProfilePicture] = useState('');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      alert('You must be logged in to access this page.'); // Show alert
      navigate('/login'); // Redirect to login page
    }
  }, [isAuthenticated, navigate]);

  // Redirect if the user has already applied
  useEffect(() => {
    if (currentApplication) {
      alert('Already Applied!');
      navigate('/dashboard');
    }
  }, [currentApplication, navigate]);

  // Fetch cohorts if not already loaded
  useEffect(() => {
    if (!cohorts) {
      dispatch(fetchCohorts());
    }
  }, [cohorts, dispatch]);

  // Fetch detailed information about a specific cohort once cohorts are loaded
  useEffect(() => {
    if (cohorts.length > 0) {
      const cohortId = cohorts[0].id; // Assuming you want to fetch the first cohort
      dispatch(fetchCohortById(cohortId));
    }
  }, [cohorts, dispatch]);

  // Fetch the user's application if the user ID is available
  useEffect(() => {
    if (user?.id) {
      dispatch(fetchApplicationByUserId(user.id));
    }
  }, [dispatch, user?.id]);

  const ageOptions = ['14-18 years', '19-22 years', '23-26 years', '27-30 years', '31 and above'];
  const batteryLife = [
    'Less than 2 hours',
    '2-4 hours',
    '5-7 hours',
    '8-10 hours',
    'More 10 hours',
  ];
  const religionOptions = ['Islam', 'Christianity'];
  const geoPoliticalZones = [
    'North Central',
    'North East',
    'North West',
    'South East',
    'South South',
    'South West',
  ];
  const educationOptions = ["O'level", 'Undergraduate', 'Diploma', 'Postgraduate', 'Graduate'];
  const statusOptions = [
    'Student (Not Final Year) ',
    'Student (Final Year)',
    'Unemployed',
    'Corp Member',
    'Self Employed',
    'Employed',
  ];
  const statesInNigeria = [
    'Abia',
    'Adamawa',
    'Akwa Ibom',
    'Anambra',
    'Bauchi',
    'Bayelsa',
    'Benue',
    'Borno',
    'Cross River',
    'Delta',
    'Ebonyi',
    'Edo',
    'Ekiti',
    'Enugu',
    'Gombe',
    'Imo',
    'Jigawa',
    'Kaduna',
    'Kano',
    'Katsina',
    'Kebbi',
    'Kogi',
    'Kwara',
    'Lagos',
    'Nasarawa',
    'Niger',
    'Ogun',
    'Ondo',
    'Osun',
    'Oyo',
    'Plateau',
    'Rivers',
    'Sokoto',
    'Taraba',
    'Yobe',
    'Zamfara',
    'Federal Capital Territory (FCT)',
  ];
  const dedicationHours = ['5-10 hours', '10-15 hours', '15-20 hours'];

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitError(null);
    setLoading(true); // Set loading to true when submission starts

    const formData = {
      cohortId: currentCohort.id,
      fullName: `${data.firstName} ${data.middleName ? data.middleName + ' ' : ''}${data.lastName}`,
      email: data.email,
      phoneNumber: data.phone,
      gender: data.gender,
      timsanOrIOTB: data.membership,
      zawiya: data.tijaniyaMember,
      ageRange: data.ageRange,
      religion: data.religion,
      geopoliticalZone: data.geoPoliticalZone,
      stateOfResidence: data.stateOfResidence,
      haveLaptop: data.accessToLaptop === 'Yes',
      pcSpecification: data.laptopDetails || 'N/A',
      batteryLife: data.batteryLife,
      electricityAccess: String(data.electricityHours),
      internetAccess: String(data.internetConnectivity),
      educationQualification: data.education,
      learningHours: data.dedicationHours,
      reasonsForLearning: data.reasonsForLearning,
      admissionReason: data.admissionReason,
      priorTraining: data.techDetails || 'None',
      courseId: data.courseId,
      profileImage: profilePicture,
    };

    try {
      await dispatch(addApplication(formData)).unwrap();
      alert('Application submitted successfully!');
      reset();
      setProfilePicture('');

      // Fetch the updated application
      // await dispatch(fetchApplicationByUserId(user.id)).unwrap();

      // Navigate to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError(
        error.message || 'Failed to submit application. Please try again or contact support.',
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setSubmitting(false);
      setLoading(false); // Set loading to false when submission ends
    }
  };

  const handlePhoneInput = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setValue('phone', value);
    trigger('phone');
  };

  const priorTechKnowledge = watch('priorTechKnowledge');
  const accessToLaptop = watch('accessToLaptop');

  useEffect(() => {
    if (priorTechKnowledge === 'Yes') {
      trigger('techDetails');
    }
    if (accessToLaptop === 'Yes') {
      trigger('laptopDetails');
    }
  }, [priorTechKnowledge, accessToLaptop, trigger]);
  return (
    <div>
      {loading && <Loaderr />}
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h2 className="text-tt-primary text-2xl font-bold">Register for the next cohort</h2>
          {submitError && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">{submitError}</div>
          )}
          <p className="text-base text-tt-black">
            Kindly complete this form and proceed to apply for the cohort. Fields marked with{' '}
            <span className="text-red-500">*</span> are required
          </p>
        </div>
        <div className="mx-auto bg-white rounded-lg shadow-lg leading-snug w-full max-w-4xl p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('firstName', { required: 'First name is required' })}
                  type="text"
                  placeholder="First Name"
                  className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
                  defaultValue={isAuthenticated ? user.firstName : ''}
                  readOnly={isAuthenticated}
                />
                {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
              </div>
              <div>
                <label className="font-medium">Middle Name (Optional)</label>
                <input
                  {...register('middleName')}
                  type="text"
                  placeholder="Middle Name"
                  className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
                  defaultValue={isAuthenticated ? user.middleName : ''}
                />
              </div>
              <div>
                <label className="font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('lastName', { required: 'Last name is required' })}
                  type="text"
                  placeholder="Last Name"
                  className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
                  defaultValue={isAuthenticated ? user.lastName : ''}
                  readOnly={isAuthenticated}
                />
                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                  type="email"
                  placeholder="Email"
                  className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
                  defaultValue={isAuthenticated ? user.email : ''}
                  readOnly={isAuthenticated}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <label className="font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('phone', {
                    required: 'Phone number is required',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Phone number must contain only numbers',
                    },
                  })}
                  type="text"
                  onInput={handlePhoneInput}
                  placeholder="Phone Number"
                  className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
              </div>
              <div>
                <label className="font-medium">Alternate Phone Number (Optional)</label>
                <input
                  {...register('alternatePhone', {
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Phone number must contain only numbers',
                    },
                  })}
                  type="text"
                  onInput={handlePhoneInput}
                  placeholder="Alternate Phone Number"
                  className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
                />
              </div>
            </div>

            {/* Basic Information */}
            <div className="mb-4">
              <label className="font-medium">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                {...register('gender', { required: 'Gender is required' })}
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500">{errors.gender.message}</p>}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Age Range <span className="text-red-500">*</span>
              </label>
              <select
                {...register('ageRange', { required: 'Age range is required' })}
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-tt-primary shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {ageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.ageRange && <p className="text-red-500">{errors.ageRange.message}</p>}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Religion <span className="text-red-500">*</span>
              </label>
              <select
                {...register('religion', { required: 'Religion is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {religionOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.religion && <p className="text-red-500">{errors.religion.message}</p>}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Geopolitical Zone <span className="text-red-500">*</span>
              </label>
              <select
                {...register('geoPoliticalZone', { required: 'Geopolitical zone is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {geoPoliticalZones.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.geoPoliticalZone && (
                <p className="text-red-500">{errors.geoPoliticalZone.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                State of Residence <span className="text-red-500">*</span>
              </label>
              <select
                {...register('stateOfResidence', {
                  required: 'State of residence is required',
                })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {statesInNigeria.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.stateOfResidence && (
                <p className="text-red-500">{errors.stateOfResidence.message}</p>
              )}
            </div>

            {/* Education and Professional Information */}
            <div className="mb-4">
              <label className="font-medium">
                Education Qualification <span className="text-red-500">*</span>
              </label>
              <select
                {...register('education', { required: 'Education qualification is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {educationOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.education && <p className="text-red-500">{errors.education.message}</p>}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Current Job Status <span className="text-red-500">*</span>
              </label>
              <select
                {...register('currentStatus', { required: 'Current status is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {statusOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.currentStatus && (
                <p className="text-red-500">{errors.currentStatus.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Desired Course <span className="text-red-500">*</span>
              </label>
              <select
                {...register('courseId', { required: 'Desired course is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {currentCohort?.courses?.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                )) || <option disabled>No courses available</option>}
              </select>
              {errors.courseId && <p className="text-red-500">{errors.courseId.message}</p>}
            </div>

            {/* Technical Background */}
            <div className="mb-4">
              <label className="font-medium">
                Do you have prior tech skills? <span className="text-red-500">*</span>
              </label>
              <select
                {...register('priorTechKnowledge', { required: 'Tech skill is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              {priorTechKnowledge === 'Yes' && (
                <input
                  {...register('techDetails', {
                    required: 'Please specify your prior tech knowledge',
                  })}
                  type="text"
                  placeholder="Specify your prior tech knowledge"
                  className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
                />
              )}
              {errors.techDetails && <p className="text-red-500">{errors.techDetails.message}</p>}
            </div>

            {/* Technical Resources */}
            <div className="mb-4">
              <label className="font-medium">
                Do you have access to a laptop? <span className="text-red-500">*</span>
              </label>
              <select
                {...register('accessToLaptop', { required: 'This field is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
              {accessToLaptop === 'Yes' && (
                <>
                  <input
                    {...register('laptopDetails', {
                      required: 'Please provide your laptop specifications.',
                    })}
                    type="text"
                    placeholder="e.g., Intel Core i7, 32GB RAM, 512GB SSD"
                    className="w-full mt-2 px-3 py-2 border border-gray-300 shadow-sm rounded-lg"
                    aria-describedby="laptopDetailsHelp"
                  />
                  <small id="laptopDetailsHelp" className="text-gray-500">
                    Specify your laptop&apos;s processor, RAM, and storage. Example: Intel Core i7,
                    32GB RAM, 512GB SSD.
                  </small>
                </>
              )}
              {errors.laptopDetails && (
                <p className="text-red-500">{errors.laptopDetails.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Rate your access to stable internet connection (1-10){' '}
                <span className="text-red-500">*</span>
              </label>
              <input
                {...register('internetConnectivity', {
                  required: 'Please rate internet connectivity',
                })}
                type="range"
                min="1"
                max="10"
                defaultValue="5"
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              />
              {errors.internetConnectivity && (
                <p className="text-red-500">{errors.internetConnectivity.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                How often do you have electricity in your area (in hours)?{' '}
                <span className="text-red-500">*</span>
              </label>
              <select
                {...register('electricityHours', { required: 'Electricity access is required' })}
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                <option value="Less than 1 hour">Less than 1 hour</option>
                <option value="1-2 hours">1-2 hours</option>
                <option value="3-5 hours">3-5 hours</option>
                <option value="More than 5 hours">More than 5 hours</option>
              </select>
              {errors.electricityHours && (
                <p className="text-red-500">{errors.electricityHours.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Battery Capacity <span className="text-red-500">*</span>
              </label>
              <select
                {...register('batteryLife', { required: 'Battery life is required' })}
                className="w-full mt-2 px-3 py-2 border shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                {batteryLife.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.batteryLife && <p className="text-red-500">{errors.batteryLife.message}</p>}
            </div>

            {/* Program Commitment */}
            <div className="mb-4">
              <label className="font-medium">
                How many hours can you dedicate to the program per week?{' '}
                <span className="text-red-500">*</span>
              </label>
              <div className="mt-2 space-x-6">
                {dedicationHours.map((hour, index) => (
                  <label key={index} className="inline-flex items-center">
                    <input
                      {...register('dedicationHours', { required: 'Dedication hours is required' })}
                      type="radio"
                      value={hour}
                      className="mr-2"
                    />
                    <span>{hour}</span>
                  </label>
                ))}
              </div>
              {errors.dedicationHours && (
                <p className="text-red-500">{errors.dedicationHours.message}</p>
              )}
            </div>

            {/* Membership Information */}
            <div className="mb-4">
              <label className="font-medium">
                Are you a member of? <span className="text-red-500">*</span>
              </label>
              <select
                {...register('membership', { required: 'Please select which member you are' })}
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              >
                <option value="">Select option</option>
                <option value="TIMSAN">TIMSAN (Student)</option>
                <option value="IOTB">IOTB (Graduate)</option>
                <option value="Others">Others</option>
              </select>
              {errors.membership && <p className="text-red-500">{errors.membership.message}</p>}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                Zawiya (closest link to Khatmu Tijaniy)? <span className="text-red-500">*</span>
              </label>
              <input
                {...register('tijaniyaMember', { required: 'This field is required' })}
                type="text"
                placeholder="Enter the name of your closest Zawiya or Tijaniy connection"
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              />
              {errors.tijaniyaMember && (
                <p className="text-red-500">{errors.tijaniyaMember.message}</p>
              )}
            </div>

            {/* Motivations */}
            <div className="mb-4">
              <label className="font-medium">
                In maximum of 100 words, give reasons why you chose the learning track.{' '}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('reasonsForLearning', { required: 'This field is required' })}
                placeholder="Share your motivations, aspirations, and how this program aligns with your goals."
                rows={3}
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              ></textarea>
              {errors.reasonsForLearning && (
                <p className="text-red-500">{errors.reasonsForLearning.message}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="font-medium">
                In maximum of 100 words, give reasons why you should be admitted into the learning
                track. <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('admissionReason', { required: 'This field is required' })}
                placeholder="Share your qualifications, commitment level, and what makes you a good candidate."
                rows={3}
                className="w-full mt-2 px-3 py-2 outline-none border focus:border-emerald-500 shadow-sm rounded-lg"
              ></textarea>
              {errors.admissionReason && (
                <p className="text-red-500">{errors.admissionReason.message}</p>
              )}
            </div>

            {/* Profile Picture Upload */}
            <UploadImage setProfilePicture={setProfilePicture} />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full p-3 mt-6 bg-emerald-600 text-white rounded-md transition duration-300 
  ${submitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-emerald-700'}`}
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
