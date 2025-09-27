'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const PARTICLE_COUNT = 5000
const GRID_SIZE = 20
const LINE_COUNT = 100

// Custom easing function
function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function DigitalBlueprint() {
  const particlesRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)

  const { particles, lineConnections } = useMemo(() => {
    const particles = new Float32Array(PARTICLE_COUNT * 3)
    const velocities = new Float32Array(PARTICLE_COUNT * 3)
    
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      particles[i3] = (Math.random() - 0.5) * GRID_SIZE
      particles[i3 + 1] = (Math.random() - 0.5) * GRID_SIZE
      particles[i3 + 2] = (Math.random() - 0.5) * GRID_SIZE
      
      velocities[i3] = (Math.random() - 0.5) * 0.001
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.001
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.001
    }

    const linePositions = new Float32Array(LINE_COUNT * 6)
    const lineConnections = []
    for (let i = 0; i < LINE_COUNT; i++) {
      const startIndex = Math.floor(Math.random() * PARTICLE_COUNT)
      const endIndex = Math.floor(Math.random() * PARTICLE_COUNT)
      lineConnections.push({
        start: startIndex,
        end: endIndex,
        alpha: 0,
        life: Math.random() * 5 + 2,
        progress: 0,
      })
    }

    return { particles, lineConnections }
  }, [])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    if (particlesRef.current) {
      particlesRef.current.rotation.y = elapsedTime * 0.05
      particlesRef.current.rotation.x = elapsedTime * 0.02
    }

    if (linesRef.current) {
      const positions = (linesRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array
      const colors = (linesRef.current.geometry.attributes.color as THREE.BufferAttribute).array as Float32Array
      
      lineConnections.forEach((line, i) => {
        line.progress += 0.01
        
        const lifeCycle = Math.sin(Math.PI * (line.progress / line.life))
        
        if (line.progress > line.life) {
          line.start = Math.floor(Math.random() * PARTICLE_COUNT)
          line.end = Math.floor(Math.random() * PARTICLE_COUNT)
          line.progress = 0
        }

        const startParticleIndex = line.start * 3
        const endParticleIndex = line.end * 3

        const startX = particles[startParticleIndex]
        const startY = particles[startParticleIndex + 1]
        const startZ = particles[startParticleIndex + 2]

        const endX = particles[endParticleIndex]
        const endY = particles[endParticleIndex + 1]
        const endZ = particles[endParticleIndex + 2]

        const lineIndex = i * 6
        positions[lineIndex] = startX
        positions[lineIndex + 1] = startY
        positions[lineIndex + 2] = startZ
        positions[lineIndex + 3] = endX
        positions[lineIndex + 4] = endY
        positions[lineIndex + 5] = endZ

        const alpha = easeInOutCubic(lifeCycle)
        
        colors[lineIndex] = 1
        colors[lineIndex + 1] = 1
        colors[lineIndex + 2] = 1
        colors[lineIndex + 3] = 1
        colors[lineIndex + 4] = 1
        colors[lineIndex + 5] = 1
      })

      linesRef.current.geometry.attributes.position.needsUpdate = true
      linesRef.current.geometry.attributes.color.needsUpdate = true
      linesRef.current.rotation.copy(particlesRef.current.rotation)
    }
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
          size={0.03} 
          color="#8A2BE2" 
          sizeAttenuation 
          transparent
          opacity={0.7}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={LINE_COUNT * 2}
            array={new Float32Array(LINE_COUNT * 6)}
            itemSize={3}
          />
           <bufferAttribute
            attach="attributes-color"
            count={LINE_COUNT * 2}
            array={new Float32Array(LINE_COUNT * 6)}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          vertexColors
          linewidth={1}
          transparent
          opacity={0.5}
        />
      </lineSegments>
    </>
  )
}