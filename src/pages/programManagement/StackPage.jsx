import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit, FaEllipsisH, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addCourse, editCourse } from '../../redux/features/admin/courseSlice'; // Import actions
import { fetchCohorts, fetchCohortById } from '../../redux/features/admin/cohortSlice';

const StackPage = () => {
  const dispatch = useDispatch();
  const { currentCohort } = useSelector((state) => state.cohorts); // Get currentCohort from Redux store

  const [stacks, setStacks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedStackIndex, setSelectedStackIndex] = useState(null);
  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRef = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  // Fetch cohorts when the app loads
  useEffect(() => {
    dispatch(fetchCohorts());
  }, [dispatch]);

  // Update stacks when currentCohort changes
  useEffect(() => {
    const courses = currentCohort?.courses || [];
    setStacks(courses);
  }, [currentCohort]);

  const onSubmit = (data) => {
    const courseData = {
      ...data, // Includes name and description from the form
      cohortId: currentCohort.id, // Add cohortId to the request body
    };

    const action =
      isEditMode && selectedStackIndex !== null
        ? editCourse({ id: stacks[selectedStackIndex].id, updateData: courseData })
        : addCourse(courseData);

    dispatch(action)
      .unwrap()
      .then(() => {
        // After successful add/edit, fetch the updated cohort data
        return dispatch(fetchCohortById(currentCohort.id)).unwrap();
      })
      .then(() => {
        reset();
        setIsModalOpen(false);
        setIsEditMode(false);
        setSelectedStackIndex(null);
      })
      .catch((error) => {
        console.error('Failed to update course:', error);
      });
  };

  const handleEdit = (index) => {
    setValue('name', stacks[index].name); // Set form values for editing
    setValue('description', stacks[index].description);
    setSelectedStackIndex(index);
    setIsEditMode(true);
    setIsModalOpen(true);
    setDropdownIndex(null);
  };

  const handleDelete = (index) => {
    const updatedStacks = stacks.filter((_, i) => i !== index);
    setStacks(updatedStacks);
    setDropdownIndex(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownIndex(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!currentCohort) {
    return <div className="p-3">No cohort selected. Please select a cohort first.</div>;
  }

  return (
    <div className="p-3 relative">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl text-tt-grey font-semibold">Courses in {currentCohort.name}</h2>
        <button
          className="bg-tt-primary text-white px-4 py-2 rounded-lg hover:bg-tt-primary"
          onClick={() => {
            reset();
            setIsModalOpen(true);
            setIsEditMode(false);
          }}
        >
          Add New Stack
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              {isEditMode ? 'Edit Stack' : 'Add New Stack'}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                placeholder="Stack Name"
                {...register('name', { required: 'Stack name is required' })}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}

              <textarea
                placeholder="Short Description"
                rows={3}
                {...register('description', { required: 'Description is required' })}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:border-tt-primary outline-none"
              />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}

              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded-lg mr-2"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-tt-primary text-white px-4 py-2 rounded-lg hover:bg-tt-primary"
                >
                  {isEditMode ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-300 ${isModalOpen ? 'blur-sm' : ''}`}
      >
        {stacks.length === 0 ? (
          <div className="bg-white col-span-3 text-gray-500 text-center border p-4 rounded-lg">
            No courses available for this cohort.
          </div>
        ) : (
          stacks.map((stack, index) => (
            <div key={index} className="relative border bg-white p-6 rounded-lg shadow-md">
              <div className="border-b pb-2 flex justify-between items-center">
                <h3 className="text-tt-primary text-lg font-bold">{stack.name}</h3>
                <button onClick={() => setDropdownIndex(index === dropdownIndex ? null : index)}>
                  <FaEllipsisH className="text-gray-600 cursor-pointer" />
                </button>
              </div>
              <p className="text-gray-600 text-base text-justify">{stack.description}</p>

              {dropdownIndex === index && (
                <div
                  ref={dropdownRef}
                  className="absolute right-2 top-10 bg-white border rounded-lg shadow-md w-32"
                >
                  <button
                    className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100"
                    onClick={() => handleEdit(index)}
                  >
                    <FaEdit className="mr-2" /> Edit
                  </button>
                  <button
                    className="flex items-center w-full text-left px-4 py-2 text-red-500 hover:bg-red-100"
                    onClick={() => handleDelete(index)}
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StackPage;
