import React, { ReactNode } from "react";
import {
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
  Box,
} from "@mui/material";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode
}

const getFormattedDate = () => {
  return new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const drawerWidth = 240;

export default function Layout({ children }: LayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        elevation={1}
        sx={{ width: `calc(100% - ${drawerWidth}px)`, background: "#fff", color: "#000" }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today is: {getFormattedDate()} {/* ✅ Usando função JS */}
          </Typography>
          <Typography>Kendi</Typography>
          <Avatar sx={{ marginLeft: 2 }} />
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ padding: 2 }}>
          <Typography variant="h5">My Notes</Typography>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              component='div'
              key={item.text}
              onClick={() => navigate(item.path)}
              sx={{
                backgroundColor: location.pathname === item.path ? "#f4f4f4" : "transparent",
                "&:hover": { backgroundColor: "#eee" },
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Conteúdo Principal */}
      <Box sx={{ flexGrow: 1, background: "#f9f9f9", p: 3, minHeight: "100vh" }}>
        {children}
      </Box>
    </Box>
  );
}
