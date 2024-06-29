import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Grid from "@mui/material/Grid";
import { Avatar, ListItem, MenuItem } from "@mui/material";

// img
import headerLogo from "../../img/LOGO.png"


import DownloadIcon from '@mui/icons-material/Download';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor:"white",boxShadow:0,color:"black",m:"30px 0px 0px 0px"}}>
        <Toolbar>
          <Grid container xs={12} sx={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
            <Grid >
              <Avatar sx={{borderRadius:0,width:"82px"}} src={headerLogo}/>
            </Grid>
            <Grid >
              <Button color="inherit" ><Typography >Login</Typography></Button>
              <Button color="inherit"><Typography sx={{fontWeight:"bold"}}>Login</Typography></Button>
              <Button color="inherit"><Typography sx={{fontWeight:"bold"}}>Login</Typography></Button>
              <Button color="inherit"><Typography sx={{fontWeight:"bold"}}>Login</Typography></Button>
            </Grid>
            <Grid >
              <Button sx={{bgcolor:"black" ,color:"white",height:"56px",width:"153px",":hover":{bgcolor:"black"},fontWeight:"bold"}} endIcon={<DownloadIcon />}>Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
