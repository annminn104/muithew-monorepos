import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ShopMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M21 22H3M19 22v-7M5 22v-7' />
      <path
        stroke={linearColor}
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 006 9a2 2 0 104 0 2 2 0 104 0 2 2 0 104 0 2 2 0 003.571 1.238c.546-.693.262-1.659-.062-2.479l-1.403-3.548c-.538-1.076-.807-1.614-1.29-1.912C18.331 2 17.73 2 16.527 2z'
      />
    </SvgIcon>
  );
}

export default ShopMinimalisticIcon;
