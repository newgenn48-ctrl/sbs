'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// Website Builder 3D - Realistic browser with website preview
export default function WebsiteBuilder3D() {
  const groupRef = useRef<THREE.Group>(null)
  const floatingRef = useRef<THREE.Group>(null)
  const cursorRef = useRef<THREE.Mesh>(null)

  // Floating design elements (color swatches, components)
  const floatingElements = useMemo(() => {
    return [
      // Left side - color palette & tools
      { position: new THREE.Vector3(-3.8, 1.8, 0.3), type: 'colorSwatch', color: '#00D9FF' },
      { position: new THREE.Vector3(-3.8, 1.3, 0.2), type: 'colorSwatch', color: '#00FF88' },
      { position: new THREE.Vector3(-3.8, 0.8, 0.4), type: 'colorSwatch', color: '#A855F7' },
      { position: new THREE.Vector3(-3.8, 0.3, 0.3), type: 'colorSwatch', color: '#FF6B35' },
      { position: new THREE.Vector3(-3.5, -0.5, 0.2), type: 'component', color: '#00D9FF' },
      { position: new THREE.Vector3(-3.5, -1.2, 0.3), type: 'component', color: '#A855F7' },
      // Right side - floating components
      { position: new THREE.Vector3(3.8, 1.5, 0.3), type: 'imageCard', color: '#00FF88' },
      { position: new THREE.Vector3(3.5, 0.4, 0.2), type: 'textBlock', color: '#00D9FF' },
      { position: new THREE.Vector3(3.8, -0.6, 0.4), type: 'button', color: '#A855F7' },
      { position: new THREE.Vector3(3.5, -1.4, 0.3), type: 'icon', color: '#FF6B35' },
    ]
  }, [])

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.06
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.08
    }

    // Floating elements animation
    if (floatingRef.current) {
      floatingRef.current.children.forEach((child, i) => {
        child.position.y = floatingElements[i].position.y + Math.sin(t * 1 + i * 0.7) * 0.1
        child.rotation.y = Math.sin(t * 0.3 + i) * 0.1
      })
    }

    // Animated cursor
    if (cursorRef.current) {
      cursorRef.current.position.x = Math.sin(t * 0.8) * 0.5
      cursorRef.current.position.y = Math.cos(t * 0.6) * 0.3 - 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* ========== MAIN BROWSER WINDOW ========== */}
      <RoundedBox args={[5.5, 4.2, 0.12]} radius={0.12} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a2e" metalness={0.6} roughness={0.4} />
      </RoundedBox>

      {/* Browser chrome / header */}
      <RoundedBox args={[5.5, 0.5, 0.14]} radius={0.08} position={[0, 2.1, 0.02]}>
        <meshStandardMaterial color="#0f0f1a" metalness={0.5} roughness={0.5} />
      </RoundedBox>

      {/* Traffic light buttons */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[-2.4 + i * 0.22, 2.1, 0.1]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial
            color={['#FF5F56', '#FFBD2E', '#27CA40'][i]}
            emissive={['#FF5F56', '#FFBD2E', '#27CA40'][i]}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}

      {/* URL bar */}
      <RoundedBox args={[3.2, 0.28, 0.03]} radius={0.05} position={[0.2, 2.1, 0.08]}>
        <meshStandardMaterial color="#2a2a3e" metalness={0.3} roughness={0.7} />
      </RoundedBox>

      {/* Lock icon in URL bar */}
      <mesh position={[-1.3, 2.1, 0.12]}>
        <boxGeometry args={[0.08, 0.1, 0.02]} />
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.8} />
      </mesh>

      {/* URL text placeholder */}
      <mesh position={[0.3, 2.1, 0.12]}>
        <boxGeometry args={[1.8, 0.1, 0.02]} />
        <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
      </mesh>

      {/* ========== WEBSITE CONTENT ========== */}
      <group position={[0, -0.2, 0.08]}>

        {/* Navigation Bar */}
        <RoundedBox args={[5.2, 0.35, 0.04]} radius={0.02} position={[0, 1.65, 0]}>
          <meshStandardMaterial color="#0d1117" metalness={0.5} roughness={0.5} />
        </RoundedBox>

        {/* Logo in nav */}
        <group position={[-2.2, 1.65, 0.04]}>
          <mesh>
            <boxGeometry args={[0.25, 0.18, 0.02]} />
            <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.6} />
          </mesh>
        </group>

        {/* Nav menu items */}
        {[-0.8, -0.2, 0.4, 1].map((x, i) => (
          <mesh key={i} position={[x, 1.65, 0.04]}>
            <boxGeometry args={[0.4, 0.08, 0.02]} />
            <meshStandardMaterial color="#6b7280" transparent opacity={0.7} />
          </mesh>
        ))}

        {/* CTA button in nav */}
        <RoundedBox args={[0.5, 0.2, 0.03]} radius={0.03} position={[2, 1.65, 0.04]}>
          <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.4} />
        </RoundedBox>

        {/* ========== HERO SECTION ========== */}
        <RoundedBox args={[5.2, 1.6, 0.03]} radius={0.02} position={[0, 0.65, 0]}>
          <meshStandardMaterial color="#0a0a0f" />
        </RoundedBox>

        {/* Hero gradient overlay */}
        <mesh position={[0, 0.65, 0.02]}>
          <planeGeometry args={[5.2, 1.6]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.15}
            transparent
            opacity={0.3}
          />
        </mesh>

        {/* Hero headline */}
        <group position={[-1.2, 1, 0.04]}>
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1.8, 0.15, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0, -0.22, 0]}>
            <boxGeometry args={[2.2, 0.15, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Hero subtext */}
        <mesh position={[-1, 0.55, 0.04]}>
          <boxGeometry args={[1.6, 0.08, 0.02]} />
          <meshStandardMaterial color="#9ca3af" transparent opacity={0.7} />
        </mesh>

        {/* Hero CTA buttons */}
        <group position={[-1.5, 0.2, 0.04]}>
          <RoundedBox args={[0.7, 0.22, 0.03]} radius={0.03} position={[0, 0, 0]}>
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
          </RoundedBox>
          <RoundedBox args={[0.6, 0.22, 0.03]} radius={0.03} position={[0.8, 0, 0]}>
            <meshStandardMaterial color="#2a2a3e" />
          </RoundedBox>
        </group>

        {/* Hero image/graphic placeholder */}
        <group position={[1.5, 0.65, 0.04]}>
          <RoundedBox args={[1.8, 1.2, 0.04]} radius={0.05}>
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.2}
              transparent
              opacity={0.3}
            />
          </RoundedBox>
          {/* Decorative shapes in hero image */}
          <mesh position={[0, 0.2, 0.03]}>
            <circleGeometry args={[0.3, 32]} />
            <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.4} transparent opacity={0.6} />
          </mesh>
          <mesh position={[-0.4, -0.2, 0.03]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.25, 0.25, 0.02]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.4} transparent opacity={0.6} />
          </mesh>
        </group>

        {/* ========== FEATURES SECTION ========== */}
        <group position={[0, -0.55, 0]}>
          {/* Section title */}
          <mesh position={[0, 0.35, 0.04]}>
            <boxGeometry args={[1.2, 0.1, 0.02]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>

          {/* Feature cards */}
          {[-1.7, 0, 1.7].map((x, i) => (
            <group key={i} position={[x, -0.15, 0.04]}>
              <RoundedBox args={[1.5, 0.9, 0.04]} radius={0.04}>
                <meshStandardMaterial color="#12121a" metalness={0.3} roughness={0.7} />
              </RoundedBox>

              {/* Card icon */}
              <mesh position={[0, 0.22, 0.04]}>
                <circleGeometry args={[0.12, 24]} />
                <meshStandardMaterial
                  color={['#00D9FF', '#00FF88', '#A855F7'][i]}
                  emissive={['#00D9FF', '#00FF88', '#A855F7'][i]}
                  emissiveIntensity={0.6}
                />
              </mesh>

              {/* Card title */}
              <mesh position={[0, -0.02, 0.04]}>
                <boxGeometry args={[0.8, 0.08, 0.02]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
              </mesh>

              {/* Card text */}
              <mesh position={[0, -0.18, 0.04]}>
                <boxGeometry args={[1.1, 0.05, 0.02]} />
                <meshStandardMaterial color="#6b7280" transparent opacity={0.6} />
              </mesh>
              <mesh position={[0, -0.28, 0.04]}>
                <boxGeometry args={[0.9, 0.05, 0.02]} />
                <meshStandardMaterial color="#6b7280" transparent opacity={0.6} />
              </mesh>
            </group>
          ))}
        </group>

        {/* ========== FOOTER ========== */}
        <RoundedBox args={[5.2, 0.3, 0.03]} radius={0.02} position={[0, -1.55, 0]}>
          <meshStandardMaterial color="#0a0a0f" />
        </RoundedBox>

        {/* Footer content */}
        <mesh position={[-1.8, -1.55, 0.03]}>
          <boxGeometry args={[0.6, 0.08, 0.02]} />
          <meshStandardMaterial color="#4a5568" transparent opacity={0.5} />
        </mesh>
        {[0, 0.5, 1].map((x, i) => (
          <mesh key={i} position={[x + 0.8, -1.55, 0.03]}>
            <boxGeometry args={[0.35, 0.06, 0.02]} />
            <meshStandardMaterial color="#6b7280" transparent opacity={0.4} />
          </mesh>
        ))}
      </group>

      {/* ========== ANIMATED CURSOR ========== */}
      <group ref={cursorRef} position={[0, -0.5, 0.2]}>
        {/* Cursor pointer */}
        <mesh rotation={[0, 0, -0.3]}>
          <coneGeometry args={[0.08, 0.2, 3]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        {/* Cursor click ring */}
        <mesh position={[0.05, -0.15, 0]}>
          <ringGeometry args={[0.06, 0.08, 16]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
      </group>

      {/* ========== FLOATING DESIGN ELEMENTS ========== */}
      <group ref={floatingRef}>
        {floatingElements.map((item, i) => (
          <group key={i} position={item.position}>
            {item.type === 'colorSwatch' && (
              <group>
                <RoundedBox args={[0.4, 0.4, 0.08]} radius={0.05}>
                  <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.5} />
                </RoundedBox>
                <mesh position={[0, 0, 0.05]}>
                  <circleGeometry args={[0.12, 24]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.6}
                  />
                </mesh>
              </group>
            )}
            {item.type === 'component' && (
              <RoundedBox args={[0.8, 0.5, 0.06]} radius={0.04}>
                <meshStandardMaterial
                  color={item.color}
                  emissive={item.color}
                  emissiveIntensity={0.2}
                  transparent
                  opacity={0.4}
                />
              </RoundedBox>
            )}
            {item.type === 'imageCard' && (
              <group>
                <RoundedBox args={[0.7, 0.9, 0.06]} radius={0.04}>
                  <meshStandardMaterial color="#1a1a2e" />
                </RoundedBox>
                <mesh position={[0, 0.15, 0.04]}>
                  <planeGeometry args={[0.55, 0.45]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.5}
                  />
                </mesh>
                <mesh position={[0, -0.25, 0.04]}>
                  <boxGeometry args={[0.5, 0.06, 0.02]} />
                  <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
                </mesh>
              </group>
            )}
            {item.type === 'textBlock' && (
              <group>
                <RoundedBox args={[0.9, 0.5, 0.05]} radius={0.03}>
                  <meshStandardMaterial color="#1a1a2e" />
                </RoundedBox>
                {[0.12, 0, -0.12].map((y, j) => (
                  <mesh key={j} position={[0, y, 0.04]}>
                    <boxGeometry args={[0.7 - j * 0.1, 0.06, 0.02]} />
                    <meshStandardMaterial
                      color={item.color}
                      emissive={item.color}
                      emissiveIntensity={0.3}
                      transparent
                      opacity={0.5}
                    />
                  </mesh>
                ))}
              </group>
            )}
            {item.type === 'button' && (
              <RoundedBox args={[0.6, 0.25, 0.06]} radius={0.05}>
                <meshStandardMaterial
                  color={item.color}
                  emissive={item.color}
                  emissiveIntensity={0.5}
                />
              </RoundedBox>
            )}
            {item.type === 'icon' && (
              <mesh>
                <octahedronGeometry args={[0.15]} />
                <meshStandardMaterial
                  color={item.color}
                  emissive={item.color}
                  emissiveIntensity={0.6}
                />
              </mesh>
            )}
          </group>
        ))}
      </group>

      {/* ========== CONNECTION LINES ========== */}
      {/* Lines from floating elements to browser */}
      {[
        { start: [-3.3, 1.3, 0.2], end: [-2.5, 0.8, 0.1] },
        { start: [3.3, 0.4, 0.2], end: [2.5, 0.3, 0.1] },
      ].map((line, i) => {
        const midX = (line.start[0] + line.end[0]) / 2
        const midY = (line.start[1] + line.end[1]) / 2
        const length = Math.sqrt(
          Math.pow(line.end[0] - line.start[0], 2) + Math.pow(line.end[1] - line.start[1], 2)
        )
        const angle = Math.atan2(line.end[1] - line.start[1], line.end[0] - line.start[0])

        return (
          <mesh key={i} position={[midX, midY, 0.15]} rotation={[0, 0, angle]}>
            <boxGeometry args={[length, 0.015, 0.015]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.4}
              transparent
              opacity={0.4}
            />
          </mesh>
        )
      })}

      {/* ========== AMBIENT PARTICLES ========== */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#A855F7"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* ========== GLOW EFFECT ========== */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[7, 5.5]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.06}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
