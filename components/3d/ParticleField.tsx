'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Hook om mobiel te detecteren
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

function Particles({ isMobile }: { isMobile: boolean }) {
  const points = useRef<THREE.Points>(null)
  // Minder particles op mobiel voor betere performance
  const particlesCount = isMobile ? 1000 : 2000

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(particlesCount * 3)
    const colors = new Float32Array(particlesCount * 3)

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position - spread particles in a sphere-like distribution
      positions[i] = (Math.random() - 0.5) * 50
      positions[i + 1] = (Math.random() - 0.5) * 50
      positions[i + 2] = (Math.random() - 0.5) * 50

      // Color - cyan to purple gradient
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.1 + 0.5, 1, 0.5)
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    return geo
  }, [particlesCount])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.03
      points.current.rotation.y = state.clock.elapsedTime * 0.05

      // Simpele rotatie animatie - geen wave op mobiel voor betere performance
      if (!isMobile) {
        const positionsArray = points.current.geometry.attributes.position
          .array as Float32Array
        for (let i = 0; i < positionsArray.length; i += 3) {
          positionsArray[i + 1] +=
            Math.sin(state.clock.elapsedTime + positionsArray[i] * 0.1) * 0.01
        }
        points.current.geometry.attributes.position.needsUpdate = true
      }
    }
  })

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={isMobile ? 0.1 : 0.08}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function ParticleField() {
  const isMobile = useIsMobile()

  return (
    <Canvas
      camera={{ position: [0, 0, 30], fov: 75 }}
      dpr={[1, isMobile ? 1.5 : 2]}
      performance={{ min: 0.5 }}
      style={{ background: 'transparent' }}
    >
      <Particles isMobile={isMobile} />
    </Canvas>
  )
}
