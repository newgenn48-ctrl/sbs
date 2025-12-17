'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float } from '@react-three/drei'

// Business Dashboard 3D - Professional consultative visualization
export default function BusinessDashboard() {
  const groupRef = useRef<THREE.Group>(null)
  const screenRef = useRef<THREE.Group>(null)
  const dataRef = useRef<THREE.Group>(null)

  // Dashboard metrics/cards
  const dashboardCards = useMemo(() => [
    { x: -1.8, y: 1.2, width: 1.4, height: 0.9, color: '#00FF88', label: 'Website' },
    { x: 0, y: 1.2, width: 1.4, height: 0.9, color: '#00D9FF', label: 'E-mail' },
    { x: 1.8, y: 1.2, width: 1.4, height: 0.9, color: '#A855F7', label: 'Marketing' },
    { x: -0.9, y: -0.1, width: 1.4, height: 0.9, color: '#FFB800', label: 'SEO' },
    { x: 0.9, y: -0.1, width: 1.4, height: 0.9, color: '#FF6B6B', label: 'Security' },
  ], [])

  // Animated data points for the main chart
  const chartPoints = useMemo(() => {
    return [0.2, 0.35, 0.3, 0.5, 0.45, 0.65, 0.6, 0.8, 0.75, 0.9]
  }, [])

  // Connection lines between elements
  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < 8; i++) {
      lines.push({
        startX: (Math.random() - 0.5) * 4,
        startY: (Math.random() - 0.5) * 3,
        length: 0.5 + Math.random() * 0.5,
        angle: Math.random() * Math.PI * 2,
        opacity: 0.2 + Math.random() * 0.3,
      })
    }
    return lines
  }, [])

  // Floating data particles
  const particles = useMemo(() => {
    const items = []
    for (let i = 0; i < 15; i++) {
      items.push({
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 4,
        z: -1 + Math.random() * 0.5,
        size: 0.02 + Math.random() * 0.02,
        speed: 0.5 + Math.random() * 0.5,
      })
    }
    return items
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Subtle main group movement
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.03
      groupRef.current.position.y = Math.sin(t * 0.25) * 0.05
    }

    // Screen subtle pulse
    if (screenRef.current) {
      const scale = 1 + Math.sin(t * 0.5) * 0.005
      screenRef.current.scale.set(scale, scale, 1)
    }

    // Animate data visualization
    if (dataRef.current) {
      dataRef.current.children.forEach((child, i) => {
        if (child.position) {
          child.position.y = Math.sin(t * 2 + i * 0.5) * 0.02
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main Dashboard Screen */}
      <group ref={screenRef}>
        {/* Screen background */}
        <RoundedBox args={[5.5, 4, 0.1]} radius={0.15} position={[0, 0.3, 0]}>
          <meshStandardMaterial
            color="#0a0a15"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Screen border glow */}
        <mesh position={[0, 0.3, 0.06]}>
          <planeGeometry args={[5.4, 3.9]} />
          <meshStandardMaterial
            color="#1a1a2e"
            emissive="#A855F7"
            emissiveIntensity={0.02}
          />
        </mesh>

        {/* Screen inner frame */}
        <mesh position={[0, 0.3, 0.07]}>
          <ringGeometry args={[2.5, 2.6, 4]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.1}
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>

      {/* Dashboard Cards */}
      {dashboardCards.map((card, i) => (
        <Float key={i} speed={1 + i * 0.1} floatIntensity={0.08}>
          <group position={[card.x, card.y + 0.3, 0.15]}>
            {/* Card background */}
            <RoundedBox args={[card.width, card.height, 0.06]} radius={0.08}>
              <meshStandardMaterial
                color="#12121f"
                metalness={0.6}
                roughness={0.4}
              />
            </RoundedBox>

            {/* Card top accent */}
            <mesh position={[0, card.height / 2 - 0.08, 0.04]}>
              <boxGeometry args={[card.width - 0.1, 0.04, 0.02]} />
              <meshStandardMaterial
                color={card.color}
                emissive={card.color}
                emissiveIntensity={0.5}
              />
            </mesh>

            {/* Card status indicator */}
            <mesh position={[card.width / 2 - 0.15, card.height / 2 - 0.15, 0.04]}>
              <circleGeometry args={[0.06, 12]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.8}
              />
            </mesh>

            {/* Mini chart/metric visualization */}
            <group position={[-card.width / 2 + 0.2, -0.1, 0.04]}>
              {[0.15, 0.25, 0.2, 0.35, 0.3].map((h, j) => (
                <mesh key={j} position={[j * 0.18, h / 2 - 0.15, 0]}>
                  <boxGeometry args={[0.1, h, 0.02]} />
                  <meshStandardMaterial
                    color={card.color}
                    emissive={card.color}
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.6}
                  />
                </mesh>
              ))}
            </group>

            {/* Card label line */}
            <mesh position={[0, -card.height / 2 + 0.15, 0.04]}>
              <boxGeometry args={[card.width * 0.6, 0.08, 0.01]} />
              <meshStandardMaterial
                color="#2a2a3e"
              />
            </mesh>
          </group>
        </Float>
      ))}

      {/* Main Growth Chart - Bottom */}
      <Float speed={0.8} floatIntensity={0.05}>
        <group position={[0, -1.4, 0.15]}>
          {/* Chart background */}
          <RoundedBox args={[4.5, 1.2, 0.06]} radius={0.1}>
            <meshStandardMaterial
              color="#12121f"
              metalness={0.6}
              roughness={0.4}
            />
          </RoundedBox>

          {/* Chart title accent */}
          <mesh position={[-1.8, 0.5, 0.04]}>
            <boxGeometry args={[0.8, 0.06, 0.02]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.4}
            />
          </mesh>

          {/* Growth line chart */}
          <group ref={dataRef} position={[-1.8, -0.1, 0.04]}>
            {chartPoints.map((height, i) => (
              <group key={i}>
                {/* Data point */}
                <mesh position={[i * 0.4, height * 0.8 - 0.3, 0]}>
                  <circleGeometry args={[0.04, 12]} />
                  <meshStandardMaterial
                    color="#00FF88"
                    emissive="#00FF88"
                    emissiveIntensity={0.7}
                  />
                </mesh>
                {/* Vertical line to point */}
                <mesh position={[i * 0.4, (height * 0.8 - 0.3) / 2 - 0.15, 0]}>
                  <boxGeometry args={[0.015, height * 0.8, 0.01]} />
                  <meshStandardMaterial
                    color="#00FF88"
                    emissive="#00FF88"
                    emissiveIntensity={0.2}
                    transparent
                    opacity={0.3}
                  />
                </mesh>
              </group>
            ))}
          </group>

          {/* Trend arrow */}
          <group position={[1.9, 0.2, 0.04]}>
            <mesh rotation={[0, 0, -Math.PI / 4]}>
              <coneGeometry args={[0.08, 0.15, 3]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.5}
              />
            </mesh>
            <mesh position={[-0.12, -0.12, 0]} rotation={[0, 0, -Math.PI / 4]}>
              <boxGeometry args={[0.2, 0.04, 0.02]} />
              <meshStandardMaterial
                color="#00FF88"
                emissive="#00FF88"
                emissiveIntensity={0.4}
              />
            </mesh>
          </group>
        </group>
      </Float>

      {/* Side Stats Panel - Left */}
      <Float speed={1.2} floatIntensity={0.1}>
        <group position={[-3.5, 0, 0.1]}>
          <RoundedBox args={[0.8, 2.5, 0.06]} radius={0.1}>
            <meshStandardMaterial
              color="#12121f"
              metalness={0.6}
              roughness={0.4}
            />
          </RoundedBox>

          {/* Stats items */}
          {[
            { y: 0.8, color: '#00FF88', value: '99%' },
            { y: 0.2, color: '#00D9FF', value: '24/7' },
            { y: -0.4, color: '#A855F7', value: '#1' },
            { y: -1, color: '#FFB800', value: '5★' },
          ].map((stat, i) => (
            <group key={i} position={[0, stat.y, 0.04]}>
              <mesh>
                <circleGeometry args={[0.12, 16]} />
                <meshStandardMaterial
                  color={stat.color}
                  emissive={stat.color}
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.3}
                />
              </mesh>
              <mesh>
                <circleGeometry args={[0.06, 12]} />
                <meshStandardMaterial
                  color={stat.color}
                  emissive={stat.color}
                  emissiveIntensity={0.7}
                />
              </mesh>
            </group>
          ))}
        </group>
      </Float>

      {/* Side Stats Panel - Right */}
      <Float speed={1.3} floatIntensity={0.1}>
        <group position={[3.5, 0, 0.1]}>
          <RoundedBox args={[0.8, 2.5, 0.06]} radius={0.1}>
            <meshStandardMaterial
              color="#12121f"
              metalness={0.6}
              roughness={0.4}
            />
          </RoundedBox>

          {/* Activity indicators */}
          {[-0.8, -0.4, 0, 0.4, 0.8].map((y, i) => (
            <group key={i} position={[0, y, 0.04]}>
              <mesh position={[-0.2, 0, 0]}>
                <boxGeometry args={[0.25, 0.15, 0.02]} />
                <meshStandardMaterial
                  color="#2a2a3e"
                />
              </mesh>
              <mesh position={[0.15, 0, 0]}>
                <boxGeometry args={[0.15 + i * 0.03, 0.08, 0.02]} />
                <meshStandardMaterial
                  color="#00D9FF"
                  emissive="#00D9FF"
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.5 + i * 0.1}
                />
              </mesh>
            </group>
          ))}
        </group>
      </Float>

      {/* Central Focus Indicator */}
      <Float speed={2} floatIntensity={0.15}>
        <group position={[0, 0.3, 0.3]}>
          {/* Outer ring */}
          <mesh rotation={[0, 0, 0]}>
            <ringGeometry args={[0.35, 0.4, 32]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.3}
              transparent
              opacity={0.5}
            />
          </mesh>
          {/* Inner glow */}
          <mesh>
            <circleGeometry args={[0.25, 24]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.2}
              transparent
              opacity={0.2}
            />
          </mesh>
          {/* Center dot */}
          <mesh position={[0, 0, 0.02]}>
            <circleGeometry args={[0.08, 16]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>
      </Float>

      {/* Floating ambient particles */}
      {particles.map((p, i) => (
        <mesh key={i} position={[p.x, p.y, p.z]}>
          <circleGeometry args={[p.size, 8]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      ))}

      {/* Subtle connection lines */}
      {connections.map((conn, i) => (
        <mesh
          key={i}
          position={[conn.startX, conn.startY, -0.1]}
          rotation={[0, 0, conn.angle]}
        >
          <boxGeometry args={[conn.length, 0.01, 0.01]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.2}
            transparent
            opacity={conn.opacity}
          />
        </mesh>
      ))}

      {/* Background gradient plane */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial
          color="#0a0a12"
          emissive="#A855F7"
          emissiveIntensity={0.02}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  )
}
