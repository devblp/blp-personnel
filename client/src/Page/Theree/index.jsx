import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState, useEffect } from "react";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import { Avatar, Box } from "@mui/material";
import footerLogo from "../../img/Logo2.png";
import Star from "./Star.jsx";

function CameraController() {
  const { camera } = useThree();
  const [zoom, setZoom] = useState(camera.zoom);

  useEffect(() => {
    const handleScroll = (event) => {
      const newZoom = Math.max(0.001, camera.zoom + event.deltaY * -0.001); // تغییر به 0.001
      setZoom(newZoom);
    };

    window.addEventListener("wheel", handleScroll);

    return () => window.removeEventListener("wheel", handleScroll);
  }, [camera.zoom]);

  useFrame(() => {
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
  });

  return null;
}

export default function Index() {
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",
          position: "relative",
        }}
      >
        <Canvas camera={{ position: [0, 1, 0.1] }}>
          <OrbitControls enablePan={false} enableRotate={false} />
          <CameraController />
          <ambientLight intensity={0.01} />
          <Star />
          <Environment preset="sunset" />
        </Canvas>
        <Box sx={{ position: "absolute", top: "48%", left: "48%" }}>
          <Avatar src={footerLogo} sx={{ borderRadius: 0, width: "82px" }} />
        </Box>
      </div>
    </>
  );
}
