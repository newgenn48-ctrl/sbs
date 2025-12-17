'use client'

import React, { useRef, useMemo, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

const RipplesOfEngagement = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const pointsRef = useRef<THREE.Points>(null!)

  const [ripples, setRipples] = useState<{ id: number; time: number; maxTime: number }[]>([])
  const nextRippleId = useRef(0)

  const PARTICLE_COUNT = 3000
  const BASE_COLOR = useMemo(() => new THREE.Color('#ffffff'), [])
  const ENGAGED_COLOR = useMemo(() => new THREE.Color('#ff006e'), [])

  const particles = useMemo(() => {
    const p = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3
      p[i3] = (Math.random() - 0.5) * 15
      p[i3+1] = (Math.random() - 0.5) * 5
      p[i3+2] = (Math.random() - 0.5) * 15
      BASE_COLOR.toArray(colors, i3)
    }
    return { positions: p, colors }
  }, [BASE_COLOR])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.03
    }

    // Spawn a new ripple every 2 seconds
    if (Math.floor(time) % 2 === 0 && !ripples.find(r => r.time < 0.1)) {
      setRipples(prev => [...prev, { id: nextRippleId.current++, time: 0, maxTime: 2.5 }])
    }

    // Update ripples
    setRipples(currentRipples =>
      currentRipples
        .map(ripple => ({ ...ripple, time: ripple.time + 0.02 }))
        .filter(ripple => ripple.time < ripple.maxTime)
    )

    // Update particle colors based on all active ripples
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      const colors = pointsRef.current.geometry.attributes.color.array as Float32Array

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3
        const distance = Math.sqrt(positions[i3]**2 + positions[i3+2]**2)

        let engaged = false
        for (const ripple of ripples) {
          const rippleRadius = (ripple.time / ripple.maxTime) * 10
          if (Math.abs(distance - rippleRadius) < 0.2) {
            engaged = true
            break
          }
        }

        if (engaged) {
          ENGAGED_COLOR.toArray(colors, i3)
        }
      }
      pointsRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {/* The Sea of Visitors */}
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[particles.positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[particles.colors, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.03} vertexColors transparent opacity={0.7} />
        </points>

        {/* Central Icon */}
        <mesh scale={0.5}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#ff006e"
            emissive="#ff006e"
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>

        {/* The Ripples */}
        {ripples.map(ripple => (
          <mesh key={ripple.id} rotation-x={-Math.PI / 2} scale={(ripple.time / ripple.maxTime) * 10}>
            <ringGeometry args={[0.98, 1, 64]} />
            <meshBasicMaterial color="#ffffff" toneMapped={false} side={THREE.DoubleSide} transparent opacity={1 - (ripple.time / ripple.maxTime)} />
          </mesh>
        ))}
      </group>

      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.8} height={512} intensity={1.5} kernelSize={2} />
      </EffectComposer>
    </>
  )
}

export default RipplesOfEngagement
