import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WheelIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='12' cy='12' r='6' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='12' cy='12' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 12h4M14 12h4M9 17.196l2-3.464M13 10.268l2-3.464M15 17.196l-2-3.464M11 10.268L9 6.804'
      />
    </SvgIcon>
  );
}

export default React.memo(WheelIcon);
