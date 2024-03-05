import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundArrowRightDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M9 9L15 15M15 15L15 10.5M15 15L10.5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundArrowRightDownIcon;
