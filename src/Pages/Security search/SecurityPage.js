import React from "react";
import { useStyles } from "./SecurityPage.styles";
import { Box, Button, Divider, Grid, IconButton, Link, Paper, Stack, Typography } from "@mui/material";
import Snapshot from "./component/sapshot/Snapshot";
import Table from "./component/AgGridTable/Table";
import Concentration from "./component/Concentration/Concentration";
import { columnDef1, columnDef2, header1, header2, rowData1, rowData2 } from "./component/AgGridTable/TableData";
import Analysis from "./component/Analysis/Analysis";

const gamestopCard = [
  { id: 0, txt: "good", color: "#7CCB8A" },
  { id: 1, txt: "e", color: "#F29D4B" },
  { id: 2, txt: "s", color: "#CC5A56" },
  { id: 3, txt: "g", color: "#F29D4B" },
  { id: 4, txt: "90%", color: "#CC5A56" },
];

function SecurityPage() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container spacing={"12px"}>
        {/* gamestop, widget and trade now */}
        <Grid item md={12}>
          <Grid container className={classes.gameWidgetTradeCont} spacing={1}>
            {/* game stop */}
            <Grid item md={9.2}>
              <Box className="gamestop">
                <Box className="gamestopHeader">
                  <span className="heading">Gamestop Corporation Com Class A</span>
                  <span className="card">
                    {gamestopCard.map((item) => (
                      <Box component={"span"} key={item.id} sx={{ backgroundColor: item.color }}>
                        {item.txt}
                      </Box>
                    ))}
                  </span>
                </Box>
                {/* Gamestop text */}
                <Box className="gamestopTextStack">
                  <Stack className="stackCont" direction={"row"} divider={<Divider orientation="vertical" flexItem />}>
                    <span>ISIN: US36467W1099</span>
                    <span>CUSIP: 36467W109</span>
                    <span>SEDOL: B0LLFT5</span>
                    <span>TICKER: GME</span>
                    <span>QUICK:</span>
                  </Stack>
                  <Stack className="stackCont" direction={"row"} divider={<Divider orientation="vertical" flexItem />}>
                    <span>Country: United States</span>
                    <span>Asset Type: Common Shares</span>
                    <span>Sector: Consumer Discretionary</span>
                    <span>Industry: Retailing</span>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item md={1.4}>
              <Paper className="widget">
                <img src="images/searchpage/add.svg" />
                <Typography>Add Widget</Typography>
              </Paper>
            </Grid>
            <Grid item md={1.4}>
              <Paper className="trade">
                <img src="images/searchpage/trade.svg" />
                <Button endIcon={<img src="images/searchpage/arrow.svg" />}>Trade now</Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* security and right circular graph */}
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={7.5}>
              <Snapshot />
            </Grid>
            <Grid item md={4.5}>
              <Paper>right circular graph</Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Live summary */}
        <Grid item md={12}>
          <Paper className={classes.SummaryPaper}>
            <Box className="left">
              <Typography className="txt1">Live Summary</Typography>
              <img src="images/searchpage/lock.svg" />
              <Typography className="txt2">
                {"("} This is a Premium Service Product. <Link href="#">Contact EquiLend Sales</Link> to get access{" "}
                {")"}
              </Typography>
            </Box>
            <Box className="right">
              <IconButton>
                <img src="images/searchpage/anchor.svg" />
              </IconButton>
              <IconButton>
                <img src="images/searchpage/dot.svg" />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
        {/* concentration and table Grid */}
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={7.5}>
              <Concentration />
            </Grid>
            <Grid item md={4.5}>
              <Table header={header1} rowData={rowData1} columnDef={columnDef1} />
            </Grid>
          </Grid>
        </Grid>
        {/* transaction table and price statement grid */}
        <Grid item md={12}>
          <Grid container spacing={2}>
            <Grid item md={7.5}>
              <Table header={header2} rowData={rowData2} columnDef={columnDef2} />
            </Grid>
            <Grid item md={4.5}>
              <Paper>price statement</Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* analysis */}
        <Grid item md={12}>
          <Analysis />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SecurityPage;
