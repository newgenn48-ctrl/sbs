'use client'

import * as THREE from 'three'
import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

// Floating orbs spread across entire page height
function FloatingOrbs() {
  const groupRef = useRef<THREE.Group>(null)

  const orbs = useMemo(() => [
    // Top area
    { position: [-25, 100, -25], color: '#00D9FF', size: 12, opacity: 0.12 },
    { position: [30, 80, -30], color: '#8338EC', size: 15, opacity: 0.10 },
    { position: [-20, 60, -20], color: '#00FF88', size: 10, opacity: 0.12 },
    // Middle-top
    { position: [35, 30, -35], color: '#00D9FF', size: 14, opacity: 0.10 },
    { position: [-35, 10, -25], color: '#8338EC', size: 12, opacity: 0.11 },
    // Center
    { position: [15, -20, -30], color: '#00FF88', size: 11, opacity: 0.12 },
    { position: [-30, -50, -22], color: '#00D9FF', size: 13, opacity: 0.11 },
    // Middle-bottom
    { position: [25, -80, -28], color: '#8338EC', size: 15, opacity: 0.10 },
    { position: [-20, -110, -25], color: '#00FF88', size: 10, opacity: 0.12 },
    // Bottom area
    { position: [30, -150, -30], color: '#00D9FF', size: 14, opacity: 0.11 },
    { position: [-25, -180, -25], color: '#8338EC', size: 12, opacity: 0.12 },
    { position: [15, -220, -28], color: '#00FF88', size: 16, opacity: 0.10 },
    { position: [-30, -260, -22], color: '#00D9FF', size: 11, opacity: 0.12 },
    { position: [20, -300, -30], color: '#8338EC', size: 14, opacity: 0.11 },
  ], [])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((orb, i) => {
        orb.position.y += Math.sin(clock.getElapsedTime() * 0.12 + i * 1.2) * 0.01
        orb.position.x += Math.cos(clock.getElapsedTime() * 0.08 + i * 1.5) * 0.006
      })
    }
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <mesh key={i} position={orb.position as [number, number, number]}>
          <sphereGeometry args={[orb.size, 32, 32]} />
          <meshBasicMaterial
            color={orb.color}
            transparent
            opacity={orb.opacity}
          />
        </mesh>
      ))}
    </group>
  )
}

// Particles spread across full page
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 150

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorOptions = [
      new THREE.Color('#00D9FF'),
      new THREE.Color('#8338EC'),
      new THREE.Color('#00FF88'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80
      // Spread from +150 to -350 (covers full page scroll)
      positions[i * 3 + 1] = Math.random() * 500 - 350
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 15

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.005
    }
  })

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.18}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Animated grids at different heights
function AnimatedGrids() {
  const topGridRef = useRef<THREE.PlaneGeometry>(null)
  const bottomGridRef = useRef<THREE.PlaneGeometry>(null)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.3

    if (topGridRef.current) {
      const positions = topGridRef.current.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        positions[i + 2] = Math.sin(x * 0.04 + time) * Math.cos(y * 0.04 + time) * 2
      }
      topGridRef.current.attributes.position.needsUpdate = true
    }

    if (bottomGridRef.current) {
      const positions = bottomGridRef.current.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i]
        const y = positions[i + 1]
        positions[i + 2] = Math.sin(x * 0.03 + time * 0.8) * Math.cos(y * 0.03 + time * 0.8) * 2.5
      }
      bottomGridRef.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <>
      {/* Top grid */}
      <mesh rotation={[-Math.PI / 2.5, 0, 0]} position={[0, 50, -40]}>
        <planeGeometry ref={topGridRef} args={[120, 120, 40, 40]} />
        <meshBasicMaterial color="#00D9FF" wireframe transparent opacity={0.06} />
      </mesh>
      {/* Bottom grid */}
      <mesh rotation={[-Math.PI / 2.5, 0, 0.2]} position={[0, -200, -35]}>
        <planeGeometry ref={bottomGridRef} args={[140, 140, 45, 45]} />
        <meshBasicMaterial color="#8338EC" wireframe transparent opacity={0.06} />
      </mesh>
    </>
  )
}

// Camera that follows scroll
function ScrollCamera() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useFrame(({ camera }) => {
    // Move camera down as user scrolls (scaled down for 3D space)
    const targetY = -scrollY * 0.08
    camera.position.y += (targetY - camera.position.y) * 0.05
  })

  return null
}

function BackgroundContent() {
  return (
    <>
      <ScrollCamera />
      <FloatingOrbs />
      <Particles />
      <AnimatedGrids />
    </>
  )
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 50], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <BackgroundContent />
      </Canvas>
    </div>
  )
}
