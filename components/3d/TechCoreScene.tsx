'use client'

import '@/components/layout/R3FSetup';
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// --- Helper hook for window size ---
const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};


// --- 3D Components ---
const Core = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
      ref.current.rotation.x += 0.001;
    }
  });

  return (
    <Icosahedron ref={ref} args={[2, 4]}>
      <meshStandardMaterial 
        color="#00D9FF" 
        wireframe 
        emissive="#00D9FF"
        emissiveIntensity={0.5}
      />
    </Icosahedron>
  );
};

interface PrincipleNodeProps {
  position: [number, number, number];
  label: string;
  scale: number;
}

const PrincipleNode: React.FC<PrincipleNodeProps> = ({ position, label, scale }) => {
  const [hovered, setHover] = useState(false);
  const ref = useRef<THREE.Mesh>(null);

  // Apply the responsive scale to the position
  const scaledPosition = new THREE.Vector3(...position).multiplyScalar(scale);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      // Animate the node's y-position for a floating effect
      ref.current.position.y = scaledPosition.y + Math.sin(t * 2 + scaledPosition.x) * 0.2;
    }
  });

  return (
    <group position={scaledPosition}>
      <Sphere
        ref={ref}
        args={[0.3, 32, 32]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <meshStandardMaterial 
          color={hovered ? "#8A2BE2" : "#00D9FF"}
          emissive={hovered ? "#8A2BE2" : "#00D9FF"}
          emissiveIntensity={hovered ? 2 : 1}
          toneMapped={false}
        />
      </Sphere>
      {/* Text component temporarily removed due to R3F Span namespace error */}
    </group>
  );
};

// --- Main Scene Component ---

interface Principle {
  label: string;
  position: [number, number, number];
}

export default function TechCoreScene() {
  const [width] = useWindowSize();
  
  // Determine if the screen is mobile
  const isMobile = width < 768;

  // Adjust scale and camera FOV based on screen width
  const scale = isMobile ? 0.7 : 1.0;
  const cameraFov = isMobile ? 75 : 50;

  const principles: Principle[] = [
    { label: "AI-Ready", position: [3.5, 2, 0] },
    { label: "Hypersonic", position: [-3.5, 2, 0] },
    { label: "Scalable", position: [3.5, -2, 0] },
    { label: "Secure", position: [-3.5, -2, 0] },
  ];

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: cameraFov }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8A2BE2" />
      <Core />
      {principles.map(p => <PrincipleNode key={p.label} {...p} scale={scale} />)}
    </Canvas>
  );
}
