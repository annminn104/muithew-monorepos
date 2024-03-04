import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Microphone2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M7 8a5 5 0 0110 0v3a5 5 0 01-10 0V8z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13.5 8H17M13.5 11H17M7 8h2M7 11h2M20 10v1a8 8 0 11-16 0v-1M12 19v3' />
    </SvgIcon>
  );
}

export default Microphone2Icon;
