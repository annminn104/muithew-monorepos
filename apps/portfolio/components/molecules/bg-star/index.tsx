'use client';

import { PointMaterial, Points } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as random from 'maath/random/dist/maath-random.esm';
import { Suspense, useRef, useState } from 'react';
import { Points as ThreePoints } from 'three';

type BgStarProps = {};

const BgStar: React.FC<BgStarProps> = (props: any) => {
  const ref = useRef<ThreePoints | null>(null);

  const [sphere] = useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    ref.current.rotation.x = delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <Suspense fallback={null}>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial transparent color='#fff' size={0.002} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    </Suspense>
  );
};

export default BgStar;
