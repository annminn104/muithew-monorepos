import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ChecklistIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M2 5.5L3.214 7 7.5 3M2 12.5L3.214 14 7.5 10M2 19.5L3.214 21 7.5 17'
      ></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 19H12M22 12H12M22 5H12'></path>
    </SvgIcon>
  );
}

export default React.memo(ChecklistIcon);
