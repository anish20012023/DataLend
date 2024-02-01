import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  InputAdornment,
  ListItem,
  ListItemIcon,
  ListItemText,
  Menu,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./Appbar.styles";
import SearchIcon from "@mui/icons-material/Search";

function AppBarComp() {
  const classes = useStyles();
  const [anchorEl, setAnchorEL] = useState(null);
  const OpenMenu = (e) => {
    setAnchorEL(e.currentTarget);
  };
  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        {/* search bar */}
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          className="searchBar"
          placeholder="Search..."
          variant="standard"
        />
        {/* right */}
        <Box className={classes.rightBox}>
          <Box className="notification">
            <Box>
              <Typography>Last Update</Typography>
              <Typography>06 December 2022 7am</Typography>
            </Box>
            <Badge badgeContent={4} color="primary" className="badge">
              <img src="images/drawer/bell.svg" />
            </Badge>
          </Box>
          <Box className="profile">
            <Avatar />
            <Button endIcon={<img src="images/drawer/arrowdown.svg" />} onClick={OpenMenu}>
              Matt C
            </Button>
          </Box>
        </Box>
      </Toolbar>

      {/* menu for proile */}
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={() => setAnchorEL(null)} className={classes.userMenu}>
        <ListItem button onClick={()=>setAnchorEL(null)}>
          <ListItemIcon>
            <img src="images/appbar/setting.svg" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItem>
        <ListItem button onClick={()=>setAnchorEL(null)}>
          <ListItemIcon>
            <img src="images/appbar/logout.svg" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </Menu>
    </AppBar>
  );
}

export default AppBarComp;
