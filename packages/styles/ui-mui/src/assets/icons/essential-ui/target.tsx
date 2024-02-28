import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TargetIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M2 12h3M19 12h3M12 22v-3M12 5V2' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M10 12h4M12 14v-4' />
    </SvgIcon>
  );
}

export default TargetIcon;
