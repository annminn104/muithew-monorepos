'use client';

import { styled } from '@mui/material';

export const SectionWrap = styled(
  'section',
  {}
)(({}) => ({
  h3: {
    fontSize: '44px',
    textAlign: 'center',
    margin: '24px 0',
    fontWeight: 'bold',
    '@media screen and (max-width: 768px)': {
      fontSize: '32px'
    }
  }
}));
