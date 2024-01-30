import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Main.styles";
import AppDrawer from "./Drawer/AppDrawer";
import AppBarComp from "./AppBar/Appbar";

function Main() {
  const classes = useStyles();
  return (
    <Box>
      <AppBarComp />
      <AppDrawer />
    </Box>
  );
}

export default Main;
