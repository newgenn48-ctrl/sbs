'use client'

import { Canvas } from '@react-three/fiber'
import DataStreams from '@/components/3d/DataStreams'

export default function BackgroundGeneratorPage() {
  return (
    <div className="absolute inset-0 bg-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <DataStreams />
      </Canvas>
    </div>
  )
}