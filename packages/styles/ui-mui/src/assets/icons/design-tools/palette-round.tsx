import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PaletteRoundIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 6a4 4 0 118 0v12a4 4 0 01-8 0V6z' />
      <path stroke={linearColor} strokeWidth='1.5' d='M10 8.243l3.314-3.314a4 4 0 115.657 5.657L9.306 20.25' />
      <path stroke={linearColor} strokeWidth='1.5' d='M6 22h12a4 4 0 000-8h-2.5M7 18a1 1 0 11-2 0 1 1 0 012 0z' />
    </SvgIcon>
  );
}

export default PaletteRoundIcon;
