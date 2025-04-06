import { FaPlusCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

const AdminDashboadActionButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex flex-col md:flex-row justify-between space-x-3 space-y-5 md:space-y-0">
          <div>
            <button
              disabled
              data-tooltip-id="coming-soon-tooltip"
              data-tooltip-content="Coming Soon"
              className="bg-blue-500 text-white font-bold shadow-lg px-4 py-2 rounded flex items-center"
              //   onClick={handleOpenAddStudent}
            >
              <FaPlusCircle size={20} className="mr-2" />
              Add New Student
            </button>
            <Tooltip id="coming-soon-tooltip" />
          </div>
          <div>
            <button
              disabled
              data-tooltip-id="coming-soon-tooltip"
              data-tooltip-content="Assign Mentor from Mentors list"
              onClick={() => navigate('assign-mentor')}
              className="bg-green-500 text-white font-bold shadow-lg px-4 py-2 rounded flex items-center"
            >
              <FaPlusCircle size={20} className="mr-2" />
              Assign Mentor
            </button>
            <Tooltip id="coming-soon-tooltip" />
          </div>
          <div>
            <button
              disabled
              data-tooltip-id="coming-soon-tooltip"
              data-tooltip-content="Coming Soon"
              onClick={() => navigate('')}
              className="bg-yellow-500 text-white font-bold shadow-lg px-4 py-2 rounded flex items-center"
            >
              <FaPlusCircle size={20} className="mr-2" />
              Upload Module
            </button>
            <Tooltip id="coming-soon-tooltip" />
          </div>
          <div>
            <button
              disabled
              data-tooltip-id="coming-soon-tooltip"
              data-tooltip-content="Coming Soon"
              className="bg-red-500 text-white font-bold shadow-lg px-4 py-2 rounded flex items-center"
            >
              <FaPlusCircle size={20} className="mr-2" />
              Generate Reports
            </button>
            <Tooltip id="coming-soon-tooltip" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboadActionButton;
