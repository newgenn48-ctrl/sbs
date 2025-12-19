'use client'

import * as THREE from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'

// Premium glass sphere - central element
function GlassSphere() {
  const meshRef = useRef<THREE.Mesh>(null)
  const innerRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1
    }
    if (innerRef.current) {
      innerRef.current.rotation.y = -clock.getElapsedTime() * 0.2
      innerRef.current.rotation.x = clock.getElapsedTime() * 0.15
    }
  })

  return (
    <group>
      {/* Outer glass sphere */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 64, 64]} />
        <MeshTransmissionMaterial
          backside
          samples={16}
          thickness={0.5}
          chromaticAberration={0.02}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.2}
          temporalDistortion={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          transmission={0.95}
          roughness={0.05}
          color="#ffffff"
        />
      </mesh>

      {/* Inner geometric core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#00D9FF"
          emissive="#00D9FF"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#00D9FF"
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

// Service icon - floating holographic panel
function ServicePanel({
  position,
  rotation,
  color,
  delay
}: {
  position: [number, number, number]
  rotation: [number, number, number]
  color: string
  delay: number
}) {
  const groupRef = useRef<THREE.Group>(null)
  const panelRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + delay) * 0.15
    }
    if (panelRef.current) {
      panelRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3 + delay) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Panel background */}
        <mesh ref={panelRef}>
          <planeGeometry args={[1.2, 0.8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Panel border */}
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[1.25, 0.85]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.4}
            wireframe
          />
        </mesh>

        {/* Icon representation - abstract shapes */}
        <mesh position={[0, 0, 0.02]}>
          <circleGeometry args={[0.15, 6]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>

        {/* Data lines */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[0.3, 0.15 - i * 0.15, 0.02]}>
            <planeGeometry args={[0.5, 0.04]} />
            <meshBasicMaterial color={color} transparent opacity={0.6} />
          </mesh>
        ))}
      </Float>
    </group>
  )
}

// Orbital ring with data flow
function DataRing({ radius, color, speed, thickness = 0.02 }: {
  radius: number
  color: string
  speed: number
  thickness?: number
}) {
  const ringRef = useRef<THREE.Mesh>(null)
  const dotRef = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * speed * 0.1
    }
    if (dotRef.current) {
      const angle = clock.getElapsedTime() * speed
      dotRef.current.position.x = Math.cos(angle) * radius
      dotRef.current.position.y = Math.sin(angle) * radius
    }
  })

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {/* Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, thickness, 16, 100]} />
        <meshBasicMaterial color={color} transparent opacity={0.2} />
      </mesh>

      {/* Moving data point */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          toneMapped={false}
        />
      </mesh>
    </group>
  )
}

// Floating particles representing data/connectivity
function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 150

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorOptions = [
      new THREE.Color('#00D9FF'),
      new THREE.Color('#8338EC'),
      new THREE.Color('#00FF88'),
      new THREE.Color('#FF6B9D'),
    ]

    for (let i = 0; i < count; i++) {
      // Distribute in a sphere around center
      const radius = 2.5 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b

      sizes[i] = Math.random() * 0.03 + 0.01
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    return geo
  }, [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return (
    <points ref={particlesRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Connection beams from center to panels
function ConnectionBeam({
  target,
  color
}: {
  target: [number, number, number]
  color: string
}) {
  const meshRef = useRef<THREE.Mesh>(null)

  const { position, rotation, length } = useMemo(() => {
    const start = new THREE.Vector3(0, 0, 0)
    const end = new THREE.Vector3(target[0] * 0.6, target[1] * 0.6, target[2] * 0.6)
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5)
    const len = start.distanceTo(end)

    // Calculate rotation to point from start to end
    const direction = new THREE.Vector3().subVectors(end, start).normalize()
    const up = new THREE.Vector3(0, 1, 0)
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction)
    const euler = new THREE.Euler().setFromQuaternion(quaternion)

    return {
      position: [mid.x, mid.y, mid.z] as [number, number, number],
      rotation: [euler.x, euler.y, euler.z] as [number, number, number],
      length: len
    }
  }, [target])

  useFrame(({ clock }) => {
    if (meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as THREE.MeshBasicMaterial
      mat.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 2) * 0.1
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <cylinderGeometry args={[0.015, 0.015, length, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.25} />
    </mesh>
  )
}

// Main component
export default function ITServiceHub() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05
    }
  })

  // Service panel positions - arranged around the sphere
  const services = [
    { position: [-2.8, 1, 0.5] as [number, number, number], rotation: [0, 0.3, 0] as [number, number, number], color: '#00D9FF', delay: 0 },
    { position: [2.8, 0.8, 0.5] as [number, number, number], rotation: [0, -0.3, 0] as [number, number, number], color: '#8338EC', delay: 1 },
    { position: [-2.5, -1, 0.8] as [number, number, number], rotation: [0, 0.2, 0] as [number, number, number], color: '#00FF88', delay: 2 },
    { position: [2.6, -1.2, 0.5] as [number, number, number], rotation: [0, -0.2, 0] as [number, number, number], color: '#FF6B9D', delay: 3 },
  ]

  return (
    <group ref={groupRef}>
      {/* Central glass sphere */}
      <GlassSphere />

      {/* Data rings */}
      <DataRing radius={2.2} color="#00D9FF" speed={0.5} />
      <group rotation={[0.5, 0, 0.3]}>
        <DataRing radius={2.6} color="#8338EC" speed={-0.4} />
      </group>
      <group rotation={[-0.3, 0.5, 0]}>
        <DataRing radius={3} color="#00FF88" speed={0.3} />
      </group>

      {/* Service panels */}
      {services.map((service, i) => (
        <ServicePanel key={i} {...service} />
      ))}

      {/* Connection beams */}
      {services.map((service, i) => (
        <ConnectionBeam key={`beam-${i}`} target={service.position} color={service.color} />
      ))}

      {/* Floating particles */}
      <DataParticles />
    </group>
  )
}
