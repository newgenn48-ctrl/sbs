'use client'

import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'

// Server Rack component - more realistic
const ServerRack = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const lightsRef = useRef<THREE.Mesh[]>([])
  const fanRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    lightsRef.current.forEach((light, i) => {
      if (light) {
        const material = light.material as THREE.MeshBasicMaterial
        const blink = Math.sin(clock.getElapsedTime() * (2 + i * 0.7) + i * 0.5) > 0.2
        material.opacity = blink ? 1 : 0.3
      }
    })
    if (fanRef.current) {
      fanRef.current.rotation.z += 0.08
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.1}>
      <group position={position} scale={scale}>
        {/* Server body - silver metallic */}
        <RoundedBox args={[0.9, 1.6, 0.5]} radius={0.03} smoothness={4}>
          <meshStandardMaterial color="#a8a8b0" metalness={0.95} roughness={0.15} />
        </RoundedBox>

        {/* Side panel detail */}
        <mesh position={[0.451, 0, 0]}>
          <boxGeometry args={[0.01, 1.5, 0.45]} />
          <meshStandardMaterial color="#8a8a92" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* Server slots */}
        {[-0.5, -0.2, 0.1, 0.4].map((y, i) => (
          <group key={i} position={[0, y, 0.2]}>
            {/* Server unit */}
            <RoundedBox args={[0.78, 0.22, 0.1]} radius={0.01} smoothness={2}>
              <meshStandardMaterial color="#7a7a82" metalness={0.9} roughness={0.2} />
            </RoundedBox>

            {/* Drive bay indicators */}
            {[-0.28, -0.2, -0.12].map((x, j) => (
              <mesh key={`drive-${j}`} position={[x, 0, 0.051]}>
                <boxGeometry args={[0.06, 0.15, 0.01]} />
                <meshStandardMaterial color="#5a5a62" metalness={0.85} roughness={0.25} />
              </mesh>
            ))}

            {/* Status lights */}
            {[-0.28, -0.2, -0.12].map((x, j) => (
              <mesh
                key={j}
                position={[x, 0.06, 0.06]}
                ref={(el) => { if (el) lightsRef.current[i * 3 + j] = el }}
              >
                <circleGeometry args={[0.015, 12]} />
                <meshBasicMaterial
                  color={j === 0 ? "#00FF88" : j === 1 ? "#00D9FF" : "#8338EC"}
                  transparent
                  opacity={1}
                  toneMapped={false}
                />
              </mesh>
            ))}

            {/* Vent grille */}
            <group position={[0.15, 0, 0.051]}>
              {[-0.06, -0.02, 0.02, 0.06].map((yOffset, k) => (
                <mesh key={k} position={[0, yOffset, 0]}>
                  <boxGeometry args={[0.18, 0.015, 0.005]} />
                  <meshStandardMaterial color="#6a6a72" metalness={0.8} roughness={0.3} />
                </mesh>
              ))}
            </group>

            {/* Power button */}
            <mesh position={[0.32, 0, 0.055]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.01, 16]} />
              <meshStandardMaterial color="#8a8a92" metalness={0.85} roughness={0.25} />
            </mesh>
          </group>
        ))}

        {/* Top ventilation */}
        <mesh position={[0, 0.75, 0.1]}>
          <boxGeometry args={[0.6, 0.08, 0.3]} />
          <meshStandardMaterial color="#7a7a82" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Cooling fan visible */}
        <mesh ref={fanRef} position={[0, 0.75, 0.26]}>
          <ringGeometry args={[0.03, 0.08, 6]} />
          <meshBasicMaterial color="#9a9aa2" transparent opacity={0.9} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

// Network Switch component - more realistic
const NetworkSwitch = ({ position }: { position: [number, number, number] }) => {
  const portsRef = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    portsRef.current.forEach((port, i) => {
      if (port) {
        const material = port.material as THREE.MeshBasicMaterial
        const active = Math.sin(clock.getElapsedTime() * 3 + i * 0.8) > 0
        material.opacity = active ? 1 : 0.4
      }
    })
  })

  return (
    <Float speed={1.5} rotationIntensity={0.08} floatIntensity={0.15}>
      <group position={position}>
        {/* Switch body */}
        <RoundedBox args={[1.2, 0.15, 0.35]} radius={0.02} smoothness={4}>
          <meshStandardMaterial color="#9a9aa2" metalness={0.9} roughness={0.15} />
        </RoundedBox>

        {/* Front panel */}
        <mesh position={[0, 0, 0.176]}>
          <boxGeometry args={[1.15, 0.12, 0.01]} />
          <meshStandardMaterial color="#7a7a82" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* Network ports */}
        {[-0.45, -0.3, -0.15, 0, 0.15, 0.3, 0.45].map((x, i) => (
          <group key={i} position={[x, 0, 0.18]}>
            {/* Port housing */}
            <mesh>
              <boxGeometry args={[0.1, 0.06, 0.02]} />
              <meshStandardMaterial color="#5a5a62" metalness={0.8} roughness={0.3} />
            </mesh>
            {/* Port LED */}
            <mesh
              position={[0, 0.04, 0]}
              ref={(el) => { if (el) portsRef.current[i] = el }}
            >
              <circleGeometry args={[0.012, 8]} />
              <meshBasicMaterial
                color={i % 2 === 0 ? "#00FF88" : "#00D9FF"}
                transparent
                opacity={1}
                toneMapped={false}
              />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  )
}

// Data flow particles
const DataFlow = ({ start, end, color, speed }: {
  start: THREE.Vector3,
  end: THREE.Vector3,
  color: string,
  speed: number
}) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const offset = useMemo(() => Math.random(), [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = ((clock.getElapsedTime() * speed + offset) % 1)
      meshRef.current.position.lerpVectors(start, end, t)
      const scale = Math.sin(t * Math.PI) * 0.8 + 0.4
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

// Connection cables - more realistic curved cables
const ConnectionCable = ({ start, end, color }: {
  start: [number, number, number],
  end: [number, number, number],
  color: string
}) => {
  const { geometry, startVec, endVec } = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const mid = new THREE.Vector3().lerpVectors(startVec, endVec, 0.5)
    mid.y -= 0.15
    mid.z += 0.2

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
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.6 })
        )}
      />
      <DataFlow start={startVec} end={endVec} color={color} speed={0.5} />
    </group>
  )
}

// WiFi signal rings - more realistic
const WiFiSignal = ({ position }: { position: [number, number, number] }) => {
  const ringsRef = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        const phase = (clock.getElapsedTime() * 0.8 + i * 0.3) % 1
        const scale = 0.3 + phase * 0.7
        ring.scale.set(scale, scale, 1)
        const material = ring.material as THREE.MeshBasicMaterial
        material.opacity = (1 - phase) * 0.6
      }
    })
  })

  return (
    <group position={position}>
      {[0, 1, 2].map((i) => (
        <mesh
          key={i}
          ref={(el) => { if (el) ringsRef.current[i] = el }}
          rotation={[0, 0, 0]}
        >
          <ringGeometry args={[0.15, 0.18, 32]} />
          <meshBasicMaterial
            color="#00D9FF"
            transparent
            opacity={0.5}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* Router body - more realistic */}
      <group position={[0, -0.15, 0]}>
        <RoundedBox args={[0.25, 0.06, 0.15]} radius={0.01} smoothness={2}>
          <meshStandardMaterial color="#e8e8ec" metalness={0.7} roughness={0.25} />
        </RoundedBox>
        {/* Antenna */}
        <mesh position={[0.08, 0.08, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
          <meshStandardMaterial color="#2a2a32" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[-0.08, 0.08, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 0.12, 8]} />
          <meshStandardMaterial color="#2a2a32" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Status LED */}
        <mesh position={[0, 0, 0.076]}>
          <circleGeometry args={[0.015, 8]} />
          <meshBasicMaterial color="#00FF88" toneMapped={false} />
        </mesh>
      </group>
    </group>
  )
}

// Backup drive - more realistic external HDD
const BackupDrive = ({ position }: { position: [number, number, number] }) => {
  const lightRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (lightRef.current) {
      const material = lightRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.5 + Math.sin(clock.getElapsedTime() * 2) * 0.5
    }
  })

  return (
    <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.2}>
      <group position={position}>
        {/* Drive body */}
        <RoundedBox args={[0.5, 0.12, 0.35]} radius={0.02} smoothness={4}>
          <meshStandardMaterial color="#4a4a52" metalness={0.9} roughness={0.15} />
        </RoundedBox>

        {/* Top surface detail */}
        <mesh position={[0, 0.061, 0]}>
          <boxGeometry args={[0.45, 0.005, 0.3]} />
          <meshStandardMaterial color="#5a5a62" metalness={0.85} roughness={0.2} />
        </mesh>

        {/* Activity light */}
        <mesh ref={lightRef} position={[0.2, 0, 0.176]}>
          <circleGeometry args={[0.02, 12]} />
          <meshBasicMaterial color="#00FF88" transparent opacity={1} toneMapped={false} />
        </mesh>

        {/* USB port */}
        <mesh position={[-0.18, 0, 0.176]}>
          <boxGeometry args={[0.06, 0.025, 0.01]} />
          <meshStandardMaterial color="#3a3a42" metalness={0.75} roughness={0.3} />
        </mesh>

        {/* Brand label area */}
        <mesh position={[0, 0, 0.176]}>
          <boxGeometry args={[0.12, 0.04, 0.005]} />
          <meshStandardMaterial color="#6a6a72" metalness={0.7} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

// Main component
const SupportNexus = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-pointer.y * 0.1 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.9} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.4} color="#00D9FF" />
      <pointLight position={[0, 2, 3]} intensity={0.5} color="#8338EC" />

      {/* Central server rack */}
      <ServerRack position={[0, 0.1, 0]} scale={0.85} />

      {/* Network switch below */}
      <NetworkSwitch position={[0, -1.1, 0.3]} />

      {/* WiFi signal */}
      <WiFiSignal position={[1.1, 0.4, 0.4]} />

      {/* Backup drive */}
      <BackupDrive position={[-1.0, -0.7, 0.4]} />

      {/* Connection cables */}
      <ConnectionCable start={[0, -0.7, 0.3]} end={[0, -1.0, 0.3]} color="#00D9FF" />
      <ConnectionCable start={[0.3, -1.1, 0.3]} end={[0.9, 0.3, 0.4]} color="#00FF88" />
      <ConnectionCable start={[-0.3, -1.1, 0.3]} end={[-0.85, -0.7, 0.4]} color="#8338EC" />

      {/* Base platform - more reflective */}
      <mesh position={[0, -1.35, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial
          color="#12121a"
          metalness={0.9}
          roughness={0.15}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Grid - subtler */}
      <gridHelper
        args={[4, 16, "#1a2535", "#1a2535"]}
        position={[0, -1.34, 0]}
      />
    </group>
  )
}

export default SupportNexus
