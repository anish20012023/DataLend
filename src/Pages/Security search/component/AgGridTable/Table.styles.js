const { makeStyles } = require("@mui/styles");

export const usestyles = makeStyles((theme) => ({
  root: {
    boxShadow: " 0px 3px 6px 0px rgba(43, 43, 43, 0.24) !important",
    borderRadius: "4px !important",
    overflow: "hidden",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "16px",

    "& p": { fontWeight: "500" },
    "& .right": {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      "& button": {
        padding: "0",
        "& .MuiTouchRipple-root": {
          display: "none",
        },
        "&.MuiButton-root": {
          fontSize: "14px",
          fontWeight: "400",
          textTransform: "none",
          "& .MuiButton-endIcon": {
            marginRight: "0px",
          },
        },
      },
    },
  },
  // aggrid
  AgGridMain: {
    "& .ag-root-wrapper": {
      borderRadius: "0px",
      border: "0px",
      "& .ag-header": {
        backgroundColor: "#ADB0D766",
        border: "0px",

        "& .ag-header-cell": {
          padding: "0px",
          paddingLeft: "10px",
          fontSize: "12px",
          fontWeight: "500",
          whiteSpace: "pre-wrap",

          "& .ag-header-cell-label": {
            justifyContent: "flex-end",
            alignItems: "flex-start",
            overflow: "visible",
            overflowWrap: "break-word !important",
            textAlign: "end",
          },
        },
      },

      "& .ag-cell": {
        padding: "0px",
        paddingRight: "10px",
        textAlign: "end",
        fontSize: "12px",
      },
      "& .ag-body.ag-layout-auto-height": {
        margin: " 0px 10px 10px",

        "& .ag-row": {
          borderBottom: "1.5px solid #C4C4C4",
          background: "#FFFFFF",
        },
      },
    },
  },
}));
