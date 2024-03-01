import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StopCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 12c0-1.886 0-2.828.586-3.414C9.172 8 10.114 8 12 8c1.886 0 2.828 0 3.414.586C16 9.172 16 10.114 16 12c0 1.886 0 2.828-.586 3.414C14.828 16 13.886 16 12 16c-1.886 0-2.828 0-3.414-.586C8 14.828 8 13.886 8 12z'
      />
    </SvgIcon>
  );
}

export default StopCircleIcon;
