import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TuningIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M14 14.5a3 3 0 116 0 3 3 0 01-6 0zM4 9.5a3 3 0 106 0 3 3 0 00-6 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M16.959 9V2M6.958 15v7M16.959 22v-2M6.958 2v2' />
    </SvgIcon>
  );
}

export default React.memo(TuningIcon);
