'use client'

import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Float } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

// Marketing automation funnel with lead nurturing stages
const LeadNurtureFunnel = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const leadsRef = useRef<THREE.Points>(null!)
  
  const LEAD_COUNT = 1000
  
  // Funnel stages with colors
  const stages = useMemo(() => [
    { y: 4, radius: 3, label: 'Visitors', color: new THREE.Color('#00D9FF') },
    { y: 2, radius: 2.2, label: 'Leads', color: new THREE.Color('#00D9FF') },
    { y: 0, radius: 1.5, label: 'MQL', color: new THREE.Color('#FF00FF') },
    { y: -2, radius: 0.8, label: 'SQL', color: new THREE.Color('#FF00FF') },
    { y: -4, radius: 0.4, label: 'Customers', color: new THREE.Color('#00FF88') },
  ], [])
  
  // Create leads (particles moving through funnel)
  const { positions, colors, velocities, stages: leadStages } = useMemo(() => {
    const positions = new Float32Array(LEAD_COUNT * 3)
    const colors = new Float32Array(LEAD_COUNT * 3)
    const velocities: number[] = []
    const leadStages: number[] = []
    
    for (let i = 0; i < LEAD_COUNT; i++) {
      const i3 = i * 3
      const stageIndex = Math.floor(Math.random() * 5)
      const stage = stages[stageIndex]
      
      const angle = Math.random() * Math.PI * 2
      const r = Math.random() * stage.radius
      
      positions[i3] = Math.cos(angle) * r
      positions[i3 + 1] = stage.y + (Math.random() - 0.5) * 1.5
      positions[i3 + 2] = Math.sin(angle) * r
      
      stage.color.toArray(colors, i3)
      velocities.push(0.01 + Math.random() * 0.02)
      leadStages.push(stageIndex)
    }
    
    return { positions, colors, velocities, stages: leadStages }
  }, [stages])
  
  // Email icons orbiting
  const emailOrbitRef = useRef<THREE.Group>(null!)

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()
    
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1
    }
    
    if (emailOrbitRef.current) {
      emailOrbitRef.current.rotation.y = time * 0.5
    }
    
    // Animate leads through funnel
    if (leadsRef.current) {
      const pos = leadsRef.current.geometry.attributes.position.array as Float32Array
      const cols = leadsRef.current.geometry.attributes.color.array as Float32Array
      
      for (let i = 0; i < LEAD_COUNT; i++) {
        const i3 = i * 3
        
        // Move down
        pos[i3 + 1] -= velocities[i]
        
        // Get current Y and find appropriate stage
        const y = pos[i3 + 1]
        let currentStage = stages[0]
        for (const stage of stages) {
          if (y < stage.y + 1) {
            currentStage = stage
          }
        }
        
        // Constrain to funnel radius
        const currentRadius = Math.sqrt(pos[i3] ** 2 + pos[i3 + 2] ** 2)
        const maxRadius = currentStage.radius * 0.9
        
        if (currentRadius > maxRadius) {
          const scale = maxRadius / currentRadius
          pos[i3] *= scale
          pos[i3 + 2] *= scale
        }
        
        // Add some orbital motion
        const angle = Math.atan2(pos[i3 + 2], pos[i3]) + 0.01
        const r = currentRadius * 0.99
        pos[i3] = Math.cos(angle) * r
        pos[i3 + 2] = Math.sin(angle) * r
        
        // Update color based on stage
        currentStage.color.toArray(cols, i3)
        
        // Reset if past bottom
        if (y < -5) {
          const topStage = stages[0]
          const angle = Math.random() * Math.PI * 2
          const r = Math.random() * topStage.radius
          pos[i3] = Math.cos(angle) * r
          pos[i3 + 1] = topStage.y + Math.random() * 2
          pos[i3 + 2] = Math.sin(angle) * r
        }
      }
      
      leadsRef.current.geometry.attributes.position.needsUpdate = true
      leadsRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <>
      <group ref={groupRef}>
        {/* Funnel stage rings */}
        {stages.map((stage, i) => (
          <group key={i}>
            <mesh position={[0, stage.y, 0]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[stage.radius, 0.03, 8, 64]} />
              <meshStandardMaterial
                color={stage.color}
                emissive={stage.color}
                emissiveIntensity={2}
                transparent
                opacity={0.7}
              />
            </mesh>
            
            {/* Connecting lines between stages */}
            {i < stages.length - 1 && (
              <mesh position={[0, (stage.y + stages[i + 1].y) / 2, 0]}>
                <cylinderGeometry args={[stages[i + 1].radius * 0.1, stage.radius * 0.1, Math.abs(stage.y - stages[i + 1].y), 32, 1, true]} />
                <meshStandardMaterial
                  color="#333"
                  transparent
                  opacity={0.3}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}
          </group>
        ))}
        
        {/* Lead particles */}
        <points ref={leadsRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.06}
            vertexColors
            transparent
            opacity={0.8}
            sizeAttenuation
          />
        </points>
        
        {/* Orbiting email/automation icons */}
        <group ref={emailOrbitRef}>
          {[0, 1, 2, 3].map(i => (
            <Float key={i} speed={2} floatIntensity={0.3}>
              <mesh position={[
                Math.cos(i * Math.PI / 2) * 4,
                Math.sin(i * 2) * 0.5,
                Math.sin(i * Math.PI / 2) * 4
              ]}>
                <boxGeometry args={[0.3, 0.2, 0.05]} />
                <meshStandardMaterial
                  color="#FFD700"
                  emissive="#FFD700"
                  emissiveIntensity={2}
                />
              </mesh>
            </Float>
          ))}
        </group>
        
        {/* Customer glow at bottom */}
        <mesh position={[0, -4.5, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#00FF88"
            emissive="#00FF88"
            emissiveIntensity={4}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
      
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.2} intensity={1.3} kernelSize={2} />
      </EffectComposer>
    </>
  )
}

export default LeadNurtureFunnel
