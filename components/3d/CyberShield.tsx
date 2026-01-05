'use client'

import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, RoundedBox } from '@react-three/drei'

// Central Shield component
const Shield = ({ position }: { position: [number, number, number] }) => {
  const shieldRef = useRef<THREE.Group>(null!)
  const glowRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
    if (glowRef.current) {
      const material = glowRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 2) * 0.15
    }
  })

  // Shield shape
  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, 0.8)
    shape.bezierCurveTo(0.6, 0.8, 0.8, 0.5, 0.8, 0)
    shape.bezierCurveTo(0.8, -0.4, 0.5, -0.8, 0, -1)
    shape.bezierCurveTo(-0.5, -0.8, -0.8, -0.4, -0.8, 0)
    shape.bezierCurveTo(-0.8, 0.5, -0.6, 0.8, 0, 0.8)
    return shape
  }, [])

  const extrudeSettings = { depth: 0.15, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 3 }

  return (
    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.15}>
      <group ref={shieldRef} position={position}>
        {/* Shield body */}
        <mesh rotation={[0, 0, 0]}>
          <extrudeGeometry args={[shieldShape, extrudeSettings]} />
          <meshStandardMaterial
            color="#00D9FF"
            metalness={0.8}
            roughness={0.2}
            emissive="#00D9FF"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Inner shield detail */}
        <mesh position={[0, -0.05, 0.1]} scale={0.7}>
          <extrudeGeometry args={[shieldShape, { depth: 0.08, bevelEnabled: false }]} />
          <meshStandardMaterial color="#0891b2" metalness={0.9} roughness={0.15} />
        </mesh>

        {/* Checkmark on shield */}
        <group position={[0, -0.1, 0.2]}>
          <mesh position={[-0.15, 0, 0]} rotation={[0, 0, -0.3]}>
            <boxGeometry args={[0.25, 0.08, 0.05]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.12, 0.15, 0]} rotation={[0, 0, 0.8]}>
            <boxGeometry args={[0.4, 0.08, 0.05]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>

        {/* Glow effect */}
        <mesh ref={glowRef} position={[0, -0.1, -0.1]} scale={1.2}>
          <extrudeGeometry args={[shieldShape, { depth: 0.01, bevelEnabled: false }]} />
          <meshBasicMaterial color="#00D9FF" transparent opacity={0.3} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  )
}

// Lock icon component
const LockIcon = ({ position, scale = 1, color = "#00D9FF" }: {
  position: [number, number, number],
  scale?: number,
  color?: string
}) => {
  const lockRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    if (lockRef.current) {
      lockRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.8 + position[0]) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.2}>
      <group ref={lockRef} position={position} scale={scale}>
        {/* Lock body */}
        <RoundedBox args={[0.3, 0.25, 0.1]} radius={0.02} smoothness={2} position={[0, -0.08, 0]}>
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
        </RoundedBox>

        {/* Lock shackle */}
        <mesh position={[0, 0.12, 0]}>
          <torusGeometry args={[0.1, 0.025, 8, 16, Math.PI]} />
          <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Keyhole */}
        <mesh position={[0, -0.05, 0.06]}>
          <circleGeometry args={[0.03, 16]} />
          <meshBasicMaterial color="#1a1a2e" />
        </mesh>
        <mesh position={[0, -0.1, 0.06]}>
          <boxGeometry args={[0.025, 0.06, 0.01]} />
          <meshBasicMaterial color="#1a1a2e" />
        </mesh>
      </group>
    </Float>
  )
}

// Scanning ring effect
const ScanRing = ({ position, delay = 0 }: { position: [number, number, number], delay?: number }) => {
  const ringRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const time = (clock.getElapsedTime() + delay) % 3
      const scale = 0.5 + time * 0.8
      ringRef.current.scale.set(scale, scale, 1)
      const material = ringRef.current.material as THREE.MeshBasicMaterial
      material.opacity = Math.max(0, 1 - time / 2.5) * 0.6
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <mesh ref={ringRef} position={position} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.8, 0.85, 64]} />
      <meshBasicMaterial color="#8338EC" transparent opacity={0.6} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  )
}

// Data encryption particles
const EncryptedData = ({ start, end, color }: {
  start: THREE.Vector3,
  end: THREE.Vector3,
  color: string
}) => {
  const particlesRef = useRef<THREE.Group>(null!)
  const offsets = useMemo(() => [0, 0.33, 0.66], [])

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, i) => {
        const t = ((clock.getElapsedTime() * 0.4 + offsets[i]) % 1)
        particle.position.lerpVectors(start, end, t)
        const scale = Math.sin(t * Math.PI) * 0.8 + 0.3
        particle.scale.setScalar(scale)
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {offsets.map((_, i) => (
        <mesh key={i}>
          <boxGeometry args={[0.04, 0.04, 0.04]} />
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}

// Connection line with encryption
const SecureConnection = ({ start, end, color }: {
  start: [number, number, number],
  end: [number, number, number],
  color: string
}) => {
  const { geometry, startVec, endVec } = useMemo(() => {
    const startVec = new THREE.Vector3(...start)
    const endVec = new THREE.Vector3(...end)
    const mid = new THREE.Vector3().lerpVectors(startVec, endVec, 0.5)
    mid.y += 0.3

    const curve = new THREE.QuadraticBezierCurve3(startVec, mid, endVec)
    const points = curve.getPoints(30)
    const geometry = new THREE.BufferGeometry().setFromPoints(points)

    return { geometry, startVec, endVec }
  }, [start, end])

  return (
    <group>
      <primitive
        object={new THREE.Line(
          geometry,
          new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.4 })
        )}
      />
      <EncryptedData start={startVec} end={endVec} color={color} />
    </group>
  )
}

// Firewall barrier
const Firewall = ({ position }: { position: [number, number, number] }) => {
  const barsRef = useRef<THREE.Mesh[]>([])

  useFrame(({ clock }) => {
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        const material = bar.material as THREE.MeshBasicMaterial
        const pulse = Math.sin(clock.getElapsedTime() * 3 + i * 0.5) > 0.5
        material.opacity = pulse ? 0.8 : 0.4
      }
    })
  })

  return (
    <group position={position}>
      {[-0.3, -0.15, 0, 0.15, 0.3].map((x, i) => (
        <mesh
          key={i}
          position={[x, 0, 0]}
          ref={(el) => { if (el) barsRef.current[i] = el }}
        >
          <boxGeometry args={[0.04, 0.8, 0.02]} />
          <meshBasicMaterial color="#00D9FF" transparent opacity={0.6} toneMapped={false} />
        </mesh>
      ))}
      {/* Firewall base */}
      <mesh position={[0, -0.45, 0]}>
        <boxGeometry args={[0.8, 0.05, 0.08]} />
        <meshStandardMaterial color="#0891b2" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

// Warning/Alert indicator
const AlertIndicator = ({ position }: { position: [number, number, number] }) => {
  const alertRef = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (alertRef.current) {
      const material = alertRef.current.material as THREE.MeshBasicMaterial
      material.opacity = 0.5 + Math.sin(clock.getElapsedTime() * 4) * 0.5
    }
  })

  return (
    <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.25}>
      <group position={position}>
        {/* Triangle warning */}
        <mesh ref={alertRef}>
          <coneGeometry args={[0.15, 0.25, 3]} />
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.8} toneMapped={false} />
        </mesh>
        {/* Exclamation mark */}
        <mesh position={[0, 0.02, 0.08]}>
          <boxGeometry args={[0.03, 0.1, 0.02]} />
          <meshBasicMaterial color="#1a1a2e" />
        </mesh>
        <mesh position={[0, -0.07, 0.08]}>
          <boxGeometry args={[0.03, 0.03, 0.02]} />
          <meshBasicMaterial color="#1a1a2e" />
        </mesh>
      </group>
    </Float>
  )
}

// Main component
const CyberShield = () => {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(({ pointer }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (pointer.x * 0.2 - groupRef.current.rotation.y) * 0.02
      groupRef.current.rotation.x += (-pointer.y * 0.08 - groupRef.current.rotation.x) * 0.02
    }
  })

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 4]} intensity={0.8} color="#ffffff" />
      <pointLight position={[-3, 2, 3]} intensity={0.4} color="#8338EC" />
      <pointLight position={[0, -2, 2]} intensity={0.3} color="#00D9FF" />

      {/* Central shield */}
      <Shield position={[0, 0.2, 0]} />

      {/* Scanning rings around shield */}
      <ScanRing position={[0, 0, 0]} delay={0} />
      <ScanRing position={[0, 0, 0]} delay={1} />
      <ScanRing position={[0, 0, 0]} delay={2} />

      {/* Lock icons */}
      <LockIcon position={[-1.3, 0.5, 0.3]} scale={0.8} color="#00D9FF" />
      <LockIcon position={[1.3, 0.3, 0.3]} scale={0.7} color="#00FF88" />
      <LockIcon position={[-1.1, -0.6, 0.2]} scale={0.6} color="#8338EC" />

      {/* Firewall */}
      <Firewall position={[1.2, -0.4, 0.2]} />

      {/* Alert indicator */}
      <AlertIndicator position={[-0.9, 0.9, 0.2]} />

      {/* Secure connections */}
      <SecureConnection start={[-1.1, 0.4, 0.3]} end={[-0.3, 0.1, 0.1]} color="#00D9FF" />
      <SecureConnection start={[1.1, 0.2, 0.3]} end={[0.3, 0, 0.1]} color="#00FF88" />
      <SecureConnection start={[-0.9, -0.5, 0.2]} end={[-0.2, -0.2, 0.1]} color="#8338EC" />

      {/* Base platform */}
      <mesh position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 64]} />
        <meshStandardMaterial
          color="#0a0a12"
          metalness={0.9}
          roughness={0.15}
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Grid */}
      <gridHelper
        args={[4, 16, "#1a1020", "#1a1020"]}
        position={[0, -1.19, 0]}
      />
    </group>
  )
}

export default CyberShield
