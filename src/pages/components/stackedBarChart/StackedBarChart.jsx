import { useState, useEffect } from "react";

const StackedBarChart = () => {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  const series = [
    {
      name: "100K",
      data: [2, 2, 2],
      color: "#4FD3CC",
    },
    {
      name: "1M",
      data: [0, 15, 15],
      color: "#AD00FF",
    },
    {
      name: "2M",
      data: [0, 0, 15],
      color: "#4F009E",
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
          },
        },
      },
    },
    stroke: {
      show: false,
    },
    xaxis: {
      categories: ["April", "May", "June"],
      labels: {
        formatter: (val) => val + "",
        style: {
          fontSize: "15px",
          fontWeight: "600",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "16px",
          fontWeight: "600",
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val) => val + "K",
      },
      style: {
        background: "#2B2B2B",
        color: "#FFFFFF",
      },
      theme: "dark",
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      offsetX: 40,
    },
  };

  if (!Chart) return <div>Loading chart...</div>;

  return (
    <div id="chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default StackedBarChart;
