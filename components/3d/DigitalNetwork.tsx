'use client'

import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'

extend(THREE)

const NODE_COUNT = 100
const RADIUS = 5

const DigitalNetwork = () => {
  const graph = useMemo(() => {
    const nodes = []
    const edges = []
    for (let i = 0; i < NODE_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / NODE_COUNT)
      const theta = Math.sqrt(NODE_COUNT * Math.PI) * phi
      nodes.push({
        position: new THREE.Vector3().setFromSphericalCoords(RADIUS, phi, theta),
        connections: 0,
        isCentral: false,
      })
    }

    // Create a central, more connected node
    const centralNodeIndex = Math.floor(Math.random() * NODE_COUNT);
    nodes[centralNodeIndex].isCentral = true;

    for (let i = 0; i < NODE_COUNT * 1.5; i++) {
      let startNode, endNode;
      // Ensure more connections to the central node
      if (Math.random() > 0.7) {
        startNode = nodes[centralNodeIndex];
      } else {
        startNode = nodes[Math.floor(Math.random() * NODE_COUNT)]
      }
      endNode = nodes[Math.floor(Math.random() * NODE_COUNT)]

      if (startNode !== endNode && startNode.connections < 5 && endNode.connections < 5) {
        startNode.connections++
        endNode.connections++
        edges.push({
          start: startNode.position,
          end: endNode.position,
        })
      }
    }
    return { nodes, edges }
  }, [])

  const groupRef = useRef<THREE.Group>(null!)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
      groupRef.current.rotation.x = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <group ref={groupRef}>
      {graph.edges.map((edge, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([edge.start, edge.end])
        const material = new THREE.LineBasicMaterial({
          color: "#00FF88",
          transparent: true,
          opacity: 0.2
        })
        return (
          <primitive key={i} object={new THREE.Line(geometry, material)} />
        )
      })}
      {graph.nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.isCentral ? 0.15 : 0.05, 16, 16]} />
          <meshStandardMaterial 
            color={node.isCentral ? "#FF00FF" : "#00D9FF"} 
            emissive={node.isCentral ? "#FF00FF" : "#00D9FF"}
            emissiveIntensity={node.isCentral ? 4 : 2}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

export default DigitalNetwork
