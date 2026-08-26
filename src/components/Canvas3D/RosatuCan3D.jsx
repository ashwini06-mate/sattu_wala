import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function RosatuCan3D({ flavor }) {
  const tubGroupRef = useRef();

  // Create a high-res procedural texture for the exact ROSATU Tub wrapper
  const labelTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    const tubYellow = flavor?.tubColor || '#E6B012';
    const tubTeal = flavor?.tubTeal || '#00A4C5';
    const tubRed = flavor?.tubRed || '#C02626';

    // 1. Base Gold/Yellow Background
    ctx.fillStyle = tubYellow;
    ctx.fillRect(0, 0, 1024, 1024);

    // 2. Top Teal Band
    ctx.fillStyle = tubTeal;
    ctx.fillRect(0, 0, 1024, 140);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 134, 1024, 6); // White divider line

    // 3. Brand Title: ROSATU
    ctx.fillStyle = '#3B2414';
    ctx.font = '900 115px serif';
    ctx.textAlign = 'center';
    ctx.fillText('ROSATU', 512, 260);

    // 4. Slogan Curve: Kholo Gholo Peelo
    ctx.fillStyle = '#4A2810';
    ctx.font = 'bold 42px sans-serif';
    ctx.fillText('Kholo Gholo Peelo', 420, 330);

    // 5. ₹1 Circle Badge
    ctx.beginPath();
    ctx.arc(760, 310, 50, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF8E7';
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#3B2414';
    ctx.stroke();

    ctx.fillStyle = '#3B2414';
    ctx.font = '900 48px sans-serif';
    ctx.fillText('₹1', 760, 325);

    // 6. Bowl of Sattu Powder & Spices illustration representation
    ctx.beginPath();
    ctx.arc(512, 400, 55, 0, Math.PI);
    ctx.fillStyle = '#5C3A21';
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(512, 385, 55, 18, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#D4A359';
    ctx.fill();

    // 7. Middle Red Banner: MASALA SATTU PREMIX
    ctx.fillStyle = tubRed;
    ctx.fillRect(0, 480, 1024, 130);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 54px serif';
    ctx.fillText((flavor?.name || 'MASALA SATTU PREMIX').toUpperCase(), 512, 565);

    // 8. Yellow Bottom Section with 3 Attribute Circles
    const circleY = 700;
    const circleRadius = 52;
    const centers = [280, 512, 744];
    const labels = [
      { top: 'HIGH', bot: 'PROTEIN' },
      { top: 'HIGH', bot: 'ENERGY' },
      { top: 'GLUTEN', bot: 'FREE' },
    ];

    centers.forEach((cx, idx) => {
      ctx.beginPath();
      ctx.arc(cx, circleY, circleRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#FFF8E7';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#3B2414';
      ctx.stroke();

      ctx.fillStyle = '#3B2414';
      ctx.font = 'bold 22px sans-serif';
      ctx.fillText(labels[idx].top, cx, circleY + 80);
      ctx.fillText(labels[idx].bot, cx, circleY + 104);
    });

    // Icons inside circles
    ctx.fillStyle = '#3B2414';
    ctx.font = '40px sans-serif';
    ctx.fillText('💪', 280, circleY + 12);
    ctx.fillText('⚡', 512, circleY + 12);
    ctx.fillText('🌾', 744, circleY + 12);

    // 9. Bottom Teal Banner: THE INDIAN SUPER DRINK
    ctx.fillStyle = tubTeal;
    ctx.fillRect(0, 870, 1024, 154);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 46px serif';
    ctx.fillText('THE INDIAN SUPER DRINK', 512, 960);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [flavor]);

  // Smooth rotation & drag tilt physics
  useFrame((state, delta) => {
    if (tubGroupRef.current) {
      tubGroupRef.current.rotation.y += delta * 0.45;
      const mouseX = state.mouse.x * 0.25;
      const mouseY = state.mouse.y * 0.25;
      tubGroupRef.current.rotation.x = THREE.MathUtils.lerp(tubGroupRef.current.rotation.x, mouseY, 0.05);
      tubGroupRef.current.rotation.z = THREE.MathUtils.lerp(tubGroupRef.current.rotation.z, -mouseX * 0.4, 0.05);
    }
  });

  return (
    <group ref={tubGroupRef} position={[0, 0, 0]} scale={[1.1, 1.1, 1.1]}>
      
      {/* Tapered Tub Body */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <cylinderGeometry args={[1.35, 1.1, 3.4, 64]} />
        <meshStandardMaterial
          map={labelTexture}
          roughness={0.35}
          metalness={0.15}
        />
      </mesh>

      {/* Pure White Lid on Top */}
      <mesh position={[0, 1.75, 0]} castShadow>
        <cylinderGeometry args={[1.42, 1.4, 0.22, 64]} />
        <meshStandardMaterial roughness={0.2} metalness={0.05} color="#FFFFFF" />
      </mesh>

      {/* Lid Overhang Rim */}
      <mesh position={[0, 1.87, 0]} castShadow>
        <cylinderGeometry args={[1.4, 1.4, 0.04, 64]} />
        <meshStandardMaterial roughness={0.2} metalness={0.05} color="#F1F5F9" />
      </mesh>

      {/* Pure White Base Ring */}
      <mesh position={[0, -1.75, 0]} castShadow>
        <cylinderGeometry args={[1.1, 1.12, 0.2, 64]} />
        <meshStandardMaterial roughness={0.2} metalness={0.05} color="#FFFFFF" />
      </mesh>

    </group>
  );
}
