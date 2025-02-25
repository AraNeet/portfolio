"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, OrbitControls, useGLTF, Html, Stars, AdaptiveDpr } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function LoadingScreen() {
  return (
    <Html center>
      <div className="text-white text-lg">Loading Neptune...</div>
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

function Neptune() {
  const groupRef = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/Neptune.glb")

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
          color="#6b93ff" 
          transparent 
          opacity={0.1} 
          side={THREE.BackSide} 
        />
      </mesh>
    </group>
  )
}

function SunLight() {
  // Create a reference for the light to animate or update it
  const lightRef = useRef<THREE.DirectionalLight>(null)
  const targetRef = useRef<THREE.Object3D>(null)

  useFrame(({ clock }) => {
    if (lightRef.current && targetRef.current) {
      // Optional: Subtle light movement
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
        position={[15, 5, 0]} // Position the light far to the side
        intensity={2} // Increased intensity for stronger shadows
        color="#FDF4DC" // Slightly warm color for the sun
        castShadow
      >
        {/* Improve shadow quality */}
        <orthographicCamera 
          attach="shadow-camera" 
          args={[-10, 10, 10, -10, 0.1, 50]} 
        />
      </directionalLight>

      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.1} /> {/* Reduced ambient light for stronger contrast */}

      {/* Subtle rim light on the opposite side */}
      <pointLight
        position={[-10, 0, 0]}
        intensity={0.3}
        color="#6b93ff"
        distance={20}
        decay={2}
      />
    </>
  )
}

export default function NeptuneScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      className="absolute inset-0"
      style={{ background: "black" }}
      dpr={[1, 2]}
      shadows // Enable shadows
    >
      <Suspense fallback={<LoadingScreen />}>
        <fog attach="fog" args={["black", 30, 100]} />
        <GalaxyBackground />
        <SunLight />
        <Neptune />
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

useGLTF.preload("/models/Neptune.glb")
