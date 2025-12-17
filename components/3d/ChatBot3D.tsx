'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// ChatBot 3D - Conversation visualization for AI Chatbots page
export default function ChatBot3D() {
  const groupRef = useRef<THREE.Group>(null)
  const messagesRef = useRef<THREE.Group>(null)
  const typingRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)

  // Chat messages - alternating user and bot
  const messages = useMemo(() => {
    return [
      { isBot: true, width: 1.8, y: 1.5, delay: 0 },
      { isBot: false, width: 1.4, y: 0.9, delay: 0.5 },
      { isBot: true, width: 2.0, y: 0.3, delay: 1 },
      { isBot: false, width: 1.2, y: -0.3, delay: 1.5 },
      { isBot: true, width: 1.6, y: -0.9, delay: 2 },
    ]
  }, [])

  // Floating icons around the chat
  const floatingElements = useMemo(() => {
    const items: { position: THREE.Vector3; type: 'bubble' | 'star' | 'heart'; color: string }[] = []
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 3.5 + Math.random() * 1.5
      items.push({
        position: new THREE.Vector3(
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 4,
          Math.sin(angle) * radius - 2
        ),
        type: ['bubble', 'star', 'heart'][Math.floor(Math.random() * 3)] as 'bubble' | 'star' | 'heart',
        color: ['#00D9FF', '#A855F7', '#00FF88', '#FF6B35'][Math.floor(Math.random() * 4)],
      })
    }
    return items
  }, [])

  // Particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(100 * 3)
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.1
    }

    // Animate messages appearing
    if (messagesRef.current) {
      messagesRef.current.children.forEach((child, i) => {
        const msg = messages[i]
        const progress = Math.min(1, Math.max(0, (t - msg.delay) / 0.5))
        child.scale.x = progress
        child.position.x = msg.isBot ? -1 + (1 - progress) * -0.5 : 1 + (1 - progress) * 0.5
      })
    }

    // Typing indicator animation
    if (typingRef.current) {
      typingRef.current.children.forEach((dot, i) => {
        dot.position.y = Math.sin(t * 4 + i * 0.5) * 0.05 - 1.5
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Phone/Chat window frame */}
      <RoundedBox args={[4, 5, 0.2]} radius={0.2} position={[0, 0, 0]}>
        <meshStandardMaterial color="#0d1117" metalness={0.6} roughness={0.4} />
      </RoundedBox>

      {/* Screen area */}
      <RoundedBox args={[3.6, 4.2, 0.1]} radius={0.1} position={[0, 0.2, 0.1]}>
        <meshStandardMaterial color="#1a1f2e" metalness={0.3} roughness={0.7} />
      </RoundedBox>

      {/* Header bar */}
      <RoundedBox args={[3.6, 0.5, 0.12]} radius={0.05} position={[0, 2.1, 0.12]}>
        <meshStandardMaterial color="#161b22" />
      </RoundedBox>

      {/* Bot avatar in header */}
      <mesh position={[-1.4, 2.1, 0.2]}>
        <circleGeometry args={[0.15, 32]} />
        <meshStandardMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.5} />
      </mesh>

      {/* Online indicator */}
      <mesh position={[-1.25, 2.0, 0.22]}>
        <circleGeometry args={[0.05, 16]} />
        <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={1} />
      </mesh>

      {/* Status text placeholder */}
      <mesh position={[-0.6, 2.1, 0.15]}>
        <boxGeometry args={[0.8, 0.12, 0.02]} />
        <meshStandardMaterial color="#4a5568" transparent opacity={0.5} />
      </mesh>

      {/* Chat messages */}
      <group ref={messagesRef}>
        {messages.map((msg, i) => (
          <group key={i}>
            <RoundedBox
              args={[msg.width, 0.4, 0.08]}
              radius={0.1}
              position={[msg.isBot ? -1 + msg.width / 2 : 1 - msg.width / 2, msg.y, 0.15]}
            >
              <meshStandardMaterial
                color={msg.isBot ? '#A855F7' : '#00D9FF'}
                emissive={msg.isBot ? '#A855F7' : '#00D9FF'}
                emissiveIntensity={0.3}
                transparent
                opacity={0.9}
              />
            </RoundedBox>
            {/* Message text lines */}
            {[0, 1].map((line) => (
              <mesh
                key={line}
                position={[
                  msg.isBot ? -1.5 + msg.width / 2 + line * 0.3 : 0.5 - msg.width / 2 + line * 0.3,
                  msg.y + 0.05 - line * 0.1,
                  0.2
                ]}
              >
                <boxGeometry args={[0.4 + Math.random() * 0.3, 0.06, 0.02]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
              </mesh>
            ))}
          </group>
        ))}
      </group>

      {/* Typing indicator */}
      <group ref={typingRef} position={[-1.2, -1.5, 0.15]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[i * 0.15, 0, 0]}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshStandardMaterial
              color="#A855F7"
              emissive="#A855F7"
              emissiveIntensity={0.8}
            />
          </mesh>
        ))}
      </group>

      {/* Input field */}
      <RoundedBox args={[3.2, 0.35, 0.08]} radius={0.08} position={[0, -2, 0.12]}>
        <meshStandardMaterial color="#2d3748" />
      </RoundedBox>

      {/* Send button */}
      <mesh position={[1.3, -2, 0.18]}>
        <circleGeometry args={[0.12, 32]} />
        <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.5} />
      </mesh>

      {/* Floating elements */}
      {floatingElements.map((item, i) => (
        <group key={i} position={item.position}>
          {item.type === 'bubble' && (
            <mesh>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial
                color={item.color}
                emissive={item.color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
          )}
          {item.type === 'star' && (
            <mesh rotation={[0, 0, Math.PI / 4]}>
              <boxGeometry args={[0.15, 0.15, 0.03]} />
              <meshStandardMaterial
                color={item.color}
                emissive={item.color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
          )}
          {item.type === 'heart' && (
            <mesh>
              <circleGeometry args={[0.08, 16]} />
              <meshStandardMaterial
                color={item.color}
                emissive={item.color}
                emissiveIntensity={0.5}
                transparent
                opacity={0.7}
              />
            </mesh>
          )}
        </group>
      ))}

      {/* Ambient particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#A855F7"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[6, 7]} />
        <meshStandardMaterial
          color="#A855F7"
          emissive="#A855F7"
          emissiveIntensity={0.05}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
