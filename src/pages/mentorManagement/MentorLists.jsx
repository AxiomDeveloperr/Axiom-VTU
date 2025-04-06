import { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEdit, FaEllipsisH, FaSearch, FaTimes, FaTrash, FaSyncAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  fetchMentors,
  editMentor,
  removeMentor,
  assignMentor,
  unassignMentor,
} from '../../redux/features/admin/mentorSlice'; // Import actions

const MentorLists = () => {
  const dispatch = useDispatch();
  // Access the mentors state from the Redux store
  const { mentors, status, error } = useSelector((state) => state.mentors);
  const { currentCohort } = useSelector((state) => state.cohorts);
  const [actionIndex, setActionIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [editableName, setEditableName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCourseId, setSelectedCourseId] = useState(null); // Track selected course for assignment
  const actionRef = useRef(null);

  // Fetch mentors on component mount
  useEffect(() => {
    dispatch(fetchMentors());
  }, [dispatch]);

  // Handle delete mentor
  const handleDeleteMentor = async (mentorId) => {
    try {
      await dispatch(removeMentor(mentorId)).unwrap();
      toast.success('Mentor deleted successfully!');
    } catch (err) {
      toast.error(`Failed to delete mentor: ${err.message}`);
    }
  };

  // Start editing a mentor
  const startEditing = (index) => {
    setEditIndex(index);
    setEditableName(mentors[index]?.name || '');
  };

  // Save edited mentor details
  const handleSaveEdit = async (mentorId) => {
    try {
      const updateData = { name: editableName }; // Add other fields if needed
      await dispatch(editMentor({ id: mentorId, updateData })).unwrap();
      toast.success('Mentor updated successfully!');
      setEditIndex(null);
    } catch (err) {
      toast.error(`Failed to update mentor: ${err.message}`);
    }
  };

  // Assign a mentor to a course
  const handleAssignMentor = async (mentorId) => {
    if (!selectedCourseId) {
      toast.error('Please select a course to assign.');
      return;
    }
    try {
      await dispatch(assignMentor({ mentorId, courseId: selectedCourseId })).unwrap();
      toast.success('Mentor assigned to course successfully!');
      setSelectedCourseId(null); // Reset selected course
      dispatch(fetchMentors());
    } catch (err) {
      toast.error(`Failed to assign mentor: ${err.message}`);
    }
  };

  // Unassign a mentor from a course
  const handleUnassignMentor = async (mentorId, courseId) => {
    try {
      await dispatch(unassignMentor({ mentorId, courseId })).unwrap();
      toast.success('Mentor unassigned from course successfully!');
      dispatch(fetchMentors());
    } catch (err) {
      toast.error(`Failed to unassign mentor: ${err.message}`);
    }
  };

  // Toggle actions dropdown
  const toggleActions = (index) => {
    setActionIndex(actionIndex === index ? null : index);
  };

  // Filter mentors based on search~ query
  const filteredMentors = useMemo(() => {
    return mentors.filter((mentor) =>
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [mentors, searchQuery]);

  // Function to get course names based on mentor's courseId matching the currentCohort's courses
  const getCourseName = (courseId) => {
    if (!courseId) return 'No course assigned';
    if (!currentCohort || !currentCohort.courses) return 'No course assigned';
    const course = currentCohort.courses.find((course) => course.id === courseId);
    return course ? course.name : 'No course assigned';
  };

  // Loading and error states
  if (status === 'loading') {
    return <p>Loading mentors...</p>;
  }

  if (status === 'failed') {
    return <p>Error fetching mentors: {error || 'An error occurred.'}</p>;
  }

  return (
    <div>
      <ToastContainer /> {/* For displaying notifications */}
      <div className="container mx-auto p-6">
        <div className="mb-6 flex items-center justify-between space-x-2">
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Name"
              className="w-56 py-2 pl-5 pr-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute top-3 left-48">
              <FaSearch size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mx-auto bg-white rounded-lg shadow-md max-w-screen-xl px-4 sm:px-6 lg:px-5 py-8">
          {filteredMentors.length === 0 ? (
            <p className="text-gray-600">No mentors found.</p>
          ) : (
            <table className="min-w-full table-auto border-collapse bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-200 px-4 py-2 text-left">Full Name</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Phone Number</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Expertise</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Course taken</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredMentors.map((mentor, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="border border-gray-200 px-4 py-2">
                      {editIndex === index ? (
                        <input
                          type="text"
                          value={editableName}
                          onChange={(e) => setEditableName(e.target.value)}
                          className="border p-1 w-full"
                        />
                      ) : (
                        mentor.name
                      )}
                    </td>
                    <td className="border border-gray-200 px-4 py-2">{mentor.email}</td>
                    <td className="border border-gray-200 px-4 py-2">{mentor.contact}</td>
                    <td className="border border-gray-200 px-4 py-2">{mentor.expertise}</td>
                    <td className="border border-gray-200 px-4 py-2">
                      {getCourseName(
                        mentor.courses && mentor.courses.length > 0
                          ? mentor.courses[0].courseId
                          : null,
                      )}
                    </td>
                    <td className="border border-gray-200 px-4 py-2 relative" ref={actionRef}>
                      {editIndex === index ? (
                        <button
                          className="bg-emerald-600 text-white px-2 py-1 rounded"
                          onClick={() => handleSaveEdit(mentor.id)}
                        >
                          Save
                        </button>
                      ) : (
                        <>
                          <button
                            className="text-gray-500 hover:text-gray-700"
                            onClick={() => toggleActions(index)}
                          >
                            <FaEllipsisH />
                          </button>
                          {actionIndex === index && (
                            <div className="absolute bottom-3 z-50 bg-white border border-gray-200 rounded shadow-md mt-2 right-0 w-48">
                              <button
                                className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => startEditing(index)}
                              >
                                <FaEdit className="mr-2 text-blue-500" /> Edit
                              </button>
                              <button
                                className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => handleDeleteMentor(mentor.id)}
                              >
                                <FaTrash className="mr-2 text-red-600" /> Delete
                              </button>
                              <div className="px-4 py-2">
                                <select
                                  className="w-full p-1 border rounded"
                                  onChange={(e) => setSelectedCourseId(e.target.value)}
                                >
                                  <option value="">Select a course</option>
                                  {currentCohort?.courses?.map((course) => (
                                    <option key={course.id} value={course.id}>
                                      {course.name}
                                    </option>
                                  ))}
                                </select>
                                <button
                                  className="flex items-center w-full text-left px-2 py-1 mt-2 text-gray-700 hover:bg-gray-100"
                                  onClick={() => handleAssignMentor(mentor.id)}
                                >
                                  <FaSyncAlt className="mr-2 text-blue-500" /> Assign
                                </button>
                              </div>
                              <button
                                className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                onClick={() => {
                                  const courseId = mentor.courses?.[0]?.courseId;
                                  if (courseId) {
                                    handleUnassignMentor(mentor.id, courseId);
                                  }
                                }}
                              >
                                <FaTimes className="mr-2 text-gray-600" /> Unassign
                              </button>
                            </div>
                          )}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MentorLists;
