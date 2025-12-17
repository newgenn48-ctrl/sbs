'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float, Sphere } from '@react-three/drei'

// AI Core 3D - Clean AI brain/processor visualization
export default function AICore() {
  const groupRef = useRef<THREE.Group>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Group>(null)
  const dataFlowRef = useRef<THREE.Group>(null)

  // Processing nodes around the core
  const processingNodes = useMemo(() => [
    { angle: 0, distance: 2.5, color: '#A855F7', label: 'Chatbot' },
    { angle: Math.PI / 2, distance: 2.5, color: '#00D9FF', label: 'Analytics' },
    { angle: Math.PI, distance: 2.5, color: '#00FF88', label: 'Automation' },
    { angle: (3 * Math.PI) / 2, distance: 2.5, color: '#FF6B6B', label: 'Assistant' },
  ], [])

  // Orbiting data particles
  const dataParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 24; i++) {
      particles.push({
        angle: (i / 24) * Math.PI * 2,
        speed: 0.2 + Math.random() * 0.15,
        radius: 1.8 + (i % 3) * 0.4,
        size: 0.04 + Math.random() * 0.03,
        yOffset: (Math.random() - 0.5) * 0.6,
      })
    }
    return particles
  }, [])

  // Neural connections between nodes
  const neuralPaths = useMemo(() => {
    const paths = []
    for (let i = 0; i < 12; i++) {
      paths.push({
        startAngle: Math.random() * Math.PI * 2,
        length: 1.5 + Math.random() * 0.8,
        speed: 0.3 + Math.random() * 0.2,
      })
    }
    return paths
  }, [])

  // Ambient particles
  const ambientParticles = useMemo(() => {
    const positions = new Float32Array(40 * 3)
    for (let i = 0; i < 40; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 5 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Main group subtle float
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.3) * 0.08
    }

    // Core pulsing
    if (coreRef.current) {
      const scale = 1 + Math.sin(t * 2) * 0.05
      coreRef.current.scale.set(scale, scale, scale)
    }

    // Rings rotation
    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.15
      ringsRef.current.rotation.x = Math.sin(t * 0.2) * 0.1
    }

    // Data particles orbiting
    if (dataFlowRef.current) {
      dataFlowRef.current.children.forEach((particle, i) => {
        const p = dataParticles[i]
        const angle = p.angle + t * p.speed
        particle.position.x = Math.cos(angle) * p.radius
        particle.position.z = Math.sin(angle) * p.radius
        particle.position.y = p.yOffset + Math.sin(t * 2 + i) * 0.1
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central AI Core */}
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <group>
          {/* Main Core Sphere */}
          <mesh ref={coreRef}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.6}
              metalness={0.3}
              roughness={0.4}
            />
          </mesh>

          {/* Inner glow */}
          <mesh>
            <sphereGeometry args={[0.6, 24, 24]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
              transparent
              opacity={0.5}
            />
          </mesh>

          {/* Core detail ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.9, 0.05, 8, 32]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.5}
            />
          </mesh>

          {/* Vertical ring */}
          <mesh rotation={[0, 0, 0]}>
            <torusGeometry args={[0.85, 0.03, 8, 32]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.4}
              transparent
              opacity={0.7}
            />
          </mesh>
        </group>
      </Float>

      {/* Orbital Rings */}
      <group ref={ringsRef}>
        {/* Primary ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2, 0.04, 8, 64]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Secondary ring */}
        <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[2.3, 0.03, 8, 64]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.2}
            transparent
            opacity={0.4}
          />
        </mesh>

        {/* Ring markers */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2
          return (
            <mesh
              key={`marker-${i}`}
              position={[Math.cos(angle) * 2, 0, Math.sin(angle) * 2]}
              rotation={[Math.PI / 3, 0, 0]}
            >
              <sphereGeometry args={[0.06, 8, 8]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.6}
              />
            </mesh>
          )
        })}
      </group>

      {/* Processing Nodes */}
      {processingNodes.map((node, i) => {
        const x = Math.cos(node.angle) * node.distance
        const y = Math.sin(node.angle) * node.distance
        return (
          <Float key={i} speed={1.3 + i * 0.1} floatIntensity={0.2}>
            <group position={[x, y, 0.3]}>
              {/* Node base */}
              <RoundedBox args={[0.7, 0.7, 0.12]} radius={0.12}>
                <meshStandardMaterial
                  color="#1a1a2e"
                  metalness={0.6}
                  roughness={0.4}
                />
              </RoundedBox>

              {/* Node glow ring */}
              <mesh position={[0, 0, 0.07]}>
                <ringGeometry args={[0.22, 0.28, 16]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.6}
                />
              </mesh>

              {/* Node center indicator */}
              <mesh position={[0, 0, 0.08]}>
                <circleGeometry args={[0.15, 16]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.4}
                />
              </mesh>

              {/* Node pulse dot */}
              <mesh position={[0, 0, 0.1]}>
                <circleGeometry args={[0.06, 12]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.8}
                />
              </mesh>

              {/* Connection line to core */}
              <mesh
                position={[-x / 3.5, -y / 3.5, 0]}
                rotation={[0, 0, node.angle]}
              >
                <boxGeometry args={[1.2, 0.025, 0.015]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.5}
                />
              </mesh>
            </group>
          </Float>
        )
      })}

      {/* Orbiting Data Particles */}
      <group ref={dataFlowRef}>
        {dataParticles.map((p, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(p.angle) * p.radius,
              p.yOffset,
              Math.sin(p.angle) * p.radius,
            ]}
          >
            <sphereGeometry args={[p.size, 6, 6]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#A855F7' : '#00D9FF'}
              emissive={i % 2 === 0 ? '#A855F7' : '#00D9FF'}
              emissiveIntensity={0.7}
            />
          </mesh>
        ))}
      </group>

      {/* Input indicator - top */}
      <Float speed={2} floatIntensity={0.3}>
        <group position={[0, 3.8, 0.2]}>
          {/* Arrow pointing down (input) */}
          <mesh rotation={[0, 0, Math.PI]}>
            <coneGeometry args={[0.12, 0.25, 3]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.5}
            />
          </mesh>
          {/* Data label */}
          <RoundedBox args={[0.6, 0.25, 0.06]} radius={0.06} position={[0, 0.5, 0]}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* Label indicator dots */}
          {[-0.15, 0, 0.15].map((x, idx) => (
            <mesh key={idx} position={[x, 0.5, 0.04]}>
              <circleGeometry args={[0.04, 8]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.5}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Output indicator - bottom */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[0, -3.8, 0.2]}>
          {/* Arrow pointing down (output) */}
          <mesh>
            <coneGeometry args={[0.12, 0.25, 3]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.2, 8]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      </Float>

      {/* Stats Badge - Left */}
      <Float speed={1.6} floatIntensity={0.25}>
        <group position={[-4, 1.5, 0.3]}>
          <RoundedBox args={[1.1, 0.6, 0.08]} radius={0.1}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* Percentage bars */}
          {[0.3, 0.5, 0.7, 0.9].map((width, i) => (
            <mesh key={i} position={[-0.35 + (width * 0.5) / 2, 0.1 - i * 0.12, 0.05]}>
              <boxGeometry args={[width * 0.6, 0.06, 0.02]} />
              <meshStandardMaterial
                color="#A855F7"
                emissive="#A855F7"
                emissiveIntensity={0.4}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Stats Badge - Right */}
      <Float speed={1.4} floatIntensity={0.25}>
        <group position={[4, -1.5, 0.3]}>
          <RoundedBox args={[1.1, 0.6, 0.08]} radius={0.1}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* Upward trend line */}
          {[0, 1, 2, 3].map((i) => (
            <mesh key={i} position={[-0.3 + i * 0.2, -0.1 + i * 0.08, 0.05]}>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.6}
              />
            </mesh>
          ))}
          {/* Trend arrow */}
          <mesh position={[0.35, 0.18, 0.05]} rotation={[0, 0, -Math.PI / 4]}>
            <coneGeometry args={[0.05, 0.1, 3]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.5}
            />
          </mesh>
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
