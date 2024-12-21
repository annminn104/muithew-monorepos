'use client';
import { styled } from '@mui/material';

export const SectionBGPage = styled(
  'div',
  {}
)(({ theme }) => ({
  background: "url('/images/background.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom',
  backgroundSize: 'contain'
}));
