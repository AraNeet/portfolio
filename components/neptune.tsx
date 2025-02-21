"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

export default function Neptune() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001 // Slow rotation
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#4167b2" metalness={0.8} roughness={0.5} />

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial color="#6b93ff" transparent opacity={0.2} side={THREE.BackSide} />
      </mesh>

      {/* Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 5, 64]} />
        <meshStandardMaterial color="#4167b2" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </mesh>
  )
}