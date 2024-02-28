import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VolumeKnobIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='5' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 7v4' />
      <path
        fill={linearColor}
        d='M13 3.5a1 1 0 11-2 0 1 1 0 012 0zM20.5 13a1 1 0 110-2 1 1 0 010 2zM3.5 13a1 1 0 110-2 1 1 0 010 2zM6.697 5.283a1 1 0 11-1.415 1.414 1 1 0 011.415-1.414zM18.718 17.303a1 1 0 11-1.415 1.415 1 1 0 011.415-1.415zM18.718 6.697a1 1 0 11-1.415-1.414 1 1 0 011.415 1.414zM6.697 18.718a1 1 0 11-1.415-1.415 1 1 0 011.415 1.415z'
      />
    </SvgIcon>
  );
}

export default VolumeKnobIcon;
