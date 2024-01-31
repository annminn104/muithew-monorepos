import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BarChairIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5.032 6.938c-.275-2.21 1.27-4.24 3.51-4.616l.398-.067c2.025-.34 4.095-.34 6.12 0l.398.067c2.24.376 3.785 2.407 3.51 4.616l-.017.145A1.058 1.058 0 0117.893 8H6.107c-.539 0-.992-.394-1.057-.917l-.018-.145z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 8L6 22M15 8l3 14M17 17H7' />
    </SvgIcon>
  );
}

export default React.memo(BarChairIcon);
