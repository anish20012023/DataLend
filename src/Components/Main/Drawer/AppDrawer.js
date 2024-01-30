import React, { useState } from "react";
import { useStyles } from "./AppDrawer.styles";
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from "@mui/material";
import logo from "../../../assets/drawer/logo.svg";
import logotxt from "../../../assets/drawer/logotxt.svg";

const linkList = [
  { id: 0, txt: "dashbaord", img: "dashboard.svg", activeImg: "e.svg" },
  { id: 1, txt: "security search", img: "search.svg", activeImg: "c.svg" },
  { id: 2, txt: "research", img: "bag.svg", activeImg: "a.svg" },
  { id: 3, txt: "premium pulse", img: "pulse.svg", activeImg: "d.svg" },
  { id: 4, txt: "settings", img: "setting.svg", activeImg: "b.svg" },
];
function AppDrawer() {
  const [selected, setSelected] = useState(1);
  const classes = useStyles();
  return (
    <Drawer variant="permanent" className={classes.mainDrawer}>
      <Box className="headLogo">
        <Box>
          <img src={logo} />
          <img src={logotxt} />
        </Box>
      </Box>
      <List className={classes.list}>
        {linkList.map((item, index) => (
          <ListItem key={item.id}>
            <ListItemButton selected={selected === index} onClick={() => setSelected(item.id)}>
              <ListItemIcon>
                <img src={`images/drawer/${selected === index ? item.activeImg : item.img}`} />
              </ListItemIcon>

              <ListItemText>{item.txt}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default AppDrawer;
