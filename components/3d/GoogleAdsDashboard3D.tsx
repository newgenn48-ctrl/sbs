'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'

// Google Ads 3D - Clean professional visualization
export default function GoogleAdsDashboard3D() {
  const groupRef = useRef<THREE.Group>(null)
  const triangleRef = useRef<THREE.Group>(null)
  const barsRef = useRef<THREE.Group>(null)
  const clicksRef = useRef<THREE.Group>(null)

  // Performance metrics
  const metrics = useMemo(() => [
    { height: 0.6, color: '#4285F4' },
    { height: 0.85, color: '#34A853' },
    { height: 0.5, color: '#FBBC05' },
    { height: 0.95, color: '#EA4335' },
    { height: 0.7, color: '#4285F4' },
  ], [])

  // Click indicators
  const clicks = useMemo(() => [
    { pos: new THREE.Vector3(-1.5, 0.8, 0.3), delay: 0 },
    { pos: new THREE.Vector3(1.6, 0.5, 0.4), delay: 0.5 },
    { pos: new THREE.Vector3(-1.2, -0.5, 0.3), delay: 1 },
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

    // Rotate Google Ads triangle
    if (triangleRef.current) {
      triangleRef.current.rotation.y = t * 0.3
    }

    // Animate bars
    if (barsRef.current) {
      barsRef.current.children.forEach((bar, i) => {
        const scale = 1 + Math.sin(t * 2 + i * 0.5) * 0.08
        bar.scale.y = scale
      })
    }

    // Animate click indicators
    if (clicksRef.current) {
      clicksRef.current.children.forEach((click, i) => {
        const progress = ((t + clicks[i].delay) % 2) / 2
        const scale = Math.sin(progress * Math.PI) * 0.5 + 0.5
        click.scale.setScalar(scale)
        const mat = (click as THREE.Mesh).material as THREE.MeshStandardMaterial
        if (mat) mat.opacity = 1 - progress * 0.7
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main dashboard panel */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
        <group>
          {/* Dashboard frame */}
          <RoundedBox args={[4, 3, 0.12]} radius={0.08} position={[0, 0, 0]}>
            <meshStandardMaterial color="#0d1117" metalness={0.6} roughness={0.4} />
          </RoundedBox>

          {/* Header bar */}
          <RoundedBox args={[4, 0.3, 0.14]} radius={0.04} position={[0, 1.35, 0.02]}>
            <meshStandardMaterial color="#161b22" metalness={0.4} roughness={0.6} />
          </RoundedBox>

          {/* Google Ads icon (triangle) */}
          <group ref={triangleRef} position={[-1.6, 1.35, 0.1]}>
            <mesh rotation={[0, 0, -Math.PI / 6]}>
              <coneGeometry args={[0.1, 0.18, 3]} />
              <meshStandardMaterial
                color="#FBBC05"
                emissive="#FBBC05"
                emissiveIntensity={0.5}
                metalness={0.5}
                roughness={0.3}
              />
            </mesh>
          </group>

          {/* Title placeholder */}
          <mesh position={[-0.8, 1.35, 0.08]}>
            <boxGeometry args={[0.8, 0.1, 0.02]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>

          {/* Live indicator */}
          <mesh position={[1.7, 1.35, 0.08]}>
            <sphereGeometry args={[0.05, 12, 12]} />
            <meshStandardMaterial color="#34A853" emissive="#34A853" emissiveIntensity={1} />
          </mesh>

          {/* Performance chart */}
          <group ref={barsRef} position={[-0.8, -0.2, 0.08]}>
            {metrics.map((metric, i) => (
              <RoundedBox
                key={i}
                args={[0.35, metric.height * 1.5, 0.06]}
                radius={0.02}
                position={[i * 0.45, metric.height * 0.75 - 0.5, 0]}
              >
                <meshStandardMaterial
                  color={metric.color}
                  emissive={metric.color}
                  emissiveIntensity={0.3}
                  metalness={0.4}
                  roughness={0.5}
                />
              </RoundedBox>
            ))}
          </group>

          {/* Stats panel */}
          <group position={[1.2, -0.3, 0.08]}>
            <RoundedBox args={[1.4, 1.6, 0.04]} radius={0.04}>
              <meshStandardMaterial color="#1a1f26" metalness={0.3} roughness={0.7} />
            </RoundedBox>

            {/* Stat rows */}
            {[
              { y: 0.5, color: '#4285F4', width: 0.9 },
              { y: 0.2, color: '#34A853', width: 0.7 },
              { y: -0.1, color: '#FBBC05', width: 0.85 },
              { y: -0.4, color: '#EA4335', width: 0.6 },
            ].map((stat, i) => (
              <group key={i} position={[0, stat.y, 0.04]}>
                <mesh position={[-0.5, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial color={stat.color} emissive={stat.color} emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[0.1, 0, 0]}>
                  <boxGeometry args={[stat.width, 0.06, 0.02]} />
                  <meshStandardMaterial color="#3a4555" />
                </mesh>
              </group>
            ))}
          </group>
        </group>
      </Float>

      {/* Floating click indicators */}
      <group ref={clicksRef}>
        {clicks.map((click, i) => (
          <Float key={i} speed={1.5 + i * 0.2} floatIntensity={0.3}>
            <mesh position={click.pos}>
              <ringGeometry args={[0.08, 0.12, 16]} />
              <meshStandardMaterial
                color={['#4285F4', '#34A853', '#FBBC05'][i]}
                emissive={['#4285F4', '#34A853', '#FBBC05'][i]}
                emissiveIntensity={0.8}
                transparent
                opacity={0.8}
                side={THREE.DoubleSide}
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Conversion badges */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[2.2, 0.8, 0.3]}>
          <mesh>
            <sphereGeometry args={[0.12, 12, 12]} />
            <meshStandardMaterial color="#34A853" emissive="#34A853" emissiveIntensity={0.5} />
          </mesh>
          {/* Checkmark */}
          <mesh position={[-0.03, 0, 0.08]} rotation={[0, 0, -0.4]}>
            <boxGeometry args={[0.04, 0.02, 0.01]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.03, 0.02, 0.08]} rotation={[0, 0, 0.8]}>
            <boxGeometry args={[0.07, 0.02, 0.01]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </Float>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#FBBC05" transparent opacity={0.4} sizeAttenuation />
      </points>

      {/* Background glow */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#FBBC05" emissive="#FBBC05" emissiveIntensity={0.03} transparent opacity={0.08} />
      </mesh>
    </group>
  )
}
