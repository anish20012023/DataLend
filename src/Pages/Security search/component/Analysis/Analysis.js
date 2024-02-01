import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Analysis.styles";
import AnalysisChart from "./AnalysisChart";

function Analysis() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box className={classes.header}>
        <Typography>Re-rate Analysis</Typography>
        <Box className="right">
          <IconButton>
            <img src="images/searchpage/anchor.svg" />
          </IconButton>
          <IconButton>
            <img src="images/searchpage/dot.svg" />
          </IconButton>
        </Box>
      </Box>
      {/* content  */}
      <Box className={classes.content}>
        <AnalysisChart />
        <Box className={classes.rightContent}>
          {[
            { id: 0, txt: "old fee", num: "84.24bps" },
            { id: 1, txt: "new fee", num: "84.24bps" },
            { id: 2, txt: "change", num: "11.54bps", title: "warmer", color: "#E0673C" },
            { id: 3, txt: "re-rated qty", num: "125,000", title: "0.55%" },
          ].map((item) => (
            <Paper className="card" key={item.id}>
              <Typography>{item.txt}</Typography>
              <Typography sx={{fontWeight:"bold"}}>
                {item.num} {item.title && <span style={{ color: item.color }}>({item.title})</span>}
              </Typography>
            </Paper>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}

export default Analysis;
