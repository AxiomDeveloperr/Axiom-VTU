/* eslint-disable react/prop-types */

import { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
// import { Modal } from './Modal';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DynamicChart = ({ data, labels, chartType, title }) => {
  const chartRef = useRef(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  const downloadChart = (scale = 2) => {
    const chartElement = chartRef.current;
    if (chartElement) {
      const canvas = chartElement.querySelector('canvas');
      if (canvas) {
        // Create a temporary canvas with higher resolution
        const tempCanvas = document.createElement('canvas');
        const context = tempCanvas.getContext('2d');

        // Set the temporary canvas dimensions (e.g., 2x the original size)
        tempCanvas.width = canvas.width * scale;
        tempCanvas.height = canvas.height * scale;

        // Scale and draw the original canvas onto the temporary canvas
        context.scale(scale, scale);
        context.drawImage(canvas, 0, 0);

        // Convert the temporary canvas to an image and trigger download
        const link = document.createElement('a');
        link.download = `${title}.png`;
        link.href = tempCanvas.toDataURL('image/png', 1.0); // 1.0 = maximum quality
        link.click();
      }
    }
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div>
      <div ref={chartRef}>
        {chartType === 'bar' && <Bar data={chartData} options={options} />}
        {chartType === 'pie' && <Pie data={chartData} options={options} />}
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={openPreview} className="px-4 py-2 bg-blue-500 text-white rounded">
          Preview Chart
        </button>
        <button
          onClick={() => downloadChart(2)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Download Chart
        </button>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <Modal onClose={closePreview}>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className="w-full max-w-2xl mx-auto">
              {chartType === 'bar' && <Bar data={chartData} options={options} />}
              {chartType === 'pie' && <Pie data={chartData} options={options} />}
            </div>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => downloadChart(2)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Download
              </button>
              <button
                onClick={closePreview}
                className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default DynamicChart;

// eslint-disable-next-line no-unused-vars
const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-3xl">{children}</div>
    </div>
  );
};
