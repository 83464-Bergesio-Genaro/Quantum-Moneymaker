import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { sharedMenu} from "../../../config/menuConfig"

export default function Navbar() {
  const baseUrl = import.meta.env.BASE_URL;

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);

  let menu = sharedMenu;

  const handleNav = (path) => {
    navigate(path);
    setMobileAnchorEl(null);
  };

  const handleMobileOpen = (e) => setMobileAnchorEl(e.currentTarget);
  const handleMobileClose = () => setMobileAnchorEl(null);

  const handleAvatarClick = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleProfile = () => {
    handleMenuClose();
    handleMobileClose();
    navigate("/Mi-Perfil");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ boxShadow: 2, bgcolor:"var(--primary)", width: "100%" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
         <Box
            component={Link}
            to="/"
            sx={{
              width: 240,
              height: 60,
              
              display: "block",
              flexShrink: 0,
              my: 1,
            }}
          >
            <Box
              component="img"
              src={`${baseUrl}QuantumLogo.svg`}
              alt="Quantum Logo"
              sx={{
                
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "left center",
              }}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1, flexGrow: 1, justifyContent: "flex-end", alignitems: "center" }}>
            {menu.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{ color: "white", fontWeight: "bold", fontSize: 15 }}
              >
                {item.label}
              </Button>
            ))}

          </Box>

          <IconButton
            color="inherit"
            edge="end"
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={handleMobileOpen}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile floating Menu */}
      <Menu
        anchorEl={mobileAnchorEl}
        open={Boolean(mobileAnchorEl)}
        onClose={handleMobileClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        
        {menu.map((item) => {
          const ItemIcon = item.icon;
          return (
            <MenuItem
              key={item.path}
              onClick={() => handleNav(item.path)}
              sx={{ py: 1.25 }}
            >
              {ItemIcon && (
                <ListItemIcon sx={{ color: "primary.main" }}>
                  <ItemIcon fontSize="small" />
                </ListItemIcon>
              )}
              {item.label}
            </MenuItem>
          );
        })}
       
      </Menu>
    </>
  );
}
