import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BarChart from "../data/BarChart.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function WeeklyActivityChart() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[730px] h-[322px]">
      <Bar
        data={{
          labels: BarChart.labels,
          datasets: BarChart.datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.backgroundColor,
            borderRadius: 20,
            borderSkipped: "Top",
            borderWidth: 5,
            borderColor: "#ffffff",
          })),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              grid: {
                display: false,
              },
              title: { display: true },
            },
            y: {
              grid: {
                display: false,
              },
              title: { display: true },
              beginAtZero: true,
            },
          },
          plugins: {
            datalabels: {
              display: false,
            },
            legend: {
              position: "top",
              labels: {
                boxHeight: 20,
                boxWidth: 20,
              },
            },
          },
        }}
      />
    </div>
  );
}

export default WeeklyActivityChart;
