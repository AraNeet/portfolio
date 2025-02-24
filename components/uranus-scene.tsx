"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import * as THREE from "three"

function Uranus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001 // Slow rotation
    }
  })

  return (
    <mesh ref={meshRef}>
      {/* Main planet body - using Uranus's characteristic blue-green color */}
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial 
        color="#89CFF0" // Light blue-green color
        metalness={0.8}
        roughness={0.5}
      />

      {/* Atmosphere */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          color="#B4F8FF" 
          transparent 
          opacity={0.2} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Rings - Uranus's rings are nearly vertical relative to its orbital plane */}
      <group rotation={[Math.PI / 2, 0, Math.PI / 7]}>
        {/* Multiple rings for more detail */}
        <mesh>
          <ringGeometry args={[3, 3.5, 64]} />
          <meshStandardMaterial 
            color="#B4F8FF" 
            transparent 
            opacity={0.3} 
            side={THREE.DoubleSide} 
          />
        </mesh>
        <mesh>
          <ringGeometry args={[3.6, 4, 64]} />
          <meshStandardMaterial 
            color="#89CFF0" 
            transparent 
            opacity={0.2} 
            side={THREE.DoubleSide} 
          />
        </mesh>
        <mesh>
          <ringGeometry args={[4.1, 4.3, 64]} />
          <meshStandardMaterial 
            color="#B4F8FF" 
            transparent 
            opacity={0.1} 
            side={THREE.DoubleSide} 
          />
        </mesh>
      </group>
    </mesh>
  )
}

export default function UranusScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      className="absolute inset-0"
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <Uranus />
      <Environment preset="night" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        // Limit vertical rotation to maintain visibility of the tilted rings
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI * 3/4}
      />
    </Canvas>
  )
}
