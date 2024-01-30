import { AppBar, Box, InputAdornment, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./Appbar.styles";
import SearchIcon from "@mui/icons-material/Search";

function AppBarComp() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        {/* left */}
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="searchBar"
          placeholder="Search..."
          variant="standard"
        />
        {/* right */}
        <Box>dhbs</Box>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarComp;
