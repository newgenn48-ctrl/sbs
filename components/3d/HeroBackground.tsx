'use client'

import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

// Simple floating geometric shape
function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.1
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#00D9FF"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  )
}

// Soft glowing orbs
function GlowOrbs() {
  const groupRef = useRef<THREE.Group>(null)

  const orbs = useMemo(() => [
    { position: [-4, 2, -5], color: '#00D9FF', size: 1.5 },
    { position: [5, -1, -6], color: '#8338EC', size: 2 },
    { position: [-3, -3, -4], color: '#00FF88', size: 1.2 },
  ], [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((orb, i) => {
        orb.position.y += Math.sin(clock.getElapsedTime() * 0.3 + i * 2) * 0.003
      })
    }
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position as [number, number, number]}>
          <sphereGeometry args={[orb.size, 32, 32]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={0.08}
          />
        </mesh>
      ))}
    </group>
  )
}

// Minimal particles
function MinimalParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 40

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorOptions = [
      new THREE.Color('#00D9FF'),
      new THREE.Color('#8338EC'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function HeroContent() {
  return (
    <>
      <FloatingShape />
      <GlowOrbs />
      <MinimalParticles />
    </>
  )
}

export default function HeroBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <HeroContent />
    </Canvas>
  )
}
