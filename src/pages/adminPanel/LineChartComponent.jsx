import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

// Register chart components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChartComponent = () => {
  // Sample data for the line chart
  const data = {
    labels: ["Web Development", "Graphics Design", "Product Design", "Cloud DevOp"],
    datasets: [
      {
        label: "Engagement",
        data: [50, 80, 45, 100, 60, 90],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4, // Smooth curve
      },
      {
        label: "Attendance",
        data: [40, 60, 35, 80, 50, 70],
        borderColor: "#03A9F4",
        backgroundColor: "rgba(3, 169, 244, 0.2)",
        tension: 0.4,
      },
      {
        label: "Projects",
        data: [56, 25, 89, 80, 65, 47],
        borderColor: "#FF9800",
        backgroundColor: "rgba(3, 169, 244, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Stacks",
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Students",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="w-full sm:w-[90%] md:w-[75%] lg:w-[55%] mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg md:text-xl font-bold text-tt-black mb-4 text-center">
        Student Data Trend
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartComponent;
