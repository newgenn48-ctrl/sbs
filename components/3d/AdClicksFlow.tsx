'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Text, Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

// Represents clicks flowing through ad funnel to conversions
const AdClicksFlow = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const particlesRef = useRef<THREE.Points>(null!)
  
  const PARTICLE_COUNT = 1500
  
  // Create particles that flow from top (impressions) to bottom (conversions)
  const { positions, velocities, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const sizes = new Float32Array(PARTICLE_COUNT)
    const velocities: number[] = []
    
    const impressionColor = new THREE.Color('#00D9FF') // Blue for impressions
    const clickColor = new THREE.Color('#FF00FF') // Purple for clicks
    const conversionColor = new THREE.Color('#00FF88') // Green for conversions
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      // Start at random Y positions along the funnel
      const startY = Math.random() * 8 - 2
      const funnelWidth = (startY + 4) * 0.5 + 0.5 // Wider at top, narrow at bottom
      const angle = Math.random() * Math.PI * 2
      
      positions[i3] = Math.cos(angle) * funnelWidth * Math.random()
      positions[i3 + 1] = startY
      positions[i3 + 2] = Math.sin(angle) * funnelWidth * Math.random()
      
      velocities.push(0.02 + Math.random() * 0.03) // Downward speed
      
      // Color based on position (stage in funnel)
      if (startY > 2) {
        impressionColor.toArray(colors, i3)
      } else if (startY > -1) {
        clickColor.toArray(colors, i3)
      } else {
        conversionColor.toArray(colors, i3)
      }
      
      sizes[i] = 0.03 + Math.random() * 0.02
    }
    
    return { positions, velocities, colors, sizes }
  }, [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
    
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array
      const cols = particlesRef.current.geometry.attributes.color.array as Float32Array
      
      const impressionColor = new THREE.Color('#00D9FF')
      const clickColor = new THREE.Color('#FF00FF')
      const conversionColor = new THREE.Color('#00FF88')
      
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        
        // Move particles down
        pos[i3 + 1] -= velocities[i]
        
        // Narrow the path as they go down (funnel effect)
        const y = pos[i3 + 1]
        const targetRadius = Math.max(0.3, (y + 4) * 0.4)
        const currentRadius = Math.sqrt(pos[i3] ** 2 + pos[i3 + 2] ** 2)
        
        if (currentRadius > targetRadius) {
          const scale = targetRadius / currentRadius
          pos[i3] *= scale * 0.99
          pos[i3 + 2] *= scale * 0.99
        }
        
        // Update color based on Y position
        if (y > 2) {
          impressionColor.toArray(cols, i3)
        } else if (y > -1) {
          clickColor.toArray(cols, i3)
        } else {
          conversionColor.toArray(cols, i3)
        }
        
        // Reset particle when it reaches bottom
        if (y < -4) {
          const angle = Math.random() * Math.PI * 2
          const radius = 2 + Math.random() * 1.5
          pos[i3] = Math.cos(angle) * radius
          pos[i3 + 1] = 6 + Math.random() * 2
          pos[i3 + 2] = Math.sin(angle) * radius
        }
      }
      
      particlesRef.current.geometry.attributes.position.needsUpdate = true
      particlesRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {/* Funnel rings to show stages */}
        {[4, 1.5, -1, -3].map((y, i) => (
          <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[Math.max(0.5, (y + 4) * 0.4), 0.02, 8, 64]} />
            <meshStandardMaterial
              color={i === 3 ? '#00FF88' : i === 2 ? '#FF00FF' : '#00D9FF'}
              emissive={i === 3 ? '#00FF88' : i === 2 ? '#FF00FF' : '#00D9FF'}
              emissiveIntensity={2}
              transparent
              opacity={0.6}
            />
          </mesh>
        ))}
        
        {/* Particles */}
        <points ref={particlesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.05}
            vertexColors
            transparent
            opacity={0.8}
            sizeAttenuation
          />
        </points>
        
        {/* Conversion glow at bottom */}
        <mesh position={[0, -4, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={3}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
      
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.2} intensity={1.5} kernelSize={2} />
      </EffectComposer>
    </>
  )
}

export default AdClicksFlow
