"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Neptune() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.1 // Slow rotation
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#4167b2" metalness={0.8} roughness={0.5} />

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial color="#6b93ff" transparent opacity={0.01} side={THREE.BackSide} />
      </mesh>

      {/* Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 5, 64]} />
        <meshStandardMaterial color="#4167b2" transparent opacity={1} side={THREE.DoubleSide} />
      </mesh>
    </mesh>
  )
}

const NeptuneScene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 45 }} className="absolute inset-0 -z-10">
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 5, 15]} intensity={1} />
      <Neptune />
      <Environment preset="night" />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}

export default NeptuneScene

