'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Line } from '@react-three/drei'

const NODE_COUNT = 80
const RADIUS = 5

export default function DigitalNetwork() {
  const groupRef = useRef<THREE.Group>(null)

  const graph = useMemo(() => {
    const nodes: { position: THREE.Vector3; isCentral: boolean }[] = []
    const edges: { points: [number, number, number][] }[] = []

    // Create nodes in spherical distribution
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT)
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi
      nodes.push({
        position: new THREE.Vector3().setFromSphericalCoords(RADIUS, phi, theta),
        isCentral: i === Math.floor(NODE_COUNT / 2),
      })
    }

    // Create connections
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position)
        if (dist < 2 && Math.random() > 0.6) {
          edges.push({
            points: [
              [nodes[i].position.x, nodes[i].position.y, nodes[i].position.z],
              [nodes[j].position.x, nodes[j].position.y, nodes[j].position.z],
            ],
          })
        }
      }
    }

    return { nodes, edges }
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      {/* Edges */}
      {graph.edges.map((edge, i) => (
        <Line
          key={`edge-${i}`}
          points={edge.points}
          color="#00FF88"
          transparent
          opacity={0.2}
          lineWidth={1}
        />
      ))}

      {/* Nodes */}
      {graph.nodes.map((node, i) => (
        <mesh key={`node-${i}`} position={node.position}>
          <sphereGeometry args={[node.isCentral ? 0.12 : 0.04, 16, 16]} />
          <meshStandardMaterial
            color={node.isCentral ? '#FF00FF' : '#00D9FF'}
            emissive={node.isCentral ? '#FF00FF' : '#00D9FF'}
            emissiveIntensity={node.isCentral ? 3 : 1.5}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}
