import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FerrisWheelIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='11' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20.5 7.5a1 1 0 11-2 0 1 1 0 012 0zM20.5 16a1 1 0 11-2 0 1 1 0 012 0zM5.5 7.5a1 1 0 11-2 0 1 1 0 012 0zM5.5 16a1 1 0 11-2 0 1 1 0 012 0zM12 2.5a1 1 0 110 2 1 1 0 010-2zM12 18.5a1 1 0 110 2 1 1 0 010-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M13.5 13l5 9M10.5 13l-5 9' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M10.564 3.783a3 3 0 012.872 0l4.794 2.614a3 3 0 011.564 2.634v4.938a3 3 0 01-1.564 2.634l-4.794 2.614a3 3 0 01-2.872 0L5.77 16.603a3 3 0 01-1.564-2.634V9.03A3 3 0 015.77 6.397l4.794-2.614z'
      />
    </SvgIcon>
  );
}

export default React.memo(FerrisWheelIcon);
