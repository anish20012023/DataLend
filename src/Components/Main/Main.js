import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Main.styles";
import AppDrawer from "./Drawer/AppDrawer";
import AppBarComp from "./AppBar/Appbar";
import SecurityPage from "../../Pages/Security search/SecurityPage";

function Main() {
  const classes = useStyles();
  return (
    <Box>
      <AppBarComp />
      <AppDrawer />
      <SecurityPage />
    </Box>
  );
}

export default Main;
