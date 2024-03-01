import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlainIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18.636 15.67l1.716-5.15c1.5-4.498 2.25-6.747 1.062-7.934-1.187-1.187-3.436-.438-7.935 1.062L8.33 5.364C4.7 6.574 2.885 7.18 2.37 8.067a2.717 2.717 0 000 2.73c.515.888 2.33 1.493 5.96 2.704.584.194.875.291 1.119.454.236.158.439.361.597.597.163.244.26.535.454 1.118 1.21 3.63 1.816 5.446 2.703 5.962.844.49 1.887.49 2.731 0 .887-.516 1.492-2.331 2.703-5.962z'
      />
      <path fill={linearColor} d='M16.212 8.848a.75.75 0 00-1.055-1.066l1.055 1.066zm-5.55 5.488l5.55-5.488-1.055-1.066-5.55 5.488 1.056 1.066z' />
    </SvgIcon>
  );
}

export default PlainIcon;
