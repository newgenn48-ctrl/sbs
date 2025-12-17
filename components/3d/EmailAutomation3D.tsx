'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'

// Email Automation 3D - Clean professional visualization
export default function EmailAutomation3D() {
  const groupRef = useRef<THREE.Group>(null)
  const flowRef = useRef<THREE.Group>(null)
  const gearsRef = useRef<THREE.Group>(null)

  // Workflow steps
  const steps = useMemo(() => [
    { x: -1.6, label: 'Trigger', color: '#00D9FF' },
    { x: -0.55, label: 'Wait', color: '#FFD700' },
    { x: 0.55, label: 'Email', color: '#A855F7' },
    { x: 1.6, label: 'Convert', color: '#00FF88' },
  ], [])

  // Particles
  const particles = useMemo(() => {
    const positions = new Float32Array(40 * 3)
    for (let i = 0; i < 40; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.08
    }

    // Animate flow particles
    if (flowRef.current) {
      flowRef.current.children.forEach((flow, i) => {
        const progress = ((t * 0.35 + i * 0.25) % 1)
        flow.position.x = -2 + progress * 4
        flow.scale.setScalar(0.3 + Math.sin(progress * Math.PI) * 0.5)
        const mat = (flow as THREE.Mesh).material as THREE.MeshStandardMaterial
        if (mat) mat.opacity = Math.sin(progress * Math.PI) * 0.8
      })
    }

    // Rotate gears
    if (gearsRef.current) {
      gearsRef.current.children.forEach((gear, i) => {
        const direction = i % 2 === 0 ? 1 : -1
        gear.rotation.z = t * 0.3 * direction
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main dashboard panel */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
        <group>
          {/* Dashboard frame */}
          <RoundedBox args={[5, 3.5, 0.12]} radius={0.08} position={[0, 0, 0]}>
            <meshStandardMaterial color="#0d1117" metalness={0.6} roughness={0.4} />
          </RoundedBox>

          {/* Inner screen */}
          <RoundedBox args={[4.7, 3.2, 0.08]} radius={0.06} position={[0, 0, 0.04]}>
            <meshStandardMaterial color="#161b22" metalness={0.2} roughness={0.8} />
          </RoundedBox>

          {/* Header bar */}
          <RoundedBox args={[4.7, 0.3, 0.06]} radius={0.04} position={[0, 1.45, 0.08]}>
            <meshStandardMaterial color="#1e222a" metalness={0.3} roughness={0.7} />
          </RoundedBox>

          {/* Robot/automation icon placeholder */}
          <mesh position={[-2, 1.45, 0.12]}>
            <boxGeometry args={[0.15, 0.15, 0.02]} />
            <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.4} />
          </mesh>

          {/* Title placeholder */}
          <mesh position={[-1.2, 1.45, 0.12]}>
            <boxGeometry args={[0.8, 0.1, 0.02]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>

          {/* Live indicator */}
          <mesh position={[2.1, 1.45, 0.12]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.8} />
          </mesh>

          {/* Workflow canvas */}
          <RoundedBox args={[4.5, 0.9, 0.03]} radius={0.04} position={[0, 0.65, 0.1]}>
            <meshStandardMaterial color="#0d0d14" />
          </RoundedBox>

          {/* Workflow steps */}
          {steps.map((step, i) => (
            <group key={i} position={[step.x, 0.65, 0.14]}>
              {/* Step box */}
              <RoundedBox args={[0.85, 0.55, 0.04]} radius={0.06}>
                <meshStandardMaterial color="#1e222a" metalness={0.2} roughness={0.8} />
              </RoundedBox>

              {/* Icon circle */}
              <mesh position={[0, 0.08, 0.04]}>
                <circleGeometry args={[0.1, 12]} />
                <meshStandardMaterial
                  color={step.color}
                  emissive={step.color}
                  emissiveIntensity={0.5}
                />
              </mesh>

              {/* Label placeholder */}
              <mesh position={[0, -0.14, 0.04]}>
                <boxGeometry args={[0.4, 0.06, 0.02]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
              </mesh>

              {/* Connector arrow (except last) */}
              {i < steps.length - 1 && (
                <group position={[0.52, 0.08, 0.04]}>
                  <mesh>
                    <boxGeometry args={[0.22, 0.025, 0.02]} />
                    <meshStandardMaterial
                      color={step.color}
                      emissive={step.color}
                      emissiveIntensity={0.4}
                      transparent
                      opacity={0.7}
                    />
                  </mesh>
                  {/* Arrow head */}
                  <mesh position={[0.13, 0, 0]} rotation={[0, 0, -Math.PI / 2]}>
                    <coneGeometry args={[0.03, 0.06, 3]} />
                    <meshStandardMaterial
                      color={step.color}
                      emissive={step.color}
                      emissiveIntensity={0.4}
                    />
                  </mesh>
                </group>
              )}
            </group>
          ))}

          {/* Flow particles */}
          <group ref={flowRef}>
            {[0, 1, 2, 3, 4].map((i) => (
              <mesh key={i} position={[-2 + i * 0.8, 0.75, 0.2]}>
                <sphereGeometry args={[0.04, 8, 8]} />
                <meshStandardMaterial
                  color="#00D9FF"
                  emissive="#00D9FF"
                  emissiveIntensity={0.8}
                  transparent
                />
              </mesh>
            ))}
          </group>

          {/* Email preview card */}
          <group position={[-1.4, -0.55, 0.1]}>
            <RoundedBox args={[1.9, 0.9, 0.04]} radius={0.05}>
              <meshStandardMaterial color="#1e222a" metalness={0.2} roughness={0.8} />
            </RoundedBox>

            {/* Email header */}
            <mesh position={[0, 0.28, 0.04]}>
              <boxGeometry args={[1.6, 0.14, 0.02]} />
              <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.2} />
            </mesh>

            {/* Email body lines */}
            {[0.06, -0.06, -0.16].map((y, i) => (
              <mesh key={i} position={[0, y, 0.04]}>
                <boxGeometry args={[1.4 - i * 0.12, 0.04, 0.02]} />
                <meshStandardMaterial color="#4a5568" transparent opacity={0.5} />
              </mesh>
            ))}

            {/* CTA button */}
            <RoundedBox args={[0.5, 0.14, 0.03]} radius={0.03} position={[0, -0.32, 0.04]}>
              <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.4} />
            </RoundedBox>
          </group>

          {/* Stats panel */}
          <group position={[1.4, -0.55, 0.1]}>
            <RoundedBox args={[1.7, 0.9, 0.04]} radius={0.05}>
              <meshStandardMaterial color="#1e222a" metalness={0.2} roughness={0.8} />
            </RoundedBox>

            {/* Stats rows */}
            {[
              { y: 0.22, color: '#00D9FF' },
              { y: 0, color: '#A855F7' },
              { y: -0.22, color: '#00FF88' },
            ].map((stat, i) => (
              <group key={i} position={[0, stat.y, 0.04]}>
                <mesh position={[-0.55, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial color={stat.color} emissive={stat.color} emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                  <boxGeometry args={[0.7, 0.06, 0.02]} />
                  <meshStandardMaterial color="#4a5568" transparent opacity={0.5} />
                </mesh>
              </group>
            ))}
          </group>
        </group>
      </Float>

      {/* Floating envelope */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[-3, 0.5, 0.4]}>
          {/* Envelope body */}
          <RoundedBox args={[0.5, 0.35, 0.08]} radius={0.04}>
            <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.3} />
          </RoundedBox>
          {/* Envelope flap */}
          <mesh position={[0, 0.1, 0.05]} rotation={[0.3, 0, 0]}>
            <planeGeometry args={[0.48, 0.2]} />
            <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.4} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </Float>

      {/* Automation gears */}
      <group ref={gearsRef}>
        <Float speed={1.5} floatIntensity={0.2}>
          <group position={[3, 0.3, 0.4]}>
            {/* Main gear */}
            <mesh>
              <torusGeometry args={[0.25, 0.05, 8, 16]} />
              <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.4} />
            </mesh>
            {/* Gear teeth */}
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <mesh key={i} position={[Math.cos(i * Math.PI / 4) * 0.28, Math.sin(i * Math.PI / 4) * 0.28, 0]}>
                <boxGeometry args={[0.08, 0.08, 0.05]} />
                <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.4} />
              </mesh>
            ))}
          </group>
        </Float>
        <Float speed={1.5} floatIntensity={0.2}>
          <group position={[3.4, -0.25, 0.4]}>
            {/* Secondary gear */}
            <mesh>
              <torusGeometry args={[0.18, 0.04, 8, 12]} />
              <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.4} />
            </mesh>
            {/* Gear teeth */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <mesh key={i} position={[Math.cos(i * Math.PI / 3) * 0.2, Math.sin(i * Math.PI / 3) * 0.2, 0]}>
                <boxGeometry args={[0.06, 0.06, 0.04]} />
                <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.4} />
              </mesh>
            ))}
          </group>
        </Float>
      </group>

      {/* Floating paper planes */}
      {[
        { pos: [-2.8, -0.8, 0.5], color: '#A855F7', rot: 0.3 },
        { pos: [2.8, 1.2, 0.6], color: '#00D9FF', rot: -0.2 },
      ].map((plane, i) => (
        <Float key={i} speed={1.6 + i * 0.2} floatIntensity={0.3}>
          <group position={[plane.pos[0], plane.pos[1], plane.pos[2]]} rotation={[0, 0, plane.rot]}>
            <mesh>
              <coneGeometry args={[0.12, 0.25, 3]} />
              <meshStandardMaterial
                color={plane.color}
                emissive={plane.color}
                emissiveIntensity={0.4}
              />
            </mesh>
          </group>
        </Float>
      ))}

      {/* Success checkmark */}
      <Float speed={2} floatIntensity={0.3}>
        <group position={[2.8, -1, 0.4]}>
          <mesh>
            <circleGeometry args={[0.15, 16]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.4} />
          </mesh>
          {/* Checkmark */}
          <mesh position={[-0.03, 0, 0.02]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.05, 0.02, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.04, 0.02, 0.02]} rotation={[0, 0, 0.8]}>
            <boxGeometry args={[0.08, 0.02, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      </Float>

      {/* Notification bell */}
      <Float speed={2.2} floatIntensity={0.35}>
        <group position={[-2.6, -1.3, 0.4]}>
          <mesh>
            <cylinderGeometry args={[0.08, 0.12, 0.12, 12]} />
            <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0, -0.08, 0]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#A855F7" transparent opacity={0.4} sizeAttenuation />
      </points>

      {/* Background glow */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.03} transparent opacity={0.08} />
      </mesh>
    </group>
  )
}
