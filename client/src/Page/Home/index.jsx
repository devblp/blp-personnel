import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import "./style.css";

// img
import banner from "../../img/Banner.png";
import mui from "../../img/icon_mui.png";
import express from "../../img/icon-express.png";
import git from "../../img/icon-git.svg";
import javscript from "../../img/icon-javscript.png";
import mongodb from "../../img/icon-mongodb.svg";
import nodejs from "../../img/icon-nodejs.svg";
import react from "../../img/react.png";
import tailwindcss from "../../img/icon-tailwindcss.png";
import typescript from "../../img/icon-typescript.png";
import nextjs from "../../img/icon-nextjs.png";
import apple from "../../img/apple.png";
import google from "../../img/google.png";
import youtube from "../../img/youtube.png";
import imgAbut from "../../img/imgAbut.png";
import image770 from "../../img/image770.png";
import image771 from "../../img/image771.png";
import image772 from "../../img/image772.png";

// icons
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CodeBanner from "../../Components/TypeBaner";

export default function Home() {
  return (
    <>
      <Grid
        container
        sx={{ flexDirection: "row-reverse", px: { xs: 2, md: 10 } }}
        my={10}
      >
        <Grid item xs={12} md={6}>
          <Avatar
            src={banner}
            sx={{ width: "90%", height: "auto", borderRadius: 0 }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
              <CodeBanner />
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 32, md: 48 }}>
                Hello I’m
                <span style={{ fontWeight: "bold" }}> Sina Nasibparast</span>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 32, md: 48 }} fontWeight="bold">
                <span>Full Stack</span>{" "}
                <span className="strokeme">Developer</span>{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 32, md: 48 }}>
                Based In <span style={{ fontWeight: "bold" }}>Iran.</span>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "none", md: "flex" } }}>
              <CodeBanner />
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 16, md: 20 }}>
                I'm Sina Nasibparast, and currently working as a full-stack
                developer.
                <br /> I have been in this field for one year, specializing in
                backend development with Node.js.
                <br /> Additionally, I work with React.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                gap: 2,
                my: 3,
                display: "flex",
                justifyContent: { xs: "center", md: "start" },
              }}
            >
              <Button sx={{ border: "solid 2px black", height: 50 }}>
                <GitHubIcon sx={{ color: "black", fontSize: "20px" }} />
              </Button>
              <Button sx={{ border: "solid 2px black" }}>
                <LinkedInIcon sx={{ color: "black", fontSize: "20px" }} />
              </Button>
              <Button sx={{ border: "solid 2px black" }}>
                <XIcon sx={{ color: "black", fontSize: "20px" }} />
              </Button>
              <Button sx={{ border: "solid 2px black" }}>
                <TelegramIcon sx={{ color: "black", fontSize: "20px" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        xs={12}
        sx={{ justifyContent: "center", alignItems: "center", my: 18, gap: 5 }}
      >
        <Typography sx={{ fontSize: { xs: 25, md: 45 } }}>
          My <span style={{ fontWeight: "bold" }}>Skills</span>
        </Typography>
        <Grid
          container
          xs={12}
          sx={{ justifyContent: "center", gap: { xs: 2, md: 5 } }}
        >
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={javscript} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              javascript
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={react} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              reactjs
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={nodejs} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              nodejs
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={mongodb} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              mongodb
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={tailwindcss} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              tailwind
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={mui} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              mui
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={git} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              git
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={express} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              express
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={nextjs} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              nextjs
            </Typography>
          </Grid>
          <Grid
            item
            xs={1.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "solid 2px black",
              gap: 3,
              p: 3,
              boxSizing: "unset",
            }}
          >
            <Avatar src={typescript} sx={{ borderRadius: 0 }} />
            <Typography
              sx={{ fontSize: { xs: 11, md: 14 }, fontWeight: "bold" }}
            >
              typescript
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ bgcolor: "black", my: 6 }}>
        <Grid
          container
          xs={12}
          sx={{ px: { xs: 4, md: 10 }, justifyContent: "center", gap: 5 }}
        >
          <Typography
            sx={{ color: "white", fontSize: { xs: 25, md: 45 }, my: 5 }}
          >
            My <span style={{ fontWeight: "bold" }}>Experience</span>
          </Typography>
          <Grid
            container
            xs={12}
            sx={{ color: "white", gap: 3, justifyContent: "center" }}
          >
            <Grid sx={{ border: "solid 1px #71717A", borderRadius: 2, p: 3 }}>
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "0px 0px 20px 0px",
                  flexWrap: "wrap",
                }}
              >
                <Box display={"flex"} alignItems={"center"} gap={5}>
                  <Avatar src={google} />
                  <Typography sx={{ fontSize: { xs: 14, md: 18 } }}>
                    Lead Software Engineer at Google
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#5FC595",
                    p: { xs: 1, md: 0 },
                    fontSize: { xs: 12, md: 16 },
                  }}
                >
                  Nov 2019 - Present
                </Typography>
              </Box>
              <Typography sx={{ fontSize: { xs: 12, md: 16 },color:"#71717A" }}>
                As a Senior Software Engineer at Google, I played a pivotal role
                in developing innovative solutions for Google's core search
                <br />
                algorithms. Collaborating with a dynamic team of engineers, I
                contributed to the enhancement of search accuracy and
                efficiency,
                <br />
                optimizing user experiences for millions of users worldwide.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{ color: "white", gap: 3, justifyContent: "center" }}
          >
            <Grid sx={{ border: "solid 1px #71717A", borderRadius: 2, p: 3 }}>
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "0px 0px 20px 0px",
                  flexWrap: "wrap",
                }}
              >
                <Box display={"flex"} alignItems={"center"} gap={5}>
                  <Avatar src={youtube} />
                  <Typography sx={{ fontSize: { xs: 14, md: 18 } }}>
                    Software Engineer at Youtube
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#5FC595",
                    p: { xs: 1, md: 0 },
                    fontSize: { xs: 12, md: 16 },
                  }}
                >
                  Jan 2017 - Oct 2019
                </Typography>
              </Box>
              <Typography sx={{ fontSize: { xs: 12, md: 16 },color:"#71717A" }}>
                At Youtube, I served as a Software Engineer, focusing on the
                design and implementation of backend systems for the social
                <br />
                media giant's dynamic platform. Working on projects that
                involved large-scale data processing and user engagement
                features,
                <br /> I leveraged my expertise to ensure seamless functionality
                and scalability.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            sx={{ color: "white", gap: 3, justifyContent: "center" }}
          >
            <Grid sx={{ border: "solid 1px #71717A", borderRadius: 2, p: 3 }}>
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  m: "0px 0px 20px 0px",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <Avatar src={apple} />
                  <Typography sx={{ fontSize: { xs: 14, md: 18 } }}>
                    Junior Software Engineer at Apple
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    color: "#5FC595",
                    p: { xs: 1, md: 0 },
                    fontSize: { xs: 12, md: 16 },
                  }}
                >
                  Jan 2016 - Dec 2017
                </Typography>
              </Box>
              <Typography sx={{ fontSize: { xs: 12, md: 16 },color:"#71717A" }}>
                During my tenure at Apple, I held the role of Software
                Architect, where I played a <br />
                key role in shaping the architecture of mission-critical
                software projects.Responsible for designing scalable and
                efficient systems,
                <br /> I provided technical leadership to a cross-functional
                team.
              </Typography>
            </Grid>
          </Grid>
          <Grid container xs={12}></Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ mx: { xs: 4, md: 10 } }}>
        <Grid
          container
          xs={12}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid xs={12} md={6}>
            <Avatar
              src={imgAbut}
              sx={{
                width: { xs: 313, md: 525.45 },
                height: { xs: 340, md: 572 },
                borderRadius: 0,
              }}
            />
          </Grid>
          <Grid
            container
            xs={12}
            md={6}
            sx={{ gap: 3, flexDirection: "column" }}
          >
            <Typography sx={{ fontSize: { xs: 25, md: 45 } }}>
              About <span style={{ fontWeight: "bold" }}>Me</span>
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 15 },color:"#71717A" }}>
              I am a passionate and self-taught designer specializing in
              full-stack
              <br />
              development (React.js and Node.js). I'm very interested in
              bringing both
              <br />
              the technical and visual aspects of digital products to life. User
              <br />
              experience, pixel-perfect design, and writing clear, readable,
              high-
              <br />
              performance code are important to me.
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 15 },color:"#71717A" }}>
              I started my journey as a web developer in 2023, and since then, I
              have
              <br />
              grown and evolved, facing new challenges and learning the latest
              <br />
              technologies. Now, in the early years of my thirties, one year
              after
              <br />
              starting my web development journey, I am building advanced web
              applications
              <br />
              using modern technologies such as
              <br />
              Next.js, Node.js, React.js, MongoDB, Express, Tailwind, and MUI.
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 15 },color:"#71717A" }}>
              When I'm not fully immersed in programming, you can find me on
              Twitter or Indie
              <br />
              Hacker, where I observe the journeys of early-stage startups or
              simply enjoy my
              <br />
              free time. Feel free to follow me on Twitter, where I share
              tech-related insights <br />
              and build in public, or you can find me on GitHub.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ bgcolor: "black",my: 6 }}>
        <Grid xs={12} sx={{ mx: { xs: 3, md: 10 } }}>
          <Grid container xs={12} sx={{ justifyContent: "center" }}>
            <Typography sx={{ fontSize: { xs: 25, md: 45 }, color: "white",p:"50px 0px 0px 0px" }}>
              My <span style={{ fontWeight: "bold" }}>Projects</span>
            </Typography>
            <Grid container xs={12} sx={{gap:10,py:10}}>
              <Grid container xs={12} sx={{ color: "white"}}>
                <Grid xs={12} md={6}>
                  <Avatar src={image770} sx={{width:{xs:"100%",md:"530px"},height:{xs:460,md:"390px"},borderRadius:10,p:0}}/>
                </Grid>
                <Grid container xs={12} md={6} sx={{flexDirection:"column",gap:3}}>
                  <Typography sx={{ fontSize: { xs: 25, md: 35 } ,color:"#5FC595" ,fontWeight:"bold"}}>01</Typography>
                  <Typography sx={{ fontSize: { xs: 14, md: 28 } ,fontWeight:"bold"}}>Crypto Screener Application</Typography>
                  <Typography sx={{ fontSize: { xs: 12, md: 16 }, color:"#71717A" }}>
                  I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and <br/>
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever<br/>
                   since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                   </Typography>
                   <GitHubIcon/>
                </Grid>
              </Grid>
              <Grid container xs={12} sx={{ color: "white" ,flexDirection:"row-reverse"}}>
              <Grid xs={12} md={6}>
                  <Avatar src={image771} sx={{width:{xs:"100%",md:"530px"},height:{xs:460,md:"390px"},borderRadius:10,p:0}}/>
                </Grid>
                <Grid container xs={12} md={6} sx={{gap:3,flexDirection:"column"}}>
                  <Typography sx={{ fontSize: { xs: 25, md: 35 } ,color:"#5FC595" ,fontWeight:"bold"}}>02</Typography>
                  <Typography sx={{ fontSize: { xs: 14, md: 28 } ,fontWeight:"bold"}}>Crypto Screener Application</Typography>
                  <Typography sx={{ fontSize: { xs: 12, md: 16 }, color:"#71717A" }}>
                  I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and <br/>
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever<br/>
                   since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                   </Typography>
                   <GitHubIcon/>
                </Grid>
              </Grid>
              <Grid container xs={12} sx={{ color: "white"}}>
                <Grid xs={12} md={6}>
                  <Avatar src={image770} sx={{width:{xs:"100%",md:"530px"},height:{xs:460,md:"390px"},borderRadius:10,p:0}}/>
                </Grid>
                <Grid container xs={12} md={6} sx={{flexDirection:"column",gap:3}}>
                  <Typography sx={{ fontSize: { xs: 25, md: 35 } ,color:"#5FC595" ,fontWeight:"bold"}}>03</Typography>
                  <Typography sx={{ fontSize: { xs: 14, md: 28 } ,fontWeight:"bold"}}>Crypto Screener Application</Typography>
                  <Typography sx={{ fontSize: { xs: 12, md: 16 }, color:"#71717A" }}>
                  I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and <br/>
                  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever<br/>
                   since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.
                   </Typography>
                   <GitHubIcon/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </>
  );
}
