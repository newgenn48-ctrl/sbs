'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox, Float, Html } from '@react-three/drei'
// Inline brand SVGs to avoid react-icons dependency
const FaInstagram = ({ size = 24, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
)
const FaLinkedinIn = ({ size = 24, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color}><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.83-48.3 93.97 0 111.28 61.9 111.28 142.3V448z"/></svg>
)
const FaFacebookF = ({ size = 24, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 320 512" fill={color}><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>
)
const FaTiktok = ({ size = 24, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color}><path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h0A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14z"/></svg>
)
const FaXTwitter = ({ size = 24, color = '#fff' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill={color}><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
)

// Icon component for 3D space
const Icon3D = ({ icon: IconComponent, color, size = 40 }: { icon: React.ComponentType<{ size?: number; color?: string }>; color: string; size?: number }) => (
  <Html center transform>
    <div style={{
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      filter: 'drop-shadow(0 0 8px ' + color + ')',
    }}>
      <IconComponent size={size} color={color} />
    </div>
  </Html>
)

// Social Media Feed 3D - Clean professional visualization with real icons
export default function SocialMediaFeed3D() {
  const groupRef = useRef<THREE.Group>(null)
  const heartsRef = useRef<THREE.Group>(null)

  // Social posts
  const posts = useMemo(() => [
    { y: 0.6, platform: 'instagram', color: '#E4405F' },
    { y: -0.1, platform: 'linkedin', color: '#0A66C2' },
    { y: -0.8, platform: 'facebook', color: '#1877F2' },
  ], [])

  // Hearts data
  const hearts = useMemo(() => [
    { pos: new THREE.Vector3(-1.8, 0.5, 0.5), color: '#FF6B6B' },
    { pos: new THREE.Vector3(2, 1.5, 0.6), color: '#E4405F' },
    { pos: new THREE.Vector3(-2, -1.5, 0.4), color: '#FF4757' },
  ], [])

  // Particles
  const particles = useMemo(() => {
    const positions = new Float32Array(40 * 3)
    for (let i = 0; i < 40; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2
    }
    return positions
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.08
    }

    // Animate hearts
    if (heartsRef.current) {
      heartsRef.current.children.forEach((heart, i) => {
        const scale = 0.8 + Math.sin(t * 2 + i) * 0.2
        heart.scale.setScalar(scale)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main phone */}
      <Float speed={1.2} rotationIntensity={0.05} floatIntensity={0.15}>
        <group>
          {/* Phone frame */}
          <RoundedBox args={[2.6, 5, 0.2]} radius={0.3} position={[0, 0, 0]}>
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </RoundedBox>

          {/* Screen */}
          <RoundedBox args={[2.3, 4.7, 0.1]} radius={0.2} position={[0, 0, 0.06]}>
            <meshStandardMaterial color="#0f0f15" metalness={0.3} roughness={0.7} />
          </RoundedBox>

          {/* Dynamic Island */}
          <RoundedBox args={[0.6, 0.15, 0.04]} radius={0.07} position={[0, 2.1, 0.12]}>
            <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} />
          </RoundedBox>

          {/* Header bar */}
          <RoundedBox args={[2.2, 0.28, 0.03]} radius={0.04} position={[0, 1.75, 0.12]}>
            <meshStandardMaterial color="#1e1e28" metalness={0.2} roughness={0.8} />
          </RoundedBox>

          {/* Header title placeholder */}
          <mesh position={[0, 1.75, 0.15]}>
            <boxGeometry args={[0.8, 0.1, 0.02]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
          </mesh>

          {/* Social posts */}
          {posts.map((post, i) => (
            <group key={i} position={[0, post.y, 0.12]}>
              {/* Post card */}
              <RoundedBox args={[2, 0.6, 0.03]} radius={0.05}>
                <meshStandardMaterial color="#1e1e28" metalness={0.15} roughness={0.85} />
              </RoundedBox>

              {/* Post content area */}
              <mesh position={[0, 0, 0.02]}>
                <planeGeometry args={[1.8, 0.35]} />
                <meshStandardMaterial
                  color={post.color}
                  emissive={post.color}
                  emissiveIntensity={0.15}
                  transparent
                  opacity={0.3}
                />
              </mesh>

              {/* Real platform icon as avatar */}
              <group position={[-0.75, 0.18, 0.05]}>
                {post.platform === 'instagram' && <Icon3D icon={FaInstagram} color={post.color} size={16} />}
                {post.platform === 'linkedin' && <Icon3D icon={FaLinkedinIn} color={post.color} size={16} />}
                {post.platform === 'facebook' && <Icon3D icon={FaFacebookF} color={post.color} size={16} />}
              </group>

              {/* Username placeholder */}
              <mesh position={[-0.35, 0.18, 0.03]}>
                <boxGeometry args={[0.4, 0.06, 0.02]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.7} />
              </mesh>

              {/* Engagement indicators */}
              <group position={[0, -0.2, 0.03]}>
                <mesh position={[-0.5, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial color="#FF6B6B" emissive="#FF6B6B" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[0, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial color="#00D9FF" emissive="#00D9FF" emissiveIntensity={0.5} />
                </mesh>
                <mesh position={[0.5, 0, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
                </mesh>
              </group>
            </group>
          ))}

          {/* Bottom nav */}
          <RoundedBox args={[2.2, 0.25, 0.03]} radius={0.04} position={[0, -2, 0.12]}>
            <meshStandardMaterial color="#1e1e28" metalness={0.2} roughness={0.8} />
          </RoundedBox>

          {/* Home indicator */}
          <RoundedBox args={[0.8, 0.04, 0.02]} radius={0.02} position={[0, -2.25, 0.12]}>
            <meshStandardMaterial color="#ffffff" transparent opacity={0.4} />
          </RoundedBox>
        </group>
      </Float>

      {/* Floating TikTok badge with real icon */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[2.5, 0.8, 0.4]}>
          <RoundedBox args={[0.6, 0.6, 0.1]} radius={0.12}>
            <meshStandardMaterial color="#000000" metalness={0.7} roughness={0.3} />
          </RoundedBox>
          <group position={[0, 0, 0.08]}>
            <Icon3D icon={FaTiktok} color="#ffffff" size={35} />
          </group>
        </group>
      </Float>

      {/* Floating X/Twitter badge with real icon */}
      <Float speed={1.5} floatIntensity={0.25}>
        <group position={[-2.5, -0.8, 0.4]}>
          <RoundedBox args={[0.55, 0.55, 0.08]} radius={0.1}>
            <meshStandardMaterial color="#000000" metalness={0.7} roughness={0.3} />
          </RoundedBox>
          <group position={[0, 0, 0.06]}>
            <Icon3D icon={FaXTwitter} color="#ffffff" size={32} />
          </group>
        </group>
      </Float>

      {/* Floating hearts */}
      <group ref={heartsRef}>
        {hearts.map((heart, i) => (
          <Float key={i} speed={2 + i * 0.2} floatIntensity={0.3}>
            <group position={heart.pos}>
              {/* Heart shape using spheres and cone */}
              <mesh position={[-0.025, 0.01, 0]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial
                  color={heart.color}
                  emissive={heart.color}
                  emissiveIntensity={0.6}
                />
              </mesh>
              <mesh position={[0.025, 0.01, 0]}>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshStandardMaterial
                  color={heart.color}
                  emissive={heart.color}
                  emissiveIntensity={0.6}
                />
              </mesh>
              <mesh position={[0, -0.035, 0]} rotation={[0, 0, Math.PI]}>
                <coneGeometry args={[0.055, 0.07, 4]} />
                <meshStandardMaterial
                  color={heart.color}
                  emissive={heart.color}
                  emissiveIntensity={0.6}
                />
              </mesh>
            </group>
          </Float>
        ))}
      </group>

      {/* Notification badge */}
      <Float speed={2.2} floatIntensity={0.35}>
        <mesh position={[-2.2, 1.6, 0.5]}>
          <sphereGeometry args={[0.12, 12, 12]} />
          <meshStandardMaterial color="#FF5F56" emissive="#FF5F56" emissiveIntensity={0.7} />
        </mesh>
      </Float>

      {/* Growth arrow */}
      <Float speed={1.8} floatIntensity={0.25}>
        <group position={[-2.5, -1.6, 0.3]}>
          <mesh rotation={[0, 0, Math.PI]}>
            <coneGeometry args={[0.08, 0.18, 3]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.5} />
          </mesh>
          <mesh position={[0, 0.16, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.18, 8]} />
            <meshStandardMaterial color="#00FF88" emissive="#00FF88" emissiveIntensity={0.4} />
          </mesh>
        </group>
      </Float>

      {/* Engagement metrics bar */}
      <Float speed={1.6} floatIntensity={0.2}>
        <group position={[2.5, -1.5, 0.3]}>
          {[0.3, 0.5, 0.4, 0.7].map((height, i) => (
            <RoundedBox
              key={i}
              args={[0.15, height * 0.8, 0.05]}
              radius={0.02}
              position={[i * 0.22 - 0.33, height * 0.4 - 0.25, 0]}
            >
              <meshStandardMaterial
                color="#E4405F"
                emissive="#E4405F"
                emissiveIntensity={0.3}
                metalness={0.3}
                roughness={0.6}
              />
            </RoundedBox>
          ))}
        </group>
      </Float>

      {/* Ambient particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.03} color="#E4405F" transparent opacity={0.4} sizeAttenuation />
      </points>

      {/* Background glow */}
      <mesh position={[0, 0, -1]}>
        <planeGeometry args={[8, 6]} />
        <meshStandardMaterial color="#E4405F" emissive="#E4405F" emissiveIntensity={0.03} transparent opacity={0.08} />
      </mesh>
    </group>
  )
}
