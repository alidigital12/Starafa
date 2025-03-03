import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
  Box,
  Typography,
  useMediaQuery,
  Divider,
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";
import {
  Menu,
  Dashboard,
  Lightbulb,
  Category,
  Layers,
  Lock,
  Logout,
  ChevronLeft,
  ChevronRight,
} from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

// ======================================
// 1) Logout Dialog Component
// ======================================
const LogoutDialog = ({ open, onClose, onConfirm }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "12px",
          p: 2,
          overflow: "visible",
        },
      }}
    >
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: 4,
          py: 5,
        }}
      >
        {/* Icon container (93×93 px, circular) */}
        <Box
          sx={{
            width: 93,
            height: 93,
            borderRadius: "50%",
            backgroundColor: "#FFF2EA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <Logout sx={{ fontSize: 32, color: "#FF7F32" }} />
        </Box>

        {/* Title: "Logout" */}
        <Typography
          variant="h6"
          sx={{
            fontFamily: "DM Sans",
            fontWeight: 800,
            fontSize: "30px",
            color: "#2E2E2E",
            mb: 2,
          }}
        >
          Logout
        </Typography>

        {/* Confirmation text (DM Sans, weight 500) */}
        <Typography
          sx={{
            fontFamily: "DM Sans",
            fontWeight: 200,
            fontSize: "26px",
            color: "#6E6E6E",
            mb: 4,
          }}
        >
          Are you absolutely certain you wish to proceed with logging out?
        </Typography>

        {/* Confirmation Button */}
        <Button
          variant="contained"
          onClick={onConfirm}
          sx={{
            width: "264px",
            height: "65px",
            backgroundColor: "#FF7F32",
            fontFamily: "DM Sans",
            fontWeight: 800,
            fontSize: "21px",
            textTransform: "none",
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#FF9350",
            },
          }}
        >
          Yes, Logout
        </Button>
      </DialogContent>
    </Dialog>
  );
};

// ======================================
// 2) Sidebar Styles & Layout
// ======================================
const drawerWidth = 250;
const closedDrawerWidth = 60; // width when collapsed (mini variant)

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  width: closedDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
});

const DrawerStyled = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: open ? drawerWidth : closedDrawerWidth,
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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const menuItems = [
  { text: "Dashboard", icon: <Dashboard />, path: "/" },
  { text: "Suggestions", icon: <Lightbulb />, path: "/suggestions" },
  { text: "Categories", icon: <Category />, path: "/categories" },
  { text: "Platforms", icon: <Layers />, path: "/platforms" },
  { text: "Change Password", icon: <Lock />, path: "/change-password" },
];

// ======================================
// 3) Main Sidebar Component
// ======================================
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleMobileDrawer = (state) => () => {
    setMobileOpen(state);
  };

  const handleConfirmLogout = () => {
    setLogoutDialogOpen(false);
    navigate("/login");
  };

  // Renders the main menu items with updated font family and weight
  const renderMenuItems = (showText) => (
    <List>
      {menuItems.map((item, index) => (
        <ListItem
          button
          key={index}
          selected={location.pathname === item.path}
          onClick={() => {
            navigate(item.path);
            if (isMobile) setMobileOpen(false);
          }}
          sx={{
            padding: "12px 20px",
            color: location.pathname === item.path ? "#FF7F32" : "#989898",
            backgroundColor:
              location.pathname === item.path ? "#FF7F3226" : "transparent",
            borderLeft:
              location.pathname === item.path ? "4px solid #FF7F32" : "none",
            "&.Mui-selected, &:hover": {
              backgroundColor: "#FF7F3226",
              color: "#FF7F32",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: location.pathname === item.path ? "#FF7F32" : "#989898",
              minWidth: 0,
              mr: showText ? 1 : "auto",
              justifyContent: "center",
            }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              fontFamily: "Inter",
              fontWeight: 600,
            }}
            sx={{ opacity: showText ? 1 : 0 }}
          />
        </ListItem>
      ))}
    </List>
  );

  // Renders the logout item with updated font family and weight
  const renderLogout = (showText) => (
    <List>
      <ListItem
        button
        onClick={() => setLogoutDialogOpen(true)}
        sx={{
          padding: "12px 20px",
          color: "#FF7F32",
          "&:hover": { backgroundColor: "#FF7F3226" },
        }}
      >
        <ListItemIcon
          sx={{
            color: "#FF7F32",
            minWidth: 0,
            mr: showText ? 1 : "auto",
            justifyContent: "center",
          }}
        >
          <Logout />
        </ListItemIcon>
        <ListItemText
          primary="Logout Account"
          primaryTypographyProps={{
            fontFamily: "Inter",
            fontWeight: 600,
          }}
          sx={{ opacity: showText ? 1 : 0, color: "#FF7F32" }}
        />
      </ListItem>
    </List>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#FF7F32",
          boxShadow: "none",
          zIndex: theme.zIndex.drawer + 1,
          fontFamily: "Inter",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              onClick={toggleMobileDrawer(true)}
            >
              <Menu />
            </IconButton>
          )}
          <img
            src="./src/images/Logo.png"
            alt="Logo"
            style={{ marginRight: "10px", width: "40px" }}
          />
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              fontFamily: "Inter",
              fontSize: "28px",
              fontWeight: 600,
              lineHeight: "38.4px",
            }}
          >
            Starafa
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Desktop Sidebar */}
      {!isMobile && (
        <DrawerStyled variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerToggle}>
              {open ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {renderMenuItems(open)}
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          {renderLogout(open)}
        </DrawerStyled>
      )}

      {/* Mobile Sidebar */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={toggleMobileDrawer(false)}
          sx={{
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          <DrawerHeader>
            <IconButton onClick={toggleMobileDrawer(false)}>
              {theme.direction === "rtl" ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {renderMenuItems(true)}
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          {renderLogout(true)}
        </Drawer>
      )}

      {/* Main content area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "64px" }}>
        <Outlet />
      </Box>

      {/* The Logout Confirmation Dialog */}
      <LogoutDialog
        open={logoutDialogOpen}
        onClose={() => setLogoutDialogOpen(false)}
        onConfirm={handleConfirmLogout}
      />
    </Box>
  );
};

export default Sidebar;
