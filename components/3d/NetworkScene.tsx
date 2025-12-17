'use client'

import { Canvas } from '@react-three/fiber'
import DigitalNetwork from './DigitalNetwork'

export default function NetworkScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <DigitalNetwork />
    </Canvas>
  )
}
