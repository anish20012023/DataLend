import { Box, Typography } from "@mui/material";

export const header1 = { title: "HSBC vs Industry Data", drpTitle: "Fee (bps)" };
export const rowData1 = [
  { fee: 1, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
  { fee: 5, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
  { fee: 10, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
  { fee: 30, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
  { fee: 60, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
  { fee: 90, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
  { fee: 0, industry: 378.08, myl1: 378.08, highlow: "407.00/355.00" },
];
export const columnDef1 = [
  { field: "fee", headerName: "Fee", cellRenderer: (param) => (param.value === 0 ? "All" : param.value), width: 0 },
  { field: "industry", headerName: "Industry", flex: 1 },
  { field: "myl1", headerName: "My (L)", flex: 1 },
  { field: "myl2", headerName: "My (L)", flex: 1 },
  { field: "highlow", headerName: "High/Low", flex: 2 },
];

// table 2 data
export const header2 = { title: "Transaction Table", drpTitle: "All Transactions" };

export const columnDef2 = [
  {
    field: "trade",
    headerName: "Trade Date",
    flex: 1.1,
  },
  { field: "divrate", headerName: "Div Rate", width: "50px" },
  { field: "rebate", headerName: "Rebate (bps)", flex: 1 },
  { field: "fee", headerName: "Fee (bps)", width: "50px" },
  { field: "loanusd", headerName: "Loan Value (USD)", flex: 1 },
  { field: "loanquan", headerName: "Loan Quantity", flex: 1 },
  { field: "type", headerName: "Type", flex: 1 },
  { field: "Rerate", headerName: "Re-rate Ind", width: "70px" },
  { field: "collateral", headerName: "Collateral", flex: 1 },
];
export const rowData2 = [
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "",
    loanusd: "622,20000",
    loanquan: "26,600",
    type: "B/B",
    rerate: "",
    collateral: "CA",
  },
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "525",
    loanusd: "29,666",
    loanquan: "7,500",
    type: "L/B",
    rerate: "",
    collateral: "NC",
  },
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "525",
    loanusd: "390",
    loanquan: "7,500",
    type: "L/B",
    rerate: "",
    collateral: "NC",
  },
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "",
    loanusd: "29,666",
    loanquan: "7,500",
    type: "L/B",
    rerate: "",
    collateral: "CA",
  },
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "",
    loanusd: "29,666",
    loanquan: "7,500",
    type: "L/B",
    rerate: "",
    collateral: "CA",
  },
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "",
    loanusd: "29,666",
    loanquan: "7,500",
    type: "L/B",
    rerate: "",
    collateral: "CA",
  },
  {
    trade: "11/21/2002",
    divrate: 100,
    rebate: -250,
    fee: "625",
    loanusd: "29,666",
    loanquan: "7,500",
    type: "L/B",
    rerate: "",
    collateral: "NC",
  },
];
