import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RoundDoubleAltArrowRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={12} r={10} stroke={linearColor} strokeWidth={1.5} />
      <path d='M8.5 9L11.5 12L8.5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M12.5 9L15.5 12L12.5 15' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default RoundDoubleAltArrowRightIcon;
