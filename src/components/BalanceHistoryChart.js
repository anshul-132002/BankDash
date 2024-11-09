import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import BalanceHistoryData from "../data/BalanceHistoryData.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function BalanceHistoryChart() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[635px] h-[276px]">
      <Line
        data={{
          labels: BalanceHistoryData.Line.labels,
          datasets: BalanceHistoryData.Line.datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: dataset.borderColor,
            backgroundColor: dataset.backgroundColor,
            tension: dataset.tension,
            borderWidth: 3,
            pointRadius: 0,
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
            },
            y: {
              grid: {
                display: false,
              },
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          datalabels: {
            display: false,
          },
        }}
      />
    </div>
  );
}

export default BalanceHistoryChart;
