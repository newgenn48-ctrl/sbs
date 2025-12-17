'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// App Dashboard 3D - Interactive dashboard with charts and modules
export default function AppDashboard3D() {
  const groupRef = useRef<THREE.Group>(null)
  const chartsRef = useRef<THREE.Group>(null)
  const modulesRef = useRef<THREE.Group>(null)

  // Dashboard modules and chart data
  const dashboardData = useMemo(() => {
    // Bar chart data
    const barChart = Array.from({ length: 7 }, () => 0.3 + Math.random() * 1.2)

    // Line chart points
    const lineChart: THREE.Vector3[] = []
    for (let i = 0; i < 10; i++) {
      lineChart.push(new THREE.Vector3(
        -0.8 + i * 0.18,
        Math.sin(i * 0.5) * 0.3 + Math.random() * 0.2,
        0
      ))
    }

    // Pie chart segments
    const pieSegments = [
      { angle: 0, size: Math.PI * 0.6, color: '#00D9FF' },
      { angle: Math.PI * 0.6, size: Math.PI * 0.4, color: '#00FF88' },
      { angle: Math.PI, size: Math.PI * 0.5, color: '#A855F7' },
      { angle: Math.PI * 1.5, size: Math.PI * 0.5, color: '#FF6B35' },
    ]

    return { barChart, lineChart, pieSegments }
  }, [])

  // Floating data cards
  const dataCards = useMemo(() => {
    return [
      { position: new THREE.Vector3(-3.2, 1.2, 0.5), size: [1.2, 0.8], color: '#00D9FF', value: '+24%' },
      { position: new THREE.Vector3(-3.2, 0, 0.3), size: [1.2, 0.8], color: '#00FF88', value: '1,234' },
      { position: new THREE.Vector3(-3.2, -1.2, 0.4), size: [1.2, 0.8], color: '#A855F7', value: '98.5%' },
      { position: new THREE.Vector3(3.2, 0.8, 0.4), size: [1.2, 1.5], color: '#FF6B35', value: 'LIVE' },
      { position: new THREE.Vector3(3.2, -0.8, 0.3), size: [1.2, 0.8], color: '#00D9FF', value: '847' },
    ]
  }, [])

  // Particles (optimized for performance)
  const particles = useMemo(() => {
    const count = 30
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
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
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.08
    }

    if (chartsRef.current) {
      chartsRef.current.children.forEach((child, i) => {
        if (child.type === 'Mesh') {
          const scale = 1 + Math.sin(t * 2 + i * 0.3) * 0.05
          child.scale.y = scale
        }
      })
    }

    if (modulesRef.current) {
      modulesRef.current.children.forEach((child, i) => {
        child.position.y = dataCards[i].position.y + Math.sin(t * 1.2 + i * 0.8) * 0.05
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main dashboard frame */}
      <RoundedBox args={[4.5, 3.5, 0.12]} radius={0.1} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0a0a0f"
          metalness={0.8}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Dashboard header */}
      <RoundedBox args={[4.5, 0.4, 0.15]} radius={0.05} position={[0, 1.75, 0.02]}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.5}
          roughness={0.5}
        />
      </RoundedBox>

      {/* Header title bar */}
      <mesh position={[-1.5, 1.75, 0.1]}>
        <planeGeometry args={[1, 0.12]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Header icons */}
      {[0.8, 1.2, 1.6].map((x, i) => (
        <mesh key={i} position={[x, 1.75, 0.1]}>
          <circleGeometry args={[0.08, 16]} />
          <meshStandardMaterial
            color={['#00FF88', '#A855F7', '#FF6B35'][i]}
            emissive={['#00FF88', '#A855F7', '#FF6B35'][i]}
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}

      {/* Sidebar */}
      <RoundedBox args={[0.6, 3, 0.1]} radius={0.03} position={[-1.9, -0.15, 0.05]}>
        <meshStandardMaterial
          color="#12121a"
          metalness={0.5}
          roughness={0.5}
        />
      </RoundedBox>

      {/* Sidebar menu items */}
      {[0.8, 0.3, -0.2, -0.7, -1.2].map((y, i) => (
        <mesh key={i} position={[-1.9, y, 0.12]}>
          <planeGeometry args={[0.35, 0.15]} />
          <meshStandardMaterial
            color={i === 0 ? '#00D9FF' : '#2a2a3e'}
            emissive={i === 0 ? '#00D9FF' : '#2a2a3e'}
            emissiveIntensity={i === 0 ? 0.5 : 0.1}
          />
        </mesh>
      ))}

      {/* Main content area */}
      <group position={[0.4, 0, 0.08]}>
        {/* Bar chart section */}
        <group ref={chartsRef} position={[-0.5, 0.6, 0]}>
          <RoundedBox args={[1.8, 1.2, 0.08]} radius={0.03} position={[0, 0, -0.02]}>
            <meshStandardMaterial color="#12121a" metalness={0.5} roughness={0.5} />
          </RoundedBox>

          {/* Bar chart bars */}
          {dashboardData.barChart.map((height, i) => (
            <mesh key={i} position={[-0.6 + i * 0.2, -0.35 + height / 2, 0.02]}>
              <boxGeometry args={[0.12, height, 0.05]} />
              <meshStandardMaterial
                color="#00D9FF"
                emissive="#00D9FF"
                emissiveIntensity={0.4}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}

          {/* Chart label */}
          <mesh position={[0, 0.45, 0.05]}>
            <planeGeometry args={[0.6, 0.08]} />
            <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
          </mesh>
        </group>

        {/* Pie chart section */}
        <group position={[1.1, 0.6, 0]}>
          <RoundedBox args={[1.1, 1.2, 0.08]} radius={0.03} position={[0, 0, -0.02]}>
            <meshStandardMaterial color="#12121a" metalness={0.5} roughness={0.5} />
          </RoundedBox>

          {/* Pie chart */}
          {dashboardData.pieSegments.map((segment, i) => (
            <mesh key={i} position={[0, -0.05, 0.02]} rotation={[0, 0, segment.angle]}>
              <circleGeometry args={[0.35, 32, 0, segment.size]} />
              <meshStandardMaterial
                color={segment.color}
                emissive={segment.color}
                emissiveIntensity={0.3}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}

          {/* Pie center */}
          <mesh position={[0, -0.05, 0.04]}>
            <circleGeometry args={[0.15, 32]} />
            <meshStandardMaterial color="#12121a" />
          </mesh>
        </group>

        {/* Line chart section */}
        <group position={[0.3, -0.7, 0]}>
          <RoundedBox args={[2.9, 1, 0.08]} radius={0.03} position={[0, 0, -0.02]}>
            <meshStandardMaterial color="#12121a" metalness={0.5} roughness={0.5} />
          </RoundedBox>

          {/* Grid lines */}
          {[-0.3, 0, 0.3].map((y, i) => (
            <mesh key={i} position={[0, y, 0.01]}>
              <planeGeometry args={[2.6, 0.005]} />
              <meshStandardMaterial color="#2a2a3e" transparent opacity={0.5} />
            </mesh>
          ))}

          {/* Line chart - using dots */}
          {dashboardData.lineChart.map((point, i) => (
            <mesh key={i} position={[point.x * 1.3, point.y - 0.1, 0.03]}>
              <circleGeometry args={[0.04, 16]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.8}
              />
            </mesh>
          ))}

          {/* Area under line - simplified */}
          <mesh position={[0, -0.15, 0.02]}>
            <planeGeometry args={[2.4, 0.4]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.1}
              transparent
              opacity={0.15}
            />
          </mesh>
        </group>
      </group>

      {/* Floating data cards */}
      <group ref={modulesRef}>
        {dataCards.map((card, i) => (
          <group key={i} position={card.position}>
            <RoundedBox args={[card.size[0], card.size[1], 0.1]} radius={0.05}>
              <meshStandardMaterial
                color="#12121a"
                metalness={0.5}
                roughness={0.5}
                transparent
                opacity={0.9}
              />
            </RoundedBox>

            {/* Card accent line */}
            <mesh position={[0, card.size[1] / 2 - 0.08, 0.06]}>
              <planeGeometry args={[card.size[0] - 0.1, 0.04]} />
              <meshStandardMaterial
                color={card.color}
                emissive={card.color}
                emissiveIntensity={0.8}
              />
            </mesh>

            {/* Card value indicator */}
            <mesh position={[0, 0, 0.06]}>
              <planeGeometry args={[0.6, 0.2]} />
              <meshStandardMaterial
                color={card.color}
                emissive={card.color}
                emissiveIntensity={0.3}
                transparent
                opacity={0.5}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Connection lines between modules */}
      {[
        { start: [-2.5, 1.2, 0.5], end: [-2.2, 1, 0.1] },
        { start: [-2.5, 0, 0.3], end: [-2.2, 0.2, 0.1] },
        { start: [2.5, 0.8, 0.4], end: [2.1, 0.5, 0.1] },
      ].map((line, i) => (
        <mesh key={i} position={[(line.start[0] + line.end[0]) / 2, (line.start[1] + line.end[1]) / 2, 0.2]}>
          <boxGeometry args={[0.02, 0.4, 0.02]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#00D9FF"
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[5.5, 4.5]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.06}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
