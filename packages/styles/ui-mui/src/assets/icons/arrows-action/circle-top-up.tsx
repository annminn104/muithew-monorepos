import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CircleTopUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M13 11l9-9m0 0h-5.344M22 2v5.344' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10' />
    </SvgIcon>
  );
}

export default React.memo(CircleTopUpIcon);
