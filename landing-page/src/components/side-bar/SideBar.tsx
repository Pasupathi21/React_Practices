import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { sideBarMenus } from "./sidebar-menu";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  ClickAwayListener,
  Collapse,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { StarBorder } from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [keyBoardArrow, setKeyBoardArrow] = React.useState<boolean>(false);
  const [openCollapse, setOpenCollapse] = React.useState<boolean>(false);
  const [subMenus, setSubMenus] = React.useState([]);
  const [clickedMenu, setClickedMenu] = React.useState(null);

  const [openPopup, setOpenPopup] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const handleDrawer = () => {
    setOpen(!open);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const handleKeyBoardArrow = (
    key: any,
    isClose: boolean,
    isPopup: boolean = false
  ) => {
    setClickedMenu(key);
    console.log("key", key);
    let [getObj]: any = sideBarMenus.filter((itm) => itm.title === key);
    console.log("getObj", getObj);
    if (getObj?.submenus && getObj?.submenus?.length > 0) {
      console.log("submenu", getObj?.submenus);
      setSubMenus(getObj?.submenus);
      if (isPopup) {
        if(subMenus?.length > 0){
          handlePopupToggle()
        }
        return;
      }
      if (isClose) {
      }
      setKeyBoardArrow(!keyBoardArrow);
      setOpenCollapse(!openCollapse);
    }
  };

  function handlePopupToggle() {
    setOpenPopup((preVal: any) => !preVal);
  };

  const handleCloseToggle = () => {
    setOpenPopup(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }
  return (
    <Box sx={{ display: "flex", width: 'auto' }}>
      <CssBaseline />
      {/* <AppBar position="fixed" open={open}>
        <Toolbar>
          
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton> */}
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarMenus.map((items, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link
                to={items.link}
                style={{ textDecoration: "none", color: "none" }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    handleKeyBoardArrow(items.title, false, !open);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {<items.icon />}
                  </ListItemIcon>
                  <ListItemText
                    primary={items.title}
                    sx={{ opacity: open ? 1 : 0 }}
                  ></ListItemText>
                  {open &&
                    items?.submenus &&
                    items?.submenus?.length > 0 &&
                    (!keyBoardArrow ? (
                      <KeyboardArrowRightIcon
                        onClick={() => {
                          handleKeyBoardArrow(items?.title, false);
                        }}
                      />
                    ) : (
                      <KeyboardArrowDownIcon
                        onClick={() => {
                          handleKeyBoardArrow(items?.title, true);
                        }}
                      />
                    ))}
                </ListItemButton>

                {/***************************** Collapse *****************************/}
                {clickedMenu === items.title && (
                  <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {subMenus.map((sbm: any) => (
                        <ListItemButton sx={{ pl: 4 }}>
                          <Link to={sbm.link}>
                            <ListItemText primary={sbm.title} />
                          </Link>
                          {/* <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon> */}
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}

                {/************************* Pop-up menu *****************************/}
                {
                  <Popper
                    open={openPopup}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    
                  >
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{
                          transformOrigin:
                            placement === "bottom-start"
                              ? "left bottom"
                              : "left bottom",
                        }}
                      >
                        <Paper>
                          <ClickAwayListener onClickAway={handleCloseToggle}>
                            <MenuList
                              autoFocusItem={open}
                              id="composition-menu"
                              aria-labelledby="composition-button"
                              onKeyDown={handleListKeyDown}
                            >
                              {subMenus.map((sbm: any) => (
                                <Link to={sbm.link}>
                                  <MenuItem>{sbm.title}</MenuItem>
                                </Link>
                              ))}

                              {/* <MenuItem>My account</MenuItem>
                              <MenuItem>Logout</MenuItem> */}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                }
              </Link>
            </ListItem>
          ))}
        </List>
        <IconButton onClick={handleDrawer} style={{ background: "none" }}>
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Drawer>
    </Box>
  );
}
