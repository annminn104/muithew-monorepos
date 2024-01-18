import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ReplyIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M4.5 12l5-5m-5 5l5 5m-5-5h10c1.667 0 5 1 5 5' />
    </SvgIcon>
  );
}

export default React.memo(ReplyIcon);
