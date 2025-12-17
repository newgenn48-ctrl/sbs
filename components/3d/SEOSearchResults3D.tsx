'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'

// SEO Search Results 3D - Clean professional visualization
export default function SEOSearchResults3D() {
  const groupRef = useRef<THREE.Group>(null)
  const searchIconRef = useRef<THREE.Group>(null)
  const resultsRef = useRef<THREE.Group>(null)

  // Search results data
  const results = useMemo(() => [
    { position: 1, isOurs: true, y: 0.5 },
    { position: 2, isOurs: false, y: 0 },
    { position: 3, isOurs: false, y: -0.5 },
  ], [])

  // Ranking bars
  const rankingBars = useMemo(() => [
    { height: 0.3, color: '#34A853' },
    { height: 0.5, color: '#34A853' },
    { height: 0.7, color: '#34A853' },
    { height: 0.9, color: '#00FF88' },
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

    // Animate search icon
    if (searchIconRef.current) {
      searchIconRef.current.rotation.z = Math.sin(t * 0.5) * 0.1
    }

    // Animate results highlighting
    if (resultsRef.current) {
      resultsRef.current.children.forEach((result, i) => {
        if (i === 0) {
          const scale = 1 + Math.sin(t * 2) * 0.02
          result.scale.setScalar(scale)
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main browser panel */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
        <group>
          {/* Browser frame */}
          <RoundedBox args={[4.5, 3.5, 0.12]} radius={0.08} position={[0, 0, 0]}>
            <meshStandardMaterial color="#0d1117" metalness={0.6} roughness={0.4} />
          </RoundedBox>

          {/* Screen */}
          <RoundedBox args={[4.2, 3.2, 0.08]} radius={0.06} position={[0, 0, 0.04]}>
            <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.9} />
          </RoundedBox>

          {/* Browser header */}
          <RoundedBox args={[4.2, 0.3, 0.1]} radius={0.04} position={[0, 1.45, 0.06]}>
            <meshStandardMaterial color="#f1f3f4" metalness={0.2} roughness={0.8} />
          </RoundedBox>

          {/* Traffic lights */}
          <group position={[-1.8, 1.45, 0.12]}>
            {[
              { x: 0, color: '#FF5F56' },
              { x: 0.12, color: '#FFBD2E' },
              { x: 0.24, color: '#27CA3F' },
            ].map((dot, i) => (
              <mesh key={i} position={[dot.x, 0, 0]}>
                <sphereGeometry args={[0.04, 8, 8]} />
                <meshStandardMaterial color={dot.color} emissive={dot.color} emissiveIntensity={0.3} />
              </mesh>
            ))}
          </group>

          {/* URL bar */}
          <RoundedBox args={[2, 0.18, 0.04]} radius={0.05} position={[0, 1.45, 0.1]}>
            <meshStandardMaterial color="#ffffff" />
          </RoundedBox>

          {/* Google logo representation */}
          <group position={[0, 1.05, 0.1]}>
            {[
              { x: -0.15, color: '#4285F4' },
              { x: -0.05, color: '#EA4335' },
              { x: 0.05, color: '#FBBC05' },
              { x: 0.15, color: '#34A853' },
            ].map((letter, i) => (
              <mesh key={i} position={[letter.x, 0, 0]}>
                <boxGeometry args={[0.08, 0.12, 0.02]} />
                <meshStandardMaterial color={letter.color} emissive={letter.color} emissiveIntensity={0.3} />
              </mesh>
            ))}
          </group>

          {/* Search bar */}
          <RoundedBox args={[3, 0.3, 0.04]} radius={0.1} position={[0, 0.65, 0.1]}>
            <meshStandardMaterial color="#f8f9fa" metalness={0.1} roughness={0.9} />
          </RoundedBox>

          {/* Search icon (magnifying glass) */}
          <group ref={searchIconRef} position={[-1.25, 0.65, 0.14]}>
            <mesh>
              <torusGeometry args={[0.06, 0.015, 8, 16]} />
              <meshStandardMaterial color="#9aa0a6" />
            </mesh>
            <mesh position={[0.05, -0.05, 0]} rotation={[0, 0, -0.8]}>
              <cylinderGeometry args={[0.015, 0.015, 0.05, 6]} />
              <meshStandardMaterial color="#9aa0a6" />
            </mesh>
          </group>

          {/* Search results */}
          <group ref={resultsRef} position={[0, -0.15, 0.1]}>
            {results.map((result, i) => (
              <group key={i} position={[0, result.y * 0.7, 0]}>
                {/* Result background */}
                <RoundedBox args={[3.6, 0.5, 0.03]} radius={0.04}>
                  <meshStandardMaterial
                    color={result.isOurs ? '#e8f5e9' : '#ffffff'}
                    metalness={0.05}
                    roughness={0.95}
                  />
                </RoundedBox>

                {/* Position number */}
                <group position={[-1.55, 0, 0.03]}>
                  <mesh>
                    <circleGeometry args={[0.12, 12]} />
                    <meshStandardMaterial
                      color={result.isOurs ? '#00FF88' : '#e0e0e0'}
                      emissive={result.isOurs ? '#00FF88' : '#000000'}
                      emissiveIntensity={result.isOurs ? 0.5 : 0}
                    />
                  </mesh>
                </group>

                {/* Favicon placeholder */}
                <mesh position={[-1.25, 0, 0.03]}>
                  <boxGeometry args={[0.12, 0.12, 0.02]} />
                  <meshStandardMaterial
                    color={result.isOurs ? '#00D9FF' : '#9aa0a6'}
                    emissive={result.isOurs ? '#00D9FF' : '#000000'}
                    emissiveIntensity={result.isOurs ? 0.3 : 0}
                  />
                </mesh>

                {/* Title line */}
                <mesh position={[-0.2, 0.08, 0.03]}>
                  <boxGeometry args={[1.8, 0.08, 0.02]} />
                  <meshStandardMaterial
                    color={result.isOurs ? '#00D9FF' : '#1a0dab'}
                    emissive={result.isOurs ? '#00D9FF' : '#1a0dab'}
                    emissiveIntensity={result.isOurs ? 0.3 : 0.1}
                  />
                </mesh>

                {/* URL line */}
                <mesh position={[-0.4, -0.08, 0.03]}>
                  <boxGeometry args={[1.2, 0.05, 0.02]} />
                  <meshStandardMaterial
                    color={result.isOurs ? '#00FF88' : '#006621'}
                    emissive={result.isOurs ? '#00FF88' : '#000000'}
                    emissiveIntensity={result.isOurs ? 0.3 : 0}
                  />
                </mesh>

                {/* Star badge for #1 */}
                {result.isOurs && (
                  <mesh position={[1.55, 0, 0.04]}>
                    <circleGeometry args={[0.1, 5]} />
                    <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.6} />
                  </mesh>
                )}
              </group>
            ))}
          </group>
        </group>
      </Float>

      {/* Ranking growth indicator */}
      <Float speed={1.5} floatIntensity={0.2}>
        <group position={[2.8, -0.3, 0.3]}>
          {rankingBars.map((bar, i) => (
            <RoundedBox
              key={i}
              args={[0.2, bar.height, 0.06]}
              radius={0.02}
              position={[i * 0.28 - 0.4, bar.height / 2 - 0.4, 0]}
            >
              <meshStandardMaterial
                color={bar.color}
                emissive={bar.color}
                emissiveIntensity={0.3}
                metalness={0.3}
                roughness={0.6}
              />
            </RoundedBox>
          ))}
          {/* Arrow up */}
          <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, 0]}>
            <coneGeometry args={[0.08, 0.15, 3]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
          </mesh>
        </group>
      </Float>

      {/* Floating search magnifier */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[-2.6, 0.6, 0.4]}>
          <mesh>
            <torusGeometry args={[0.2, 0.04, 8, 24]} />
            <meshStandardMaterial color="#4285F4" emissive="#4285F4" emissiveIntensity={0.4} />
          </mesh>
          <mesh position={[0.15, -0.15, 0]} rotation={[0, 0, -0.8]}>
            <cylinderGeometry args={[0.04, 0.04, 0.15, 8]} />
            <meshStandardMaterial color="#4285F4" emissive="#4285F4" emissiveIntensity={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Crown for #1 position */}
      <Float speed={1.6} floatIntensity={0.3}>
        <group position={[2.5, 1.2, 0.3]}>
          {/* Crown base */}
          <mesh>
            <cylinderGeometry args={[0.15, 0.18, 0.08, 16]} />
            <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.4} />
          </mesh>
          {/* Crown points */}
          {[0, 1, 2].map((i) => (
            <mesh key={i} position={[Math.sin(i * 2.1) * 0.1, 0.1, Math.cos(i * 2.1) * 0.1]}>
              <coneGeometry args={[0.04, 0.12, 4]} />
              <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Keyword badges */}
      {[
        { pos: [-2.5, -0.8, 0.3], color: '#00D9FF' },
        { pos: [2.8, 0.5, 0.4], color: '#34A853' },
      ].map((badge, i) => (
        <Float key={i} speed={1.4 + i * 0.2} floatIntensity={0.2}>
          <group position={[badge.pos[0], badge.pos[1], badge.pos[2]]}>
            <RoundedBox args={[0.6, 0.22, 0.05]} radius={0.06}>
              <meshStandardMaterial
                color={badge.color}
                emissive={badge.color}
                emissiveIntensity={0.3}
                metalness={0.3}
                roughness={0.5}
              />
            </RoundedBox>
          </group>
        </Float>
      ))}

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#00FF88" transparent opacity={0.4} sizeAttenuation />
      </points>

      {/* Background glow */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.03} transparent opacity={0.08} />
      </mesh>
    </group>
  )
}
