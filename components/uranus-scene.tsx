"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF, Html, Stars, AdaptiveDpr } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function LoadingScreen() {
  return (
    <Html center>
      <div className="text-white text-lg">Loading Uranus...</div>
    </Html>
  )
}

function GalaxyBackground() {
  return (
    <>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
      <Stars 
        radius={50} 
        depth={50} 
        count={2500} 
        factor={6} 
        saturation={0.5} 
        fade 
        speed={1.5}
      />
    </>
  )
}

function Uranus() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/Uranus.glb")

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={2}
        position={[0, 0, 0]}
      />
      
      {/* Enhanced atmosphere effect */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial 
          color="#B4F8FF" // Light blue-green color for Uranus
          transparent 
          opacity={0.1} 
          side={THREE.BackSide} 
        />
      </mesh>

      {/* Rings - Uranus's rings are nearly vertical relative to its orbital plane */}
      <group rotation={[Math.PI / 2, 0, Math.PI / 7]}>
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
      </group>
    </group>
  )
}

function SunLight() {
  const lightRef = useRef<THREE.DirectionalLight>(null)
  const targetRef = useRef<THREE.Object3D>(null)

  useFrame(({ clock }) => {
    if (lightRef.current && targetRef.current) {
      const time = clock.getElapsedTime()
      const radius = 15
      lightRef.current.position.x = Math.cos(time * 0.05) * radius
      lightRef.current.position.z = Math.sin(time * 0.05) * radius
      lightRef.current.position.y = 5
      lightRef.current.lookAt(0, 0, 0)
    }
  })

  return (
    <>
      {/* Main sunlight */}
      <directionalLight
        ref={lightRef}
        position={[15, 5, 0]}
        intensity={2}
        color="#FDF4DC"
        castShadow
      >
        <orthographicCamera 
          attach="shadow-camera" 
          args={[-10, 10, 10, -10, 0.1, 50]} 
        />
      </directionalLight>

      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.1} />

      {/* Subtle rim light on the opposite side */}
      <pointLight
        position={[-10, 0, 0]}
        intensity={0.3}
        color="#B4F8FF" // Matching Uranus's color
        distance={20}
        decay={2}
      />
    </>
  )
}

export default function UranusScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      className="absolute inset-0"
      style={{ background: "black" }}
      dpr={[1, 2]}
      shadows
    >
      <Suspense fallback={<LoadingScreen />}>
        <fog attach="fog" args={["black", 30, 100]} />
        <GalaxyBackground />
        <SunLight />
        <Uranus />
        <Environment preset="night" />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI * 3/4}
        />
        
        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom 
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Suspense>
      <AdaptiveDpr pixelated />
    </Canvas>
  )
}

useGLTF.preload("/models/Uranus.glb")
