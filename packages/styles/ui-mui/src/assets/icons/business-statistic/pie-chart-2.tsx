import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PieChart2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6.222 4.601a9.499 9.499 0 011.395-.771c1.372-.615 2.058-.922 2.97-.33.913.59.913 1.56.913 3.5v1.5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586H17c1.94 0 2.91 0 3.5.912.592.913.285 1.599-.33 2.97a9.498 9.498 0 01-10.523 5.435A9.5 9.5 0 016.222 4.601z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21.446 7.069a8.026 8.026 0 00-4.515-4.515C15.389 1.947 14 3.344 14 5v4a1 1 0 001 1h4c1.657 0 3.053-1.39 2.446-2.931z'
      />
    </SvgIcon>
  );
}

export default React.memo(PieChart2Icon);
