'use client';

import Subtitle from '@components/atoms/subtitle';
import { Button, styled, Typography } from '@mui/material';

export const AboutUsContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'), rowGap: '8px' }));

export const AboutUsContentSubtitle = styled(Subtitle, {})(({ theme }) => ({}));

export const AboutUsContentTitle = styled(Typography, {})(({ theme }) => ({ color: theme.palette.maruhachi['contrastText'] }));

export const AboutUsContentDesc = styled(Typography, {})(({ theme }) => ({}));

export const AboutUsContentItem = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'flex-start'), columnGap: '8px', paddingLeft: '8px' }));

export const AboutUsContentItemText = styled(Typography, {})(({ theme }) => ({}));

export const AboutUsContentBtn = styled(Button, {})(({ theme }) => ({ width: '100%' }));
