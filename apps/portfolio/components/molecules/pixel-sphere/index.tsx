'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Clock as ThreeClock, Points as ThreePoints } from 'three';

type PixelSphereProps = {};

const PixelSphere: React.FC<PixelSphereProps> = () => {
  const sphereRef = useRef<ThreePoints | null>(null);

  useFrame(({ clock }: { clock: ThreeClock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 1.2;
      sphereRef.current.rotation.z = clock.getElapsedTime() * 0.7;
    }
  });

  return (
    <points ref={sphereRef}>
      <icosahedronGeometry args={[2, 5]} />
      <pointsMaterial color='white' size={0.05} />
    </points>
  );
};

export default PixelSphere;
