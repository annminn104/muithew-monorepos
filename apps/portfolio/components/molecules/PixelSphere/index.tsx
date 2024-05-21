'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

type PixelSphereProps = {};

const PixelSphere: React.FC<PixelSphereProps> = () => {
  const sphereRef = useRef();

  useFrame(({ clock }: { clock: any }) => {
    if (sphereRef.current) {
      (sphereRef.current as any).rotation.y = clock.getElapsedTime() * 1.2;
      (sphereRef.current as any).rotation.z = clock.getElapsedTime() * 0.7;
    }
  });

  return (
    <points ref={sphereRef as any}>
      <icosahedronGeometry args={[2, 5]} />
      <pointsMaterial color='white' size={0.05} />
    </points>
  );
};

export default PixelSphere;
