import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMentor } from '../../redux/features/admin/mentorSlice';
import UploadImage from '../../components/UploadImage';

const AddMentor = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger,
  } = useForm({
    mode: 'onChange', // Validate on every change
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [profilePicture, setProfilePicture] = useState('');

  const onSubmit = (data) => {
    const transformedData = {
      name: data.fullName, // Map fullName to name
      email: data.email,
      expertise: data.expertise,
      contact: data.phoneNumber, // Map phoneNumber to contact
      profileImage: profilePicture,
    };

    dispatch(addMentor(transformedData))
      .unwrap()
      .then(() => {
        setModalMessage(`Successfully added ${data.fullName}`);
        setShowModal(true);
        reset();
        setProfilePicture('');
      })
      .catch((error) => {
        console.error('Failed to add mentor:', error);
        setModalMessage('Failed to add mentor. Please try again.');
        setShowModal(true);
      });
  };

  return (
    <div>
      <div className="container mx-auto p-6">
        <div className="p-4 border rounded shadow-lg bg-white relative">
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm">
              <div className="bg-white p-6 rounded shadow-lg">
                <p>{modalMessage}</p>
                <button
                  className="mt-4 bg-tt-primary text-white px-4 py-2 rounded"
                  onClick={() => {
                    setShowModal(false);
                    // navigate('all-mentors');
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="font-medium">Full Name (Surname first)</label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                placeholder="Enter Full Name"
                className="w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
              />
              {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address',
                  },
                })}
                onBlur={() => trigger('email')} // Trigger validation on blur
                placeholder="Email Address"
                className="w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div>
              <label className="font-medium">Phone Number (WhatsApp enabled)</label>
              <input
                type="text"
                {...register('phoneNumber', { required: 'Phone number is required' })}
                placeholder="Enter Phone Number"
                className="w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
              />
              {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber.message}</p>}
            </div>

            <div>
              <label className="font-medium">Expertise</label>
              <input
                type="text"
                {...register('expertise', { required: 'Expertise is required' })}
                placeholder="Expertise"
                className="w-full mt-2 px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
              />
              {errors.expertise && <p className="text-red-500">{errors.expertise.message}</p>}
            </div>

            {/* Profile Picture Upload */}
            <UploadImage setProfilePicture={setProfilePicture} />
            <button
              type="submit"
              className="p-3 mt-6 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition duration-300"
            >
              Add Mentor
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMentor;
