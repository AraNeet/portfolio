"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF } from "@react-three/drei"
import * as THREE from "three"

function Neptune() {
  const meshRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/Neptune.glb")

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001 // Slow rotation
    }
  })

  return (
    <group ref={meshRef}>
      <primitive object={scene} scale={2} />
      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial color="#6b93ff" transparent opacity={0.00001} side={THREE.BackSide} />
      </mesh>
      {/* Rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 5, 64]} />
        <meshStandardMaterial color="#4167b2" transparent opacity={0.0002} side={THREE.DoubleSide} />
      </mesh>
    </group>
  )
}

export default function NeptuneScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      className="absolute inset-0"
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Neptune />
      <Environment preset="night" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}
