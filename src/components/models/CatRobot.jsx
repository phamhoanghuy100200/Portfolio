/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const CatRobot = React.memo(function CatRobot(props) {
  // Use React.memo for performance optimization
  const { nodes, materials } = useGLTF("/models/robocat.glb");

  const modelRef = useRef();

  useFrame(() => {
    modelRef.current.rotation.y += 0.01;
  });
  return (
    <group ref={modelRef} rotation={[0.5, 1, 0]} {...props} scale={[1.5, 1.5, 1.5]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial.geometry}
            material={materials.Screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.defaultMaterial_1.geometry}
            material={materials.wire_134006006}
          />
        </group>
      </group>
    </group>
  );
});

export default CatRobot;
useGLTF.preload("/models/robocat.glb");