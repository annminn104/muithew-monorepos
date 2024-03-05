import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundArrowRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path
        d='M8 12C12.6863 12 11.3137 12 16 12M16 12L13 9M16 12L13 15'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </SvgIcon>
  );
}

export default RoundArrowRightIcon;
