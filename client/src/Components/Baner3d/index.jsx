import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Pc from "../../../Public/Pc";
import { width } from "@mui/system";



export default function index() {
  return (
    <>
      <ambientLight intensity={1} />
      
      {/* <OrbitControls /> */}
      <directionalLight position={[1, 0, 0]} />
      {/* // folow mause directionalLight position */}
      <Pc  />
      <Environment preset="sunset" />
    </>
  );
}
