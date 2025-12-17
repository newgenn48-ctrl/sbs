'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere, Line } from '@react-three/drei'
import * as THREE from 'three'
import { useMousePosition } from '@/hooks/useMousePosition'

function NetworkNode({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      const scaleFactor = 1 + Math.sin(time * 2 + position[2]) * 0.1
      meshRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor)
    }
  })

  return (
    <Sphere ref={meshRef} args={[0.15, 16, 16]} position={position}>
      <meshStandardMaterial
        color="#FF006E"
        emissive="#FF006E"
        emissiveIntensity={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function NetworkConnections({ nodes }: { nodes: [number, number, number][] }) {
  const connections = useMemo(() => {
    if (!nodes || nodes.length === 0) return []

    const lines: { points: [number, number, number][] }[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = new THREE.Vector3(...nodes[i]).distanceTo(
          new THREE.Vector3(...nodes[j])
        )
        if (dist < 4 && Math.random() > 0.7) {
          lines.push({
            points: [nodes[i], nodes[j]],
          })
        }
      }
    }
    return lines
  }, [nodes])

  return (
    <>
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={connection.points}
          color="#00D9FF"
          opacity={0.3}
          transparent
          lineWidth={1}
        />
      ))}
    </>
  )
}

function NeuralNetworkMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const { x: mouseX, y: mouseY } = useMousePosition()
  const { size } = useThree()

  const nodes = useMemo(() => {
    const nodePositions: [number, number, number][] = []
    const layers = 4
    const nodesPerLayer = 8
    const layerDepth = 2

    for (let layer = 0; layer < layers; layer++) {
      const radius = 1.5 + layer * 0.4
      for (let node = 0; node < nodesPerLayer; node++) {
        const angle = (node / nodesPerLayer) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const z = (layer - (layers - 1) / 2) * layerDepth
        nodePositions.push([x, y, z])
      }
    }

    return nodePositions
  }, [])

  useFrame((state) => {
    if (!groupRef.current || !size || size.width === 0) return

    let targetRotationY = state.clock.elapsedTime * 0.08
    let targetRotationX = state.clock.elapsedTime * 0.05

    if (mouseX !== null && mouseY !== null) {
      const mouseTargetX = (mouseX / size.width - 0.5) * 0.3
      const mouseTargetY = (mouseY / size.height - 0.5) * 0.3
      targetRotationY += mouseTargetX
      targetRotationX -= mouseTargetY
    }

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.05
    )
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.05
    )
  })

  return (
    <group ref={groupRef}>
      {nodes.map((position, index) => (
        <NetworkNode key={index} position={position} />
      ))}
      <NetworkConnections nodes={nodes} />
    </group>
  )
}

export default function NeuralNetwork() {
  return <NeuralNetworkMesh />
}
