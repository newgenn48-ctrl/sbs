'use client'

import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'

// Interactive Company DNA - Responds to mouse with smooth animations
export default function CompanyDNA3D() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const orbitRef = useRef<THREE.Group>(null)
  const ringsRef = useRef<THREE.Group>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRotation = useRef({ x: 0, y: 0 })
  
  const { viewport } = useThree()

  // Service orbs - representing each core service
  const serviceOrbs = useMemo(() => [
    { name: 'IT', color: '#00D9FF', angle: 0, radius: 3.2, size: 0.35 },
    { name: 'WEB', color: '#A855F7', angle: Math.PI / 2, radius: 3.2, size: 0.32 },
    { name: 'AI', color: '#00FF88', angle: Math.PI, radius: 3.2, size: 0.35 },
    { name: 'MKT', color: '#FF6B6B', angle: (3 * Math.PI) / 2, radius: 3.2, size: 0.3 },
  ], [])

  // Floating particles - less for cleaner look
  const floatingParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4 - 2,
        ] as [number, number, number],
        size: 0.02 + Math.random() * 0.03,
        speed: 0.3 + Math.random() * 0.3,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return particles
  }, [])

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime()

    // Smooth mouse tracking
    mouseRef.current.x += (pointer.x - mouseRef.current.x) * 0.05
    mouseRef.current.y += (pointer.y - mouseRef.current.y) * 0.05

    // Calculate target rotation based on mouse
    targetRotation.current.x = mouseRef.current.y * 0.3
    targetRotation.current.y = mouseRef.current.x * 0.5

    // Main group follows mouse smoothly
    if (groupRef.current) {
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.02
    }

    // Core pulsing - responds to mouse distance from center
    if (coreRef.current) {
      const mouseDistance = Math.sqrt(pointer.x ** 2 + pointer.y ** 2)
      const pulseIntensity = 1 + Math.sin(t * 2) * 0.05 + mouseDistance * 0.1
      coreRef.current.scale.set(pulseIntensity, pulseIntensity, pulseIntensity)
    }

    // Orbit rotation - slows when mouse is active
    if (orbitRef.current) {
      const mouseActivity = Math.abs(pointer.x) + Math.abs(pointer.y)
      const rotationSpeed = 0.15 - mouseActivity * 0.05
      orbitRef.current.rotation.y += rotationSpeed * 0.016
      orbitRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 + mouseRef.current.y * 0.2
    }

    // Rings rotation - interactive
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        ring.rotation.x = t * (0.08 + i * 0.03) + mouseRef.current.y * 0.3
        ring.rotation.z = t * (0.1 - i * 0.02) + mouseRef.current.x * 0.2
      })
    }
  })

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central glowing core */}
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[0.7, 2]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={1.5}
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>
        {/* Inner core solid */}
        <mesh>
          <icosahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
        {/* Core glow */}
        <Sphere args={[0.9, 16, 16]}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.1}
          />
        </Sphere>
      </Float>

      {/* Orbital rings - cleaner, fewer */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.8, 0.015, 16, 80]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={1.5}
            transparent
            opacity={0.5}
          />
        </mesh>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.2, 0.012, 16, 80]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={1.5}
            transparent
            opacity={0.35}
          />
        </mesh>
      </group>

      {/* Service orbs orbiting */}
      <group ref={orbitRef}>
        {serviceOrbs.map((orb, i) => (
          <Float key={orb.name} speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
            <group
              position={[
                Math.cos(orb.angle) * orb.radius,
                Math.sin(i * 0.4) * 0.4,
                Math.sin(orb.angle) * orb.radius,
              ]}
            >
              {/* Orb glow */}
              <Sphere args={[orb.size * 1.8, 16, 16]}>
                <meshStandardMaterial
                  color={orb.color}
                  emissive={orb.color}
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.15}
                />
              </Sphere>
              {/* Main orb */}
              <Sphere args={[orb.size, 32, 32]}>
                <meshStandardMaterial
                  color={orb.color}
                  emissive={orb.color}
                  emissiveIntensity={1.8}
                  toneMapped={false}
                />
              </Sphere>
            </group>
          </Float>
        ))}
      </group>

      {/* Floating ambient particles - subtle */}
      {floatingParticles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.6}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Subtle lighting */}
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#00D9FF" distance={6} />
      <pointLight position={[3, 2, 0]} intensity={0.8} color="#A855F7" distance={5} />
    </group>
  )
}
