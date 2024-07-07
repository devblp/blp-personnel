import React from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import Pc from "../../../Public/Pc";



export default function index() {
  return (
    <>
      <ambientLight intensity={2} />
      <OrbitControls />
      <directionalLight position={[10, 10, 10]} />{" "}
      {/* // folow mause directionalLight position */}
      <Pc />
      <Environment preset="sunset" />
    </>
  );
}
