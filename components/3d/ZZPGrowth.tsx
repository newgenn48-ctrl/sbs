'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'

// ZZP Growth 3D - Solo entrepreneur growth visualization
export default function ZZPGrowth() {
  const groupRef = useRef<THREE.Group>(null)
  const centerRef = useRef<THREE.Group>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const growthRef = useRef<THREE.Group>(null)

  // Growth pillars around the center
  const pillars = useMemo(() => [
    { angle: 0, color: '#00FF88', label: 'Website', height: 1.8 },
    { angle: Math.PI / 3, color: '#A855F7', label: 'Marketing', height: 1.5 },
    { angle: (2 * Math.PI) / 3, color: '#00D9FF', label: 'IT Support', height: 1.6 },
    { angle: Math.PI, color: '#FF6B6B', label: 'Security', height: 1.4 },
    { angle: (4 * Math.PI) / 3, color: '#FFB800', label: 'E-mail', height: 1.3 },
    { angle: (5 * Math.PI) / 3, color: '#4285F4', label: 'SEO', height: 1.7 },
  ], [])

  // Orbiting clients/opportunities
  const orbitingItems = useMemo(() => {
    const items = []
    for (let i = 0; i < 8; i++) {
      items.push({
        angle: (i / 8) * Math.PI * 2,
        speed: 0.15 + Math.random() * 0.1,
        radius: 3.8 + (i % 2) * 0.3,
        size: 0.08 + Math.random() * 0.04,
      })
    }
    return items
  }, [])

  // Rising particles (growth indicator)
  const risingParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 4,
        speed: 0.3 + Math.random() * 0.2,
        delay: Math.random() * 5,
        size: 0.03 + Math.random() * 0.02,
      })
    }
    return particles
  }, [])

  // Ambient particles
  const ambientParticles = useMemo(() => {
    const positions = new Float32Array(35 * 3)
    for (let i = 0; i < 35; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Main group subtle movement
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.3) * 0.06
    }

    // Center pulsing
    if (centerRef.current) {
      const scale = 1 + Math.sin(t * 1.5) * 0.05
      centerRef.current.scale.set(scale, scale, scale)
    }

    // Orbiting items
    if (orbitRef.current) {
      orbitRef.current.children.forEach((item, i) => {
        const p = orbitingItems[i]
        const angle = p.angle + t * p.speed
        item.position.x = Math.cos(angle) * p.radius
        item.position.z = Math.sin(angle) * p.radius
        item.position.y = Math.sin(t * 2 + i) * 0.2
      })
    }

    // Rising particles
    if (growthRef.current) {
      growthRef.current.children.forEach((particle, i) => {
        const p = risingParticles[i]
        const cycleTime = (t + p.delay) % 5
        particle.position.y = -2 + cycleTime * 1.2
        const opacity = cycleTime < 0.5 ? cycleTime * 2 : cycleTime > 4 ? (5 - cycleTime) * 2 : 1
        if (particle instanceof THREE.Mesh && particle.material instanceof THREE.MeshStandardMaterial) {
          particle.material.opacity = opacity * 0.6
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central ZZP representation - the entrepreneur */}
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <group ref={centerRef}>
          {/* Main avatar/core */}
          <mesh>
            <cylinderGeometry args={[0.6, 0.8, 1.2, 6]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>

          {/* Head/top */}
          <mesh position={[0, 0.9, 0]}>
            <sphereGeometry args={[0.45, 16, 16]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.5}
              metalness={0.4}
              roughness={0.4}
            />
          </mesh>

          {/* Core glow ring */}
          <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.7, 0.04, 8, 32]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Status indicator */}
          <mesh position={[0.5, 1.1, 0.3]}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      </Float>

      {/* Growth Pillars - Services */}
      {pillars.map((pillar, i) => {
        const x = Math.cos(pillar.angle) * 2.2
        const z = Math.sin(pillar.angle) * 2.2
        return (
          <Float key={i} speed={1.2 + i * 0.1} floatIntensity={0.15}>
            <group position={[x, -0.5 + pillar.height / 2, z]}>
              {/* Pillar base */}
              <RoundedBox args={[0.5, pillar.height, 0.5]} radius={0.08}>
                <meshStandardMaterial
                  color="#1a1a2e"
                  metalness={0.6}
                  roughness={0.4}
                />
              </RoundedBox>

              {/* Pillar top glow */}
              <mesh position={[0, pillar.height / 2 + 0.05, 0]}>
                <boxGeometry args={[0.4, 0.08, 0.4]} />
                <meshStandardMaterial
                  color={pillar.color}
                  emissive={pillar.color}
                  emissiveIntensity={0.5}
                />
              </mesh>

              {/* Pillar indicator light */}
              <mesh position={[0, pillar.height / 2 - 0.2, 0.26]}>
                <circleGeometry args={[0.08, 12]} />
                <meshStandardMaterial
                  color={pillar.color}
                  emissive={pillar.color}
                  emissiveIntensity={0.7}
                />
              </mesh>

              {/* Connection to center */}
              <mesh
                position={[-x / 3, -pillar.height / 2 + 0.3, -z / 3]}
                rotation={[0, -pillar.angle, 0]}
              >
                <boxGeometry args={[0.8, 0.02, 0.02]} />
                <meshStandardMaterial
                  color={pillar.color}
                  emissive={pillar.color}
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.5}
                />
              </mesh>
            </group>
          </Float>
        )
      })}

      {/* Platform base */}
      <mesh position={[0, -1.3, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[3, 3.2, 0.15, 32]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>

      {/* Platform glow edge */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.1, 0.04, 8, 64]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Orbiting opportunities/clients */}
      <group ref={orbitRef}>
        {orbitingItems.map((item, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(item.angle) * item.radius,
              0,
              Math.sin(item.angle) * item.radius,
            ]}
          >
            <sphereGeometry args={[item.size, 8, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#00FF88' : '#00D9FF'}
              emissive={i % 2 === 0 ? '#00FF88' : '#00D9FF'}
              emissiveIntensity={0.7}
            />
          </mesh>
        ))}
      </group>

      {/* Rising growth particles */}
      <group ref={growthRef}>
        {risingParticles.map((p, i) => (
          <mesh key={i} position={[p.x, -2, p.z]}>
            <sphereGeometry args={[p.size, 6, 6]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
      </group>

      {/* Growth arrow - top */}
      <Float speed={2} floatIntensity={0.3}>
        <group position={[0, 3.5, 0]}>
          <mesh rotation={[0, 0, Math.PI]}>
            <coneGeometry args={[0.15, 0.35, 3]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.3, 8]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      </Float>

      {/* Stats badge - Clients */}
      <Float speed={1.6} floatIntensity={0.25}>
        <group position={[-4.2, 1.5, 0.3]}>
          <RoundedBox args={[1, 0.55, 0.08]} radius={0.1}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* User icons */}
          {[-0.25, 0, 0.25].map((x, i) => (
            <group key={i} position={[x, 0.05, 0.05]}>
              <mesh position={[0, 0.08, 0]}>
                <sphereGeometry args={[0.06, 8, 8]} />
                <meshStandardMaterial
                  color="#00D9FF"
                  emissive="#00D9FF"
                  emissiveIntensity={0.5}
                />
              </mesh>
              <mesh position={[0, -0.05, 0]}>
                <cylinderGeometry args={[0.04, 0.06, 0.1, 6]} />
                <meshStandardMaterial
                  color="#00D9FF"
                  emissive="#00D9FF"
                  emissiveIntensity={0.4}
                />
              </mesh>
            </group>
          ))}
          {/* Plus sign */}
          <mesh position={[0.38, 0, 0.05]}>
            <boxGeometry args={[0.06, 0.02, 0.02]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh position={[0.38, 0, 0.05]}>
            <boxGeometry args={[0.02, 0.06, 0.02]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      </Float>

      {/* Stats badge - Revenue */}
      <Float speed={1.4} floatIntensity={0.25}>
        <group position={[4.2, -1, 0.3]}>
          <RoundedBox args={[1, 0.55, 0.08]} radius={0.1}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* Growth bars */}
          {[0.2, 0.35, 0.5, 0.7].map((height, i) => (
            <mesh key={i} position={[-0.3 + i * 0.18, -0.15 + height / 2, 0.05]}>
              <boxGeometry args={[0.1, height * 0.4, 0.02]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[ambientParticles, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#A855F7"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Background glow */}
      <mesh position={[0, 0, -1.5]}>
        <circleGeometry args={[5, 32]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.04}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
