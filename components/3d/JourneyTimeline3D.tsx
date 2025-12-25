'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sphere } from '@react-three/drei'

// Journey Timeline 3D - Floating milestones connected by energy streams
export default function JourneyTimeline3D() {
  const groupRef = useRef<THREE.Group>(null)
  const milestonesRef = useRef<THREE.Group>(null)
  const pathRef = useRef<THREE.Group>(null)
  const energyRef = useRef<THREE.Group>(null)

  // Timeline milestones
  const milestones = useMemo(() => [
    { position: [-4, 0, 0] as [number, number, number], color: '#00D9FF', size: 0.35 },
    { position: [-1.5, 1, 0.5] as [number, number, number], color: '#A855F7', size: 0.4 },
    { position: [1.5, -0.5, -0.5] as [number, number, number], color: '#00FF88', size: 0.45 },
    { position: [4, 0.5, 0] as [number, number, number], color: '#FF6B6B', size: 0.5 },
  ], [])

  // Energy particles flowing along the path
  const energyParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 30; i++) {
      particles.push({
        t: i / 30,
        speed: 0.15 + Math.random() * 0.1,
        offset: Math.random() * 0.3,
        size: 0.03 + Math.random() * 0.02,
      })
    }
    return particles
  }, [])

  // Ambient floating particles
  const ambientParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4 - 1,
        ] as [number, number, number],
        size: 0.015 + Math.random() * 0.025,
        speed: 0.3 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return particles
  }, [])

  // Create curved path through milestones
  const pathCurve = useMemo(() => {
    const points = milestones.map(m => new THREE.Vector3(...m.position))
    return new THREE.CatmullRomCurve3(points)
  }, [milestones])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Gentle group movement
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.05
      groupRef.current.position.y = Math.sin(t * 0.2) * 0.1
    }

    // Milestone pulsing
    if (milestonesRef.current) {
      milestonesRef.current.children.forEach((milestone, i) => {
        const scale = 1 + Math.sin(t * 2 + i * 0.5) * 0.1
        milestone.scale.set(scale, scale, scale)
      })
    }

    // Energy particles moving along path
    if (energyRef.current) {
      energyRef.current.children.forEach((particle, i) => {
        const p = energyParticles[i]
        const progress = ((p.t + t * p.speed) % 1)
        const point = pathCurve.getPoint(progress)
        particle.position.set(
          point.x + Math.sin(t * 3 + i) * p.offset,
          point.y + Math.cos(t * 2 + i) * p.offset,
          point.z
        )
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Path curve */}
      <group ref={pathRef}>
        <mesh>
          <tubeGeometry args={[pathCurve, 100, 0.02, 8, false]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={1}
            transparent
            opacity={0.3}
          />
        </mesh>
        {/* Outer glow tube */}
        <mesh>
          <tubeGeometry args={[pathCurve, 100, 0.06, 8, false]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>

      {/* Milestones */}
      <group ref={milestonesRef}>
        {milestones.map((milestone, i) => (
          <Float key={i} speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
            <group position={milestone.position}>
              {/* Outer glow sphere */}
              <Sphere args={[milestone.size * 2, 16, 16]}>
                <meshStandardMaterial
                  color={milestone.color}
                  emissive={milestone.color}
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.1}
                />
              </Sphere>
              {/* Mid glow */}
              <Sphere args={[milestone.size * 1.3, 16, 16]}>
                <meshStandardMaterial
                  color={milestone.color}
                  emissive={milestone.color}
                  emissiveIntensity={0.5}
                  transparent
                  opacity={0.2}
                />
              </Sphere>
              {/* Main sphere */}
              <Sphere args={[milestone.size, 32, 32]}>
                <meshStandardMaterial
                  color={milestone.color}
                  emissive={milestone.color}
                  emissiveIntensity={2}
                  toneMapped={false}
                />
              </Sphere>
              {/* Inner core */}
              <Sphere args={[milestone.size * 0.5, 16, 16]}>
                <meshStandardMaterial
                  color="#ffffff"
                  emissive="#ffffff"
                  emissiveIntensity={3}
                  transparent
                  opacity={0.9}
                />
              </Sphere>
              {/* Orbiting ring */}
              <mesh rotation={[Math.PI / 2 + i * 0.3, 0, 0]}>
                <torusGeometry args={[milestone.size * 1.5, 0.015, 16, 50]} />
                <meshStandardMaterial
                  color={milestone.color}
                  emissive={milestone.color}
                  emissiveIntensity={1.5}
                  transparent
                  opacity={0.5}
                />
              </mesh>
            </group>
          </Float>
        ))}
      </group>

      {/* Energy particles */}
      <group ref={energyRef}>
        {energyParticles.map((p, i) => (
          <mesh key={i}>
            <sphereGeometry args={[p.size, 8, 8]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={2}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>

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
      <pointLight position={[-4, 2, 2]} intensity={1} color="#00D9FF" distance={8} />
      <pointLight position={[0, 0, 2]} intensity={0.8} color="#A855F7" distance={6} />
      <pointLight position={[4, 2, 2]} intensity={1} color="#00FF88" distance={8} />
    </group>
  )
}
