import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Star from "./Star.jsx";
import { useNavigate } from "react-router-dom";
import { color, motion } from "framer-motion";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex.js";

function CameraLogger({ onCameraPositionChange }) {
  const { camera } = useThree();
  useFrame(() => {
    onCameraPositionChange(camera.position.y);
  });
}

export default function Index() {
  const [cameraY, setCameraY] = useState(1);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  if (cameraY < 0.17482461472379535) {
    navigate("/home");
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",
        }}
      >
        <Canvas camera={{ position: [0, 1, 0.5] }}>
          <OrbitControls enablePan={false} enableRotate={false} />
          <ambientLight intensity={0.01} />
          <Star />
          <Environment preset="sunset" />
          <CameraLogger onCameraPositionChange={setCameraY} />
        </Canvas>
        {cameraY >= 0.47482461472379535 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                left: "37%",
                top: "47%",
                color: "white",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              Sina Nasibparast
            </Typography>
          </motion.div>
        ) : (
          ""
        )}
        {cameraY < 0.47482461472379535 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              sx={{
                position: "absolute",
                zIndex: 2,
                left: "38%",
                top: "47%",
                color: "white",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              Enter my world
            </Typography>
          </motion.div>
        ) : (
          ""
        )}
        <motion.div
          animate={{ opacity: [1, 0, 1] }}
          transition={{
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut", 
          }}
        >
          <span
            style={{
              position: "absolute",
              zIndex: 2,
              left: "5%",
              top: "5%",
              color: "white",
            }}
          >
            Scroll Up
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
