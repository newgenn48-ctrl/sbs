'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// Glassmorphism geometric shapes
function GlassShape({ position, scale, rotationSpeed, shape }: {
  position: [number, number, number]
  scale: number
  rotationSpeed: number
  shape: 'icosahedron' | 'octahedron' | 'dodecahedron'
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * rotationSpeed * 0.2
    }
  })

  const geometry = {
    icosahedron: <icosahedronGeometry args={[1, 0]} />,
    octahedron: <octahedronGeometry args={[1, 0]} />,
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
  }

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry[shape]}
        <MeshTransmissionMaterial
          color="#00D9FF"
          thickness={0.5}
          roughness={0.1}
          transmission={0.9}
          ior={1.5}
          chromaticAberration={0.03}
          backside={true}
        />
      </mesh>
    </Float>
  )
}

// Glowing orbs
function GlowOrb({ position, color, scale }: {
  position: [number, number, number]
  color: string
  scale: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(
        scale * (1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
      )
    }
  })

  return (
    <Float speed={3} rotationIntensity={0} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.6} />
      </mesh>
      {/* Glow effect */}
      <mesh position={position} scale={1.5}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.1} />
      </mesh>
    </Float>
  )
}

// Floating ring
function FloatingRing({ position, color, scale, rotationSpeed }: {
  position: [number, number, number]
  color: string
  scale: number
  rotationSpeed: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * rotationSpeed
      meshRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.1, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
    </Float>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8338EC" />

      {/* Main shapes */}
      <GlassShape
        position={[-3, 0, 0]}
        scale={isMobile ? 0.6 : 0.8}
        rotationSpeed={0.5}
        shape="icosahedron"
      />
      <GlassShape
        position={[3, 0.5, -1]}
        scale={isMobile ? 0.4 : 0.6}
        rotationSpeed={0.7}
        shape="octahedron"
      />

      {/* Glowing orbs */}
      <GlowOrb position={[-1.5, 1, 1]} color="#00D9FF" scale={1} />
      <GlowOrb position={[2, -0.5, 0.5]} color="#8338EC" scale={0.8} />
      <GlowOrb position={[0, 0.8, -0.5]} color="#00FF88" scale={0.6} />

      {/* Rings */}
      <FloatingRing
        position={[0, 0, 0]}
        color="#00D9FF"
        scale={isMobile ? 1.2 : 1.8}
        rotationSpeed={0.3}
      />
      <FloatingRing
        position={[1, -0.3, 0.5]}
        color="#8338EC"
        scale={isMobile ? 0.6 : 0.9}
        rotationSpeed={0.5}
      />
    </>
  )
}

export default function FloatingElements() {
  const isMobile = useIsMobile()

  return (
    <div className="w-full h-[300px] md:h-[400px]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ alpha: true, antialias: !isMobile }}
        dpr={[1, isMobile ? 1.5 : 2]}
        performance={{ min: 0.5 }}
        style={{ background: 'transparent' }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
