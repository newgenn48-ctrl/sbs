'use client'

import * as THREE from 'three'
import React, { useMemo, useRef, useState } from 'react'
import { extend, useFrame } from '@react-three/fiber'

extend(THREE)

const PARTICLE_COUNT = 5000
const GRID_SIZE = 40

const RipplesOfEngagement = () => {
  const particlesRef = useRef<THREE.Points>(null!)
  const [ripples, setRipples] = useState<{ position: THREE.Vector3; startTime: number; maxRadius: number }[]>([])

  const particles = useMemo(() => {
    const temp = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      temp[i3] = (Math.random() - 0.5) * GRID_SIZE
      temp[i3 + 1] = (Math.random() - 0.5) * GRID_SIZE
      temp[i3 + 2] = (Math.random() - 0.5) * GRID_SIZE
    }
    return temp
  }, [])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    // Create new ripples periodically
    if (Math.random() > 0.97) {
      setRipples(prev => [
        ...prev,
        {
          position: new THREE.Vector3(
            (Math.random() - 0.5) * GRID_SIZE * 0.8,
            (Math.random() - 0.5) * GRID_SIZE * 0.8,
            (Math.random() - 0.5) * GRID_SIZE * 0.8
          ),
          startTime: elapsedTime,
          maxRadius: Math.random() * 5 + 3,
        },
      ])
    }

    // Animate particles based on ripples
    const positions = (particlesRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array
    const colors = (particlesRef.current.geometry.attributes.color as THREE.BufferAttribute).array as Float32Array
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      const particlePosition = new THREE.Vector3(particles[i3], particles[i3 + 1], particles[i3 + 2])
      let displacement = 0
      let colorIntensity = 0.2 // Base color intensity

      ripples.forEach(ripple => {
        const distance = particlePosition.distanceTo(ripple.position)
        const rippleAge = elapsedTime - ripple.startTime
        const rippleRadius = rippleAge * 3
        
        if (rippleRadius > distance && rippleRadius < ripple.maxRadius + 2) {
          const falloff = 1 - (rippleRadius - distance) / 2
          const pulse = Math.sin((distance - rippleRadius) * Math.PI * 2) * falloff
          displacement += pulse * 0.1
          colorIntensity += falloff * 0.8
        }
      })

      positions[i3 + 1] = particles[i3 + 1] + displacement
      
      const color = new THREE.Color()
      color.setHSL(0.6, 1.0, Math.min(1.0, colorIntensity))
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.geometry.attributes.color.needsUpdate = true

    // Clean up old ripples
    setRipples(prev => prev.filter(r => elapsedTime - r.startTime < (r.maxRadius + 2) / 3))
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={particles}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={new Float32Array(PARTICLE_COUNT * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.8}
      />
    </points>
  )
}

export default RipplesOfEngagement
