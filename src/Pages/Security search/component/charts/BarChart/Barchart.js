import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./BarChart.style";

// config
const config = {
  type: "bar",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        data: [70, 45, 35, 30, 18, 15, 3, 3, 3],
        backgroundColor: "#9343BD",
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
        max: 80,
        min: 0,
        ticks: {
          stepSize: 20,
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

// barchart
const BarChart = () => {
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

          <Box className="legend1">
            <Box className="icon1"></Box>
            <Typography>
              indusrty fee all {"("} 124.75bps {")"}
            </Typography>
          </Box>
          <Box className="legend2">
            <Box className="icon2"></Box>
            <Typography>
              Avg Fee
            </Typography>
          </Box>
       
      </Box>
      {/* chart */}
      <Box className={classes.barchart}>
        <canvas ref={chartRef} />
      </Box>
    </Box>
  );
};

export default BarChart;
