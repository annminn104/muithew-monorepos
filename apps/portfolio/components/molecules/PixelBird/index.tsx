'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

type PixelBirdProps = {};

const PixelBird: React.FC<PixelBirdProps> = () => {
  const groupRef = useRef();

  useFrame(({ clock }: { clock: any }) => {
    if (!groupRef.current) return;
    const elapsedTime = clock.getElapsedTime();
    (groupRef.current as any).children.forEach((bird: { position: { x: number; y: number; z: number } }, index: number) => {
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

  return <group ref={groupRef as any}>{birds}</group>;
};

export default PixelBird;
