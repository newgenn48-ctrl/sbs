'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// Workflow Automation 3D - Process flow visualization
export default function WorkflowAutomation3D() {
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Group>(null)
  const dataRef = useRef<THREE.Group>(null)
  const gearsRef = useRef<THREE.Group>(null)

  // Workflow nodes
  const nodes = useMemo(() => {
    return [
      { x: -3, y: 1.5, color: '#00D9FF', label: 'Input' },
      { x: -1, y: 1.5, color: '#A855F7', label: 'Process' },
      { x: 1, y: 1.5, color: '#00FF88', label: 'Validate' },
      { x: 3, y: 1.5, color: '#FF6B35', label: 'Output' },
      { x: -2, y: -0.5, color: '#A855F7', label: 'Database' },
      { x: 0, y: -0.5, color: '#00D9FF', label: 'API' },
      { x: 2, y: -0.5, color: '#00FF88', label: 'Notify' },
    ]
  }, [])

  // Connections between nodes
  const connections = useMemo(() => {
    return [
      { from: 0, to: 1 },
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 1, to: 4 },
      { from: 4, to: 5 },
      { from: 5, to: 6 },
      { from: 2, to: 6 },
    ]
  }, [])

  // Data packets traveling through workflow
  const dataPackets = useMemo(() => {
    return connections.map((_, i) => ({
      offset: Math.random(),
      speed: 0.3 + Math.random() * 0.4,
      color: ['#00D9FF', '#A855F7', '#00FF88'][i % 3],
    }))
  }, [connections])

  // Gears for automation feel
  const gears = useMemo(() => {
    return [
      { x: -4, y: 0.5, size: 0.5, speed: 1 },
      { x: 4, y: 0.5, size: 0.4, speed: -1.5 },
      { x: -3.5, y: -1.5, size: 0.35, speed: 1.2 },
      { x: 3.5, y: -1.5, size: 0.45, speed: -1 },
    ]
  }, [])

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(120 * 3)
    for (let i = 0; i < 120; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14
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

    // Animate nodes
    if (nodesRef.current) {
      nodesRef.current.children.forEach((node, i) => {
        const scale = 1 + Math.sin(t * 2 + i * 0.8) * 0.05
        node.scale.setScalar(scale)
      })
    }

    // Animate data packets
    if (dataRef.current) {
      dataRef.current.children.forEach((packet, i) => {
        const conn = connections[i]
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        const data = dataPackets[i]
        const progress = ((t * data.speed + data.offset) % 1)

        packet.position.x = fromNode.x + (toNode.x - fromNode.x) * progress
        packet.position.y = fromNode.y + (toNode.y - fromNode.y) * progress
        packet.scale.setScalar(0.8 + Math.sin(progress * Math.PI) * 0.4)
      })
    }

    // Animate gears
    if (gearsRef.current) {
      gearsRef.current.children.forEach((gear, i) => {
        gear.rotation.z = t * gears[i].speed
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main panel background */}
      <RoundedBox args={[9, 5, 0.1]} radius={0.15} position={[0, 0.5, -0.5]}>
        <meshStandardMaterial color="#0d1117" metalness={0.5} roughness={0.5} transparent opacity={0.8} />
      </RoundedBox>

      {/* Workflow nodes */}
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <group key={i} position={[node.x, node.y, 0]}>
            {/* Node box */}
            <RoundedBox args={[1, 0.6, 0.2]} radius={0.1}>
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.4}
                transparent
                opacity={0.9}
              />
            </RoundedBox>
            {/* Node icon placeholder */}
            <mesh position={[0, 0, 0.15]}>
              <circleGeometry args={[0.12, 16]} />
              <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Connection lines */}
      {connections.map((conn, i) => {
        const fromNode = nodes[conn.from]
        const toNode = nodes[conn.to]
        const midX = (fromNode.x + toNode.x) / 2
        const midY = (fromNode.y + toNode.y) / 2
        const dx = toNode.x - fromNode.x
        const dy = toNode.y - fromNode.y
        const length = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)

        return (
          <mesh key={i} position={[midX, midY, 0]} rotation={[0, 0, angle]}>
            <boxGeometry args={[length - 1, 0.04, 0.04]} />
            <meshStandardMaterial
              color="#4a5568"
              emissive="#4a5568"
              emissiveIntensity={0.3}
              transparent
              opacity={0.6}
            />
          </mesh>
        )
      })}

      {/* Arrow heads */}
      {connections.map((conn, i) => {
        const toNode = nodes[conn.to]
        const fromNode = nodes[conn.from]
        const angle = Math.atan2(toNode.y - fromNode.y, toNode.x - fromNode.x)

        return (
          <mesh key={`arrow-${i}`} position={[toNode.x - Math.cos(angle) * 0.6, toNode.y - Math.sin(angle) * 0.6, 0]} rotation={[0, 0, angle]}>
            <coneGeometry args={[0.08, 0.15, 8]} />
            <meshStandardMaterial color="#4a5568" transparent opacity={0.8} />
          </mesh>
        )
      })}

      {/* Data packets */}
      <group ref={dataRef}>
        {dataPackets.map((data, i) => (
          <mesh key={i} position={[0, 0, 0.1]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial
              color={data.color}
              emissive={data.color}
              emissiveIntensity={1.5}
            />
          </mesh>
        ))}
      </group>

      {/* Gears */}
      <group ref={gearsRef}>
        {gears.map((gear, i) => (
          <group key={i} position={[gear.x, gear.y, 0]}>
            {/* Gear outer ring */}
            <mesh>
              <torusGeometry args={[gear.size, gear.size * 0.15, 8, 24]} />
              <meshStandardMaterial
                color="#A855F7"
                emissive="#A855F7"
                emissiveIntensity={0.3}
                transparent
                opacity={0.7}
              />
            </mesh>
            {/* Gear teeth */}
            {Array.from({ length: 8 }).map((_, j) => {
              const angle = (j / 8) * Math.PI * 2
              return (
                <mesh
                  key={j}
                  position={[Math.cos(angle) * (gear.size + gear.size * 0.1), Math.sin(angle) * (gear.size + gear.size * 0.1), 0]}
                  rotation={[0, 0, angle]}
                >
                  <boxGeometry args={[gear.size * 0.2, gear.size * 0.15, 0.05]} />
                  <meshStandardMaterial
                    color="#A855F7"
                    emissive="#A855F7"
                    emissiveIntensity={0.3}
                    transparent
                    opacity={0.7}
                  />
                </mesh>
              )
            })}
            {/* Center */}
            <mesh>
              <circleGeometry args={[gear.size * 0.3, 16]} />
              <meshStandardMaterial color="#0d1117" />
            </mesh>
          </group>
        ))}
      </group>

      {/* Status indicators */}
      <group position={[0, -2, 0]}>
        {['Active', 'Processing', 'Complete'].map((_, i) => (
          <mesh key={i} position={[-1.5 + i * 1.5, 0, 0]}>
            <circleGeometry args={[0.08, 16]} />
            <meshStandardMaterial
              color={['#00FF88', '#FFD700', '#00D9FF'][i]}
              emissive={['#00FF88', '#FFD700', '#00D9FF'][i]}
              emissiveIntensity={0.8}
            />
          </mesh>
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
          color="#A855F7"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Glow effect */}
      <mesh position={[0, 0.5, -1]}>
        <planeGeometry args={[12, 8]} />
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
