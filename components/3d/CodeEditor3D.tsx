'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// Code Editor 3D - Development Overview visualization
export default function CodeEditor3D() {
  const groupRef = useRef<THREE.Group>(null)
  const codeBlocksRef = useRef<THREE.Group>(null)
  const cursorRef = useRef<THREE.Mesh>(null)
  const floatingRef = useRef<THREE.Group>(null)

  // Generate code lines
  const codeLines = useMemo(() => {
    const lines: { y: number; segments: { width: number; color: string; x: number }[] }[] = []
    const colors = ['#00D9FF', '#00FF88', '#A855F7', '#FF6B35', '#FFD700', '#E879F9', '#38BDF8']

    for (let i = 0; i < 14; i++) {
      const indent = Math.floor(Math.random() * 3) * 0.25
      const numSegments = 2 + Math.floor(Math.random() * 4)
      const segments: { width: number; color: string; x: number }[] = []
      let currentX = -1.8 + indent

      for (let j = 0; j < numSegments; j++) {
        const width = 0.2 + Math.random() * 0.8
        segments.push({
          width,
          color: colors[Math.floor(Math.random() * colors.length)],
          x: currentX + width / 2,
        })
        currentX += width + 0.1
      }

      lines.push({
        y: 1.8 - i * 0.28,
        segments,
      })
    }

    return lines
  }, [])

  // Floating code brackets/symbols as 3D shapes
  const floatingElements = useMemo(() => {
    const items: { position: THREE.Vector3; type: 'bracket' | 'dot' | 'arrow'; color: string; scale: number }[] = []

    for (let i = 0; i < 20; i++) {
      items.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4 - 2
        ),
        type: ['bracket', 'dot', 'arrow'][Math.floor(Math.random() * 3)] as 'bracket' | 'dot' | 'arrow',
        color: ['#00D9FF', '#00FF88', '#A855F7', '#FF6B35'][Math.floor(Math.random() * 4)],
        scale: 0.5 + Math.random() * 0.5,
      })
    }
    return items
  }, [])

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(150 * 3)
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.1
    }

    // Cursor blink
    if (cursorRef.current) {
      cursorRef.current.visible = Math.floor(t * 2) % 2 === 0
    }

    // Floating elements animation
    if (floatingRef.current) {
      floatingRef.current.children.forEach((child, i) => {
        child.position.y = floatingElements[i].position.y + Math.sin(t * 0.8 + i * 0.5) * 0.2
        child.rotation.z = Math.sin(t * 0.5 + i) * 0.1
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main editor window */}
      <RoundedBox args={[5, 4.5, 0.15]} radius={0.1} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0d1117" metalness={0.7} roughness={0.3} />
      </RoundedBox>

      {/* Editor header bar */}
      <RoundedBox args={[5, 0.4, 0.18]} radius={0.05} position={[0, 2.25, 0.05]}>
        <meshStandardMaterial color="#161b22" metalness={0.5} roughness={0.5} />
      </RoundedBox>

      {/* Window controls (traffic lights) */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[-2.1 + i * 0.22, 2.25, 0.15]}>
          <sphereGeometry args={[0.055, 16, 16]} />
          <meshStandardMaterial
            color={['#FF5F56', '#FFBD2E', '#27CA40'][i]}
            emissive={['#FF5F56', '#FFBD2E', '#27CA40'][i]}
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}

      {/* Tab bar */}
      <group position={[0, 2.25, 0.12]}>
        <RoundedBox args={[1.2, 0.25, 0.02]} radius={0.02} position={[-0.5, 0, 0]}>
          <meshStandardMaterial color="#1f2937" />
        </RoundedBox>
        <RoundedBox args={[1, 0.25, 0.02]} radius={0.02} position={[0.7, 0, 0]}>
          <meshStandardMaterial color="#0d1117" />
        </RoundedBox>
        {/* Active tab indicator */}
        <mesh position={[-0.5, -0.12, 0.02]}>
          <boxGeometry args={[1.2, 0.02, 0.01]} />
          <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={1} />
        </mesh>
      </group>

      {/* Line numbers column */}
      <mesh position={[-2.15, -0.1, 0.08]}>
        <boxGeometry args={[0.35, 3.8, 0.02]} />
        <meshStandardMaterial color="#161b22" />
      </mesh>

      {/* Code lines */}
      <group ref={codeBlocksRef} position={[0, -0.1, 0.1]}>
        {codeLines.map((line, lineIndex) => (
          <group key={lineIndex} position={[0, line.y, 0]}>
            {/* Line number */}
            <mesh position={[-2.15, 0, 0]}>
              <boxGeometry args={[0.15, 0.08, 0.02]} />
              <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
            </mesh>

            {/* Code segments */}
            {line.segments.map((segment, segIndex) => (
              <RoundedBox
                key={segIndex}
                args={[segment.width, 0.12, 0.03]}
                radius={0.01}
                position={[segment.x, 0, 0]}
              >
                <meshStandardMaterial
                  color={segment.color}
                  emissive={segment.color}
                  emissiveIntensity={0.6}
                  transparent
                  opacity={0.9}
                />
              </RoundedBox>
            ))}
          </group>
        ))}

        {/* Blinking cursor */}
        <mesh ref={cursorRef} position={[0.5, codeLines[5]?.y || 0, 0.02]}>
          <boxGeometry args={[0.03, 0.16, 0.02]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={2}
          />
        </mesh>
      </group>

      {/* Minimap on the right */}
      <group position={[2.1, -0.1, 0.1]}>
        <mesh>
          <boxGeometry args={[0.4, 3.5, 0.02]} />
          <meshStandardMaterial color="#161b22" transparent opacity={0.8} />
        </mesh>
        {/* Minimap lines */}
        {Array.from({ length: 25 }).map((_, i) => (
          <mesh key={i} position={[0, 1.5 - i * 0.12, 0.02]}>
            <boxGeometry args={[0.2 + Math.random() * 0.15, 0.04, 0.01]} />
            <meshStandardMaterial
              color={['#00D9FF', '#00FF88', '#A855F7', '#4a5568'][Math.floor(Math.random() * 4)]}
              transparent
              opacity={0.4}
            />
          </mesh>
        ))}
        {/* Viewport indicator */}
        <mesh position={[0, 0.8, 0.03]}>
          <boxGeometry args={[0.38, 0.8, 0.01]} />
          <meshStandardMaterial color="#00D9FF" transparent opacity={0.15} />
        </mesh>
      </group>

      {/* Floating code symbols */}
      <group ref={floatingRef}>
        {floatingElements.map((item, i) => (
          <group key={i} position={item.position} scale={item.scale}>
            {item.type === 'bracket' && (
              <group>
                {/* Left bracket < */}
                <mesh position={[-0.08, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                  <boxGeometry args={[0.15, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh position={[-0.08, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                  <boxGeometry args={[0.15, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                {/* Right bracket > */}
                <mesh position={[0.08, 0, 0]} rotation={[0, 0, -Math.PI / 4]}>
                  <boxGeometry args={[0.15, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh position={[0.08, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
                  <boxGeometry args={[0.15, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
              </group>
            )}
            {item.type === 'dot' && (
              <mesh>
                <sphereGeometry args={[0.06, 12, 12]} />
                <meshStandardMaterial
                  color={item.color}
                  emissive={item.color}
                  emissiveIntensity={0.8}
                  transparent
                  opacity={0.7}
                />
              </mesh>
            )}
            {item.type === 'arrow' && (
              <group rotation={[0, 0, Math.PI / 2]}>
                <mesh>
                  <boxGeometry args={[0.2, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh position={[0.08, 0.05, 0]} rotation={[0, 0, Math.PI / 4]}>
                  <boxGeometry args={[0.1, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
                <mesh position={[0.08, -0.05, 0]} rotation={[0, 0, -Math.PI / 4]}>
                  <boxGeometry args={[0.1, 0.03, 0.03]} />
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={0.5}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
              </group>
            )}
          </group>
        ))}
      </group>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#00D9FF"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[7, 6]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.08}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
