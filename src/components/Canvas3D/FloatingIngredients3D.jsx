import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingIngredients3D({ count = 35, flavorColor = '#f59e0b' }) {
  const particlesRef = useRef();
  const spicesGroupRef = useRef();

  // Create randomized positions & scales for orbiting particles
  const particlesData = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;
      const x = radius * Math.cos(theta) * Math.cos(phi);
      const y = (Math.random() - 0.5) * 4.5;
      const z = radius * Math.sin(theta) * Math.cos(phi);
      const scale = 0.04 + Math.random() * 0.12;
      const speed = 0.2 + Math.random() * 0.6;
      temp.push({ x, y, z, scale, speed, theta });
    }
    return temp;
  }, [count]);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.2;
      particlesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
    if (spicesGroupRef.current) {
      spicesGroupRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <>
      {/* Orbiting Grain Particles */}
      <group ref={particlesRef}>
        {particlesData.map((p, idx) => (
          <mesh
            key={idx}
            position={[p.x, p.y, p.z]}
            scale={[p.scale, p.scale, p.scale]}
          >
            <dodecahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? flavorColor : '#FDE68A'}
              roughness={0.3}
              metalness={0.6}
              emissive={flavorColor}
              emissiveIntensity={0.2}
            />
          </mesh>
        ))}
      </group>

      {/* Floating 3D Spice Pod Elements */}
      <group ref={spicesGroupRef}>
        {/* Cardamom Pod 1 */}
        <mesh position={[-2.4, 1.2, 1.2]} rotation={[0.4, 0.8, 0.2]} scale={[0.15, 0.28, 0.15]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#047857" roughness={0.4} />
        </mesh>

        {/* Jaggery Crystal Chunk */}
        <mesh position={[2.2, -1.4, 0.8]} rotation={[0.6, 0.2, 0.9]} scale={[0.22, 0.22, 0.22]}>
          <dodecahedronGeometry args={[1]} />
          <meshStandardMaterial color="#d97706" roughness={0.2} metalness={0.3} transparent opacity={0.9} />
        </mesh>

        {/* Cinnamon / Roasted Grain Pod */}
        <mesh position={[-2.1, -1.8, -1.1]} rotation={[1.1, 0.5, 0]} scale={[0.1, 0.35, 0.1]}>
          <cylinderGeometry args={[1, 1, 1, 8]} />
          <meshStandardMaterial color="#7c2d12" roughness={0.5} />
        </mesh>

        {/* Golden Star Anise / Spark */}
        <mesh position={[2.5, 1.8, -1.4]} rotation={[0.2, 1.2, 0.5]} scale={[0.18, 0.18, 0.05]}>
          <octahedronGeometry args={[1]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.1} metalness={0.9} />
        </mesh>
      </group>
    </>
  );
}
