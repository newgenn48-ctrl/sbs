'use client'

import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { extend, useFrame } from '@react-three/fiber'

extend(THREE)

const PARTICLE_COUNT = 300
const RING_COUNT = 5
const PATH_RADIUS = 5

const AutomationFunnel = () => {
  const particlesRef = useRef<THREE.Points>(null!)

  const { curve, rings } = useMemo(() => {
    const points = [
      new THREE.Vector3(0, 10, 0),
      new THREE.Vector3(PATH_RADIUS, 5, 0),
      new THREE.Vector3(0, 0, PATH_RADIUS),
      new THREE.Vector3(-PATH_RADIUS, -5, 0),
      new THREE.Vector3(0, -10, -PATH_RADIUS),
    ]
    const curve = new THREE.CatmullRomCurve3(points, true, 'catmullrom', 0.75)
    
    const rings = []
    for (let i = 0; i < RING_COUNT; i++) {
      rings.push({
        position: curve.getPointAt((i / RING_COUNT + 0.1) % 1),
        rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
      })
    }
    return { curve, rings }
  }, [])

  const particles = useMemo(() => {
    const temp = new Float32Array(PARTICLE_COUNT * 3)
    const particleData = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const progress = Math.random()
      curve.getPoint(progress, new THREE.Vector3()).toArray(temp, i * 3)
      particleData.push({ progress, speed: Math.random() * 0.003 + 0.002 })
    }
    return { positions: temp, data: particleData }
  }, [curve])

  useFrame(({ clock }) => {
    const positions = (particlesRef.current.geometry.attributes.position as THREE.BufferAttribute).array as Float32Array
    
    particles.data.forEach((p, i) => {
      p.progress = (p.progress + p.speed) % 1
      curve.getPoint(p.progress, new THREE.Vector3()).toArray(positions, i * 3)
    })

    particlesRef.current.geometry.attributes.position.needsUpdate = true
    particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05
  })

  return (
    <group>
      {rings.map((ring, i) => (
        <mesh key={i} position={ring.position} rotation={ring.rotation}>
          <torusGeometry args={[1, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color="#00D9FF" 
            emissive="#00D9FF"
            emissiveIntensity={2}
            wireframe
          />
        </mesh>
      ))}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#00FF88"
          sizeAttenuation
        />
      </points>
    </group>
  )
}

export default AutomationFunnel
