'use client';

import { IconButton, styled } from '@mui/material';

export const ContactHeaderBarWrap = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex('flex', 'row', 'space-between') }));

export const ContactHeaderBarInfo = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '8px' }));

export const ContactHeaderBarInfoItem = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex(), columnGap: '4px' }));

export const ContactHeaderBarSocial = styled('div', {})(({ theme }) => ({ ...theme.functions.adjustFlex() }));

export const ContactHeaderBarSocialItem = styled(IconButton, {})(({}) => ({}));
