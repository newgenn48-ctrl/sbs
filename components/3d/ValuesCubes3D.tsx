'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox, Line } from '@react-three/drei'

interface ValueCube {
  position: [number, number, number]
  color: string
  rotationSpeed: number
  floatSpeed: number
}

// 3D Value Cubes - Floating cubes representing company values
export default function ValuesCubes3D() {
  const groupRef = useRef<THREE.Group>(null)
  const cubesRef = useRef<THREE.Group>(null)

  // Value cubes configuration
  const valueCubes: ValueCube[] = useMemo(() => [
    { position: [-3, 1, 0], color: '#00D9FF', rotationSpeed: 0.3, floatSpeed: 1.2 },
    { position: [3, -0.5, 1], color: '#A855F7', rotationSpeed: 0.25, floatSpeed: 1.5 },
    { position: [-1, -1.5, -1], color: '#00FF88', rotationSpeed: 0.35, floatSpeed: 1.3 },
    { position: [2, 1.5, -0.5], color: '#FF6B6B', rotationSpeed: 0.28, floatSpeed: 1.4 },
  ], [])

  // Connecting lines between cubes
  const connections = useMemo(() => {
    const lines = []
    for (let i = 0; i < valueCubes.length; i++) {
      for (let j = i + 1; j < valueCubes.length; j++) {
        lines.push({
          start: valueCubes[i].position,
          end: valueCubes[j].position,
          color: valueCubes[i].color,
        })
      }
    }
    return lines
  }, [valueCubes])

  // Floating particles around cubes
  const particles = useMemo(() => {
    const p = []
    for (let i = 0; i < 40; i++) {
      p.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4 - 1,
        ] as [number, number, number],
        size: 0.02 + Math.random() * 0.03,
        speed: 0.5 + Math.random() * 0.5,
        offset: Math.random() * Math.PI * 2,
      })
    }
    return p
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Gentle group rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1
    }

    // Animate cubes
    if (cubesRef.current) {
      cubesRef.current.children.forEach((cube, i) => {
        const cubeData = valueCubes[i]
        if (cubeData) {
          cube.rotation.x = t * cubeData.rotationSpeed
          cube.rotation.y = t * cubeData.rotationSpeed * 0.7
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Value cubes */}
      <group ref={cubesRef}>
        {valueCubes.map((cube, i) => (
          <Float key={i} speed={cube.floatSpeed} rotationIntensity={0.2} floatIntensity={0.4}>
            <group position={cube.position}>
              {/* Outer glow */}
              <RoundedBox args={[0.9, 0.9, 0.9]} radius={0.1} smoothness={4}>
                <meshStandardMaterial
                  color={cube.color}
                  emissive={cube.color}
                  emissiveIntensity={0.3}
                  transparent
                  opacity={0.15}
                />
              </RoundedBox>
              {/* Main cube */}
              <RoundedBox args={[0.6, 0.6, 0.6]} radius={0.08} smoothness={4}>
                <meshStandardMaterial
                  color={cube.color}
                  emissive={cube.color}
                  emissiveIntensity={1.5}
                  metalness={0.3}
                  roughness={0.2}
                />
              </RoundedBox>
              {/* Inner core */}
              <mesh>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial
                  color="#ffffff"
                  emissive={cube.color}
                  emissiveIntensity={2}
                  transparent
                  opacity={0.8}
                />
              </mesh>
              {/* Orbiting particles */}
              {[0, 1, 2, 3].map((j) => (
                <mesh
                  key={j}
                  position={[
                    Math.cos((j / 4) * Math.PI * 2) * 0.7,
                    Math.sin((j / 4) * Math.PI * 2) * 0.7,
                    0,
                  ]}
                >
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial
                    color={cube.color}
                    emissive={cube.color}
                    emissiveIntensity={2}
                    transparent
                    opacity={0.8}
                  />
                </mesh>
              ))}
            </group>
          </Float>
        ))}
      </group>

      {/* Connection lines */}
      {connections.map((line, i) => (
        <Line
          key={i}
          points={[line.start, line.end]}
          color={line.color}
          transparent
          opacity={0.15}
          lineWidth={1}
        />
      ))}

      {/* Ambient particles */}
      {particles.map((p, i) => (
        <mesh key={i} position={p.position}>
          <sphereGeometry args={[p.size, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}

      {/* Lighting */}
      <pointLight position={[0, 3, 2]} intensity={1} color="#00D9FF" distance={10} />
      <pointLight position={[-3, -2, 0]} intensity={0.8} color="#A855F7" distance={8} />
    </group>
  )
}
