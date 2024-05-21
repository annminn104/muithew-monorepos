'use client';

import { styled } from '@mui/material';

export const SectionInfoWrap = styled(
  'section',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  flexDirection: 'column'
}));

export const SectionInfoName = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  columnGap: '8px',
  span: { fontSize: '28px', margin: 0 }
}));

export const InfoName = styled('h1', {})(({ theme }) => ({ fontSize: '60px', margin: 0 }));

export const InfoWelcome = styled('p', {})(({ theme }) => ({ fontSize: '28px', margin: 0 }));

export const InfoRole = styled(
  'h2',
  {}
)(({ theme }) => ({
  fontSize: '68px',
  margin: 0,
  textTransform: 'uppercase',
  color: 'rgb(165, 180, 252)'
}));
