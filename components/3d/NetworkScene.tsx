'use client'

import { Canvas } from '@react-three/fiber'
import { useEffect, useState } from 'react'
import ITServiceHub from './ITServiceHub'

function Scene({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-10, -5, 5]} intensity={0.4} color="#00D9FF" />
      <group scale={isMobile ? 1.3 : 1}>
        <ITServiceHub />
      </group>
    </>
  )
}

export default function NetworkScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 1, isMobile ? 7 : 9], fov: isMobile ? 55 : 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Scene isMobile={isMobile} />
    </Canvas>
  )
}
