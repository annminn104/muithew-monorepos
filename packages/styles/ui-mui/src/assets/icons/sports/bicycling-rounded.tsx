import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BicyclingRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='14' cy='4' r='2' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='6' cy='18' r='3' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='18' cy='18' r='3' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18.5 10h-3.918c-.377 0-.743-.128-1.038-.363L11.386 7.92A2.638 2.638 0 108.688 12.4l3.091 1.349a1.89 1.89 0 01.981 2.477L12 18'
      />
    </SvgIcon>
  );
}

export default React.memo(BicyclingRoundedIcon);
