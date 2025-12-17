'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const PARTICLE_COUNT = 5000
const GRID_SIZE = 20
const LINE_COUNT = 100

export default function DigitalBlueprint() {
  const particlesRef = useRef<THREE.Points>(null!)
  const linesRef = useRef<THREE.LineSegments>(null!)
  const lineConnectionsRef = useRef<{ start: number; end: number; life: number; progress: number }[]>([])

  const { particleGeometry, lineGeometry, particles } = useMemo(() => {
    const particlePositions = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      particlePositions[i3] = (Math.random() - 0.5) * GRID_SIZE
      particlePositions[i3 + 1] = (Math.random() - 0.5) * GRID_SIZE
      particlePositions[i3 + 2] = (Math.random() - 0.5) * GRID_SIZE
    }

    const particleGeometry = new THREE.BufferGeometry()
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3))

    const linePositions = new Float32Array(LINE_COUNT * 6)
    const lineColors = new Float32Array(LINE_COUNT * 6)

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))

    const lineConnections = []
    for (let i = 0; i < LINE_COUNT; i++) {
      lineConnections.push({
        start: Math.floor(Math.random() * PARTICLE_COUNT),
        end: Math.floor(Math.random() * PARTICLE_COUNT),
        life: Math.random() * 5 + 2,
        progress: 0,
      })
    }
    lineConnectionsRef.current = lineConnections

    return { particleGeometry, lineGeometry, particles: particlePositions }
  }, [])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    if (particlesRef.current) {
      particlesRef.current.rotation.y = elapsedTime * 0.05
      particlesRef.current.rotation.x = elapsedTime * 0.02
    }

    if (linesRef.current && lineConnectionsRef.current.length > 0) {
      const positions = linesRef.current.geometry.attributes.position.array as Float32Array
      const colors = linesRef.current.geometry.attributes.color.array as Float32Array

      lineConnectionsRef.current.forEach((line, i) => {
        line.progress += 0.01

        const lifeCycle = Math.sin(Math.PI * (line.progress / line.life))

        if (line.progress > line.life) {
          line.start = Math.floor(Math.random() * PARTICLE_COUNT)
          line.end = Math.floor(Math.random() * PARTICLE_COUNT)
          line.progress = 0
        }

        const startParticleIndex = line.start * 3
        const endParticleIndex = line.end * 3

        const lineIndex = i * 6
        positions[lineIndex] = particles[startParticleIndex]
        positions[lineIndex + 1] = particles[startParticleIndex + 1]
        positions[lineIndex + 2] = particles[startParticleIndex + 2]
        positions[lineIndex + 3] = particles[endParticleIndex]
        positions[lineIndex + 4] = particles[endParticleIndex + 1]
        positions[lineIndex + 5] = particles[endParticleIndex + 2]

        const alpha = lifeCycle * 0.5 + 0.5
        colors[lineIndex] = alpha
        colors[lineIndex + 1] = alpha
        colors[lineIndex + 2] = alpha
        colors[lineIndex + 3] = alpha
        colors[lineIndex + 4] = alpha
        colors[lineIndex + 5] = alpha
      })

      linesRef.current.geometry.attributes.position.needsUpdate = true
      linesRef.current.geometry.attributes.color.needsUpdate = true
      linesRef.current.rotation.copy(particlesRef.current.rotation)
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.03}
          color="#8A2BE2"
          sizeAttenuation
          transparent
          opacity={0.7}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.5}
        />
      </lineSegments>
    </>
  )
}
