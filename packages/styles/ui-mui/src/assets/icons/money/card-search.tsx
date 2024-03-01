import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CardSearchIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 13v-1c0-3.771 0-5.657-1.172-6.828C19.657 4 17.771 4 14 4h-4C6.229 4 4.343 4 3.172 5.172 2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h3M10 16H6M2 10h20'
      />
      <circle cx='18' cy='17' r='3' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M20.5 19.5l1 1' />
    </SvgIcon>
  );
}

export default CardSearchIcon;
