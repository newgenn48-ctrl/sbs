'use client'
import { extend } from '@react-three/fiber'
import * as THREE from 'three'

// This line is crucial. It makes all of THREE's objects available to R3F.
extend(THREE)

/**
 * This component doesn't render anything. Its only purpose is to run the
 * extend(THREE) side-effect on the client to set up React Three Fiber globally.
 */
export default function R3FSetup() {
  return null
}
