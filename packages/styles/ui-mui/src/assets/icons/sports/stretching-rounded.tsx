import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StretchingRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='14.5' cy='4.5' r='2.5' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 21.995v-3.947c0-1.775-1.605-3.129-3.373-2.844m-7.679-1.77l-.025-.024c-1.042-1.006-.237-2.625.67-3.268.907-.642 4.752-1.642 4.752 3.292C13.345 18.128 9.695 22 5 22'
      />
    </SvgIcon>
  );
}

export default StretchingRoundedIcon;
