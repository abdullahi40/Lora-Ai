import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const Background = () => {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}>
      <Stars radius={100} depth={50} count={10000} factor={5} fade speed={1} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default Background;
