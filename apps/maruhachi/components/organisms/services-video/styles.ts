'use client';

import { styled } from '@mui/material';

export const SerVidWrap = styled(
  'div',
  {}
)(({}) => ({
  height: 500,
  zIndex: -1,
  '&:before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: 'url("/images/bg-parallax.jpg")',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: 0
  }
}));
