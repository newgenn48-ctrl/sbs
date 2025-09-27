'use client'

import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'

extend(THREE)

const PARTICLE_COUNT = 2000
const NODE_COUNT = 5
const AREA_SIZE = 30

const DataStreams = () => {
  const particlesRef = useRef<THREE.Points>(null!)
  const nodesRef = useRef<THREE.Group>(null!)

  const { particles, nodes } = useMemo(() => {
    const particles = new Float32Array(PARTICLE_COUNT * 3)
    const particleSpeeds = new Float32Array(PARTICLE_COUNT)
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      particles[i3] = (Math.random() - 0.5) * AREA_SIZE
      particles[i3 + 1] = (Math.random() - 0.5) * AREA_SIZE
      particles[i3 + 2] = (Math.random() - 0.5) * AREA_SIZE
      particleSpeeds[i] = Math.random() * 0.02 + 0.005
    }

    const nodes = []
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * AREA_SIZE * 0.8,
          (Math.random() - 0.5) * AREA_SIZE * 0.8,
          (Math.random() - 0.5) * AREA_SIZE * 0.8
        ),
        intensity: 0,
        life: Math.random() * 5 + 5,
        progress: Math.random() * 10,
      })
    }

    return { particles, particleSpeeds, nodes }
  }, [])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    const positions = (particlesRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array

    // Animate nodes
    nodes.forEach((node, i) => {
      node.progress += 0.01
      const lifeCycle = Math.sin(Math.PI * (node.progress / node.life))
      node.intensity = lifeCycle > 0 ? lifeCycle * 5 : 0
      
      if (node.progress > node.life) {
        node.progress = 0
        node.position.set(
          (Math.random() - 0.5) * AREA_SIZE * 0.8,
          (Math.random() - 0.5) * AREA_SIZE * 0.8,
          (Math.random() - 0.5) * AREA_SIZE * 0.8
        )
      }
      
      const light = nodesRef.current.children[i] as THREE.PointLight
      if (light) {
        light.intensity = node.intensity
        light.position.copy(node.position)
      }
    })

    // Animate particles towards nodes
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      
      // Find closest node
      let closestNode = nodes[0]
      let minDistance = Infinity
      nodes.forEach(node => {
        const distance = new THREE.Vector3(positions[i3], positions[i3+1], positions[i3+2]).distanceTo(node.position)
        if (distance < minDistance) {
          minDistance = distance
          closestNode = node
        }
      })

      const direction = new THREE.Vector3().subVectors(closestNode.position, new THREE.Vector3(positions[i3], positions[i3+1], positions[i3+2])).normalize()
      
      positions[i3] += direction.x * 0.05
      positions[i3 + 1] += direction.y * 0.05
      positions[i3 + 2] += direction.z * 0.05

      // Reset if too close
      if (minDistance < 0.5) {
        positions[i3] = (Math.random() - 0.5) * AREA_SIZE
        positions[i3 + 1] = (Math.random() - 0.5) * AREA_SIZE
        positions[i3 + 2] = (Math.random() - 0.5) * AREA_SIZE
      }
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.rotation.y = elapsedTime * 0.02
  })

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.05} 
          color="#00D9FF" 
          sizeAttenuation
          transparent
          opacity={0.6}
        />
      </points>
      <group ref={nodesRef}>
        {nodes.map((node, i) => (
          <pointLight 
            key={i}
            position={node.position}
            distance={10}
            intensity={0}
            color="#FF00FF"
          />
        ))}
      </group>
    </>
  )
}

export default DataStreams
