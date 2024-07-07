import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, Suspense } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { motion, useInView } from "framer-motion";
import "./style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Scene from "../../../Public/Scene.jsx";
import Tilty from "react-tilty";

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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const inView1 = useInView(ref1, { once: true });
  const inView2 = useInView(ref2, { once: true });
  const inView3 = useInView(ref3, { once: true });
  const inView4 = useInView(ref4, { once: true });
  const inView5 = useInView(ref5, { once: true });
  const inView6 = useInView(ref6, { once: true });
  return (
    <>
      <Grid
        container
        sx={{ flexDirection: "row-reverse", px: { xs: 4, md: 10, xl: 20 } }}
        my={18}
      >
        <Grid container xs={12} md={6}>
          {/* <Avatar
            src={banner}
            sx={{ width: "90%", height: "auto", borderRadius: 0 }}
          /> */}
          <Canvas camera={{ position: [0, 3, 4] }} style={{width:"100%",height:"100%"}}>
            {/* // folow mause camera  */}

            <ambientLight intensity={2} />
            <OrbitControls />
            <Suspense fallback={null}>
              <directionalLight position={[10, 10, 10]} />{" "}
              {/* // folow mause directionalLight position */}
              <Scene />
            </Suspense>
            <Environment preset="sunset" />
          </Canvas>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container>
            <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
              <CodeBanner />
            </Grid>
            <Grid item xs={12}>
              <Typography fontSize={{ xs: 32, md: 40 }}>
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
        sx={{
          justifyContent: "center",
          alignItems: "center",
          m: "0px 0px 200px 0px",
          gap: 5,
          px: { xs: 2, md: 8, xl: 20 },
        }}
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
          <Tilty max={30} speed={100}>
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
          </Tilty>

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
      <Grid xs={12} sx={{ bgcolor: "black", my: 6, py: 10 }}>
        <Grid
          container
          xs={12}
          sx={{
            px: { xs: 4, md: 10, xl: 20 },
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: { xs: 25, md: 45 },
              m: "0px 0px 30px 0px",
            }}
          >
            My <span style={{ fontWeight: "bold" }}>Experience</span>
          </Typography>
          <Grid
            container
            xs={12}
            sx={{ color: "white", gap: 3, justifyContent: "center" }}
          >
            <Grid container xs={12} ref={ref1}>
              {inView1 && (
                <motion.dev
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.7 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    sx={{
                      border: "solid 1px #71717A",
                      borderRadius: 2,
                      p: 3,
                    }}
                  >
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
                    <Typography
                      sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}
                    >
                      As a Senior Software Engineer at Google, I played a
                      pivotal role in developing innovative solutions for
                      Google's core search
                      <br />
                      algorithms. Collaborating with a dynamic team of
                      engineers, I contributed to the enhancement of search
                      accuracy and efficiency,
                      <br />
                      optimizing user experiences for millions of users
                      worldwide.
                    </Typography>
                  </Grid>
                </motion.dev>
              )}
            </Grid>
            <Grid container xs={12} ref={ref2}>
              {inView2 && (
                <motion.dev
                  initial={{ opacity: 0, x: 500 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.7 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    container
                    xs={12}
                    sx={{ color: "white", gap: 3, justifyContent: "center" }}
                  >
                    <Grid
                      sx={{
                        border: "solid 1px #71717A",
                        borderRadius: 2,
                        p: 3,
                        width: "100%",
                      }}
                    >
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
                      <Typography
                        sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}
                      >
                        At Youtube, I served as a Software Engineer, focusing on
                        the design and implementation of backend systems for the
                        social
                        <br />
                        media giant's dynamic platform. Working on projects that
                        involved large-scale data processing and user engagement
                        features,
                        <br /> I leveraged my expertise to ensure seamless
                        functionality and scalability.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.dev>
              )}
            </Grid>
            <Grid container xs={12} ref={ref3}>
              {inView3 && (
                <motion.dev
                  initial={{ opacity: 0, x: -500 }}
                  animate={{ opacity: 1, x: 1 }}
                  transition={{ duration: 0.7 }}
                  style={{ width: "100%" }}
                >
                  <Grid
                    container
                    xs={12}
                    sx={{ color: "white", gap: 3, justifyContent: "center" }}
                  >
                    <Grid
                      sx={{
                        border: "solid 1px #71717A",
                        borderRadius: 2,
                        p: 3,
                        width: "100%",
                      }}
                    >
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
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 5 }}
                        >
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
                      <Typography
                        sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}
                      >
                        During my tenure at Apple, I held the role of Software
                        Architect, where I played a <br />
                        key role in shaping the architecture of mission-critical
                        software projects.Responsible for designing scalable and
                        efficient systems,
                        <br /> I provided technical leadership to a
                        cross-functional team.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.dev>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ mx: { xs: 4, md: 10, xl: 20 } }}>
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
            <Typography sx={{ fontSize: { xs: 12, md: 15 }, color: "#71717A" }}>
              I am a passionate and self-taught designer specializing in
              <br />
              full-stack development (React.js and Node.js). I'm very interested
              <br />
              in bringing both the technical and visual aspects of digital
              <br />
              products to life. User experience, pixel-perfect design, and
              <br />
              writing clear, readable, high- performance code are important to
              <br />
              me.
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 15 }, color: "#71717A" }}>
              I started my journey as a web developer in 2023, and since then, I
              <br />
              have grown and evolved, facing new challenges and learning the
              <br />
              latest technologies. starting my web development journey, I am
              <br />
              building advanced web applications using modern technologies such
              <br />
              as Next.js, Node.js, React.js, MongoDB, Express, Tailwind, and
              <br />
              MUI.
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, md: 15 }, color: "#71717A" }}>
              When I'm not fully immersed in programming, you can find me on
              <br />
              GitHub or linkeden where I observe the journeys of early-stage
              <br />
              startups or simply enjoy my free time. Feel free to follow me on
              <br />
              Twitter, where I share tech-related insights
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ bgcolor: "black", my: 6 }}>
        <Grid xs={12} sx={{ mx: { xs: 4, md: 10, xl: 20 } }}>
          <Grid container xs={12} sx={{ justifyContent: "center" }}>
            <Typography
              sx={{
                fontSize: { xs: 25, md: 45 },
                color: "white",
                p: "50px 0px 0px 0px",
              }}
            >
              My <span style={{ fontWeight: "bold" }}>Projects</span>
            </Typography>
            <Grid container xs={12} sx={{ gap: 10, py: 10 }}>
              <Grid container xs={12} sx={{ color: "white" }} ref={ref4}>
                {inView4 && (
                  <Grid xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: -500 }}
                      animate={{ opacity: 1, x: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Avatar
                        src={image770}
                        sx={{
                          width: { xs: "100%", md: "530px" },
                          height: { xs: 460, md: "390px" },
                          borderRadius: 10,
                          p: 0,
                        }}
                      />
                    </motion.div>
                  </Grid>
                )}
                {inView4 && (
                  <Grid
                    container
                    xs={12}
                    md={6}
                    sx={{ flexDirection: "column", gap: 3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 500 }}
                      animate={{ opacity: 1, x: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 25, md: 35 },
                          color: "#5FC595",
                          fontWeight: "bold",
                        }}
                      >
                        01
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: 14, md: 28 },
                          fontWeight: "bold",
                        }}
                      >
                        Crypto Screener Application
                      </Typography>
                      <Typography
                        sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}
                      >
                        I'm Evren Shah Lorem Ipsum is simply dummy text of the
                        printing and <br />
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                        <br />
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to specimen book.
                      </Typography>
                      <GitHubIcon />
                    </motion.div>
                  </Grid>
                )}
              </Grid>
              <Grid
                container
                xs={12}
                sx={{ color: "white", flexDirection: "row-reverse" }}
                ref={ref5}
              >
                {inView5 && (
                  <Grid xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: 600 }}
                      animate={{ opacity: 1, x: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Avatar
                        src={image770}
                        sx={{
                          width: { xs: "100%", md: "530px" },
                          height: { xs: 460, md: "390px" },
                          borderRadius: 10,
                          p: 0,
                        }}
                      />
                    </motion.div>
                  </Grid>
                )}
                {inView5 && (
                  <Grid
                    container
                    xs={12}
                    md={6}
                    sx={{ flexDirection: "column", gap: 3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -500 }}
                      animate={{ opacity: 1, x: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 25, md: 35 },
                          color: "#5FC595",
                          fontWeight: "bold",
                        }}
                      >
                        01
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: 14, md: 28 },
                          fontWeight: "bold",
                        }}
                      >
                        Crypto Screener Application
                      </Typography>
                      <Typography
                        sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}
                      >
                        I'm Evren Shah Lorem Ipsum is simply dummy text of the
                        printing and <br />
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                        <br />
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to specimen book.
                      </Typography>
                      <GitHubIcon />
                    </motion.div>
                  </Grid>
                )}
              </Grid>
              <Grid container xs={12} sx={{ color: "white" }} ref={ref6}>
                {inView6 && (
                  <Grid xs={12} md={6}>
                    <motion.div
                      initial={{ opacity: 0, x: -500 }}
                      animate={{ opacity: 1, x: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Avatar
                        src={image770}
                        sx={{
                          width: { xs: "100%", md: "530px" },
                          height: { xs: 460, md: "390px" },
                          borderRadius: 10,
                          p: 0,
                        }}
                      />
                    </motion.div>
                  </Grid>
                )}
                {inView6 && (
                  <Grid
                    container
                    xs={12}
                    md={6}
                    sx={{ flexDirection: "column", gap: 3 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: 500 }}
                      animate={{ opacity: 1, x: 1 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: 25, md: 35 },
                          color: "#5FC595",
                          fontWeight: "bold",
                        }}
                      >
                        01
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: 14, md: 28 },
                          fontWeight: "bold",
                        }}
                      >
                        Crypto Screener Application
                      </Typography>
                      <Typography
                        sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}
                      >
                        I'm Evren Shah Lorem Ipsum is simply dummy text of the
                        printing and <br />
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever
                        <br />
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to specimen book.
                      </Typography>
                      <GitHubIcon />
                    </motion.div>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ m: { xs: 4, md: 10, xl: 20 } }}>
        <Grid
          container
          xs={12}
          sx={{ flexDirection: { xs: "column", md: "row" } }}
        >
          <Grid xs={12} md={6}>
            <Formik
              initialValues={{
                name: "",
                email: "",
                website: "",
                message: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                website: Yup.string().url("Invalid URL"),
                message: Yup.string().required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                fetch("http://localhost:5000/contact", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    alert("Message sent successfully!");
                    setSubmitting(false);
                  })
                  .catch((error) => {
                    console.error("There was an error!", error);
                    setSubmitting(false);
                  });
              }}
            >
              {({
                isSubmitting,
                handleChange,
                handleBlur,
                values,
                touched,
                errors,
              }) => (
                <Grid>
                  <Form>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        label="Your name"
                        name="name"
                        variant="outlined"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          touched.name && errors.name ? errors.name : ""
                        }
                        error={touched.name && Boolean(errors.name)}
                      />
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          touched.email && errors.email ? errors.email : ""
                        }
                        error={touched.email && Boolean(errors.email)}
                      />
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        label="Your website (if exists)"
                        name="website"
                        variant="outlined"
                        value={values.website}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          touched.website && errors.website
                            ? errors.website
                            : ""
                        }
                        error={touched.website && Boolean(errors.website)}
                      />
                    </Box>
                    <Box marginBottom={2}>
                      <TextField
                        fullWidth
                        label="How can I help?"
                        name="message"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        helperText={
                          touched.message && errors.message
                            ? errors.message
                            : ""
                        }
                        error={touched.message && Boolean(errors.message)}
                      />
                    </Box>
                    <Grid container xs={12} sx={{ gap: 3 }}>
                      <Button
                        type="submit"
                        sx={{
                          bgcolor: "black",
                          color: "white",
                          p: 1.5,
                          ":hover": { bgcolor: "black" },
                        }}
                        disabled={isSubmitting}
                      >
                        Get In Touch
                      </Button>
                      <Button
                        sx={{
                          bgcolor: "white",
                          color: "black",
                          p: 1.5,
                          border: "solid 1px black",
                          ":hover": { bgcolor: "black", color: "white" },
                        }}
                      >
                        <LinkedInIcon />
                      </Button>
                      <Button
                        sx={{
                          bgcolor: "white",
                          color: "black",
                          p: 1.5,
                          border: "solid 1px black",
                          ":hover": { bgcolor: "black", color: "white" },
                        }}
                      >
                        <GitHubIcon />
                      </Button>
                      <Button
                        sx={{
                          bgcolor: "white",
                          color: "black",
                          p: 1.5,
                          border: "solid 1px black",
                          ":hover": { bgcolor: "black", color: "white" },
                        }}
                      >
                        <TelegramIcon />
                      </Button>
                    </Grid>
                  </Form>
                </Grid>
              )}
            </Formik>
          </Grid>
          <Grid
            xs={12}
            md={6}
            sx={{ px: { xs: 6, md: 12 }, py: { xs: 10, md: 0 } }}
          >
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: 20, md: 40 } }}
            >
              Let’s <span className="strokeme">talk</span> for
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: 20, md: 40 } }}
            >
              Something special
            </Typography>
            <br />
            <Typography sx={{ fontSize: { xs: 12, md: 16 }, color: "#71717A" }}>
              I seek to push the limits of creativity to create high-engaging,
              user- friendly, and memorable interactive experiences.
            </Typography>
            <br />
            <br />
            <br />
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: 20, md: 30 } }}
            >
              dev.sinanp@gmail.com
            </Typography>
            <Typography
              sx={{ fontWeight: "bold", fontSize: { xs: 20, md: 30 } }}
            >
              +989046060193
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
