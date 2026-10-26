import { Canvas, useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function OrbitalCore({ reducedMotion }) {
  const group = useRef()
  const ring = useRef()

  useFrame(({ clock, pointer }) => {
    if (!group.current || reducedMotion) return
    const time = clock.getElapsedTime()
    group.current.rotation.y = time * 0.18 + pointer.x * 0.25
    group.current.rotation.x = Math.sin(time * 0.32) * 0.12 - pointer.y * 0.14
    ring.current.rotation.z = time * 0.3
  })

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.35, 5]} />
        <meshStandardMaterial color="#7c5cff" roughness={0.18} metalness={0.6} emissive="#211254" emissiveIntensity={0.75} />
      </mesh>
      <mesh scale={1.12}>
        <icosahedronGeometry args={[1.35, 3]} />
        <meshBasicMaterial color="#a8fff2" wireframe transparent opacity={0.2} />
      </mesh>
      <group ref={ring} rotation={[0.9, 0.15, 0]}>
        <mesh>
          <torusGeometry args={[1.86, 0.022, 12, 120]} />
          <meshBasicMaterial color="#39e7d0" transparent opacity={0.75} />
        </mesh>
        <mesh rotation={[Math.PI / 2.6, 0, 0.55]}>
          <torusGeometry args={[1.62, 0.018, 12, 120]} />
          <meshBasicMaterial color="#f1b85b" transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  )
}

function StarField({ reducedMotion }) {
  const stars = useRef()
  const positions = useMemo(() => {
    const points = new Float32Array(300 * 3)
    for (let i = 0; i < points.length; i += 3) {
      points[i] = (Math.random() - 0.5) * 12
      points[i + 1] = (Math.random() - 0.5) * 8
      points[i + 2] = (Math.random() - 0.5) * 6 - 1
    }
    return points
  }, [])

  useFrame(({ clock }) => {
    if (stars.current && !reducedMotion) stars.current.rotation.y = clock.getElapsedTime() * 0.018
  })

  return (
    <points ref={stars}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#e8e5ff" size={0.025} sizeAttenuation transparent opacity={0.78} />
    </points>
  )
}

export default function Scene({ reducedMotion = false }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.4], fov: 44 }} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={1.05} />
        <pointLight position={[3.5, 3.5, 3]} intensity={24} color="#8c73ff" />
        <pointLight position={[-4, -1, 2]} intensity={14} color="#39e7d0" />
        <StarField reducedMotion={reducedMotion} />
        <OrbitalCore reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  )
}
