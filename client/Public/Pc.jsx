
import * as THREE from 'three' // folow mause
import React, { useRef, useState } from "react"; // folow mause
import { useFrame } from '@react-three/fiber'// folow mause
import { useGLTF } from "@react-three/drei";
import { easing } from 'maath' // folow mause

export default function Pc(props) {
  const { nodes, materials } = useGLTF("/scene.gltf");
  // folow mause seting
  const mesh = useRef();
  const [dummy] = useState(() => new THREE.Object3D());
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 10);
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt);
  });
  // folow mause seting !end
  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI /10, 0,0]} scale={36.277} >
        <mesh
          ref={mesh}
          
          geometry={nodes.Final_lambert1_0.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        />
         
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
