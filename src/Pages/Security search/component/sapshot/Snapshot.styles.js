import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: " 0px 3px 6px 0px rgba(43, 43, 43, 0.24) !important",
    borderRadius: "4px !important",
    height: "280px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 16px 10px",
    borderBottom: "1.5px solid",
    "& .leftHeading": {
      fontWeight: "500",
    },
    "& .right": {
      alignSelf: "",
      display: "flex",
      alignItems: "center",
      gap: "16px",

      "&>span": {
        fontSize: "14px",
        "& span": {
          marginLeft: "8px",
        },
      },
      "& button": {
        padding: "0px",
        "& .MuiTouchRipple-root": {
          display: "none",
        },
      },
    },
  },
  //   main content
  mainCont: {
    "& .stack": {
      margin: "16px",
      marginBottom: "0px",
      borderRadius: "2px",
      boxShadow: "0px 3px 6px 0px rgba(0, 0, 0, 0.25);",
      //   padding: "16px 8px 15px 8px",
      "& .card": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "90px",
        padding: " 16px  8px 15px 8px",

        "& div": {
          display: "flex",
          justifyContent: "space-between",
          fontSize: "15px",
          textTransform: "capitalize",
          lineHeight: "15px",
          "&.upperbox": {
            color: "#707070",
            display: "flex",
            alignItems: "flex-start",
            "& .text": {
              lineHeight: "17px",
            },
            "& .percent": {
              fontSize: "14px",
              fontWeight: "bold",
              color: "#FF7D6F",
              display: "flex",

              alignItems: "center",
            },
          },
          "&.lowerbox": {
            fontSize: "14px",
            fontWeight: "bold",
            color: "black",

            "& .num2": {
              fontWeight: "400",
              marginRight: "8px",
              color: "#707070",
            },
          },
        },
      },
    },

    "& hr": {
      width: "1.5px",
      background: "#707070",
      height: "50px",
      margin: "auto 0",
    },
  },
}));
