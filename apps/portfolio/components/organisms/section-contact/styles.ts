'use client';

import { styled } from '@mui/material';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export const SecContactWrap = styled('section', {})(({ theme }) => ({ height: '500px', padding: '40px 0' }));

export const SecContactThreeJS = styled(Canvas, {})(({ theme }) => ({}));

export const SecContactOrbitControls = styled(OrbitControls, {})(({ theme }) => ({}));
