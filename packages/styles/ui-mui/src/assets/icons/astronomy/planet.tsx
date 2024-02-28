import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PlanetIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M20 12a8 8 0 11-16 0 8 8 0 0116 0z' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17.849 6.19c2.011-.37 3.49-.21 3.98.573 1.011 1.616-2.57 5.271-7.998 8.163-5.429 2.893-10.649 3.927-11.66 2.31-.533-.852.21-2.27 1.829-3.846'
      />
    </SvgIcon>
  );
}

export default PlanetIcon;
