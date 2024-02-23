import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AirbudsLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 18.667v.833a2.5 2.5 0 005 0v-.833m-5 0V7.559A5.588 5.588 0 017.56 2H7.664A3.353 3.353 0 0111 5.336V8a3 3 0 01-3 3 1 1 0 00-1 1v6.667m-5 0h5'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.676' d='M8 5v3' />
      <circle cx='5.5' cy='5.5' r='5.5' stroke={linearColor} strokeWidth='1.5' transform='matrix(-1 0 0 1 21 11)' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M14 14v5h3' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M14 5.1A5.006 5.006 0 0117.9 9' />
    </SvgIcon>
  );
}

export default React.memo(AirbudsLeftIcon);
