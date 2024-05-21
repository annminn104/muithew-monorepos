'use client';

import { styled } from '@mui/material';
import { SocialGithubOutIcon } from '@styles/ui-mui/icons';

export const CardGithubWrap = styled(
  'div',
  {}
)(({ theme }) => ({
  padding: '24px'
}));

export const CardGithubTitle = styled('div', {})(({ theme }) => ({ marginBottom: '16px', fontSize: '24px', fontWeight: 'bold' }));

export const CardGithubDesc = styled(
  'div',
  {}
)(({ theme }) => ({ display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }));

export const CardGithubIcon = styled(
  SocialGithubOutIcon,
  {}
)(({ theme }) => ({
  fontSize: '120px',
  position: 'absolute',
  top: '50%',
  right: '24px',
  transform: 'translateY(-50%)',
  zIndex: -1,
  path: {
    fill: theme.palette.grey?.['700']
  }
}));
