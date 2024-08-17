import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three' // follow mouse
import { useFrame } from '@react-three/fiber' // follow mouse
import { easing } from 'maath' // follow mouse

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/star.gltf')
  const { actions } = useAnimations(animations, group)


  materials['03_-'].color = new THREE.Color(0xff0000) 
  materials['02_-'].color = new THREE.Color(0x00ff00) 
  materials['01_-'].color = new THREE.Color(0x0000ff) 

  // follow mouse setting
  const mesh = useRef()
  const [dummy] = useState(() => new THREE.Object3D())
  useFrame((state, dt) => {
    dummy.lookAt(state.pointer.x, state.pointer.y, 10)
    easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
  })
  // follow mouse setting !end

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={mesh} name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
          <group name="c0d234900f694cb2b1f4f457c9f91791fbx" rotation={[-Math.PI, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="StarCluster3" scale={100}>
                  <group name="Object_5" position={[-0.703, 0, 0]}>
                    <mesh name="StarCluster3_03_-__0" geometry={nodes['StarCluster3_03_-__0'].geometry} material={materials['03_-']} />
                  </group>
                </group>
                <group name="StarCluster2" scale={49.606}>
                  <group name="Object_8" position={[-1.549, 0, 0]}>
                    <mesh name="StarCluster2_02_-__0" geometry={nodes['StarCluster2_02_-__0'].geometry} material={materials['02_-']} />
                  </group>
                </group>
                <group name="StarCluster1" scale={24.803}>
                  <group name="Object_11" position={[-1.993, 0, 0]}>
                    <mesh name="StarCluster1_01_-__0" geometry={nodes['StarCluster1_01_-__0'].geometry} material={materials['01_-']} />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/star.gltf')
