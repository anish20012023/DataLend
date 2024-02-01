import { Box, IconButton, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./Concentration.styles";
import BarChart from "../charts/BarChart/Barchart";

function Concentration() {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box className={classes.header}>
        <Box className="left">
          <Typography>Concentration</Typography>
          <List className="linksList">
            {[
              { id: 0, txt: "12 Lenders" },
              { id: 1, txt: "12 Borrowers" },
              { id: 2, txt: "12 Lendables" },
            ].map((item, index) => (
              <ListItem key={item.id} button selected={selected === item.id} onClick={() => setSelected(index)}>
                <ListItemText>{item.txt}</ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box className="right">
          <IconButton>
            <img src="images/searchpage/anchor.svg" />
          </IconButton>
          <IconButton>
            <img src="images/searchpage/dot.svg" />
          </IconButton>
        </Box>
      </Box>
      {/* chart */}

      <BarChart />
    </Paper>
  );
}

export default Concentration;
