import { Box } from "@mui/material";
import Navbar from "./navbar";
import Footer from "./footer";
import ScrollToTop from "./scrollTop";

import { Outlet } from 'react-router-dom'; 

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <ScrollToTop />
        <div style={{ paddingTop: 90, flex: 1 }}>
          <Outlet /> 
        </div>
        <Footer/>
    </Box>
    
  );
}
