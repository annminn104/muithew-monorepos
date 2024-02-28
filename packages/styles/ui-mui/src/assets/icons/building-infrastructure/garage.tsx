import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GarageIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M22 22H2M3 22V11.347a3 3 0 011.007-2.242l6-5.333a3 3 0 013.986 0l6 5.333A3 3 0 0121 11.347V22M10 9h4'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 15.5h6M9 18.5h6' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18 22v-6c0-1.886 0-2.828-.586-3.414C16.828 12 15.886 12 14 12h-4c-1.886 0-2.828 0-3.414.586C6 13.172 6 14.114 6 16v6'
      />
    </SvgIcon>
  );
}

export default GarageIcon;
