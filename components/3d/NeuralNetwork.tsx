'use client'

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
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
    <Sphere ref={meshRef} args={[0.2, 16, 16]} position={position}>
      <meshStandardMaterial
        color="#FF006E"
        emissive="#FF006E"
        emissiveIntensity={2.5}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

function NetworkConnections({ nodes }: { nodes: [number, number, number][] }) {
  const lines = useMemo(() => {
    if (!nodes || nodes.length === 0) {
      return [];
    }
    
    const connections: [THREE.Vector3, THREE.Vector3][] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = new THREE.Vector3(...nodes[i]).distanceTo(new THREE.Vector3(...nodes[j]))
        if (dist < 4 && Math.random() > 0.8) {
          connections.push([new THREE.Vector3(...nodes[i]), new THREE.Vector3(...nodes[j])])
        }
      }
    }
    return connections
  }, [nodes])

  return (
    <>
      {lines.map((points, index) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points)
        const material = new THREE.LineBasicMaterial({
          color: "#00D9FF",
          opacity: 0.4,
          transparent: true
        })
        return (
          <primitive key={index} object={new THREE.Line(geometry, material)} />
        )
      })}
    </>
  )
}

function NeuralNetworkMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const { x: mouseX, y: mouseY } = useMousePosition()
  const { size } = useThree()

  const nodes = useMemo(() => {
    const nodePositions: [number, number, number][] = []
    const layers = 5
    const nodesPerLayer = 10
    const layerDepth = 2.5
    
    for (let layer = 0; layer < layers; layer++) {
      const radius = 2 + layer * 0.5
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
    // DEFINITIVE GUARD CLAUSE: Do not run animation logic until all dependencies are ready.
    if (!groupRef.current || !size || size.width === 0 || size.height === 0) {
      return;
    }

    // Base rotation
    let targetRotationY = state.clock.elapsedTime * 0.08
    let targetRotationX = state.clock.elapsedTime * 0.05

    // Mouse influence
    if (mouseX !== null && mouseY !== null) {
      const mouseTargetX = (mouseX / size.width - 0.5) * 0.5
      const mouseTargetY = (mouseY / size.height - 0.5) * 0.5
      
      targetRotationY += mouseTargetX
      targetRotationX -= mouseTargetY
    }
    
    // Smoothly interpolate to the target rotation
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05)
  })

  return (
    <group ref={groupRef}>
      {nodes && nodes.map((position, index) => (
        <NetworkNode key={index} position={position} />
      ))}
      <NetworkConnections nodes={nodes} />
    </group>
  )
}

export default function NeuralNetwork() {
  return <NeuralNetworkMesh />
}
