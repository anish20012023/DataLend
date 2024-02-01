import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: " 0px 3px 6px 0px rgba(43, 43, 43, 0.24) !important",
    borderRadius: "4px !important",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px",
    borderBottom: "1px solid",
    "& p": {
      fontWeight: "500",
    },
    "& .right": {
      "& button": {
        padding: "0px",
        marginLeft: "16px",
      },
    },
  },
  content: {
    display: "flex",
  },
  rightContent: {
    width: "40%",
    // border: "1px solid",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: "16px ",

    gap: "20px",
    "& .card": {
      //   border: "1px solid",
      width: "45%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0px 3px 6px rgba(43, 43, 43, 0.24) ",
      gap: "10px",
      "& p": {
        fontSize: "14px",
        textTransform: "capitalize",
        color: "black",
      },
    },
  },
}));
