import React from "react";
import { Pie } from "react-chartjs-2";
import DougnutChart from "../data/DougnutChart.json";
import { ArcElement, Tooltip, Legend, Chart as ChartJS } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function ExpenseStatistics() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-[350px] h-[322px] ">
      <Pie
        data={{
          labels: DougnutChart.labels,
          datasets: DougnutChart.datasets.map((dataset) => ({
            label: dataset.label,
            data: dataset.data,
            backgroundColor: dataset.backgroundColor,
            hoverOffset: 4,
            borderAlign: "center",
            borderWidth: 5,
          })),
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              display: true,
              color: "#fff",
              font: {
                family: "Inter",
                weight: "bold",
                size: 10,
                lineHeight: 10,
              },
              align: "center",
              anchor: "center",
              letterSpacing: 1,
              opacity: 1,
              formatter: (value, context) => {
                const label = DougnutChart.labels[context.dataIndex];
                return `${value}% ${label}`; // Add the value and label
              },
            },
          },
        }}
      />
    </div>
  );
}

export default ExpenseStatistics;
