import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Environment } from "@react-three/drei";

function SteamParticles() {
  const ref = useRef<THREE.Points>(null!);
  const particlesCount = 2000;
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 10;
  }

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.x += 0.0003;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#fff8e7"
        size={0.06}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

export default function Background3D() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 0,
        background:
          "radial-gradient(circle at 20% 30%, #f3e7d3, #e6d3c4, #b08b5e)",
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffddbb" />
      <SteamParticles />
      <Environment preset="sunset" />
    </Canvas>
  );
}
