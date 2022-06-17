import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Car Parking System
          </Typography>
          <Link to="/">
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
