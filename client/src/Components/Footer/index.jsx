import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

import footerLogo from "../../img/Logo2.png";

export default function index() {
  return (
    <>
      <Grid
        container
        xs={12}
        sx={{
          height: "93px",
          width: "100%",
          bgcolor: "black",
          px: "80px",
          alignItems: "center",
          justifyContent: "space-between",
          px:{ xs: 4, lg: 3 ,xl:20 }
        }}
      >
        <Avatar src={footerLogo} sx={{ borderRadius: 0, width: "82px" }} />
        <Typography sx={{ fontWeight: "bold", color: "white" }}>
          @ 2019-2023 BLP
        </Typography>
      </Grid>
    </>
  );
}
