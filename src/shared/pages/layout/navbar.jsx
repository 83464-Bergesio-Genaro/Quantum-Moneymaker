import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  IconButton,
  Divider,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Button,
  Container,
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
      <AppBar position="fixed" sx={{ boxShadow: 2, bgcolor:"var(--primary)", width: "100%"}}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between" }}>

          <Box
              component={Link}
              to="/"
              sx={{
                height: 80,        
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
                  objectPosition: "center center",
                }}
              />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, flexGrow: 2, justifyContent: "flex-end", alignitems: "center" }}>
              {menu.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{ color: "white", fontWeight: 700, fontSize: 16,textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              ))}

            </Box>
          <Box sx={{display:{xs:"block",md:"none"}, flexGrow: 1,marginLeft:-4 }}>
            <Typography
              sx={{
                fontWeight: 800,
                fontSize: { xs: "1.3rem", md: "1.5rem" },
                letterSpacing: "-0.04em",
                color: "var(--text)",
                
              }}
            >
              QUANTUM
            </Typography>

            <Typography
              sx={{
                fontSize: "0.65rem",
                letterSpacing: "0.18em",
                color: "var(--secondary)",
                fontWeight: 600,
              }}
            >
              CONSULTORA SAS
            </Typography>
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

        </Container>       
      </AppBar>

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
