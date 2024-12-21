'use client';

import { Container, styled } from '@mui/material';

export const HomePageSection = styled(
  'section',
  {}
)(({ theme }) => ({ padding: '80px 0', position: 'relative', [theme.breakpoints.down('md')]: { padding: '60px 0' } }));

export const HomePageSectionWrap = styled(Container, {})(({ theme }) => ({}));
