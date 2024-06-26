'use client';

import { alpha, Button, styled, Typography } from '@mui/material';

export const SectionSkillsWrap = styled('div', {})(({ theme }) => ({}));

export const SectionSkillsTitle = styled(Typography, {})(({ theme }) => ({}));

export const SectionSkillsTech = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'flex-start'), rowGap: '24px' }));

export const SectionSkillsSubtitle = styled(
  'p',
  {}
)(({}) => ({
  margin: '0 0 16px 0',
  fontSize: '20px',
  lineHeight: 1
}));

export const SectionSkillsList = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'flex-start', 'center'), gap: '8px', flexWrap: 'wrap' }));

export const SectionSkillsItem = styled(
  Button,
  {}
)(({ theme }) => ({ backgroundColor: alpha(theme.palette.primary?.['main'], 0.3), color: theme.palette.common?.['white'] }));
