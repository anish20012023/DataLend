import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  appbar: {
    width: "calc(100% - 192px) !important",
    backgroundColor: "#fff !important",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16) !important ",
    height: "80px !important",
    "& .MuiToolbar-root": {
      height: "100%",
      color: theme.palette.text.primary,
      padding: "0px 16px",
      justifyContent: "space-between",

      //   search bar
      "& .searchBar": {
        "& .MuiInput-root.MuiInput-underline": {
          height: "24px",
          width: "416px",
          fontSize: "13px !important",

          "&::before": {
            borderBottom: "1.5px solid",
            bottom: "-4px",
          },
          "&::after": {
            content: "none",
          },
          "& input::placeholder": {
            opacity: "1",
            fontWeight: "100",
          },
          "& .MuiInputAdornment-root svg": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
  },
}));
