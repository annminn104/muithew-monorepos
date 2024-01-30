import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BuildingsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21 22V6c0-1.886 0-2.828-.586-3.414C19.828 2 18.886 2 17 2h-2c-1.886 0-2.828 0-3.414.586-.472.471-.564 1.174-.582 2.414'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15 22V9c0-1.886 0-2.828-.586-3.414C13.828 5 12.886 5 11 5H7c-1.886 0-2.828 0-3.414.586C3 6.172 3 7.114 3 9v13'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 22v-3' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 8h6M6 11h6M6 14h6' />
    </SvgIcon>
  );
}

export default React.memo(BuildingsIcon);
