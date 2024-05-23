'use client';

import { styled } from '@mui/material';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export const WrapperWrap = styled('div', {})(({ theme }) => ({}));

export const WrapperContent = styled(
  'div',
  {}
)(({ theme }) => ({
  paddingTop: '100px'
}));

export const WrapperBg = styled('div', {})(({ theme }) => ({ position: 'fixed', inset: 0, width: '100%', height: '100vh', zIndex: -20 }));

export const WrapperBgThreeJS = styled(Canvas, {})(({ theme }) => ({}));

export const WrapperBgOrbitControls = styled(OrbitControls, {})(({ theme }) => ({}));
