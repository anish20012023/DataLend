import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
    marginLeft: "192px",
    padding: "16px",
  },
  gameWidgetTradeCont: {
    "& .widget, .trade": {
      height: "86px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      padding: "8px 16px",
      borderRadius: "6px",
      boxShadow: " 0px 3px 6px 0px rgba(84, 63, 153, 0.24)",
    },
    "& .widget p": {
      fontSize: "12px",
      fontWeight: "500",
    },
    "& .trade": {
      "& button": {
        padding: "0px",
        fontSize: "12px",
        textTransform: "capitalize",

        "& .MuiTouchRipple-root": {
          display: "none",
        },
      },
    },
    // gamestop
    "& .gamestop": {
      minHeight: "86px",
      borderRadius: "4px",
      color: "#fff",
      background: theme.palette.primary.main,
      "& .gamestopHeader": {
        display: "flex",
        alignItems: "flex-end",
        gap: "24px",
        padding: "2px 2px 2px 16px",

        "& .heading": {
          fontSize: "18px",
          textTransform: "uppercase",
          lineHeight: "19px",
        },
        "& .card": {
          "& span": {
            padding: "2px 8px",
            borderRadius: "3px",
            marginRight: "8px",
            textTransform: "uppercase",
            fontWeight: "300",
            fontSize: "14px",
          },
        },
      },
    },

    // game stop text
    "& .gamestopTextStack": {
      paddingTop: "8px",
      paddingLeft: "16px",
      fontWeight: "300",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      "& .stackCont": {
        lineHeight: "18px",
        gap: "6px",
        "& span": {},
        "& .MuiDivider-root": {
          border: "1px solid",
        },
      },
    },
  },

  // summary paper
  SummaryPaper: {
    height: "51px",
    boxShadow: " 0px 3px 6px 0px rgba(43, 43, 43, 0.24) !important",
    borderRadius: "4px !important",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 16px",
    "& .left": {
      display: "flex",
      gap: "16px",
      "& .txt1": {
        fontWeight: "500",
      },
      "& .txt2": {
        fontSize: "15px",
        color: "black",
        "& a": {
          color: "#DD5626",
          fontWeight: "500",
          textDecoration: "none",
          borderBottom: ".5px solid",
        },
      },
    },
  },
}));
