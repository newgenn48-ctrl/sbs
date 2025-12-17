'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'

// Marketing Nexus 3D - Clean flywheel/ecosystem visualization
export default function MarketingNexus() {
  const groupRef = useRef<THREE.Group>(null)
  const flywheelRef = useRef<THREE.Group>(null)
  const dataFlowRef = useRef<THREE.Group>(null)

  // Four marketing channels
  const channels = useMemo(() => [
    { angle: 0, color: '#34A853', label: 'Google Ads', icon: 'chart' },
    { angle: Math.PI / 2, color: '#4285F4', label: 'SEO', icon: 'search' },
    { angle: Math.PI, color: '#E4405F', label: 'Social', icon: 'share' },
    { angle: (3 * Math.PI) / 2, color: '#A855F7', label: 'Automation', icon: 'zap' },
  ], [])

  // Data flow particles on the flywheel
  const flowParticles = useMemo(() => {
    const particles = []
    for (let i = 0; i < 20; i++) {
      particles.push({
        angle: (i / 20) * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.2,
        radius: 2.8 + Math.random() * 0.4,
        size: 0.04 + Math.random() * 0.03,
      })
    }
    return particles
  }, [])

  // Ambient particles
  const particles = useMemo(() => {
    const positions = new Float32Array(30 * 3)
    for (let i = 0; i < 30; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1
      groupRef.current.position.y = Math.sin(t * 0.3) * 0.1
    }

    // Rotate flywheel slowly
    if (flywheelRef.current) {
      flywheelRef.current.rotation.z = t * 0.15
    }

    // Animate data flow particles
    if (dataFlowRef.current) {
      dataFlowRef.current.children.forEach((particle, i) => {
        const p = flowParticles[i]
        const angle = p.angle + t * p.speed
        particle.position.x = Math.cos(angle) * p.radius
        particle.position.y = Math.sin(angle) * p.radius
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central Hub - Dashboard */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.1}>
        <group>
          {/* Main hub */}
          <mesh>
            <cylinderGeometry args={[1.2, 1.2, 0.3, 32]} />
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>

          {/* Hub top glow ring */}
          <mesh position={[0, 0.16, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.1, 0.05, 8, 32]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.6}
            />
          </mesh>

          {/* Center indicator */}
          <mesh position={[0, 0.2, 0]}>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
            />
          </mesh>

          {/* Mini dashboard elements on hub */}
          {[0, 1, 2, 3].map((i) => {
            const angle = (i / 4) * Math.PI * 2
            return (
              <mesh
                key={i}
                position={[Math.cos(angle) * 0.6, 0.18, Math.sin(angle) * 0.6]}
              >
                <boxGeometry args={[0.2, 0.05, 0.15]} />
                <meshStandardMaterial
                  color={channels[i].color}
                  emissive={channels[i].color}
                  emissiveIntensity={0.4}
                />
              </mesh>
            )
          })}
        </group>
      </Float>

      {/* Flywheel Ring */}
      <group ref={flywheelRef}>
        {/* Outer ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[3, 0.08, 8, 64]} />
          <meshStandardMaterial
            color="#2a2a4a"
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>

        {/* Inner ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.04, 8, 64]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Direction arrows on flywheel */}
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2
          return (
            <mesh
              key={`arrow-${i}`}
              position={[Math.cos(angle) * 2.75, 0, Math.sin(angle) * 2.75]}
              rotation={[0, -angle + Math.PI / 2, 0]}
            >
              <coneGeometry args={[0.08, 0.15, 3]} />
              <meshStandardMaterial
                color="#00D9FF"
                emissive="#00D9FF"
                emissiveIntensity={0.5}
              />
            </mesh>
          )
        })}
      </group>

      {/* Four Channel Nodes */}
      {channels.map((channel, i) => {
        const x = Math.cos(channel.angle) * 3.5
        const y = Math.sin(channel.angle) * 3.5
        return (
          <Float key={i} speed={1.5 + i * 0.1} floatIntensity={0.2}>
            <group position={[x, y, 0.2]}>
              {/* Node background */}
              <RoundedBox args={[0.9, 0.9, 0.15]} radius={0.15}>
                <meshStandardMaterial
                  color="#1a1a2e"
                  metalness={0.6}
                  roughness={0.4}
                />
              </RoundedBox>

              {/* Node glow border */}
              <mesh position={[0, 0, 0.08]}>
                <ringGeometry args={[0.35, 0.42, 16]} />
                <meshStandardMaterial
                  color={channel.color}
                  emissive={channel.color}
                  emissiveIntensity={0.6}
                />
              </mesh>

              {/* Icon representation */}
              <mesh position={[0, 0, 0.1]}>
                <circleGeometry args={[0.25, 16]} />
                <meshStandardMaterial
                  color={channel.color}
                  emissive={channel.color}
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.3}
                />
              </mesh>

              {/* Center dot */}
              <mesh position={[0, 0, 0.12]}>
                <circleGeometry args={[0.1, 12]} />
                <meshStandardMaterial
                  color={channel.color}
                  emissive={channel.color}
                  emissiveIntensity={0.8}
                />
              </mesh>

              {/* Connection line to center */}
              <mesh position={[-x / 2.3, -y / 2.3, 0]} rotation={[0, 0, channel.angle]}>
                <boxGeometry args={[1.5, 0.03, 0.02]} />
                <meshStandardMaterial
                  color={channel.color}
                  emissive={channel.color}
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.5}
                />
              </mesh>
            </group>
          </Float>
        )
      })}

      {/* Data Flow Particles */}
      <group ref={dataFlowRef}>
        {flowParticles.map((p, i) => (
          <mesh key={i} position={[Math.cos(p.angle) * p.radius, Math.sin(p.angle) * p.radius, 0.1]}>
            <sphereGeometry args={[p.size, 6, 6]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Growth indicator */}
      <Float speed={2} floatIntensity={0.3}>
        <group position={[0, 4.5, 0.3]}>
          <mesh rotation={[0, 0, Math.PI]}>
            <coneGeometry args={[0.15, 0.3, 3]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
            />
          </mesh>
          <mesh position={[0, 0.25, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.25, 8]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.5}
            />
          </mesh>
        </group>
      </Float>

      {/* ROI Badge */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[-4.5, 2, 0.4]}>
          <RoundedBox args={[1, 0.5, 0.08]} radius={0.1}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* ROI indicator bars */}
          {[0.15, 0.25, 0.35, 0.5].map((height, i) => (
            <mesh key={i} position={[-0.3 + i * 0.2, -0.1 + height / 2, 0.05]}>
              <boxGeometry args={[0.12, height, 0.03]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.4}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Analytics Badge */}
      <Float speed={1.6} floatIntensity={0.25}>
        <group position={[4.5, -2, 0.4]}>
          <RoundedBox args={[1, 0.5, 0.08]} radius={0.1}>
            <meshStandardMaterial
              color="#1a1a2e"
              metalness={0.5}
              roughness={0.5}
            />
          </RoundedBox>
          {/* Line chart */}
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[0.7, 0.3]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
            />
          </mesh>
          {/* Chart line points */}
          {[-0.25, -0.1, 0.05, 0.2].map((x, i) => (
            <mesh key={i} position={[x, -0.05 + i * 0.05, 0.06]}>
              <sphereGeometry args={[0.03, 6, 6]} />
              <meshStandardMaterial
                color="#00D9FF"
                emissive="#00D9FF"
                emissiveIntensity={0.6}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
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
          emissiveIntensity={0.05}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
