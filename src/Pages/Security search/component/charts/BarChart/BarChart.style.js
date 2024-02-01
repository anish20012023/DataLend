import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  Header: {
    padding: " 8px 40px",
    display: "flex",
    gap: "20px",
    "& p": {
      fontSize: "12px",
      textTransform: "capitalize",
      color: "black",
    },
    "& .legend1, .legend2": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    "& .icon1": {
      width: "19px",
      height: "4px",
      background: "#BA7AD1",
    },
    "& .icon2": {
      width: "13px",
      height: "13px",
      borderRadius: "50%",
      background: "#9747FF",
    },
  },
  barchart: {
    height: "270px",
  },
}));
