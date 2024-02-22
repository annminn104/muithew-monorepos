import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BlackHoleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 10c5 0 4.6 12-3 12M12.312 14c-5 0-4.6-12 3-12' />
      <path
        stroke={linearColor}
        strokeDasharray='2 2'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10.631 10.696c3.536-3.535 11.738 5.233 6.364 10.607M13.68 13.304C10.145 16.84 1.942 8.07 7.316 2.697M10.852 13.524C7.316 9.99 16.084 1.786 21.458 7.16M13.46 10.476c3.535 3.535-5.233 11.738-10.607 6.364'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 12.312c0-5 12-4.6 12 3M14 12c0 5-12 4.6-12-3' />
    </SvgIcon>
  );
}

export default React.memo(BlackHoleIcon);
