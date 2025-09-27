'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import React from 'react'

interface BarProps {
  position: [number, number, number];
  height: number;
  color: string;
}

function Bar({ position, height, color }: BarProps) {
  const ref = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime()
      const scaleY = (Math.sin(time * 2 + position[0]) + 1) / 2 * height + 0.1
      ref.current.scale.y = scaleY
    }
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[0.5, 1, 0.5]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={2} 
        toneMapped={false} 
      />
    </mesh>
  )
}

function Sparks({ count = 40 }) {
  const ref = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const xFactor = -5 + Math.random() * 10
      const yFactor = -5 + Math.random() * 10
      const zFactor = -5 + Math.random() * 10
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame((state, delta) => {
    if (ref.current) {
      particles.forEach((particle, i) => {
        let { t, factor, speed, xFactor, yFactor, zFactor } = particle
        t = particle.t += speed / 2
        const a = Math.cos(t) + Math.sin(t * 1) / 10
        const b = Math.sin(t) + Math.cos(t * 2) / 10
        const s = Math.cos(t)
        
        dummy.position.set(
          (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
          (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
          (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
        )
        dummy.scale.setScalar(s)
        dummy.updateMatrix()
        ref.current!.setMatrixAt(i, dummy.matrix)
      })
      ref.current.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05]} />
      <meshBasicMaterial color="#FFFFFF" />
    </instancedMesh>
  )
}

export default function DataVisualization() {
  const bars: BarProps[] = useMemo(() => {
    const temp: BarProps[] = []
    for (let x = -5; x <= 5; x += 1) {
      for (let z = -5; z <= 5; z += 1) {
        const height = Math.random() * 3 + 0.5
        const color = Math.random() > 0.7 ? '#00FF88' : '#FF00FF'
        temp.push({ position: [x, -2, z], height, color })
      }
    }
    return temp
  }, [])

  return (
    <>
      <fog attach="fog" args={['#050714', 12, 25]} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <group>
          {bars.map((bar, i) => (
            <Bar key={i} {...bar} />
          ))}
        </group>
      </Float>

      <Sparks />
    </>
  )
}
