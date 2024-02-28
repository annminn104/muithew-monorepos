import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StructureIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 5a3 3 0 11-6 0 3 3 0 016 0zM22 5a3 3 0 11-6 0 3 3 0 016 0zM8 19a3 3 0 11-6 0 3 3 0 016 0zM22 19a3 3 0 11-6 0 3 3 0 016 0z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8 19h8M8 5h8M19 16V8M5 16V8' />
    </SvgIcon>
  );
}

export default StructureIcon;
