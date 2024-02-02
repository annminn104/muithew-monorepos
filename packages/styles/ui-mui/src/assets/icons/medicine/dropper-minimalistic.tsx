import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DropperMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 15.883V8c0-1.886 0-2.828-.586-3.414C17.828 4 16.886 4 15 4H9c-1.886 0-2.828 0-3.414.586C5 5.172 5 6.114 5 8v7.883c0 .76.32 1.487.88 2.001a9.053 9.053 0 0012.24 0c.56-.514.88-1.24.88-2zM19 8h-2M19 14h-2'
      ></path>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14 11.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 011.26 0c.587.619 1.37 1.58 1.37 2.3z'
      ></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19 11h-2M12 21v1M14 4a2 2 0 10-4 0'></path>
    </SvgIcon>
  );
}

export default React.memo(DropperMinimalisticIcon);
