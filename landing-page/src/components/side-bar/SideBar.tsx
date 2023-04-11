import React from "react";
import "./sidebar.scss";
import {
  Grid,
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack
} from "@mui/material";
import { sideBarMenus } from "./sidebar-menu";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar sidebar--container">
      <Grid container direction="column">
        <Grid container item xs={12}>
          <Box>Logo</Box>
        </Grid>
        <Grid container item xs={12} sx={{ background: 'green'}}>
          <List component="nav" sx={{ width: '100%'}}>
            {sideBarMenus.map((menus: any, key: number) => (
              <ListItemButton key={key}>
                <Link to={menus.link} style={{ textDecoration: 'none'}}>
                  <Stack sx={{ display: 'flex', flexDirection: 'row'}}>
                  <ListItemIcon style={{ display: 'flex', }}>{(<menus.icon />)}</ListItemIcon>
                  <ListItemText style={{ display: 'flex', }} primary={menus.title}></ListItemText>
                  </Stack>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
}
