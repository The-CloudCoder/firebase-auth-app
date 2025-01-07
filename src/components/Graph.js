import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

// Registering chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Graph = () => {
  // Line Chart Data (Sales Data)
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales Data",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#007bff",
        tension: 0.1,
      },
    ],
  };

  // Bar Chart Data (Product Sales)
  const barData = {
    labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
    datasets: [
      {
        label: "Product Sales",
        data: [25, 40, 30, 50, 60],
        backgroundColor: "rgba(0, 123, 255, 0.5)",
        borderColor: "#007bff",
        borderWidth: 1,
      },
    ],
  };

  // Pie Chart Data (Registered Users)
  const pieData = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        data: [70, 30], // Example data, replace with actual values
        backgroundColor: ["#28a745", "#dc3545"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Data Overview",
      },
    },
  };

  return (
    <div className="graphs">
      <div className="graph-card">
        <h3>Sales Overview</h3>
        <Line data={lineData} options={options} />
      </div>
      <div className="graph-card">
        <h3>Product Sales</h3>
        <Bar data={barData} options={options} />
      </div>
      <div className="graph-card">
        <h3>Registered Users</h3>
        <Pie data={pieData} options={options} />
      </div>
    </div>
  );
};

export default Graph;
