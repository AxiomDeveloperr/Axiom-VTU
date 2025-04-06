import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  // Sample data for the pie chart
  const data = {
    labels: ["Web Development", "Graphics Design", "Product Design", "Cloud DevOp"],
    datasets: [
      {
        data: [45, 25, 20, 10],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336", "#03A9F4"],
        hoverBackgroundColor: ["#66BB6A", "#FFB74D", "#E57373", "#29B6F6"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="w-[40%] p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-tt-black mb-4 text-center">Student Data Overview</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartComponent;
