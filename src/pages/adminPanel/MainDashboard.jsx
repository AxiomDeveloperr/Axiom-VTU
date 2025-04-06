// import ChatData from "./ChatData";
import PieChartComponent from './PieChartComponent';
import LineChartComponent from './LineChartComponent';
import UpcomingEvents from './UpcomingEvents';
import NoticeBoard from './NoticeBoard';
import WebsiteTraffic from './WebsiteTraffic';
import AttendanceCard from './AttendanceCard';
import ScheduleCard from './ScheduleCard';
import AdminDashboardItemDisplayBox from './AdminDashboardItemDisplayBox';
import AdminDashboadActionButton from './AdminDashboadActionButton';
import ChartGenerator from '../chart-js/ChartGenerator';
import { useSelector } from 'react-redux';

const MainDashboard = () => {
  const { allApplications } = useSelector((state) => state.applications);

  return (
    <div className="p-5 relative z-10">
      {/* Dashboard Content */}
      {/* <div className={`${isAddingStudent ? 'blur-sm' : ''}`}> */}
      <div>
        {/* ACTION BUTTONS  */}
        <AdminDashboadActionButton />
        {/*  DISPLAY BOXES */}
        <AdminDashboardItemDisplayBox />

        <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-5 w-full">
          {/* <ChatData /> */}
          <PieChartComponent />
          <LineChartComponent />
          <div>
            <h1 className="text-2xl font-bold text-center my-6">Dynamic Chart Generator</h1>
            <ChartGenerator applications={allApplications} />
          </div>
        </div>
      </div>

      {/* AddStudent Modal */}
      {/* {isAddingStudent && (
        <div className="fixed inset-0 flex justify-center items-center bg-tt-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md md:max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-semibold">Add New Student</h2>
            <div className="overflow-y-auto">
              <AddStudent />
            </div>
            <div className="mt-2 flex justify-end">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleCloseAddStudent}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )} */}

      <div className="flex flex-col md:flex-row items-center space-x-10 w-full mt-5">
        <WebsiteTraffic />
        <NoticeBoard />
      </div>
      <div className="flex flex-col md:flex-row items-center space-x-10 w-full mt-5">
        <ScheduleCard />
        <AttendanceCard />
      </div>
      <UpcomingEvents />
    </div>
  );
};

export default MainDashboard;
