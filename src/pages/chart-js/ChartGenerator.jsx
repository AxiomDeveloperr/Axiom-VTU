/* eslint-disable react/prop-types */
import { useState } from 'react';
import DynamicChart from './DynamicChart';

const ChartGenerator = ({ applications }) => {
  const [chartType, setChartType] = useState('bar');
  const [selectedData, setSelectedData] = useState('gender');
  const [chartData, setChartData] = useState({ labels: [], data: [] });

  const generateChartData = (key) => {
    const dataMap = applications.reduce((acc, app) => {
      let value;

      // Handle nested fields (e.g., Course.name)
      if (key === 'desiredCourse') {
        value = app.Course?.name || 'Unknown';
      } else if (key === 'haveLaptop') {
        value = app.haveLaptop ? 'Yes' : 'No'; // Convert boolean to "Yes" or "No"
      } else {
        value = app[key] || 'Unknown';
      }

      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const labels = Object.keys(dataMap);
    const data = Object.values(dataMap);

    setChartData({ labels, data });
  };

  const handleDataChange = (event) => {
    const key = event.target.value;
    setSelectedData(key);
    generateChartData(key);
  };

  const handleChartTypeChange = (event) => {
    setChartType(event.target.value);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <select
          value={selectedData}
          onChange={handleDataChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="gender">Gender</option>
          <option value="ageRange">Age Range</option>
          <option value="geopoliticalZone">Geopolitical Zone</option>
          <option value="timsanOrIOTB">TIMSAN/IOTB</option>
          <option value="stateOfResidence">State of Residence</option>
          <option value="educationQualification">Education Qualification</option>
          <option value="desiredCourse">Desired Course</option>
          <option value="haveLaptop">Have Laptop</option>
        </select>
        <select
          value={chartType}
          onChange={handleChartTypeChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="bar">Bar Chart</option>
          <option value="pie">Pie Chart</option>
        </select>
      </div>
      <DynamicChart
        data={chartData.data}
        labels={chartData.labels}
        chartType={chartType}
        title={`Distribution by ${selectedData}`}
      />
    </div>
  );
};

export default ChartGenerator;
