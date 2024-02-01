import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./AnalysisChart.styles";

// config
const config = {
  type: "bar",
  data: {
    labels: ["28 Sep", "04 Oct", "12 Oct", "20 Oct", "28 Oct", "12 Nov"],
    datasets: [
      {
        data: [10, 2, 20, 16, 13, 8],
        backgroundColor: ["#1A7CBE", "#1A7CBE", "#E0673C", "#1A7CBE", "#E0673C", "#E0673C"],
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
      y: {
        beginAtZero: true,
        max: 30,
        min: 0,
        ticks: {
          stepSize: 15,
        },
        grid: {
          drawTicks: false,
        },
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    },
    indexAxis: "x",
    layout: {
      padding: {
        left: 10,
        right: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};

// AnalysisChart
const AnalysisChart = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(chartRef.current, config);

    setChartInstance(newChartInstance);

    return () => {
      if (newChartInstance) {
        newChartInstance.destroy();
      }
    };
  }, []);

  const classes = useStyles();
  return (
    <Box className={classes.root}>
      {/* header */}
      <Box className={classes.Header}>
        <Box className="legend">
          <Box className="icon" sx={{ background: "#1A7CBE" }}></Box>
          <Typography>Cooler</Typography>
        </Box>
        <Box className="legend">
          <Box className="icon" sx={{ background: "#E0673C" }}></Box>
          <Typography>Warmer</Typography>
        </Box>
      </Box>
      {/* chart */}
      <Box className={classes.AnalysisChart}>
        <canvas ref={chartRef} />
      </Box>
    </Box>
  );
};

export default AnalysisChart;
