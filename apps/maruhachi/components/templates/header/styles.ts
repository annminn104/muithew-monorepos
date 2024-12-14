'use client';

import { Container, styled } from '@mui/material';

export const HeaderWrapper = styled(Container, {})(({ theme }) => ({ [theme.breakpoints.down('md')]: { padding: 0 } }));
