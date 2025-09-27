'use client'

import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'

extend(THREE)

interface Node {
  position: THREE.Vector3;
  color: THREE.Color;
}

interface Particle {
  start: THREE.Vector3;
  end: THREE.Vector3;
  progress: number;
  speed: number;
}

const MarketingNexus = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const particlesRef = useRef<THREE.Points>(null!)

  const { nodes, particles } = useMemo(() => {
    const nodes: Node[] = []
    const mainNodes: Node[] = []
    const nodeColors: number[] = []

    // Central Core
    nodes.push({ position: new THREE.Vector3(0, 0, 0), color: new THREE.Color("#FF00FF") })
    mainNodes.push(nodes[0])
    nodeColors.push(...new THREE.Color("#FF00FF").toArray())

    // Service Nodes
    const servicePositions = [
      new THREE.Vector3(5, 0, 0),
      new THREE.Vector3(-5, 0, 0),
      new THREE.Vector3(0, 5, 0),
      new THREE.Vector3(0, -5, 0),
    ]
    servicePositions.forEach(p => {
      nodes.push({ position: p, color: new THREE.Color("#00D9FF") })
      mainNodes.push(nodes[nodes.length - 1])
      nodeColors.push(...new THREE.Color("#00D9FF").toArray())
    })

    const particles: Particle[] = []
    const particlePositions = new Float32Array(500 * 3)
    for (let i = 0; i < 500; i++) {
      const startNode = mainNodes[Math.floor(Math.random() * mainNodes.length)]
      const endNode = mainNodes[Math.floor(Math.random() * mainNodes.length)]
      if (startNode !== endNode) {
        const progress = Math.random()
        const position = new THREE.Vector3().lerpVectors(startNode.position, endNode.position, progress)
        position.toArray(particlePositions, i * 3)
        particles.push({ start: startNode.position, end: endNode.position, progress, speed: Math.random() * 0.005 + 0.002 })
      }
    }

    return { nodes, particles: { data: particles, positions: particlePositions } }
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
      groupRef.current.rotation.x += 0.0005
    }
    
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
    particles.data.forEach((p, i) => {
        p.progress = (p.progress + p.speed) % 1;
        new THREE.Vector3().lerpVectors(p.start, p.end, p.progress).toArray(positions, i * 3);
    });
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  })

  return (
    <group ref={groupRef}>
      {/* Nodes */}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[i === 0 ? 0.5 : 0.2, 16, 16]} />
          <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={3} toneMapped={false} />
        </mesh>
      ))}
      
      {/* Connections */}
      {nodes.map((node, i) => 
        nodes.map((otherNode, j) => {
          if (i < j) {
            const geometry = new THREE.BufferGeometry().setFromPoints([node.position, otherNode.position])
            const material = new THREE.LineBasicMaterial({
              color: "white",
              transparent: true,
              opacity: 0.1
            })
            return <primitive key={`${i}-${j}`} object={new THREE.Line(geometry, material)} />
          }
          return null
        })
      )}

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.data.length}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#00FF88" />
      </points>
    </group>
  )
}

export default MarketingNexus
