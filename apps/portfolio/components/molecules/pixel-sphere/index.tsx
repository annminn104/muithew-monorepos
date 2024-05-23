'use client';

import { useFrame } from '@react-three/fiber';

import { Suspense, useRef } from 'react';
import * as THREE from 'three';

type PixelSphereProps = {};

const PixelSphere: React.FC<PixelSphereProps> = () => {
  const sphereRef = useRef<THREE.Points | null>(null);

  useFrame(({ clock }: { clock: THREE.Clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 1.2;
      sphereRef.current.rotation.z = clock.getElapsedTime() * 0.7;
    }
  });

  return (
    <Suspense fallback={null}>
      <points ref={sphereRef}>
        <icosahedronGeometry args={[2, 5]} />
        <pointsMaterial color='white' size={0.05} />
      </points>
    </Suspense>
  );
};

export default PixelSphere;
