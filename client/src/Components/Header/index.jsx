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

export default function ButtonAppBar() {
  // downlaod file .pdf
  const onButtonClick = () => {
    const pdfUrl = "/Public/sinaNsibparast.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "sinaNsibparast.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          boxShadow: 0,
          color: "black",
          m: "20px 0px 0px 0px",
          px: { xs: 4, md: 10, xl: 20 },
        }}
      >
        <Toolbar>
          <Grid
            container
            xs={12}
            sx={{
              flexDirection: "row",
              justifyContent: {
                xs: "center",
                md: "space-between",
                xl: "space-between",
              },
              alignItems: "center",
            }}
          >
            <Grid>
              <Avatar
                sx={{ borderRadius: 0, width: "82px" }}
                src={headerLogo}
              />
            </Grid>
            <Grid>
              <List sx={{ display: { xs: "none", md: "flex" } }}>
                <MenuItem
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    window.scrollTo({
                      top: 1530,
                      behavior: "smooth",
                    });
                  }}
                >
                  About Me
                </MenuItem>
                <MenuItem
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    window.scrollTo({
                      top: 850,
                      behavior: "smooth",
                    });
                  }}
                >
                  Skills
                </MenuItem>
                <MenuItem
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    window.scrollTo({
                      top: 1600,
                      behavior: "smooth",
                    });
                  }}
                >
                  Skills&Projects
                </MenuItem>
                <MenuItem
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    window.scrollTo({
                      top: 2230,
                      behavior: "smooth",
                    });
                  }}
                >
                  Project
                </MenuItem>
                <MenuItem
                  sx={{ fontWeight: "bold" }}
                  onClick={() => {
                    window.scrollTo({
                      top: 3800,
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact me
                </MenuItem>
              </List>
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "flex" } }}>
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
                onClick={onButtonClick}
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
