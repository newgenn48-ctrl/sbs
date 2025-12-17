'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// Virtual Assistant 3D - Phone/Voice assistant visualization
export default function VirtualAssistant3D() {
  const groupRef = useRef<THREE.Group>(null)
  const waveRef = useRef<THREE.Group>(null)
  const ringsRef = useRef<THREE.Group>(null)
  const calendarRef = useRef<THREE.Group>(null)

  // Sound wave bars
  const waveBars = useMemo(() => {
    return Array.from({ length: 20 }).map((_, i) => ({
      x: -2 + i * 0.22,
      baseHeight: 0.1 + Math.random() * 0.2,
      speed: 2 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
    }))
  }, [])

  // Floating icons around assistant
  const floatingIcons = useMemo(() => {
    const items: { position: THREE.Vector3; type: 'phone' | 'calendar' | 'message' | 'clock'; color: string }[] = []
    const types: ('phone' | 'calendar' | 'message' | 'clock')[] = ['phone', 'calendar', 'message', 'clock']

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = 3 + Math.random() * 0.5
      items.push({
        position: new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 3,
          Math.sin(angle) * radius - 1
        ),
        type: types[i % 4],
        color: ['#00D9FF', '#A855F7', '#00FF88', '#FF6B35'][i % 4],
      })
    }
    return items
  }, [])

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(120 * 3)
    for (let i = 0; i < 120; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.1
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.1
    }

    // Animate sound waves
    if (waveRef.current) {
      waveRef.current.children.forEach((bar, i) => {
        const data = waveBars[i]
        const height = data.baseHeight + Math.abs(Math.sin(t * data.speed + data.phase)) * 0.6
        bar.scale.y = height / 0.3
        bar.position.y = height / 2 - 0.15
      })
    }

    // Animate rings
    if (ringsRef.current) {
      ringsRef.current.children.forEach((ring, i) => {
        ring.rotation.z = t * (0.3 + i * 0.1) * (i % 2 === 0 ? 1 : -1)
        const scale = 1 + Math.sin(t * 2 + i * 0.5) * 0.05
        ring.scale.setScalar(scale)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central assistant orb */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.4}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.6}
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Core */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.3}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Orbital rings */}
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.8, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <torusGeometry args={[2.2, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.5}
            transparent
            opacity={0.5}
          />
        </mesh>
        <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 64]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={0.5}
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>

      {/* Sound wave visualization */}
      <group ref={waveRef} position={[0, -2.2, 0.5]}>
        {waveBars.map((bar, i) => (
          <RoundedBox
            key={i}
            args={[0.12, 0.3, 0.05]}
            radius={0.02}
            position={[bar.x, 0, 0]}
          >
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </RoundedBox>
        ))}
      </group>

      {/* Voice indicator */}
      <group position={[0, -1.8, 0]}>
        <mesh>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={1}
          />
        </mesh>
      </group>

      {/* Floating feature icons */}
      {floatingIcons.map((item, i) => (
        <group key={i} position={item.position}>
          <RoundedBox args={[0.5, 0.5, 0.1]} radius={0.08}>
            <meshStandardMaterial
              color={item.color}
              emissive={item.color}
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </RoundedBox>
          {/* Icon indicator */}
          <mesh position={[0, 0, 0.08]}>
            {item.type === 'phone' && (
              <group>
                <boxGeometry args={[0.15, 0.25, 0.02]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
              </group>
            )}
            {item.type === 'calendar' && (
              <group>
                <boxGeometry args={[0.2, 0.2, 0.02]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
              </group>
            )}
            {item.type === 'message' && (
              <group>
                <circleGeometry args={[0.1, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
              </group>
            )}
            {item.type === 'clock' && (
              <group>
                <ringGeometry args={[0.05, 0.1, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.9} />
              </group>
            )}
          </mesh>
        </group>
      ))}

      {/* Connection lines from orb to icons */}
      {floatingIcons.slice(0, 4).map((item, i) => {
        const start = new THREE.Vector3(0, 0, 0)
        const end = item.position
        const mid = new THREE.Vector3().lerpVectors(start, end, 0.5)
        const direction = new THREE.Vector3().subVectors(end, start)
        const length = direction.length() - 1.5

        return (
          <mesh
            key={i}
            position={mid}
            rotation={[
              Math.atan2(Math.sqrt(direction.x ** 2 + direction.z ** 2), direction.y) - Math.PI / 2,
              0,
              Math.atan2(direction.z, direction.x)
            ]}
          >
            <boxGeometry args={[length, 0.02, 0.02]} />
            <meshStandardMaterial
              color={item.color}
              transparent
              opacity={0.3}
            />
          </mesh>
        )
      })}

      {/* Calendar preview panel */}
      <group position={[3, 0.5, 0]}>
        <RoundedBox args={[1.8, 1.4, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#1a1f2e" />
        </RoundedBox>
        {/* Calendar header */}
        <mesh position={[0, 0.5, 0.08]}>
          <boxGeometry args={[1.5, 0.2, 0.02]} />
          <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.3} />
        </mesh>
        {/* Calendar grid */}
        {Array.from({ length: 12 }).map((_, i) => (
          <mesh key={i} position={[-0.5 + (i % 4) * 0.35, 0.15 - Math.floor(i / 4) * 0.3, 0.08]}>
            <boxGeometry args={[0.25, 0.2, 0.02]} />
            <meshStandardMaterial
              color={i === 5 ? '#00FF88' : '#2d3748'}
              emissive={i === 5 ? '#00FF88' : '#000000'}
              emissiveIntensity={i === 5 ? 0.3 : 0}
            />
          </mesh>
        ))}
      </group>

      {/* Phone call status */}
      <group position={[-3, 0.5, 0]}>
        <RoundedBox args={[1.6, 1, 0.1]} radius={0.1}>
          <meshStandardMaterial color="#1a1f2e" />
        </RoundedBox>
        {/* Status indicator */}
        <mesh position={[-0.5, 0.2, 0.08]}>
          <circleGeometry args={[0.1, 16]} />
          <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={1} />
        </mesh>
        {/* Call text placeholder */}
        <mesh position={[0.1, 0.2, 0.08]}>
          <boxGeometry args={[0.8, 0.12, 0.02]} />
          <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.3} />
        </mesh>
        {/* Duration */}
        <mesh position={[0, -0.15, 0.08]}>
          <boxGeometry args={[0.6, 0.1, 0.02]} />
          <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
        </mesh>
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
          color="#A855F7"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Background glow */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[12, 10]} />
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
