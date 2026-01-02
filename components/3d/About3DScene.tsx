'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import CompanyDNA3D from './CompanyDNA3D'
import FounderShowcase3D from './FounderShowcase3D'
import ValuesCubes3D from './ValuesCubes3D'

interface About3DSceneProps {
  scene: 'hero' | 'founder' | 'values'
}

export default function About3DScene({ scene }: About3DSceneProps) {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00D9FF" />
      <pointLight position={[-10, -5, 5]} intensity={0.5} color="#8338EC" />
      <Suspense fallback={null}>
        {scene === 'hero' && <CompanyDNA3D />}
        {scene === 'founder' && <FounderShowcase3D />}
        {scene === 'values' && <ValuesCubes3D />}
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        autoRotate={false}
      />
    </Canvas>
  )
}
