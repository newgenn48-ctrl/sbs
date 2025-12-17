'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

// Represents SEO growth: keywords, backlinks, and ranking improvements
const SEOGrowth = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const websiteRef = useRef<THREE.Mesh>(null!)
  const linksRef = useRef<THREE.Points>(null!)
  
  // Keyword nodes floating around
  const keywords = useMemo(() => {
    const nodes: { position: THREE.Vector3; size: number; color: THREE.Color }[] = []
    const colors = ['#00D9FF', '#00FF88', '#FF00FF', '#FFD700']
    
    for (let i = 0; i < 20; i++) {
      const theta = (i / 20) * Math.PI * 2
      const phi = Math.random() * Math.PI
      const radius = 3 + Math.random() * 2
      
      nodes.push({
        position: new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta) * radius,
          Math.sin(phi) * Math.sin(theta) * radius,
          Math.cos(phi) * radius
        ),
        size: 0.1 + Math.random() * 0.15,
        color: new THREE.Color(colors[Math.floor(Math.random() * colors.length)])
      })
    }
    return nodes
  }, [])
  
  // Backlink particles
  const LINK_COUNT = 800
  const linkData = useMemo(() => {
    const positions = new Float32Array(LINK_COUNT * 3)
    const colors = new Float32Array(LINK_COUNT * 3)
    const targets: number[] = []
    const speeds: number[] = []
    
    const linkColor = new THREE.Color('#00FF88')
    
    for (let i = 0; i < LINK_COUNT; i++) {
      const i3 = i * 3
      // Start from random keyword
      const keywordIndex = Math.floor(Math.random() * keywords.length)
      const keyword = keywords[keywordIndex]
      
      positions[i3] = keyword.position.x + (Math.random() - 0.5) * 0.5
      positions[i3 + 1] = keyword.position.y + (Math.random() - 0.5) * 0.5
      positions[i3 + 2] = keyword.position.z + (Math.random() - 0.5) * 0.5
      
      linkColor.toArray(colors, i3)
      targets.push(keywordIndex)
      speeds.push(0.01 + Math.random() * 0.02)
    }
    
    return { positions, colors, targets, speeds }
  }, [keywords])
  
  // Website position (climbs up over time)
  const websiteY = useRef(-2)
  const targetY = useRef(2)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05
    }
    
    // Animate website climbing
    if (websiteRef.current) {
      websiteY.current += (targetY.current - websiteY.current) * 0.002
      websiteRef.current.position.y = websiteY.current + Math.sin(time * 2) * 0.1
      websiteRef.current.rotation.y = time * 0.5
      
      // Pulse effect
      const scale = 1 + Math.sin(time * 3) * 0.1
      websiteRef.current.scale.setScalar(scale)
    }
    
    // Animate backlink particles flowing to center
    if (linksRef.current) {
      const pos = linksRef.current.geometry.attributes.position.array as Float32Array
      
      for (let i = 0; i < LINK_COUNT; i++) {
        const i3 = i * 3
        
        // Move toward center (website)
        const dx = 0 - pos[i3]
        const dy = websiteY.current - pos[i3 + 1]
        const dz = 0 - pos[i3 + 2]
        
        pos[i3] += dx * linkData.speeds[i]
        pos[i3 + 1] += dy * linkData.speeds[i]
        pos[i3 + 2] += dz * linkData.speeds[i]
        
        // Reset if reached center
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 0.3) {
          const keyword = keywords[Math.floor(Math.random() * keywords.length)]
          pos[i3] = keyword.position.x + (Math.random() - 0.5)
          pos[i3 + 1] = keyword.position.y + (Math.random() - 0.5)
          pos[i3 + 2] = keyword.position.z + (Math.random() - 0.5)
        }
      }
      
      linksRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {/* Central website icon */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh ref={websiteRef} position={[0, 0, 0]}>
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial
              color="#00D9FF"
              emissive="#00D9FF"
              emissiveIntensity={3}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
        
        {/* Keyword nodes */}
        {keywords.map((keyword, i) => (
          <Float key={i} speed={1 + Math.random()} floatIntensity={0.3}>
            <mesh position={keyword.position}>
              <sphereGeometry args={[keyword.size, 16, 16]} />
              <meshStandardMaterial
                color={keyword.color}
                emissive={keyword.color}
                emissiveIntensity={2}
                transparent
                opacity={0.8}
              />
            </mesh>
          </Float>
        ))}
        
        {/* Backlink particles */}
        <points ref={linksRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[linkData.positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[linkData.colors, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            vertexColors
            transparent
            opacity={0.7}
            sizeAttenuation
          />
        </points>
        
        {/* Ranking ladder lines */}
        {[-3, -1.5, 0, 1.5, 3].map((y, i) => (
          <mesh key={i} position={[0, y, -3]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.02, 0.02, 4, 8]} />
            <meshStandardMaterial
              color={y < websiteY.current ? '#00FF88' : '#333'}
              emissive={y < websiteY.current ? '#00FF88' : '#000'}
              emissiveIntensity={y < websiteY.current ? 1 : 0}
              transparent
              opacity={0.5}
            />
          </mesh>
        ))}
      </group>
      
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.2} intensity={1.2} kernelSize={2} />
      </EffectComposer>
    </>
  )
}

export default SEOGrowth
