'use client'

import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'

// Server rack component
const ServerRack = ({ position }: { position: [number, number, number] }) => {
  const rackRef = useRef<THREE.Group>(null!)
  const lightsRef = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    // Blinking server lights
    lightsRef.current.forEach((light, i) => {
      if (light) {
        const material = light.material as THREE.MeshBasicMaterial
        const blink = Math.sin(clock.getElapsedTime() * (3 + i * 0.5) + i) > 0.3
        material.opacity = blink ? 1 : 0.3
      }
    })
  })

  return (
    <group ref={rackRef} position={position}>
      {/* Server body */}
      <RoundedBox args={[0.8, 1.4, 0.4]} radius={0.05} smoothness={4}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Server slots */}
      {[-0.45, -0.15, 0.15, 0.45].map((y, i) => (
        <group key={i} position={[0, y, 0.15]}>
          {/* Slot panel */}
          <RoundedBox args={[0.7, 0.25, 0.1]} radius={0.02} smoothness={2}>
            <meshStandardMaterial
              color="#0d0d1a"
              metalness={0.9}
              roughness={0.1}
            />
          </RoundedBox>

          {/* Status lights */}
          {[-0.25, -0.15, -0.05].map((x, j) => (
            <mesh
              key={j}
              position={[x, 0, 0.06]}
              ref={(el) => {
                if (el) lightsRef.current[i * 3 + j] = el
              }}
            >
              <circleGeometry args={[0.02, 16]} />
              <meshBasicMaterial
                color={j === 0 ? "#00FF88" : j === 1 ? "#00D9FF" : "#8338EC"}
                transparent
                opacity={1}
                toneMapped={false}
              />
            </mesh>
          ))}

          {/* Ventilation lines */}
          <mesh position={[0.2, 0, 0.06]}>
            <planeGeometry args={[0.2, 0.15]} />
            <meshBasicMaterial color="#0a0a15" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// Data packet traveling through network
const DataPacket = ({ curve, speed, color }: { curve: THREE.CatmullRomCurve3, speed: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const startOffset = useMemo(() => Math.random(), [])

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = ((clock.getElapsedTime() * speed + startOffset) % 1)
      const position = curve.getPointAt(t)
      meshRef.current.position.copy(position)
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.08, 0.08, 0.08]} />
      <meshBasicMaterial color={color} toneMapped={false} />
    </mesh>
  )
}

// Shield component representing security
const SecurityShield = () => {
  const shieldRef = useRef<THREE.Mesh>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
    if (glowRef.current) {
      const material = glowRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.1 + Math.sin(clock.getElapsedTime() * 2) * 0.05
    }
  })

  // Create shield shape
  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 1.2)
    shape.bezierCurveTo(0.8, 1.1, 1, 0.6, 1, 0)
    shape.bezierCurveTo(1, -0.6, 0.5, -1, 0, -1.2)
    shape.bezierCurveTo(-0.5, -1, -1, -0.6, -1, 0)
    shape.bezierCurveTo(-1, 0.6, -0.8, 1.1, 0, 1.2)
    return shape
  }, [])

  const shieldGeometry = useMemo(() => {
    return new THREE.ExtrudeGeometry(shieldShape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 3
    })
  }, [shieldShape])

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={[0, 0.3, 1.5]} scale={0.6}>
        {/* Shield glow */}
        <mesh ref={glowRef} scale={1.3}>
          <shapeGeometry args={[shieldShape]} />
          <meshBasicMaterial
            color="#00D9FF"
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>

        {/* Main shield */}
        <mesh ref={shieldRef} geometry={shieldGeometry}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Checkmark on shield */}
        <mesh position={[0, 0, 0.15]}>
          <ringGeometry args={[0.25, 0.35, 32]} />
          <meshBasicMaterial color="#00FF88" toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

// Network connection lines
const NetworkConnections = () => {
  const connections = useMemo(() => {
    const curves: { curve: THREE.CatmullRomCurve3, color: string }[] = []

    // Connection from left server to center
    curves.push({
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1.8, 0, 0),
        new THREE.Vector3(-0.9, 0.3, 0.5),
        new THREE.Vector3(0, 0.5, 1),
      ]),
      color: "#00D9FF"
    })

    // Connection from right server to center
    curves.push({
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(1.8, 0, 0),
        new THREE.Vector3(0.9, 0.3, 0.5),
        new THREE.Vector3(0, 0.5, 1),
      ]),
      color: "#00FF88"
    })

    // Connection from center server to shield
    curves.push({
      curve: new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0.2, 0.5),
        new THREE.Vector3(0, 0.3, 1),
      ]),
      color: "#8338EC"
    })

    return curves
  }, [])

  return (
    <group>
      {connections.map((conn, i) => {
        const points = conn.curve.getPoints(50)
        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

        return (
          <group key={i}>
            <primitive object={new THREE.Line(
              lineGeometry,
              new THREE.LineBasicMaterial({
                color: conn.color,
                transparent: true,
                opacity: 0.4,
              })
            )} />
            <DataPacket curve={conn.curve} speed={0.3 + i * 0.1} color={conn.color} />
            <DataPacket curve={conn.curve} speed={0.25 + i * 0.1} color={conn.color} />
          </group>
        )
      })}
    </group>
  )
}

// Monitoring pulse ring
const MonitoringPulse = () => {
  const ringRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const scale = 1 + (clock.getElapsedTime() % 2) * 0.5
      ringRef.current.scale.set(scale, scale, 1)
      const material = ringRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.5 - (clock.getElapsedTime() % 2) * 0.25
    }
  })

  return (
    <mesh ref={ringRef} position={[0, 0.3, 1.5]} rotation={[0, 0, 0]}>
      <ringGeometry args={[0.8, 0.85, 64]} />
      <meshBasicMaterial
        color="#00D9FF"
        transparent
        opacity={0.5}
        side={THREE.DoubleSide}
        toneMapped={false}
      />
    </mesh>
  )
}

// Main component
const ITInfrastructure = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.3 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-pointer.y * 0.1 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-5, -5, 5]} intensity={0.3} color="#00D9FF" />
      <pointLight position={[0, 0, 3]} intensity={0.5} color="#8338EC" />

      {/* Server racks */}
      <ServerRack position={[-1.8, 0, 0]} />
      <ServerRack position={[0, 0, 0]} />
      <ServerRack position={[1.8, 0, 0]} />

      {/* Network connections with data flow */}
      <NetworkConnections />

      {/* Security shield in front */}
      <SecurityShield />

      {/* Monitoring pulse effect */}
      <MonitoringPulse />

      {/* Base platform */}
      <mesh position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshStandardMaterial
          color="#0a0a15"
          metalness={0.9}
          roughness={0.2}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Grid lines on platform */}
      <gridHelper
        args={[6, 20, "#00D9FF", "#00D9FF"]}
        position={[0, -0.99, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  )
}

export default ITInfrastructure
