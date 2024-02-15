import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function KeyMinimalistic2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='15' cy='9' r='7' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='15' cy='9' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3.5 20.5l6-6M6 21l-1.5-1.5m2-2L8 19' />
    </SvgIcon>
  );
}

export default React.memo(KeyMinimalistic2Icon);
