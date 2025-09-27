'use client'

import * as THREE from 'three'
import React, { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Icosahedron } from '@react-three/drei'

const DataStream = ({ curve }: { curve: THREE.CatmullRomCurve3 }) => {
  const pointRef = useRef<THREE.Mesh>(null!)
  
  useFrame(({ clock }) => {
    if (pointRef.current) {
      const t = (clock.getElapsedTime() * 0.1) % 1;
      const position = curve.getPointAt(t);
      pointRef.current.position.copy(position);
    }
  });

  return (
    <mesh ref={pointRef}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color="#00FF88" toneMapped={false} />
    </mesh>
  );
};

const DigitalCommandCore = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const coreRef = useRef<THREE.Mesh>(null!)
  const lightRef = useRef<THREE.PointLight>(null!)

  const dataStreams = useMemo(() => {
    const streams = [];
    const numStreams = 5;
    for (let i = 0; i < numStreams; i++) {
      const points = [];
      const radius = 1.5 + Math.random() * 1;
      for (let j = 0; j < 100; j++) {
        const angle = (j / 100) * Math.PI * 4;
        const x = Math.cos(angle) * (radius + j * 0.01);
        const y = (j / 100) * 3 - 1.5;
        const z = Math.sin(angle) * (radius + j * 0.01);
        points.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(points);
      streams.push({ id: i, curve });
    }
    return streams;
  }, []);

  useFrame(({ clock, mouse }) => {
    const elapsedTime = clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y += (mouse.x * 0.5 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-mouse.y * 0.5 - groupRef.current.rotation.x) * 0.05;
    }

    if (coreRef.current) {
      coreRef.current.rotation.y += 0.005
      coreRef.current.rotation.x += 0.002
    }

    // Pulsating light effect
    if (lightRef.current) {
      lightRef.current.intensity = (Math.sin(elapsedTime * 2) + 1.5) * 0.8;
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      
      <Icosahedron ref={coreRef} args={[1, 4]}>
        <meshStandardMaterial 
          color="#00D9FF" 
          emissive="#00D9FF"
          emissiveIntensity={0.7}
          wireframe 
        />
      </Icosahedron>

      {/* Pulsating light inside the core */}
      <pointLight ref={lightRef} color="#00D9FF" intensity={1} distance={5} />

      {dataStreams.map(stream => (
        <group key={stream.id} rotation={[Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]}>
          <DataStream curve={stream.curve} />
        </group>
      ))}

      <Satellite />
    </group>
  )
}

const Satellite = () => {
    const ref = useRef<THREE.Mesh>(null!)
    const trailRef = useRef<THREE.Line>(null!)
    const positions = useRef<THREE.Vector3[]>([])

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * 0.5
        const x = Math.cos(t) * 3
        const y = Math.sin(t * 1.2) * 1.5
        const z = Math.sin(t) * 3

        ref.current.position.set(x, y, z)

        positions.current.push(new THREE.Vector3(x, y, z))
        if (positions.current.length > 20) {
            positions.current.shift()
        }

        if (trailRef.current && positions.current.length > 1) {
            const geometry = new THREE.BufferGeometry().setFromPoints(positions.current)
            trailRef.current.geometry.dispose()
            trailRef.current.geometry = geometry
        }
    })

    const lineObject = useMemo(() => {
        const geometry = new THREE.BufferGeometry()
        const material = new THREE.LineBasicMaterial({
            color: "#00D9FF",
            transparent: true,
            opacity: 0.6
        })
        return new THREE.Line(geometry, material)
    }, [])

    return (
        <group>
            <mesh ref={ref}>
                <sphereGeometry args={[0.05, 16, 16]} />
                <meshBasicMaterial color="#FFFFFF" toneMapped={false} />
            </mesh>
            <primitive object={lineObject} ref={trailRef} />
        </group>
    )
}

export default DigitalCommandCore
