import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlarmTurnOffIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='13' r='9' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.121 15.121L12 13m0 0l-2.121-2.121M12 13l2.121-2.121M12 13l-2.121 2.121'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3.5 4.5l4-2.5M20.5 4.5l-4-2.5' />
    </SvgIcon>
  );
}

export default AlarmTurnOffIcon;
