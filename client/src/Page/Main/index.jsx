import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Star from "./Star.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";

function CameraLogger({ onCameraPositionChange, moveCamera }) {
  const { camera } = useThree();
  useFrame(() => {
    if (moveCamera && camera.position.z > 0) {
      camera.position.y -= 0.004;
    }
    onCameraPositionChange(camera.position.y);
  });
}

export default function Index() {
  const [cameraY, setCameraY] = useState(1);

  const [moveCamera, setMoveCamera] = useState(false);
  const navigate = useNavigate();

  if (cameraY < 0.10482461472379535) {
    navigate("/home");
  }

  const handleMoveCamera = () => {
    setMoveCamera(true);
  };

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
        <Canvas camera={{ position: [0, 1.3, 1] }}>
          <OrbitControls enablePan={false} enableRotate={false} enableZoom={false} />
          <ambientLight intensity={0.01} />
          <Star />
          <Environment preset="sunset" />
          <CameraLogger
            onCameraPositionChange={setCameraY}
            moveCamera={moveCamera}
          />
        </Canvas>
        {cameraY >= 0.57482461472379535 ? (
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
                left: "47%",
                top: "47%",
                color: "white",
                fontSize: "50px",
                fontWeight: "bold",
              }}
            >
              BlP.
            </Typography>
          </motion.div>
        ) : (
          ""
        )}
        {cameraY < 0.57482461472379535 ? (
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
                left: "39%",
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
        {/* <motion.div
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
        </motion.div> */}
        <Button
          variant="contained"
          onClick={handleMoveCamera}
          sx={{
            position: "absolute",
            zIndex: 2,
            left: "5%",
            bottom: "10%",
            color:"black",
            backgroundColor:"white",
            "&:hover": {
              backgroundColor: "#787b86",
              },
          }}
        >
          Go to Home
        </Button>
      </div>
    </motion.div>
  );
}
