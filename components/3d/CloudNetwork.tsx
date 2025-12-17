'use client'

import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'

// Cloud node component
const CloudNode = ({ position, scale = 1, color = "#00D9FF" }: { position: [number, number, number], scale?: number, color?: string }) => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={scale}>
        {/* Main cloud sphere */}
        <Sphere args={[0.5, 32, 32]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.2}
            metalness={0.3}
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </Sphere>

        {/* Inner glow */}
        <Sphere args={[0.35, 16, 16]}>
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.3}
            toneMapped={false}
          />
        </Sphere>

        {/* Orbiting ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.7, 0.02, 16, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

// Data sync particle
const SyncParticle = ({ startPos, endPos, speed, delay, color }: {
  startPos: THREE.Vector3,
  endPos: THREE.Vector3,
  speed: number,
  delay: number,
  color: string
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = ((clock.getElapsedTime() * speed + delay) % 1)
      meshRef.current.position.lerpVectors(startPos, endPos, t)

      // Pulse size
      const pulse = Math.sin(t * Math.PI)
      meshRef.current.scale.setScalar(0.8 + pulse * 0.4)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

// Connection line between nodes
const ConnectionLine = ({ start, end, color }: { start: [number, number, number], end: [number, number, number], color: string }) => {
  const lineRef = useRef<THREE.Line>(null!)

  const { geometry, material } = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 0.3,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    ]
    const curve = new THREE.QuadraticBezierCurve3(points[0], points[1], points[2])
    const geo = new THREE.BufferGeometry().setFromPoints(curve.getPoints(30))
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0.4
    })
    return { geometry: geo, material: mat }
  }, [start, end, color])

  return (
    <group>
      <primitive object={new THREE.Line(geometry, material)} ref={lineRef} />
      <SyncParticle
        startPos={new THREE.Vector3(...start)}
        endPos={new THREE.Vector3(...end)}
        speed={0.5}
        delay={0}
        color={color}
      />
      <SyncParticle
        startPos={new THREE.Vector3(...end)}
        endPos={new THREE.Vector3(...start)}
        speed={0.4}
        delay={0.5}
        color={color}
      />
    </group>
  )
}

// Microsoft 365 logo-inspired element
const M365Symbol = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Four colored squares representing M365 apps */}
        <mesh position={[-0.25, 0.25, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial color="#F25022" emissive="#F25022" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.25, 0.25, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial color="#7FBA00" emissive="#7FBA00" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.25, -0.25, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial color="#00A4EF" emissive="#00A4EF" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[0.25, -0.25, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.1]} />
          <meshStandardMaterial color="#FFB900" emissive="#FFB900" emissiveIntensity={0.3} />
        </mesh>

        {/* Glow behind */}
        <mesh position={[0, 0, -0.1]}>
          <circleGeometry args={[0.8, 32]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

// User devices connecting to cloud
const UserDevice = ({ position, type }: { position: [number, number, number], type: 'laptop' | 'phone' | 'tablet' }) => {
  const sizes = {
    laptop: [0.4, 0.25, 0.02],
    phone: [0.1, 0.18, 0.02],
    tablet: [0.2, 0.28, 0.02]
  }

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position}>
        <mesh>
          <boxGeometry args={sizes[type] as [number, number, number]} />
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Screen glow */}
        <mesh position={[0, 0, 0.015]}>
          <planeGeometry args={[sizes[type][0] * 0.85, sizes[type][1] * 0.85]} />
          <meshBasicMaterial color="#00D9FF" transparent opacity={0.3} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

// Main component
const CloudNetwork = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.2 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-pointer.y * 0.1 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#00D9FF" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#8338EC" />

      {/* Central M365 symbol */}
      <M365Symbol />

      {/* Cloud nodes around the center */}
      <CloudNode position={[-2, 1, -0.5]} scale={0.6} color="#00A4EF" />
      <CloudNode position={[2, 1, -0.5]} scale={0.6} color="#7FBA00" />
      <CloudNode position={[-2, -1, -0.5]} scale={0.6} color="#FFB900" />
      <CloudNode position={[2, -1, -0.5]} scale={0.6} color="#F25022" />

      {/* Connection lines */}
      <ConnectionLine start={[0, 0, 0]} end={[-2, 1, -0.5]} color="#00A4EF" />
      <ConnectionLine start={[0, 0, 0]} end={[2, 1, -0.5]} color="#7FBA00" />
      <ConnectionLine start={[0, 0, 0]} end={[-2, -1, -0.5]} color="#FFB900" />
      <ConnectionLine start={[0, 0, 0]} end={[2, -1, -0.5]} color="#F25022" />

      {/* User devices */}
      <UserDevice position={[-1.5, -2, 0.5]} type="laptop" />
      <UserDevice position={[0, -2.2, 0.5]} type="tablet" />
      <UserDevice position={[1.5, -2, 0.5]} type="phone" />

      {/* Connections from devices to center */}
      <ConnectionLine start={[-1.5, -2, 0.5]} end={[0, 0, 0]} color="#00D9FF" />
      <ConnectionLine start={[0, -2.2, 0.5]} end={[0, 0, 0]} color="#8338EC" />
      <ConnectionLine start={[1.5, -2, 0.5]} end={[0, 0, 0]} color="#00FF88" />

      {/* Base glow */}
      <mesh position={[0, 0, -1]} rotation={[0, 0, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshBasicMaterial color="#00D9FF" transparent opacity={0.05} />
      </mesh>
    </group>
  )
}

export default CloudNetwork
