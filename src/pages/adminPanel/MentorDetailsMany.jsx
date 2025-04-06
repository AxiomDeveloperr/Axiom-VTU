import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMentors } from '../../redux/features/admin/mentorSlice'; // Adjust the import path as needed
import { FaUserAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const MentorDetailsMany = () => {
  const dispatch = useDispatch();
  const { mentors, status, error } = useSelector((state) => state.mentors);
  const { currentCohort } = useSelector((state) => state.cohorts);
  console.log('current cohort courses', currentCohort.courses);

  const [currentPage, setCurrentPage] = useState(1);
  const mentorsPerPage = 3;

  const totalPages = Math.ceil(mentors.length / mentorsPerPage);

  const indexOfLastMentor = currentPage * mentorsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - mentorsPerPage;
  const currentMentors = mentors.slice(indexOfFirstMentor, indexOfLastMentor);

  useEffect(() => {
    dispatch(fetchMentors()); // Fetch mentors when the component mounts
  }, [dispatch]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (status === 'loading') {
    return <p>Loading mentors...</p>;
  }

  if (status === 'failed') {
    return <p>Error fetching mentors: {error || 'An error occurred.'}</p>;
  }

  const getCourseName = (courseId) => {
    if (!courseId) return 'No course assigned';
    if (!currentCohort || !currentCohort.courses) return 'No course assigned';
    const course = currentCohort.courses.find((course) => course.id === courseId);
    return course ? course.name : 'No course assigned';
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {currentMentors.map((mentor) => (
          <div
            key={mentor.mentorId}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{mentor.name}</h3>
            <div className="flex items-center justify-between mb-4">
              <div className="rounded-full w-32 h-32 bg-gray-200 flex items-center justify-center">
                <FaUserAlt size={72} className="text-gray-500" />
              </div>
            </div>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>Email:</strong> {mentor.email}
              </p>
              <p>
                <strong>Phone Number:</strong> {mentor.phoneNumber}
              </p>
              <p>
                <strong>Stack:</strong>{' '}
                {getCourseName(
                  mentor.courses && mentor.courses.length > 0 ? mentor.courses[0].courseId : null,
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-6">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-6 py-3 rounded-md text-white text-lg font-semibold ${currentPage === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-tt-primary hover:bg-tt-primary-dark'}`}
        >
          <FaArrowLeft className="inline-block mr-2" /> Previous
        </button>

        <span className="px-6 py-3 text-lg font-semibold text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-6 py-3 rounded-md text-white text-lg font-semibold ${currentPage === totalPages ? 'bg-gray-400 cursor-not-allowed' : 'bg-tt-primary hover:bg-tt-primary-dark'}`}
        >
          Next <FaArrowRight className="inline-block ml-2" />
        </button>
      </div>
    </div>
  );
};

export default MentorDetailsMany;
