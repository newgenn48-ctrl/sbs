'use client'

import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

interface Node {
  position: THREE.Vector3
  connections: number[]
  activated: boolean
  activationTime: number
}

// Represents viral content spreading through a social network
const SocialViralSpread = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const nodesRef = useRef<THREE.InstancedMesh>(null!)
  
  const NODE_COUNT = 60
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  // Create network graph
  const { nodes, edges } = useMemo(() => {
    const nodes: Node[] = []
    const edges: [number, number][] = []
    
    // Create nodes in a spherical arrangement
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT)
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi
      const radius = 4 + (Math.random() - 0.5)
      
      nodes.push({
        position: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        connections: [],
        activated: i === 0, // Start with first node activated
        activationTime: i === 0 ? 0 : -1
      })
    }
    
    // Create connections based on proximity
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position)
        if (dist < 2.5 && Math.random() > 0.3) {
          nodes[i].connections.push(j)
          nodes[j].connections.push(i)
          edges.push([i, j])
        }
      }
    }
    
    return { nodes, edges }
  }, [])
  
  // Edge geometry
  const edgePositions = useMemo(() => {
    const positions: number[] = []
    edges.forEach(([i, j]) => {
      positions.push(
        nodes[i].position.x, nodes[i].position.y, nodes[i].position.z,
        nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
      )
    })
    return new Float32Array(positions)
  }, [nodes, edges])
  
  const edgeColors = useRef(new Float32Array(edges.length * 6).fill(0.2))
  const edgeColorsBuffer = useRef<THREE.BufferAttribute>(null!)
  
  const [spreadProgress, setSpreadProgress] = useState(0)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05
    }
    
    // Spread activation through network
    const newSpreadProgress = (time % 10) / 10 // Reset every 10 seconds
    
    if (newSpreadProgress < spreadProgress) {
      // Reset all nodes
      nodes.forEach((node, i) => {
        node.activated = i === 0
        node.activationTime = i === 0 ? 0 : -1
      })
    }
    setSpreadProgress(newSpreadProgress)
    
    // Activate connected nodes over time
    nodes.forEach((node, i) => {
      if (node.activated && node.activationTime >= 0) {
        const timeSinceActivation = time - node.activationTime
        if (timeSinceActivation > 0.3) {
          node.connections.forEach(connIndex => {
            if (!nodes[connIndex].activated) {
              nodes[connIndex].activated = true
              nodes[connIndex].activationTime = time
            }
          })
        }
      }
    })
    
    // Update node colors and scales
    if (nodesRef.current) {
      nodes.forEach((node, i) => {
        dummy.position.copy(node.position)
        
        if (node.activated) {
          const timeSinceActivation = time - node.activationTime
          const pulse = 1 + Math.sin(timeSinceActivation * 5) * 0.2
          dummy.scale.setScalar(0.15 * pulse)
        } else {
          dummy.scale.setScalar(0.08)
        }
        
        dummy.updateMatrix()
        nodesRef.current!.setMatrixAt(i, dummy.matrix)
        
        // Update color
        const color = node.activated 
          ? new THREE.Color('#FF00FF') 
          : new THREE.Color('#00D9FF')
        nodesRef.current!.setColorAt(i, color)
      })
      nodesRef.current.instanceMatrix.needsUpdate = true
      if (nodesRef.current.instanceColor) {
        nodesRef.current.instanceColor.needsUpdate = true
      }
    }
    
    // Update edge colors
    edges.forEach(([i, j], edgeIndex) => {
      const i6 = edgeIndex * 6
      const bothActivated = nodes[i].activated && nodes[j].activated
      const color = bothActivated ? new THREE.Color('#FF00FF') : new THREE.Color('#333')
      const opacity = bothActivated ? 0.8 : 0.2
      
      edgeColors.current[i6] = color.r * opacity
      edgeColors.current[i6 + 1] = color.g * opacity
      edgeColors.current[i6 + 2] = color.b * opacity
      edgeColors.current[i6 + 3] = color.r * opacity
      edgeColors.current[i6 + 4] = color.g * opacity
      edgeColors.current[i6 + 5] = color.b * opacity
    })
    
    if (edgeColorsBuffer.current) {
      edgeColorsBuffer.current.needsUpdate = true
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {/* Network edges */}
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[edgePositions, 3]} />
            <bufferAttribute 
              ref={edgeColorsBuffer}
              attach="attributes-color" 
              args={[edgeColors.current, 3]} 
            />
          </bufferGeometry>
          <lineBasicMaterial vertexColors transparent opacity={0.6} />
        </lineSegments>
        
        {/* Network nodes */}
        <instancedMesh ref={nodesRef} args={[undefined, undefined, NODE_COUNT]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            emissive="#FF00FF"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </instancedMesh>
        
        {/* Central content node */}
        <mesh position={nodes[0].position}>
          <icosahedronGeometry args={[0.3, 0]} />
          <meshStandardMaterial
            color="#FFD700"
            emissive="#FFD700"
            emissiveIntensity={3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </group>
      
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.1} intensity={1.5} kernelSize={2} />
      </EffectComposer>
    </>
  )
}

export default SocialViralSpread
