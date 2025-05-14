import React from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const chartOptions = {
    legend: {
      show: false,
    },
    chart: {
      type: "pie",
    },
    labels: [
      "Post fund raising token available for sale",
      "Property Management",
      "Stage III",
      "Stage II",
      "Stage I",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {},
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const chartSeries = [68, 12, 10, 9, 1];

  return (
    <div id="chart">
      <ReactApexChart options={chartOptions} series={chartSeries} type="pie" />
    </div>
  );
};

export default ApexChart;
