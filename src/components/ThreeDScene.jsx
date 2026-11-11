import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

// Industrial Pipeline Section
function PipeSegment({ position, rotation, length = 2, radius = 0.15, color = '#B0BEC5' }) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      <cylinderGeometry args={[radius, radius, length, 32]} />
      <meshStandardMaterial
        color={color}
        metalness={0.85}
        roughness={0.15}
        envMapIntensity={1}
      />
    </mesh>
  )
}

// Flange component
function Flange({ position, rotation }) {
  return (
    <group position={position} rotation={rotation}>
      {/* Main flange disc */}
      <mesh castShadow>
        <cylinderGeometry args={[0.35, 0.35, 0.12, 32]} />
        <meshStandardMaterial color="#90A4AE" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Inner pipe bore */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.15, 0.14, 24]} />
        <meshStandardMaterial color="#607D8B" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Bolt holes - simplified as small cylinders on rim */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <mesh
            key={i}
            position={[Math.cos(rad) * 0.26, 0, Math.sin(rad) * 0.26]}
            castShadow
          >
            <cylinderGeometry args={[0.025, 0.025, 0.14, 8]} />
            <meshStandardMaterial color="#455A64" metalness={0.8} roughness={0.2} />
          </mesh>
        )
      })}
    </group>
  )
}

// Valve component
function Valve({ position }) {
  return (
    <group position={position}>
      {/* Valve body */}
      <mesh castShadow>
        <boxGeometry args={[0.5, 0.4, 0.4]} />
        <meshStandardMaterial color="#78909C" metalness={0.85} roughness={0.2} />
      </mesh>
      {/* Valve stem */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 16]} />
        <meshStandardMaterial color="#90A4AE" metalness={0.9} roughness={0.15} />
      </mesh>
      {/* Handwheel */}
      <mesh position={[0, 0.65, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.2, 0.025, 8, 24]} />
        <meshStandardMaterial color="#E58A32" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  )
}

// Pressure vessel
function PressureVessel({ position }) {
  return (
    <group position={position}>
      {/* Main vessel shell */}
      <mesh castShadow>
        <capsuleGeometry args={[0.35, 1.2, 8, 24]} />
        <meshStandardMaterial
          color="#B0BEC5"
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={1.2}
        />
      </mesh>
      {/* Nozzle connections */}
      <mesh position={[0, 0.9, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#90A4AE" metalness={0.85} roughness={0.15} />
      </mesh>
      <mesh position={[0, -0.9, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.3, 16]} />
        <meshStandardMaterial color="#90A4AE" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Support legs */}
      {[-0.25, 0.25].map((x, i) => (
        <mesh key={i} position={[x, -1.0, 0]} castShadow>
          <cylinderGeometry args={[0.04, 0.05, 0.4, 8]} />
          <meshStandardMaterial color="#607D8B" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}
    </group>
  )
}

// Inspection scanning ring
function ScanRing({ position }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(clock.elapsedTime * 0.8) * 1.0
      ref.current.material.opacity = 0.3 + Math.sin(clock.elapsedTime * 2) * 0.2
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.6, 0.012, 8, 48]} />
      <meshStandardMaterial
        color="#E58A32"
        emissive="#E58A32"
        emissiveIntensity={0.8}
        transparent
        opacity={0.4}
      />
    </mesh>
  )
}

// Floating technical label – small cube marker
function TechMarker({ position, color = '#164E78' }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.5
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * 1.2) * 0.08
    }
  })
  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.07, 0]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  )
}

// Main scene group with mouse rotation
function IndustrialScene() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle auto-rotation
      groupRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.3
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      {/* Central pressure vessel */}
      <PressureVessel position={[0, 0, 0]} />

      {/* Horizontal pipe runs */}
      <PipeSegment position={[-1.4, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} length={1.2} />
      <PipeSegment position={[1.4, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} length={1.2} />
      <PipeSegment position={[-1.4, -0.6, 0]} rotation={[0, 0, Math.PI / 2]} length={1.2} />
      <PipeSegment position={[1.4, -0.6, 0]} rotation={[0, 0, Math.PI / 2]} length={1.2} />

      {/* Vertical riser pipes */}
      <PipeSegment position={[-2.05, 0.05, 0]} rotation={[0, 0, 0]} length={0.65} color="#90A4AE" />
      <PipeSegment position={[2.05, 0.05, 0]} rotation={[0, 0, 0]} length={0.65} color="#90A4AE" />

      {/* Flanges at pipe connections */}
      <Flange position={[-0.85, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Flange position={[0.85, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Flange position={[-0.85, -0.6, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Flange position={[0.85, -0.6, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Flange position={[-1.95, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} />
      <Flange position={[1.95, 0.7, 0]} rotation={[0, 0, Math.PI / 2]} />

      {/* Valve on left riser */}
      <Valve position={[-2.05, 0.7, 0]} />

      {/* Inspection scan ring */}
      <ScanRing position={[0, 0, 0]} />

      {/* Technical markers */}
      <TechMarker position={[-1.5, 1.4, 0.5]} color="#164E78" />
      <TechMarker position={[1.6, 1.3, -0.4]} color="#E58A32" />
      <TechMarker position={[0.5, -1.6, 0.6]} color="#164E78" />
      <TechMarker position={[-0.6, 1.8, -0.3]} color="#E58A32" />
    </group>
  )
}

// WebGL fallback
function FallbackScene() {
  return (
    <div className="w-full h-full bg-bg-secondary rounded-2xl flex items-center justify-center border border-border-color">
      <div className="text-center p-8">
        <div className="w-24 h-24 mx-auto mb-4 bg-industrial-blue/10 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 64 64" className="w-14 h-14 text-industrial-blue" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="32" cy="32" r="20" />
            <line x1="32" y1="4" x2="32" y2="12" />
            <line x1="32" y1="52" x2="32" y2="60" />
            <line x1="4" y1="32" x2="12" y2="32" />
            <line x1="52" y1="32" x2="60" y2="32" />
            <circle cx="32" cy="32" r="6" fill="currentColor" />
          </svg>
        </div>
        <p className="text-industrial-blue font-heading font-semibold">Industrial Inspection</p>
        <p className="text-body-text text-sm mt-1">Quality Engineer Portfolio</p>
      </div>
    </div>
  )
}

export default function ThreeDScene() {
  return (
    <div className="w-full h-full relative">
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-border-color border-t-industrial-blue rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-body-text text-sm">Loading 3D Scene...</p>
          </div>
        </div>
      }>
        <Canvas
          camera={{ position: [0, 0.5, 6], fov: 42 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.5]}
          shadows
          className="w-full h-full"
        >
          <color attach="background" args={['transparent']} />
          
          {/* Lighting setup */}
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <directionalLight position={[-5, 3, -5]} intensity={0.4} color="#EAF1F6" />
          <pointLight position={[0, 4, 2]} intensity={0.6} color="#164E78" />
          <pointLight position={[2, -2, 3]} intensity={0.4} color="#E58A32" />
          
          {/* Environment for reflections */}
          <Environment preset="city" />
          
          {/* Main scene */}
          <Float floatIntensity={0.5} speed={1.5} rotationIntensity={0.1}>
            <IndustrialScene />
          </Float>
          
          {/* Controls - limited for performance */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(2 * Math.PI) / 3}
            rotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

