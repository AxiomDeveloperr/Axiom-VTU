// import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { FaDownload, FaExclamationTriangle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
// import Header from "./Header";
import studentLists from "../../data/studentLists";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const TrainingProgress = () => {
  // const navigate = useNavigate();

  
  const fallingBehindNotifications = studentLists.filter((student) => student.progress < 50);

  const chartData = {
    labels: studentLists.map((student) => student.name),
    datasets: [
      {
        label: "Training Progress (%)",
        data: studentLists.map((student) => student.progress),
        backgroundColor: ["#4CAF50", "#FF9800", "#03A9F4", "#F44336"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      y: { beginAtZero: true, max: 100, title: { display: true, text: "Completion (%)" } },
      x: { title: { display: true, text: "Students" } },
    },
  };


  const exportReport = () => {
    const csvContent =
      "Name,Email,Tech Skill,Current Module,Progress (%)\n" +
      studentLists.map((s) => `${s.name},${s.email},${s.stack},${s.currentModule},${s.progress}`).join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "training_progress_report.csv";
    link.click();
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-4">
          {/* <h2 className="text-2xl font-bold text-gray-700">Training Progress</h2> */}
          {/* <button
            onClick={() => navigate("/admin/panel")}
            className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition duration-300"
          >
            Go Back to Dashboard
          </button> */}
        </div>

    
        {fallingBehindNotifications.length > 0 && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4 rounded">
            <h3 className="font-semibold">Students Falling Behind</h3>
            <ul className="list-disc ml-5">
              {fallingBehindNotifications.map((student) => (
                <li key={student.id} className="flex items-center">
                  <FaExclamationTriangle className="text-yellow-600 mr-2" />
                  {student.name} ({student.email}) is below 50% progress.
                </li>
              ))}
            </ul>
          </div>
        )}

   
        <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 mb-6">
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Tech Skill</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Current Module</th>
                <th className="border border-gray-200 px-4 py-2 text-left">Progress (%)</th>
              </tr>
            </thead>
            <tbody>
              {studentLists.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.email}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.stack}</td>
                  <td className="border border-gray-200 px-4 py-2">{student.currentModule}</td>
                  <td className="border border-gray-200 px-4 py-2 font-semibold text-blue-600">
                    {student.progress}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-700">Module Overview</h3>
          <Bar data={chartData} options={chartOptions} />
        </div>

   
        <div className="mt-6 text-right">
          <button
            onClick={exportReport}
            className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition duration-300"
          >
            <FaDownload />
            Export Progress Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingProgress;
