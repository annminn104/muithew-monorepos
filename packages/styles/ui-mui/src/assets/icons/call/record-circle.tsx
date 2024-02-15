import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RecordCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M18.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
      <path stroke={linearColor} strokeWidth='1.5' d='M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z' />
      <path stroke={linearColor} strokeWidth='1.5' d='M10.5 12a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M8 14.5h8' />
    </SvgIcon>
  );
}

export default React.memo(RecordCircleIcon);
