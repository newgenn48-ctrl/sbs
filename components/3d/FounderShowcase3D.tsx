'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'

// Founder Showcase 3D - Holographic frame with tech elements
export default function FounderShowcase3D() {
  const groupRef = useRef<THREE.Group>(null)
  const frameRef = useRef<THREE.Group>(null)
  const orbitsRef = useRef<THREE.Group>(null)
  const dataStreamRef = useRef<THREE.Group>(null)

  // Data stream particles
  const dataStreams = useMemo(() => {
    const streams = []
    for (let i = 0; i < 40; i++) {
      streams.push({
        x: -3 + (i % 8) * 0.8,
        startY: 3 + Math.random() * 2,
        speed: 0.8 + Math.random() * 0.4,
        size: 0.02 + Math.random() * 0.02,
        color: i % 3 === 0 ? '#00D9FF' : i % 3 === 1 ? '#A855F7' : '#00FF88',
      })
    }
    return streams
  }, [])

  // Holographic corner pieces
  const corners = useMemo(() => [
    { position: [-2, 2, 0] as [number, number, number], rotation: [0, 0, 0] as [number, number, number] },
    { position: [2, 2, 0] as [number, number, number], rotation: [0, 0, Math.PI / 2] as [number, number, number] },
    { position: [2, -2, 0] as [number, number, number], rotation: [0, 0, Math.PI] as [number, number, number] },
    { position: [-2, -2, 0] as [number, number, number], rotation: [0, 0, -Math.PI / 2] as [number, number, number] },
  ], [])

  // Orbiting tech elements
  const orbitElements = useMemo(() => [
    { angle: 0, radius: 3, size: 0.15, color: '#00D9FF', speed: 0.3 },
    { angle: Math.PI / 3, radius: 3.2, size: 0.12, color: '#A855F7', speed: 0.25 },
    { angle: (2 * Math.PI) / 3, radius: 2.8, size: 0.18, color: '#00FF88', speed: 0.35 },
    { angle: Math.PI, radius: 3.1, size: 0.14, color: '#FF6B6B', speed: 0.28 },
    { angle: (4 * Math.PI) / 3, radius: 2.9, size: 0.16, color: '#00D9FF', speed: 0.32 },
    { angle: (5 * Math.PI) / 3, radius: 3.3, size: 0.13, color: '#A855F7', speed: 0.27 },
  ], [])

  // Floating particles
  const particles = useMemo(() => {
    const p = []
    for (let i = 0; i < 50; i++) {
      p.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 3 - 1,
        ] as [number, number, number],
        size: 0.015 + Math.random() * 0.02,
        speed: 0.4 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return p
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Group subtle movement
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.05
    }

    // Frame pulsing
    if (frameRef.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.02
      frameRef.current.scale.set(scale, scale, 1)
    }

    // Orbiting elements
    if (orbitsRef.current) {
      orbitsRef.current.children.forEach((element, i) => {
        const orb = orbitElements[i]
        if (orb) {
          const angle = orb.angle + t * orb.speed
          element.position.x = Math.cos(angle) * orb.radius
          element.position.y = Math.sin(angle) * orb.radius
          element.rotation.z = t * 0.5
        }
      })
    }

    // Data streams falling
    if (dataStreamRef.current) {
      dataStreamRef.current.children.forEach((particle, i) => {
        const stream = dataStreams[i]
        particle.position.y = stream.startY - ((t * stream.speed) % 6)
        const opacity = particle.position.y > 2 ? 0 : particle.position.y < -2 ? 0 : 0.8
        const mat = particle as THREE.Mesh
        if (mat.material && 'opacity' in mat.material) {
          (mat.material as THREE.MeshStandardMaterial).opacity = opacity
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main holographic frame */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.1}>
        <group ref={frameRef}>
          {/* Frame border - horizontal lines */}
          <mesh position={[0, 2.2, 0]}>
            <boxGeometry args={[4.5, 0.03, 0.03]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh position={[0, -2.2, 0]}>
            <boxGeometry args={[4.5, 0.03, 0.03]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
          {/* Frame border - vertical lines */}
          <mesh position={[-2.2, 0, 0]}>
            <boxGeometry args={[0.03, 4.5, 0.03]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
          <mesh position={[2.2, 0, 0]}>
            <boxGeometry args={[0.03, 4.5, 0.03]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>

          {/* Corner accents */}
          {corners.map((corner, i) => (
            <group key={i} position={corner.position} rotation={corner.rotation}>
              <mesh position={[0.3, 0, 0]}>
                <boxGeometry args={[0.6, 0.05, 0.05]} />
                <meshStandardMaterial
                  color="#A855F7"
                  emissive="#A855F7"
                  emissiveIntensity={2}
                />
              </mesh>
              <mesh position={[0, -0.3, 0]}>
                <boxGeometry args={[0.05, 0.6, 0.05]} />
                <meshStandardMaterial
                  color="#A855F7"
                  emissive="#A855F7"
                  emissiveIntensity={2}
                />
              </mesh>
              {/* Corner glow orb */}
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial
                  color="#A855F7"
                  emissive="#A855F7"
                  emissiveIntensity={3}
                  toneMapped={false}
                />
              </mesh>
            </group>
          ))}

          {/* Inner glow plane */}
          <mesh position={[0, 0, -0.1]}>
            <planeGeometry args={[4, 4]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.1}
              transparent
              opacity={0.05}
            />
          </mesh>

          {/* Scan line effect */}
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[4.2, 0.02]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={2}
              transparent
              opacity={0.5}
            />
          </mesh>
        </group>
      </Float>

      {/* Orbiting tech elements */}
      <group ref={orbitsRef}>
        {orbitElements.map((orb, i) => (
          <RoundedBox key={i} args={[orb.size * 2, orb.size * 2, orb.size * 2]} radius={0.02} smoothness={4}>
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={1.5}
              metalness={0.5}
              roughness={0.3}
            />
          </RoundedBox>
        ))}
      </group>

      {/* Data streams */}
      <group ref={dataStreamRef}>
        {dataStreams.map((stream, i) => (
          <mesh key={i} position={[stream.x, stream.startY, 0.5]}>
            <boxGeometry args={[0.02, 0.15, 0.02]} />
            <meshStandardMaterial
              color={stream.color}
              emissive={stream.color}
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Ambient particles */}
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#00D9FF" distance={8} />
      <pointLight position={[-3, 2, 2]} intensity={0.8} color="#A855F7" distance={6} />
      <pointLight position={[3, -2, 2]} intensity={0.8} color="#00FF88" distance={6} />
    </group>
  )
}
