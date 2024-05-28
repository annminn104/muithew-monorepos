'use client';

import { styled } from '@mui/material';

export const SectionInfoWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  flexDirection: 'column',
  margin: '24px 0'
}));

export const SectionInfoName = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex(),
  flexWrap: 'wrap',
  columnGap: '8px',
  span: { fontSize: '28px', margin: 0 }
}));

export const InfoName = styled(
  'h1',
  {}
)(({ theme }) => ({
  fontSize: '60px',
  margin: 0,
  lineHeight: 1,
  '@media screen and (max-width: 768px)': {
    textAlign: 'center',
    fontSize: '40px'
  }
}));

export const InfoWelcome = styled('p', {})(({ theme }) => ({ fontSize: '28px', margin: 0 }));

export const InfoRole = styled(
  'h2',
  {}
)(({ theme }) => ({
  margin: 0,
  textTransform: 'uppercase',
  color: 'rgb(165, 180, 252)',
  textAlign: 'center'
}));
