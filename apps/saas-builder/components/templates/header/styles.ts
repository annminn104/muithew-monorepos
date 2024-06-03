'use client';

import { styled } from '@mui/material';

export const HeaderWrap = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between'), padding: '24px' }));
