'use client'

import * as THREE from 'three'
import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const CUBE_COUNT = 30
const CUBE_AREA = 25
const LINE_COUNT = 15

const ItInfrastructure = () => {
  const groupRef = useRef<THREE.Group>(null!)
  const linesRef = useRef<any>(null)

  const cubes = useMemo(() => {
    const temp = []
    for (let i = 0; i < CUBE_COUNT; i++) {
      const size = Math.random() * 0.5 + 0.2
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * CUBE_AREA,
        (Math.random() - 0.5) * CUBE_AREA,
        (Math.random() - 0.5) * CUBE_AREA
      )
      const speed = Math.random() * 0.05 + 0.01
      const rotationSpeed = new THREE.Vector3(
        Math.random() * 0.01 - 0.005,
        Math.random() * 0.01 - 0.005,
        Math.random() * 0.01 - 0.005
      )
      temp.push({ size, position, speed, rotationSpeed, initialPosition: position.clone() })
    }
    return temp
  }, [])

  const lines = useMemo(() => {
    const temp = []
    for (let i = 0; i < LINE_COUNT; i++) {
      const startCube = cubes[Math.floor(Math.random() * cubes.length)]
      const endCube = cubes[Math.floor(Math.random() * cubes.length)]
      temp.push({
        start: startCube.position,
        end: endCube.position,
        life: Math.random() * 4 + 2,
        progress: Math.random() * 6, // Start at a random point in the lifecycle
      })
    }
    return temp
  }, [cubes])

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsedTime * 0.03
      groupRef.current.rotation.x = elapsedTime * 0.01

      groupRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.userData.index !== undefined) {
          const cube = cubes[child.userData.index];
          if (cube) {
            child.position.y = cube.initialPosition.y + Math.sin(elapsedTime * cube.speed + child.userData.index) * 2;
            child.rotation.x += cube.rotationSpeed.x;
            child.rotation.y += cube.rotationSpeed.y;
            child.rotation.z += cube.rotationSpeed.z;
          }
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.position} userData={{ index: i }}>
          <boxGeometry args={[cube.size, cube.size, cube.size]} />
          <meshStandardMaterial 
            color="#00D9FF" 
            emissive="#00D9FF"
            emissiveIntensity={0.5}
            wireframe 
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <AnimatedLine key={`line-${i}`} start={line.start} end={line.end} life={line.life} progress={line.progress} />
      ))}
    </group>
  );
}

interface AnimatedLineProps {
  start: THREE.Vector3;
  end: THREE.Vector3;
  life: number;
  progress: number;
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({ start, end, life, progress: initialProgress }) => {
    const ref = useRef<THREE.Line>(null!)
    const progress = useRef(initialProgress)

    const geometry = useMemo(() => {
        const points = []
        points.push(start.x, start.y, start.z)
        points.push(end.x, end.y, end.z)

        const geometry = new THREE.BufferGeometry()
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))
        return geometry
    }, [start, end])

    useFrame(() => {
        if (ref.current?.material) {
            progress.current += 0.01
            const lifeCycle = Math.sin(Math.PI * (progress.current / life))

            if (progress.current > life) {
                progress.current = 0
            }

            (ref.current.material as THREE.LineBasicMaterial).opacity = lifeCycle > 0 ? lifeCycle * 0.5 : 0
        }
    })

    return (
        <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
            color: "#00FF88",
            transparent: true,
            opacity: 0
        }))} ref={ref} />
    )
}


export default ItInfrastructure
