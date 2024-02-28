import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FigmaIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 2H8.667a3.333 3.333 0 100 6.667H12V2zM12 8.667H8.667a3.333 3.333 0 000 6.666H12V8.667z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18.667 12A3.333 3.333 0 1112 12a3.333 3.333 0 016.667 0zM8.667 15.333H12v3.334a3.333 3.333 0 11-3.333-3.334z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M12 2h3.333a3.333 3.333 0 110 6.667H12V2z' />
    </SvgIcon>
  );
}

export default FigmaIcon;
