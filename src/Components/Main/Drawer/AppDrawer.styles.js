import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  mainDrawer: {
    "& .MuiDrawer-paper": {
      width: "192px",
      borderRight: "0px",
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16) ",

      "& .headLogo": {
        height: "100px",
        padding: "16px 16px 16px 8px",

        "&>div": {
          display: "flex",
          alignItems: "center",
        },
        "& img:nth-child(1)": {
          width: "48.5px",
          height: "48px",
        },
        "& img:nth-child(2)": {
          height: "22.6px",
        },
      },
    },
  },

  list: {
    padding: "0px !important",
    "& .MuiListItem-root": {
      padding: "0px",
      height: "70px",
      "& .MuiListItemButton-root": {
        padding: "24px 0px 25px 19px !important",
        "&.Mui-selected": {
          background: theme.palette.primary.main,
          color: "#fff",
          position: "relative",
          "&:before": {
            content: `""`,
            background: theme.palette.drawerBorder,
            position: "absolute",
            width: "10.5px",
            height: "100%",
            inset: 0,
          },
        },
        display: "flex",
        gap: "8px",
        alignItems: "center",

        height: "100%",
        "& .MuiListItemIcon-root": {
          minWidth: "max-content",
        },
        "& .MuiListItemText-root span": {
          textTransform: "capitalize",
          fontSize: "16px !important",
        },
      },
    },
  },
}));
