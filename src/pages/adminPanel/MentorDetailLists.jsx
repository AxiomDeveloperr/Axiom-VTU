import { FaEdit, FaPrint, FaDownload, FaUserAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import mentorLists from '../../data/mentorLists';

const MentorDetailLists = () => {
  const { mentorId } = useParams();
  const mentor = mentorLists.find((m) => m.mentorId === mentorId);

  if (!mentor) {
    return <div className="text-center text-red-600 font-bold mt-10">Mentor Not Found</div>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Mentor</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
        <div className="flex-shrink-0">
          {/* Profile Picture */}
          <div className="rounded-full w-40 h-40 bg-gray-200 flex items-center justify-center">
            <FaUserAlt size={80} className="text-gray-500" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-gray-900">{mentor.name}</h3>
            <div className="flex space-x-4">
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <FaEdit className="text-gray-700" />
              </button>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <FaPrint className="text-gray-700" />
              </button>
              <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition">
                <FaDownload className="text-gray-700" />
              </button>
            </div>
          </div>
          <p className="text-gray-600 mb-6">
            {mentor.name} is a mentor in {mentor.stack}. Currently, their progress is{' '}
            <strong>{mentor.progress}%</strong>.
          </p>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> {mentor.email}
            </p>
            <p>
              <strong>Phone Number:</strong> {mentor.phoneNumber}
            </p>
            <p>
              <strong>Stack:</strong> {mentor.stack}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetailLists;
