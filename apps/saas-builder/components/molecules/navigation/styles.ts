'use client';

import { List, styled } from '@mui/material';

export const NavList = styled(List, {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between'), columnGap: '16px' }));
