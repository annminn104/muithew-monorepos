'use client';

import { motion } from 'framer-motion';

import Subtitle from '@components/atoms/subtitle';
import { Button, styled, Typography } from '@mui/material';

export const AboutUsContentWrap = styled(
  'div',
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'column', 'flex-start', 'initial'), rowGap: '8px' }));

export const AboutUsContentSubtitle = styled(Subtitle, {})(({ theme }) => ({}));

export const AboutUsContentTitle = styled(motion(Typography), {})(({ theme }) => ({}));

export const AboutUsContentDesc = styled(motion(Typography), {})(({ theme }) => ({}));

export const AboutUsContentItem = styled(
  motion.div,
  {}
)(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'flex-start'), columnGap: '8px', paddingLeft: '8px' }));

export const AboutUsContentItemText = styled(Typography, {})(({ theme }) => ({}));

export const AboutUsContentBtn = styled(motion(Button), {})(({ theme }) => ({ width: '100%' }));
