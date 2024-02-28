import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CodeCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M15.5 9l.172.172c1.333 1.333 2 2 2 2.828 0 .828-.667 1.495-2 2.828L15.5 15M13.294 7.17L12 12l-1.294 4.83M8.5 9l-.172.172c-1.333 1.333-2 2-2 2.828 0 .828.667 1.495 2 2.828L8.5 15'
      />
    </SvgIcon>
  );
}

export default CodeCircleIcon;
