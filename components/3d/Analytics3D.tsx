'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// Analytics 3D - Data visualization with charts and graphs
export default function Analytics3D() {
  const groupRef = useRef<THREE.Group>(null)
  const barsRef = useRef<THREE.Group>(null)
  const lineRef = useRef<THREE.Group>(null)
  const donutRef = useRef<THREE.Group>(null)

  // Bar chart data
  const bars = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => ({
      height: 0.5 + Math.random() * 2,
      color: ['#00D9FF', '#A855F7', '#00FF88', '#FF6B35', '#00D9FF', '#A855F7', '#00FF88'][i],
      x: -2.4 + i * 0.8,
    }))
  }, [])

  // Line chart points
  const linePoints = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      x: -2.5 + i * 0.45,
      y: Math.sin(i * 0.5) * 0.5 + Math.random() * 0.3,
    }))
  }, [])

  // Donut segments
  const donutSegments = useMemo(() => {
    return [
      { value: 0.35, color: '#00D9FF' },
      { value: 0.25, color: '#A855F7' },
      { value: 0.20, color: '#00FF88' },
      { value: 0.20, color: '#FF6B35' },
    ]
  }, [])

  // Floating data points
  const dataPoints = useMemo(() => {
    const points: { position: THREE.Vector3; color: string; size: number }[] = []
    for (let i = 0; i < 30; i++) {
      points.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 7,
          (Math.random() - 0.5) * 4 - 2
        ),
        color: ['#00D9FF', '#A855F7', '#00FF88', '#FF6B35'][Math.floor(Math.random() * 4)],
        size: 0.05 + Math.random() * 0.08,
      })
    }
    return points
  }, [])

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(150 * 3)
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
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

    // Animate bars
    if (barsRef.current) {
      barsRef.current.children.forEach((bar, i) => {
        const targetHeight = bars[i].height
        const scale = 0.8 + Math.sin(t * 1.5 + i * 0.5) * 0.2
        bar.scale.y = scale
        bar.position.y = (targetHeight * scale) / 2 - 0.8
      })
    }

    // Animate donut
    if (donutRef.current) {
      donutRef.current.rotation.z = t * 0.3
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main dashboard panel */}
      <RoundedBox args={[8, 5.5, 0.15]} radius={0.15} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0d1117" metalness={0.6} roughness={0.4} />
      </RoundedBox>

      {/* Header bar */}
      <RoundedBox args={[8, 0.5, 0.18]} radius={0.05} position={[0, 2.75, 0.05]}>
        <meshStandardMaterial color="#161b22" />
      </RoundedBox>

      {/* Dashboard title placeholder */}
      <mesh position={[-2.5, 2.75, 0.15]}>
        <boxGeometry args={[1.5, 0.15, 0.02]} />
        <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
      </mesh>

      {/* KPI Cards */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i} position={[-2.8 + i * 1.9, 2, 0.1]}>
          <RoundedBox args={[1.6, 0.8, 0.1]} radius={0.08}>
            <meshStandardMaterial color="#1a1f2e" />
          </RoundedBox>
          {/* KPI value */}
          <mesh position={[0, 0.1, 0.08]}>
            <boxGeometry args={[0.8, 0.2, 0.02]} />
            <meshStandardMaterial
              color={['#00D9FF', '#00FF88', '#A855F7', '#FF6B35'][i]}
              emissive={['#00D9FF', '#00FF88', '#A855F7', '#FF6B35'][i]}
              emissiveIntensity={0.5}
            />
          </mesh>
          {/* KPI label */}
          <mesh position={[0, -0.2, 0.08]}>
            <boxGeometry args={[1, 0.08, 0.02]} />
            <meshStandardMaterial color="#4a5568" transparent opacity={0.5} />
          </mesh>
        </group>
      ))}

      {/* Bar chart section */}
      <group position={[-2, -0.3, 0.1]}>
        <RoundedBox args={[3.5, 2.5, 0.08]} radius={0.1}>
          <meshStandardMaterial color="#1a1f2e" />
        </RoundedBox>

        {/* Chart title */}
        <mesh position={[-1, 1, 0.1]}>
          <boxGeometry args={[0.8, 0.1, 0.02]} />
          <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
        </mesh>

        {/* Y-axis */}
        <mesh position={[-1.5, 0, 0.1]}>
          <boxGeometry args={[0.02, 1.8, 0.02]} />
          <meshStandardMaterial color="#4a5568" transparent opacity={0.4} />
        </mesh>

        {/* X-axis */}
        <mesh position={[0, -0.9, 0.1]}>
          <boxGeometry args={[3, 0.02, 0.02]} />
          <meshStandardMaterial color="#4a5568" transparent opacity={0.4} />
        </mesh>

        {/* Bars */}
        <group ref={barsRef} position={[0.3, 0, 0.12]}>
          {bars.map((bar, i) => (
            <RoundedBox
              key={i}
              args={[0.5, bar.height, 0.1]}
              radius={0.05}
              position={[bar.x, bar.height / 2 - 0.8, 0]}
            >
              <meshStandardMaterial
                color={bar.color}
                emissive={bar.color}
                emissiveIntensity={0.4}
                transparent
                opacity={0.9}
              />
            </RoundedBox>
          ))}
        </group>
      </group>

      {/* Donut chart section */}
      <group position={[2, -0.3, 0.1]}>
        <RoundedBox args={[3, 2.5, 0.08]} radius={0.1}>
          <meshStandardMaterial color="#1a1f2e" />
        </RoundedBox>

        {/* Chart title */}
        <mesh position={[-0.8, 1, 0.1]}>
          <boxGeometry args={[0.8, 0.1, 0.02]} />
          <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
        </mesh>

        {/* Donut segments */}
        <group ref={donutRef} position={[0, -0.1, 0.12]}>
          {donutSegments.map((segment, i) => {
            const startAngle = donutSegments.slice(0, i).reduce((acc, s) => acc + s.value * Math.PI * 2, 0)
            const endAngle = startAngle + segment.value * Math.PI * 2

            return (
              <mesh key={i} rotation={[0, 0, startAngle]}>
                <torusGeometry args={[0.6, 0.2, 8, 32, segment.value * Math.PI * 2]} />
                <meshStandardMaterial
                  color={segment.color}
                  emissive={segment.color}
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.9}
                />
              </mesh>
            )
          })}
        </group>

        {/* Legend */}
        {donutSegments.map((segment, i) => (
          <group key={i} position={[0.8, 0.4 - i * 0.35, 0.12]}>
            <mesh>
              <boxGeometry args={[0.15, 0.15, 0.02]} />
              <meshStandardMaterial color={segment.color} emissive={segment.color} emissiveIntensity={0.3} />
            </mesh>
            <mesh position={[0.4, 0, 0]}>
              <boxGeometry args={[0.5, 0.08, 0.02]} />
              <meshStandardMaterial color="#4a5568" transparent opacity={0.5} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Trend line at bottom */}
      <group position={[0, -2.2, 0.1]}>
        {/* Trend indicator */}
        <mesh position={[-3, 0, 0]}>
          <boxGeometry args={[0.3, 0.15, 0.02]} />
          <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
        </mesh>

        {/* Sparkline */}
        <group position={[0, 0, 0]}>
          {linePoints.map((point, i) => {
            if (i === 0) return null
            const prevPoint = linePoints[i - 1]
            const midX = (point.x + prevPoint.x) / 2
            const midY = (point.y + prevPoint.y) / 2
            const dx = point.x - prevPoint.x
            const dy = point.y - prevPoint.y
            const length = Math.sqrt(dx * dx + dy * dy)
            const angle = Math.atan2(dy, dx)

            return (
              <mesh key={i} position={[midX, midY, 0]} rotation={[0, 0, angle]}>
                <boxGeometry args={[length, 0.04, 0.02]} />
                <meshStandardMaterial
                  color="#00D9FF"
                  emissive="#00D9FF"
                  emissiveIntensity={0.5}
                />
              </mesh>
            )
          })}
        </group>
      </group>

      {/* Floating data points */}
      {dataPoints.map((point, i) => (
        <mesh key={i} position={point.position}>
          <sphereGeometry args={[point.size, 8, 8]} />
          <meshStandardMaterial
            color={point.color}
            emissive={point.color}
            emissiveIntensity={0.6}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}

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
        <planeGeometry args={[10, 8]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.05}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
