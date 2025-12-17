'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial } from '@react-three/drei'
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

function AnimatedSphere({ isMobile }: { isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  // Minder segmenten op mobiel voor betere performance
  const segments = isMobile ? 48 : 64

  return (
    <Sphere ref={meshRef} args={[1, segments, segments]} scale={isMobile ? 2 : 2.5}>
      <MeshDistortMaterial
        color="#00D9FF"
        attach="material"
        distort={isMobile ? 0.3 : 0.5}
        speed={isMobile ? 1.5 : 2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  )
}

export default function HeroScene() {
  const isMobile = useIsMobile()

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 50 }}
      gl={{ alpha: true, antialias: !isMobile }}
      dpr={[1, isMobile ? 1.5 : 2]}
      performance={{ min: 0.5 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8338EC" />
      <AnimatedSphere isMobile={isMobile} />
    </Canvas>
  )
}
