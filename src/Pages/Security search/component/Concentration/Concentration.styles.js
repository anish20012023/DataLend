import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: " 0px 3px 6px 0px rgba(43, 43, 43, 0.24) !important",
    borderRadius: "4px !important",
    height: "387px",
  },
  header: {
    padding: "16px",
    display: "flex",
    justifyContent: "space-between",

    "& .left": {
      display: "flex",
      gap: "24px",
      "& .linksList": {
        display: "flex",
        gap: "8px",

        padding: "0px",
        "& .MuiListItem-root": {
          padding: "0px",
          width: "auto",
          background: "none",

          "& .MuiTouchRipple-root": {
            display: "none",
          },
          "& .MuiListItemText-root": {
            margin: "0px",
            "& span": {
              fontSize: "14px",
              fontWeight: "400",
              color: "gray",
            },
          },

          "&.Mui-selected": {
            "& .MuiListItemText-root span": {
              color: theme.palette.primary.main,
            },
          },
        },
      },
    },
    // right header
    "& .right": {
      display: "flex",
      gap: "16px",
      "& button": {
        padding: "0",
      },
    },
  },
}));
