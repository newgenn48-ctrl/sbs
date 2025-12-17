'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Environment } from '@react-three/drei'

const Funnel = () => {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.005
  })
  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]}>
      <coneGeometry args={[1.5, 4, 8, 1, true]} />
      <meshStandardMaterial
        wireframe
        color="#ff006e"
        emissive="#ff006e"
        emissiveIntensity={1.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

const Particles = () => {
  const count = 500 // Optimized from 2000 for better performance
  const ref = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100
      const factor = 20 + Math.random() * 100
      const speed = 0.01 + Math.random() / 200
      const x = Math.random() * 2 - 1
      const y = Math.random() * 2 - 1
      const z = Math.random() * 2 - 1
      temp.push({ t, factor, speed, x, y, z, mx: 0, my: 0 })
    }
    return temp
  }, [count])

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle
      t = particle.t += speed
      const a = Math.cos(t) + Math.sin(t * 1) / 10
      const b = Math.sin(t) + Math.cos(t * 2) / 10
      const s = Math.max(1.5, Math.cos(t) * 5)

      particle.mx += (0 - particle.mx) * 0.01
      particle.my += (0 - particle.my) * 0.01

      dummy.position.set(
        (particle.mx / 10) * a + x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      )
      dummy.scale.setScalar(s)
      dummy.rotation.set(s * 5, s * 5, s * 5)
      dummy.updateMatrix()
      ref.current!.setMatrixAt(i, dummy.matrix)
    })
    ref.current!.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 6, 6]} />
      <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={2} roughness={0} metalness={0.5} />
    </instancedMesh>
  )
}

const AutomationFunnel = () => {
  return (
    <>
      <ambientLight intensity={0.8} />
      <Environment preset="sunset" />
      <Funnel />
      <Particles />
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={512} intensity={1.2} kernelSize={2} />
      </EffectComposer>
    </>
  )
}

export default AutomationFunnel
