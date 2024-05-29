'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, CanvasProps } from '@react-three/fiber';
import { Suspense } from 'react';

type ThreeViewProps = {
  canvas: CanvasProps;
} & React.HTMLAttributes<HTMLDivElement>;

const ThreeView: React.FC<ThreeViewProps> = ({ canvas, ...rest }) => {
  return (
    <div {...rest}>
      <Canvas {...canvas}>
        <Suspense fallback={false}>{canvas.children}</Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ThreeView;
