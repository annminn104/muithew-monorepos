'use client';

import { useFrame } from '@react-three/fiber';

import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type PixelBirdProps = {};

const PixelBird: React.FC<PixelBirdProps> = () => {
  const groupRef = useRef<THREE.Group | null>();

  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (!groupRef.current) return;
    const elapsedTime = clock.getElapsedTime();
    groupRef.current.children.forEach((bird: { position: { x: number; y: number; z: number } }, index: number) => {
      const angle = (elapsedTime + index * 0.2) % (2 * Math.PI);
      const radius = 2.3 + Math.random() * 0.0001;
      bird.position.x = radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index);
      bird.position.y = radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index);
      bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index);
    });
  });

  const birds = [...Array(50)].map((_, i) => {
    const size = i % 2 === 0 ? 0.03 : 0.05;
    return (
      <mesh key={i} position={[1, 0, 0]}>
        <planeGeometry args={[size, size]} />
        <meshBasicMaterial color='white' />
      </mesh>
    );
  });

  return (
    <Suspense fallback={null}>
      <group ref={groupRef}>{birds}</group>
    </Suspense>
  );
};

export default PixelBird;
