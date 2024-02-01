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
  //   right box
  rightBox: {
    display: "flex",
    gap: "14px",
    alignItems: "center",

    // notification
    "& .notification": {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      "& div p": {
        fontSize: "12px",
        textAlign: "end",
      },
      "& .badge": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& img": {
          height: "24px",
          width: "24px",
        },
        "& .MuiBadge-badge": {
          width: "14px",
          minWidth: "14px",
          height: "14px",
          fontWeight: "100",
          fontSize: "10px",
          left: "30%",
          top: "13%",
          cursor: "pointer",
        },
      },
    },

    // profile
    "& .profile": {
      borderLeft: "2px solid #4B5168",
      display: "flex",
      alignItems: "center",
      "& .MuiAvatar-circular": {
        width: "29px",
        height: "29px",
        color: theme.palette.primary.main,
        background: "#D9D9D9",
        margin: "0 12px",
      },
      "& button": {
        padding: "0px !important",
        color: "black",
        textTransform: "capitalize",
        "& .MuiButton-endIcon": {
          margin: "3px",
        },
      },
    },
  },

  // menu
  userMenu: {
    "& .MuiPaper-root": {
      borderRadius: "2px",
      width: "124px",
      transform: "translate(10px, 6px) !important",

      "& .MuiList-root": {
        "& .MuiListItem-root": {
          gap: "10px",
          padding: "5px 16px",
          "& .MuiListItemIcon-root": {
            minWidth: "max-content",
          },
          "& .MuiListItemText-root": {
            margin: "0px",
            "& span": {
              fontSize: "14px",
            },
          },
        },
      },
    },
  },
}));
