'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere, RoundedBox } from '@react-three/drei'

// Stats Universe 3D - Floating stat nodes with connecting energy
export default function StatsUniverse3D() {
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Group>(null)
  const connectionsRef = useRef<THREE.Group>(null)

  // Stat nodes
  const statNodes = useMemo(() => [
    { position: [-3.5, 0.5, 0] as [number, number, number], color: '#00D9FF', size: 0.5 },
    { position: [-1.2, -0.8, 0.3] as [number, number, number], color: '#A855F7', size: 0.45 },
    { position: [1.2, 0.3, -0.2] as [number, number, number], color: '#00FF88', size: 0.48 },
    { position: [3.5, -0.5, 0.1] as [number, number, number], color: '#FF6B6B', size: 0.52 },
  ], [])

  // Connection particles between nodes
  const connectionParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < statNodes.length - 1; i++) {
      for (let j = 0; j < 8; j++) {
        particles.push({
          startNode: i,
          endNode: i + 1,
          t: j / 8,
          speed: 0.2 + Math.random() * 0.1,
          offset: (Math.random() - 0.5) * 0.3,
        })
      }
    }
    return particles
  }, [statNodes])

  // Outer ring particles
  const ringParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 80; i++) {
      const angle = (i / 80) * Math.PI * 2
      particles.push({
        angle,
        radius: 5 + Math.sin(angle * 3) * 0.5,
        y: Math.sin(angle * 2) * 0.3,
        size: 0.02 + Math.random() * 0.02,
        speed: 0.05 + Math.random() * 0.03,
      })
    }
    return particles
  }, [])

  // Ambient particles
  const ambientParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4 - 1,
        ] as [number, number, number],
        size: 0.015 + Math.random() * 0.02,
        speed: 0.3 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return particles
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Main group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.08
    }

    // Node pulsing
    if (nodesRef.current) {
      nodesRef.current.children.forEach((node, i) => {
        const scale = 1 + Math.sin(t * 2 + i * 0.7) * 0.1
        node.scale.set(scale, scale, scale)
      })
    }

    // Connection particles
    if (connectionsRef.current) {
      connectionsRef.current.children.forEach((particle, i) => {
        const p = connectionParticles[i]
        if (p) {
          const start = statNodes[p.startNode].position
          const end = statNodes[p.endNode].position
          const progress = (p.t + t * p.speed) % 1

          particle.position.x = start[0] + (end[0] - start[0]) * progress
          particle.position.y = start[1] + (end[1] - start[1]) * progress + Math.sin(progress * Math.PI) * 0.3 + p.offset
          particle.position.z = start[2] + (end[2] - start[2]) * progress
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Stat nodes */}
      <group ref={nodesRef}>
        {statNodes.map((node, i) => (
          <Float key={i} speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <group position={node.position}>
              {/* Outer glow */}
              <Sphere args={[node.size * 2, 16, 16]}>
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.2}
                  transparent
                  opacity={0.1}
                />
              </Sphere>
              {/* Middle glow */}
              <Sphere args={[node.size * 1.4, 16, 16]}>
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.15}
                />
              </Sphere>
              {/* Main node */}
              <Sphere args={[node.size, 32, 32]}>
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={2}
                  toneMapped={false}
                />
              </Sphere>
              {/* Core */}
              <Sphere args={[node.size * 0.4, 16, 16]}>
                <meshStandardMaterial
                  color="#ffffff"
                  emissive="#ffffff"
                  emissiveIntensity={3}
                  transparent
                  opacity={0.9}
                />
              </Sphere>
              {/* Orbiting ring */}
              <mesh rotation={[Math.PI / 2 + i * 0.2, i * 0.3, 0]}>
                <torusGeometry args={[node.size * 1.6, 0.015, 16, 50]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={1.5}
                  transparent
                  opacity={0.5}
                />
              </mesh>
              {/* Second ring */}
              <mesh rotation={[Math.PI / 3, Math.PI / 4 + i * 0.2, 0]}>
                <torusGeometry args={[node.size * 1.3, 0.01, 16, 50]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={1}
                  transparent
                  opacity={0.3}
                />
              </mesh>
            </group>
          </Float>
        ))}
      </group>

      {/* Connection particles */}
      <group ref={connectionsRef}>
        {connectionParticles.map((p, i) => (
          <mesh key={i}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={2}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>

      {/* Outer ring */}
      {ringParticles.map((p, i) => (
        <mesh
          key={`ring-${i}`}
          position={[
            Math.cos(p.angle) * p.radius,
            p.y,
            Math.sin(p.angle) * p.radius - 2,
          ]}
        >
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={1}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Ambient particles */}
      {ambientParticles.map((p, i) => (
        <mesh key={`ambient-${i}`} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.25}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <pointLight position={[-3, 2, 2]} intensity={1} color="#00D9FF" distance={8} />
      <pointLight position={[0, -1, 3]} intensity={0.8} color="#A855F7" distance={6} />
      <pointLight position={[3, 1, 2]} intensity={1} color="#00FF88" distance={8} />
    </group>
  )
}
