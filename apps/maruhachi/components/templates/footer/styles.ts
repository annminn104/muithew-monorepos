'use client';

import { Container, Typography, styled } from '@mui/material';

export const FooterWrapper = styled(Container, {})(({}) => ({}));

export const FooterText = styled(Typography, {})(({ theme }) => ({ textAlign: 'center', b: { color: theme.palette.maruhachi['contrastText'] } }));
