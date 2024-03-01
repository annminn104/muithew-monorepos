import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SoundwaveCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 7v10M17 10v4M7 9v6' />
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z' />
    </SvgIcon>
  );
}

export default SoundwaveCircleIcon;
