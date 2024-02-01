import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import { usestyles } from "./Table.styles";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const deafultColDef = {
  resizable: false,
  sortable: false,
};

function Table({ header, rowData, columnDef }) {
  const classes = usestyles();
  return (
    <Paper className={classes.root}>
      {/* header */}
      <Box className={classes.header}>
        <Typography>{header.title}</Typography>
        <Box className="right">
          <Button endIcon={<img src="images/searchpage/arrow.svg" />}>{header.drpTitle}</Button>
          <IconButton>
            <img src="images/searchpage/anchor.svg" />
          </IconButton>
          <IconButton>
            <img src="images/searchpage/dot.svg" />
          </IconButton>
        </Box>
      </Box>
      {/* table Aggrid */}
      <Box className="ag-theme-alpine">
        <AgGridReact
          className={classes.AgGridMain}
          columnDefs={columnDef}
          rowData={rowData}
          defaultColDef={deafultColDef}
          rowHeight={40}
          headerHeight={40}
          domLayout="autoHeight"
          suppressHorizontalScroll
        />
      </Box>
    </Paper>
  );
}

export default Table;
