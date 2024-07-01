import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Avatar, List, MenuItem } from "@mui/material";

// img
import headerLogo from "../../img/LOGO.png";

// icon
import DownloadIcon from "@mui/icons-material/Download";
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          boxShadow: 0,
          color: "black",
          m: "20px 0px 0px 0px",
          px: {xs:2,md:7},
        }}
      >
        <Toolbar>
          <Grid
            container
            xs={12}
            sx={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Grid>
              <Avatar
                sx={{ borderRadius: 0, width: "82px" }}
                src={headerLogo}
              />
            </Grid>
            <Grid sx={{display:{xs:"flex",md:"none"}}}>
              <MenuIcon/>
            </Grid>
            <Grid >
              <List sx={{display:{xs:"none",md:"flex"}}}>
                <MenuItem sx={{ fontWeight: "bold" }}>About Me</MenuItem>
                <MenuItem sx={{ fontWeight: "bold" }}>Skills</MenuItem>
                <MenuItem sx={{ fontWeight: "bold" }}>Project</MenuItem>
                <MenuItem sx={{ fontWeight: "bold" }}>Contact me</MenuItem>
              </List>
            </Grid>
            <Grid sx={{display:{xs:"none",md:"flex"}}}>
              <Button
                sx={{
                  bgcolor: "black",
                  color: "white",
                  height: "56px",
                  width: "153px",
                  ":hover": { bgcolor: "black" },
                  fontWeight: "bold",
                }}
             
                endIcon={<DownloadIcon />}
              >
                <Typography>Resume</Typography>
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
