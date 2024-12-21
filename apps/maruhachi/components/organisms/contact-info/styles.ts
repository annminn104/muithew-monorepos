'use client';

import { styled, Typography } from '@mui/material';
import Link from 'next/link';

export const ContactInfoWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  rowGap: '24px',
  color: theme.palette.maruhachi['contrastText']
}));

export const ContactInfoList = styled(
  'div',
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'),
  flexWrap: 'wrap',
  width: '100%',
  gap: '16px',
  borderRadius: '16px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column'
  }
}));

export const ContactInfoItem = styled(
  Link,
  {}
)(({ theme }) => ({
  ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'center'),
  borderRadius: '8px',
  padding: '16px',
  flex: '1 0 calc(50% - 16px)',
  textDecoration: 'none',
  border: `1px solid ${theme.palette.maruhachi['contrastText']}`,
  backgroundColor: theme.palette.grey['100'],
  [theme.breakpoints.down('md')]: {
    width: '100%',
    flex: '1 0 100%',
    textAlign: 'center',
    padding: '8px'
  }
}));

export const ContactInfoIcon = styled(
  'div',
  {}
)(({ theme }) => ({
  svg: { width: '60px', height: '60px' },
  [theme.breakpoints.down('md')]: {
    svg: { width: '40px', height: '40px' }
  }
}));

export const ContactInfoText = styled(Typography, {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'] }));

export const ContactInfoSocialList = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '24px' }));

export const ContactInfoSocialItem = styled(
  Link,
  {}
)(({ theme }) => ({ svg: { width: '100px', height: '100px' }, [theme.breakpoints.down('md')]: { svg: { width: '60px', height: '60px' } } }));
