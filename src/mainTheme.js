import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#543F99",
    },
    text: {
      primary: "#543F99",
    },
    drawerBorder: " #FD35F9",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `linear-gradient( rgba(84, 63, 153, 0.2), rgba(84, 63, 153, 0))`,
        },
      },
    },
  },
});
