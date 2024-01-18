import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Palette2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12.026c0 5.146 3.867 9.387 8.847 9.96.735.085 1.447-.228 1.97-.753a1.68 1.68 0 000-2.372c-.523-.525-.95-1.307-.555-1.934 1.576-2.508 9.738 3.251 9.738-4.9C22 6.488 17.523 2 12 2S2 6.489 2 12.026z'
      />
      <circle cx='17.5' cy='11.5' r='0.75' stroke={linearColor} strokeWidth='1.5' />
      <circle cx='6.5' cy='11.5' r='0.75' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M10.335 7a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM15.25 7a.75.75 0 11-1.5 0 .75.75 0 011.5 0z' />
    </SvgIcon>
  );
}

export default React.memo(Palette2Icon);
