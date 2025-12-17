'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

// AI Brain 3D - Neural Network visualization for AI overview
export default function AIBrain3D() {
  const groupRef = useRef<THREE.Group>(null)
  const nodesRef = useRef<THREE.Group>(null)
  const connectionsRef = useRef<THREE.Group>(null)
  const pulseRef = useRef<THREE.Group>(null)

  // Generate neural network nodes in layers
  const nodes = useMemo(() => {
    const nodePositions: { position: THREE.Vector3; layer: number; color: string }[] = []
    const layers = [4, 6, 8, 6, 4] // Node counts per layer
    const layerSpacing = 1.5
    const colors = ['#00D9FF', '#A855F7', '#00FF88', '#FF6B35', '#E879F9']

    layers.forEach((nodeCount, layerIndex) => {
      const layerX = (layerIndex - (layers.length - 1) / 2) * layerSpacing
      for (let i = 0; i < nodeCount; i++) {
        const nodeY = (i - (nodeCount - 1) / 2) * 0.8
        nodePositions.push({
          position: new THREE.Vector3(layerX, nodeY, 0),
          layer: layerIndex,
          color: colors[layerIndex],
        })
      }
    })

    return nodePositions
  }, [])

  // Generate connections between nodes
  const connections = useMemo(() => {
    const lines: { start: THREE.Vector3; end: THREE.Vector3; color: string }[] = []
    const layers = [4, 6, 8, 6, 4]
    let startIndex = 0

    for (let l = 0; l < layers.length - 1; l++) {
      const currentLayerSize = layers[l]
      const nextLayerSize = layers[l + 1]
      const nextStartIndex = startIndex + currentLayerSize

      for (let i = 0; i < currentLayerSize; i++) {
        // Connect to some nodes in next layer (not all for visual clarity)
        const connectionsCount = Math.min(3, nextLayerSize)
        for (let j = 0; j < connectionsCount; j++) {
          const targetIndex = nextStartIndex + Math.floor((j / connectionsCount) * nextLayerSize + Math.random() * 2) % nextLayerSize
          if (targetIndex < nodes.length) {
            lines.push({
              start: nodes[startIndex + i].position,
              end: nodes[targetIndex].position,
              color: nodes[startIndex + i].color,
            })
          }
        }
      }
      startIndex = nextStartIndex
    }

    return lines
  }, [nodes])

  // Data pulses traveling through connections
  const pulses = useMemo(() => {
    return connections.slice(0, 20).map((conn, i) => ({
      start: conn.start,
      end: conn.end,
      offset: Math.random(),
      speed: 0.5 + Math.random() * 0.5,
      color: conn.color,
    }))
  }, [connections])

  // Floating particles around the brain
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(200 * 3)
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 4 + Math.random() * 3
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.3
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1
    }

    // Animate nodes
    if (nodesRef.current) {
      nodesRef.current.children.forEach((node, i) => {
        const scale = 1 + Math.sin(t * 2 + i * 0.5) * 0.1
        node.scale.setScalar(scale)
      })
    }

    // Animate pulses
    if (pulseRef.current) {
      pulseRef.current.children.forEach((pulse, i) => {
        const pulseData = pulses[i]
        const progress = ((t * pulseData.speed + pulseData.offset) % 1)
        pulse.position.lerpVectors(pulseData.start, pulseData.end, progress)
        pulse.scale.setScalar(0.8 + Math.sin(progress * Math.PI) * 0.5)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Neural network nodes */}
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={node.position}>
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.8}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>

      {/* Connections between nodes */}
      <group ref={connectionsRef}>
        {connections.map((conn, i) => {
          const midPoint = new THREE.Vector3().lerpVectors(conn.start, conn.end, 0.5)
          const direction = new THREE.Vector3().subVectors(conn.end, conn.start)
          const length = direction.length()

          return (
            <mesh key={i} position={midPoint} rotation={[0, 0, Math.atan2(direction.y, direction.x)]}>
              <boxGeometry args={[length, 0.02, 0.02]} />
              <meshStandardMaterial
                color={conn.color}
                transparent
                opacity={0.3}
              />
            </mesh>
          )
        })}
      </group>

      {/* Data pulses */}
      <group ref={pulseRef}>
        {pulses.map((pulse, i) => (
          <mesh key={i} position={pulse.start}>
            <sphereGeometry args={[0.06, 8, 8]} />
            <meshStandardMaterial
              color={pulse.color}
              emissive={pulse.color}
              emissiveIntensity={2}
            />
          </mesh>
        ))}
      </group>

      {/* Core glow */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.3}
          transparent
          opacity={0.2}
        />
      </mesh>

      {/* Outer ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#A855F7"
          transparent
          opacity={0.5}
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
