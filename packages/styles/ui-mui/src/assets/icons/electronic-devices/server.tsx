import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ServerIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 17c0-1.886 0-2.828.586-3.414C3.172 13 4.114 13 6 13h12c1.886 0 2.828 0 3.414.586C22 14.172 22 15.114 22 17c0 1.886 0 2.828-.586 3.414C20.828 21 19.886 21 18 21H6c-1.886 0-2.828 0-3.414-.586C2 19.828 2 18.886 2 17zM2 6c0-1.886 0-2.828.586-3.414C3.172 2 4.114 2 6 2h12c1.886 0 2.828 0 3.414.586C22 3.172 22 4.114 22 6c0 1.886 0 2.828-.586 3.414C20.828 10 19.886 10 18 10H6c-1.886 0-2.828 0-3.414-.586C2 8.828 2 7.886 2 6z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M11 6h7M6 6h2M11 17h7M6 17h2' />
    </SvgIcon>
  );
}

export default ServerIcon;
