'use client'

import DeferredCanvas from './DeferredCanvas'
import CompanyDNA3D from './CompanyDNA3D'
import FounderShowcase3D from './FounderShowcase3D'
import ValuesCubes3D from './ValuesCubes3D'

interface About3DSceneProps {
  scene: 'hero' | 'founder' | 'values'
}

export default function About3DScene({ scene }: About3DSceneProps) {
  return (
    <DeferredCanvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00D9FF" />
      <pointLight position={[-10, -5, 5]} intensity={0.5} color="#8338EC" />
      {scene === 'hero' && <CompanyDNA3D />}
      {scene === 'founder' && <FounderShowcase3D />}
      {scene === 'values' && <ValuesCubes3D />}
    </DeferredCanvas>
  )
}
