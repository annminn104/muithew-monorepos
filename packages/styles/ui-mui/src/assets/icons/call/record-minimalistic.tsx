import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RecordMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M22 12a4 4 0 11-8 0 4 4 0 018 0zM10 12a4 4 0 11-8 0 4 4 0 018 0z'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 16h12'></path>
    </SvgIcon>
  );
}

export default React.memo(RecordMinimalisticIcon);
