import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VinylIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='3' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M21.95 13c-.501 5.054-4.765 9-9.95 9-5.523 0-10-4.477-10-10 0-5.185 3.947-9.448 9-9.95'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M15 12V2.456a10.024 10.024 0 016.542 6.542' />
    </SvgIcon>
  );
}

export default VinylIcon;
