import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LayersMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4c1.234 0 2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.123C14.227 11.604 13.233 12 12 12c-1.234 0-2.227-.397-4.213-1.191L4.98 9.684z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 12s-.993.89-2.979 1.685l-2.808 1.123C14.227 15.604 13.233 16 12 16c-1.234 0-2.227-.397-4.213-1.191L4.98 13.684C2.993 12.891 2 12 2 12M22 16s-.993.89-2.979 1.685l-2.808 1.123C14.227 19.604 13.233 20 12 20c-1.234 0-2.227-.397-4.213-1.192L4.98 17.685C2.993 16.891 2 16 2 16'
      />
    </SvgIcon>
  );
}

export default LayersMinimalisticIcon;
