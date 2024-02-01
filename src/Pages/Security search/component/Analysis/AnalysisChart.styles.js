import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: "16px",
  },
  Header: {
    padding: " 0 40px",
    display: "flex",
    gap: "20px",
    "& p": {
      fontSize: "12px",
      textTransform: "capitalize",
      color: "black",
    },
    "& .legend": {
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    "& .icon": {
      width: "19px",
      height: "4px",
    },
  },
  AnalysisChart: {
    height: "169px",
  },
}));
