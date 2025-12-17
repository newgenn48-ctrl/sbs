'use client'

import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'

// Laptop component
const Laptop = ({ position, rotation = [0, 0, 0], scale = 1 }: {
  position: [number, number, number],
  rotation?: [number, number, number],
  scale?: number
}) => {
  const screenRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.7 + Math.sin(clock.getElapsedTime() * 2) * 0.1
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position} rotation={rotation} scale={scale}>
        {/* Base/keyboard */}
        <RoundedBox args={[1.2, 0.05, 0.8]} radius={0.02} smoothness={4} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2a2a3e" metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Keyboard area */}
        <mesh position={[0, 0.03, 0.05]}>
          <planeGeometry args={[1, 0.5]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.3} />
        </mesh>

        {/* Screen */}
        <group position={[0, 0.45, -0.35]} rotation={[-0.2, 0, 0]}>
          {/* Screen frame */}
          <RoundedBox args={[1.2, 0.8, 0.03]} radius={0.02} smoothness={4}>
            <meshStandardMaterial color="#2a2a3e" metalness={0.8} roughness={0.2} />
          </RoundedBox>

          {/* Screen display */}
          <mesh ref={screenRef} position={[0, 0, 0.02]}>
            <planeGeometry args={[1.05, 0.65]} />
            <meshBasicMaterial color="#00D9FF" transparent opacity={0.7} toneMapped={false} />
          </mesh>

          {/* Screen content lines */}
          {[-0.2, -0.05, 0.1].map((y, i) => (
            <mesh key={i} position={[-0.2, y, 0.025]}>
              <planeGeometry args={[0.5, 0.04]} />
              <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  )
}

// Monitor component
const Monitor = ({ position }: { position: [number, number, number] }) => {
  const screenRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.6 + Math.sin(clock.getElapsedTime() * 1.5 + 1) * 0.15
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
      <group position={position}>
        {/* Stand base */}
        <mesh position={[0, -0.5, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.05, 32]} />
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Stand pole */}
        <mesh position={[0, -0.25, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.5, 16]} />
          <meshStandardMaterial color="#2a2a3e" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Monitor frame */}
        <RoundedBox args={[1.4, 0.9, 0.05]} radius={0.02} smoothness={4}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
        </RoundedBox>

        {/* Screen */}
        <mesh ref={screenRef} position={[0, 0, 0.03]}>
          <planeGeometry args={[1.25, 0.75]} />
          <meshBasicMaterial color="#00FF88" transparent opacity={0.6} toneMapped={false} />
        </mesh>

        {/* Window elements on screen */}
        <mesh position={[-0.3, 0.15, 0.035]}>
          <planeGeometry args={[0.5, 0.35]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.15} />
        </mesh>
        <mesh position={[0.25, -0.1, 0.035]}>
          <planeGeometry args={[0.6, 0.4]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

// Smartphone component
const Smartphone = ({ position, rotation = [0, 0, 0] }: {
  position: [number, number, number],
  rotation?: [number, number, number]
}) => {
  const screenRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.8 + Math.sin(clock.getElapsedTime() * 3) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.25}>
      <group position={position} rotation={rotation}>
        {/* Phone body */}
        <RoundedBox args={[0.25, 0.5, 0.03]} radius={0.03} smoothness={4}>
          <meshStandardMaterial color="#1a1a2e" metalness={0.9} roughness={0.1} />
        </RoundedBox>

        {/* Screen */}
        <mesh ref={screenRef} position={[0, 0, 0.02]}>
          <planeGeometry args={[0.2, 0.42]} />
          <meshBasicMaterial color="#8338EC" transparent opacity={0.8} toneMapped={false} />
        </mesh>

        {/* App icons */}
        {[[-0.05, 0.12], [0.05, 0.12], [-0.05, 0], [0.05, 0]].map(([x, y], i) => (
          <mesh key={i} position={[x, y, 0.025]}>
            <planeGeometry args={[0.06, 0.06]} />
            <meshBasicMaterial
              color={['#00D9FF', '#00FF88', '#FFB800', '#FF6B6B'][i]}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Data sync particles between devices
const SyncParticle = ({ start, end, color, speed, delay }: {
  start: THREE.Vector3,
  end: THREE.Vector3,
  color: string,
  speed: number,
  delay: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = ((clock.getElapsedTime() * speed + delay) % 1)
      meshRef.current.position.lerpVectors(start, end, t)
      const scale = Math.sin(t * Math.PI) * 0.8 + 0.4
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.04, 8, 8]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

// Connection lines between devices
const ConnectionLine = ({ start, end, color }: {
  start: [number, number, number],
  end: [number, number, number],
  color: string
}) => {
  const lineRef = useRef<THREE.Line>(null!)

  const { geometry, startVec, endVec } = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const mid = new THREE.Vector3().lerpVectors(startVec, endVec, 0.5)
    mid.y += 0.3

    const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
    const points = curve.getPoints(30)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    return { geometry, startVec, endVec }
  }, [start, end])

  return (
    <group>
      <primitive
        object={new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.3 })
        )}
        ref={lineRef}
      />
      <SyncParticle start={startVec} end={endVec} color={color} speed={0.4} delay={0} />
      <SyncParticle start={endVec} end={startVec} color={color} speed={0.35} delay={0.5} />
    </group>
  )
}

// Central hub/cloud icon
const CentralHub = () => {
  const ringRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={[0, 0.5, 0]}>
        {/* Central sphere */}
        <mesh>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.3}
            metalness={0.5}
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Inner glow */}
        <mesh>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.3} toneMapped={false} />
        </mesh>

        {/* Rotating ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[0.45, 0.02, 16, 64]} />
          <meshBasicMaterial color="#00FF88" toneMapped={false} />
        </mesh>

        {/* Outer glow ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5, 0.55, 64]} />
          <meshBasicMaterial color="#00D9FF" transparent opacity={0.2} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

// Main component
const ProductivityHub = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-pointer.y * 0.1 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#00D9FF" />
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#00FF88" />

      {/* Central hub */}
      <CentralHub />

      {/* Devices around the hub */}
      <Laptop position={[-1.8, -0.3, 0.5]} rotation={[0, 0.3, 0]} scale={0.8} />
      <Monitor position={[1.5, 0, 0]} />
      <Smartphone position={[-0.8, -0.5, 1]} rotation={[0, -0.2, 0.1]} />
      <Smartphone position={[0.9, -0.6, 0.8]} rotation={[0, 0.3, -0.1]} />

      {/* Connection lines */}
      <ConnectionLine start={[-1.5, 0.1, 0.5]} end={[0, 0.5, 0]} color="#00D9FF" />
      <ConnectionLine start={[1.2, 0.2, 0]} end={[0, 0.5, 0]} color="#00FF88" />
      <ConnectionLine start={[-0.6, -0.2, 0.9]} end={[0, 0.5, 0]} color="#8338EC" />
      <ConnectionLine start={[0.7, -0.3, 0.7]} end={[0, 0.5, 0]} color="#FFB800" />

      {/* Base platform glow */}
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 64]} />
        <meshBasicMaterial color="#00D9FF" transparent opacity={0.05} />
      </mesh>

      {/* Grid */}
      <gridHelper
        args={[5, 15, "#00D9FF", "#00D9FF"]}
        position={[0, -0.79, 0]}
      />
    </group>
  )
}

export default ProductivityHub
