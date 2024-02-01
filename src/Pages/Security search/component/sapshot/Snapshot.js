import { Box, Divider, Grid, IconButton, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Snapshot.styles";
const snapshotData1 = [
  { id: 0, text: "feel 1", num: 13.69 },
  { id: 1, text: "utilization", num: 23.51 },
  { id: 2, text: "Liquidity", num: 3 },
  { id: 3, text: "Fee", num: 21.6 },
  { id: 4, text: "Fee 30", num: 21.6 },
];
const snapshotData2 = [
  { id: 0, text: "Active Utilization", num: "22.55%" },
  { id: 1, text: "PPD Rate", num: 21.6 },
  { id: 2, text: "Industry SLRTL", num: 15.51 },
  { id: 3, text: "Short int. indicator", num: "35.79%" },
  { id: 4, text: "All-in rate", num: 4.61 },
];
function Snapshot() {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {/* header */}
      <Box className={classes.header}>
        <Typography component={"span"} className="leftHeading">
          Security Snapshot
        </Typography>
        <Box className="right">
          <span>
            <span>Day</span>
            <span>Week</span>
            <span>Month</span>
          </span>
          <IconButton>
            <img src="images/searchpage/anchor.svg" />
          </IconButton>
          <IconButton>
            <img src="images/searchpage/dot.svg" />
          </IconButton>
        </Box>
      </Box>
      {/* content */}
      <Grid container>
        {/* first  card */}
        <Grid item md={12} className={classes.mainCont}>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} className="stack">
            {snapshotData1.map((item) => (
              <Box key={item.id} className="card">
                <Box className="upperbox">
                  <span className="text">{item.text}</span>
                  <Box className="percent">
                    <span> 5% </span>
                    <img src="images/searchpage/arrowred.svg" />
                  </Box>
                </Box>
                <Box className="lowerbox">
                  <span className="num1">{item.num}</span>
                  <span className="num2">(7.89)</span>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
        {/* second card */}
        <Grid item md={12} className={classes.mainCont}>
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} className="stack">
            {snapshotData2.map((item) => (
              <Box key={item.id} className="card">
                <Box className="upperbox">
                  <span className="text">{item.text}</span>
                  <Box className="percent">
                    <span> 5% </span>
                    <img src="images/searchpage/arrowred.svg" />
                  </Box>
                </Box>
                <Box className="lowerbox">
                  <span>{item.num}</span>
                  <span className="num2">(7.89)</span>
                </Box>
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Snapshot;
