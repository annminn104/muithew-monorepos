'use client';

import { OrbitControls, View } from '@react-three/drei';
import { Canvas, CanvasProps } from '@react-three/fiber';
import { forwardRef, Suspense, useImperativeHandle, useRef } from 'react';

type ThreeViewProps = {
  canvas: CanvasProps;
} & React.HTMLAttributes<HTMLDivElement>;

const ThreeView = forwardRef(({ canvas, ...rest }: ThreeViewProps, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);
  return (
    <div {...rest}>
      <Canvas {...canvas}>
        <View track={localRef}>
          <Suspense fallback={false}>{canvas.children}</Suspense>
          <OrbitControls enableZoom={false} />
        </View>
      </Canvas>
    </div>
  );
});

export default ThreeView;
