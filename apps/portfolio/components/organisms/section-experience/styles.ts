'use client';

import { styled, Typography } from '@mui/material';

export const SecExpWrap = styled('div', {})(({ theme }) => ({}));

export const SecExpTitle = styled(Typography, {})(({ theme }) => ({}));

export const SecExpList = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'), width: '100%', rowGap: '24px' }));

export const SecExpItem = styled('div', {})(({ theme }) => ({ padding: '16px' }));

export const SecExpResList = styled(
  'ul',
  {}
)(({ theme }) => ({
  margin: '0 0 8px 0',
  '&:before': {
    content: 'attr(aria-label)',
    fontSize: '16px',
    fontWeight: 700,
    marginLeft: '-40px'
  }
}));

export const SecExpHeadline = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  '@media screen and (max-width: 768px)': {
    ...theme.functions.adjustFlex('flex', 'column', 'center', 'center'),
    columnGap: '8px',
    textAlign: 'center',
    marginBottom: '12px'
  }
}));

export const SecExpCompany = styled(
  'span',
  {}
)(({ theme }) => ({
  fontSize: '24px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  '@media screen and (max-width: 768px)': {
    fontSize: '18px'
  }
}));

export const SecExpDate = styled('span', {})(({ theme }) => ({ fontSize: '16px', color: theme.palette.grey?.['500'] }));

export const SecExpOther = styled('div', {})(({ theme }) => ({ marginBottom: '8px' }));

export const SecExpOtherTitle = styled('span', {})(({ theme }) => ({ fontWeight: 700, fontSize: '16px' }));
