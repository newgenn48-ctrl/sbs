'use client'

import * as THREE from 'three'
import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'

// E-commerce Cart 3D - Shopping cart with floating products and checkout flow
export default function EcommerceCart3D() {
  const groupRef = useRef<THREE.Group>(null)
  const productsRef = useRef<THREE.Group>(null)
  const cartItemsRef = useRef<THREE.Group>(null)

  // Floating product boxes
  const products = useMemo(() => {
    return [
      { position: new THREE.Vector3(-3, 1.5, 0), size: [0.8, 0.8, 0.8], color: '#00D9FF' },
      { position: new THREE.Vector3(-3.5, 0, 0.5), size: [0.7, 0.7, 0.7], color: '#A855F7' },
      { position: new THREE.Vector3(-2.8, -1.2, 0.2), size: [0.6, 0.6, 0.6], color: '#FF6B35' },
      { position: new THREE.Vector3(3.2, 1.8, 0.3), size: [0.65, 0.65, 0.65], color: '#00FF88' },
      { position: new THREE.Vector3(3.5, 0.5, 0.4), size: [0.75, 0.75, 0.75], color: '#FFD700' },
      { position: new THREE.Vector3(3, -0.8, 0.2), size: [0.55, 0.55, 0.55], color: '#00D9FF' },
    ]
  }, [])

  // Cart items in the main shopping cart
  const cartItems = useMemo(() => {
    return [
      { y: 0.5, color: '#00D9FF', quantity: 2 },
      { y: 0, color: '#00FF88', quantity: 1 },
      { y: -0.5, color: '#A855F7', quantity: 3 },
    ]
  }, [])

  // Particles (optimized for performance)
  const particles = useMemo(() => {
    const count = 40
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorOptions = [
      new THREE.Color('#00D9FF'),
      new THREE.Color('#00FF88'),
      new THREE.Color('#A855F7'),
      new THREE.Color('#FF6B35'),
      new THREE.Color('#FFD700'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    return { positions, colors }
  }, [])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.08
      groupRef.current.position.y = Math.sin(t * 0.4) * 0.08
    }

    if (productsRef.current) {
      productsRef.current.children.forEach((child, i) => {
        child.position.y = products[i].position.y + Math.sin(t * 1.5 + i * 1.2) * 0.15
        child.rotation.y = t * 0.5 + i * 0.5
        child.rotation.x = Math.sin(t * 0.3 + i) * 0.1
      })
    }

    if (cartItemsRef.current) {
      cartItemsRef.current.children.forEach((child, i) => {
        child.position.x = Math.sin(t * 2 + i * 0.5) * 0.02
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Main shopping cart container */}
      <group position={[0, 0, 0]}>
        {/* Cart body */}
        <RoundedBox args={[3, 2.8, 0.15]} radius={0.1} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#0a0a0f"
            metalness={0.8}
            roughness={0.2}
          />
        </RoundedBox>

        {/* Cart header */}
        <RoundedBox args={[3, 0.4, 0.18]} radius={0.05} position={[0, 1.4, 0.02]}>
          <meshStandardMaterial
            color="#1a1a2e"
            metalness={0.5}
            roughness={0.5}
          />
        </RoundedBox>

        {/* Cart icon in header */}
        <group position={[-1.1, 1.4, 0.1]}>
          {/* Cart basket */}
          <mesh>
            <boxGeometry args={[0.2, 0.12, 0.05]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
            />
          </mesh>
          {/* Cart handle */}
          <mesh position={[0, 0.1, 0]}>
            <torusGeometry args={[0.08, 0.015, 8, 16, Math.PI]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.8}
            />
          </mesh>
        </group>

        {/* "Your Cart" text placeholder */}
        <mesh position={[-0.3, 1.4, 0.1]}>
          <planeGeometry args={[0.8, 0.15]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.8}
          />
        </mesh>

        {/* Item count badge */}
        <mesh position={[1.2, 1.4, 0.12]}>
          <circleGeometry args={[0.12, 16]} />
          <meshStandardMaterial
            color="#FF6B35"
            emissive="#FF6B35"
            emissiveIntensity={0.8}
          />
        </mesh>

        {/* Cart items list */}
        <group ref={cartItemsRef} position={[0, 0.15, 0.1]}>
          {cartItems.map((item, i) => (
            <group key={i} position={[0, item.y, 0]}>
              {/* Item row background */}
              <RoundedBox args={[2.6, 0.4, 0.05]} radius={0.02}>
                <meshStandardMaterial
                  color="#12121a"
                  metalness={0.3}
                  roughness={0.7}
                />
              </RoundedBox>

              {/* Product thumbnail */}
              <mesh position={[-1, 0, 0.04]}>
                <planeGeometry args={[0.3, 0.3]} />
                <meshStandardMaterial
                  color={item.color}
                  emissive={item.color}
                  emissiveIntensity={0.4}
                />
              </mesh>

              {/* Product name placeholder */}
              <mesh position={[-0.3, 0.05, 0.04]}>
                <planeGeometry args={[0.7, 0.08]} />
                <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
              </mesh>

              {/* Price placeholder */}
              <mesh position={[-0.3, -0.08, 0.04]}>
                <planeGeometry args={[0.4, 0.06]} />
                <meshStandardMaterial
                  color="#00FF88"
                  emissive="#00FF88"
                  emissiveIntensity={0.3}
                />
              </mesh>

              {/* Quantity controls */}
              <group position={[0.7, 0, 0.04]}>
                <mesh position={[-0.15, 0, 0]}>
                  <circleGeometry args={[0.08, 16]} />
                  <meshStandardMaterial color="#2a2a3e" />
                </mesh>
                <mesh position={[0.15, 0, 0]}>
                  <circleGeometry args={[0.08, 16]} />
                  <meshStandardMaterial color="#2a2a3e" />
                </mesh>
                {/* Quantity number */}
                <mesh position={[0, 0, 0.01]}>
                  <planeGeometry args={[0.12, 0.15]} />
                  <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
                </mesh>
              </group>

              {/* Remove button */}
              <mesh position={[1.1, 0, 0.04]}>
                <planeGeometry args={[0.15, 0.15]} />
                <meshStandardMaterial
                  color="#FF5F56"
                  emissive="#FF5F56"
                  emissiveIntensity={0.4}
                  transparent
                  opacity={0.7}
                />
              </mesh>
            </group>
          ))}
        </group>

        {/* Divider line */}
        <mesh position={[0, -0.6, 0.1]}>
          <planeGeometry args={[2.6, 0.01]} />
          <meshStandardMaterial color="#2a2a3e" />
        </mesh>

        {/* Subtotal row */}
        <group position={[0, -0.85, 0.1]}>
          <mesh position={[-0.6, 0, 0]}>
            <planeGeometry args={[0.6, 0.1]} />
            <meshStandardMaterial color="#4a5568" transparent opacity={0.6} />
          </mesh>
          <mesh position={[0.8, 0, 0]}>
            <planeGeometry args={[0.5, 0.12]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
          </mesh>
        </group>

        {/* Checkout button */}
        <RoundedBox args={[2.4, 0.4, 0.08]} radius={0.05} position={[0, -1.15, 0.1]}>
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={0.6}
          />
        </RoundedBox>
      </group>

      {/* Floating products around the cart */}
      <group ref={productsRef}>
        {products.map((product, i) => (
          <group key={i} position={product.position}>
            <RoundedBox args={product.size as [number, number, number]} radius={0.05}>
              <meshStandardMaterial
                color="#12121a"
                metalness={0.5}
                roughness={0.5}
              />
            </RoundedBox>

            {/* Product face/label */}
            <mesh position={[0, 0, product.size[2] / 2 + 0.01]}>
              <planeGeometry args={[product.size[0] * 0.7, product.size[1] * 0.7]} />
              <meshStandardMaterial
                color={product.color}
                emissive={product.color}
                emissiveIntensity={0.4}
                transparent
                opacity={0.7}
              />
            </mesh>

            {/* Price tag */}
            <mesh position={[product.size[0] / 2 - 0.1, product.size[1] / 2 - 0.1, product.size[2] / 2 + 0.02]}>
              <circleGeometry args={[0.12, 16]} />
              <meshStandardMaterial
                color="#FFD700"
                emissive="#FFD700"
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>
        ))}
      </group>

      {/* Flying arrows from products to cart (add to cart effect) */}
      {[
        { start: [-2.5, 1.2, 0.3], rotation: 0.3 },
        { start: [2.5, 0.8, 0.3], rotation: -0.4 },
      ].map((arrow, i) => (
        <group key={i} position={[arrow.start[0] * 0.5, arrow.start[1] * 0.5, 0.5]} rotation={[0, 0, arrow.rotation]}>
          {/* Arrow line */}
          <mesh>
            <boxGeometry args={[0.8, 0.03, 0.03]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
              transparent
              opacity={0.6}
            />
          </mesh>
          {/* Arrow head */}
          <mesh position={[0.45, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
            <boxGeometry args={[0.15, 0.03, 0.03]} />
            <meshStandardMaterial
              color="#00FF88"
              emissive="#00FF88"
              emissiveIntensity={0.6}
              transparent
              opacity={0.6}
            />
          </mesh>
        </group>
      ))}

      {/* Shopping bag decorations */}
      <group position={[-3.5, -1.5, -0.5]}>
        <RoundedBox args={[0.6, 0.7, 0.3]} radius={0.05}>
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </RoundedBox>
        {/* Bag handle */}
        <mesh position={[0, 0.45, 0]}>
          <torusGeometry args={[0.15, 0.02, 8, 16, Math.PI]} />
          <meshStandardMaterial
            color="#A855F7"
            emissive="#A855F7"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      <group position={[3.5, -1.6, -0.3]}>
        <RoundedBox args={[0.5, 0.6, 0.25]} radius={0.05}>
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.2}
            transparent
            opacity={0.6}
          />
        </RoundedBox>
        <mesh position={[0, 0.4, 0]}>
          <torusGeometry args={[0.12, 0.02, 8, 16, Math.PI]} />
          <meshStandardMaterial
            color="#00D9FF"
            emissive="#00D9FF"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>

      {/* Colorful particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particles.colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.5}
          sizeAttenuation
        />
      </points>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.8]}>
        <planeGeometry args={[5, 4.5]} />
        <meshStandardMaterial
          color="#00FF88"
          emissive="#00FF88"
          emissiveIntensity={0.06}
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  )
}
