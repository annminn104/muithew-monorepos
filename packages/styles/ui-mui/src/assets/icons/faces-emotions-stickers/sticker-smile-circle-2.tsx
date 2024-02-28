import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StickerSmileCircle2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12c0 5.523 4.477 10 10 10 .648 0 1.25-.3 1.708-.758l7.534-7.534C21.7 13.25 22 12.648 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 17c-1.115 0-2.15-.37-3-1' />
      <ellipse cx='15' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <ellipse cx='9' cy='10.5' fill={linearColor} rx='1' ry='1.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M12 22c0-2.793 0-4.19.393-5.312a7 7 0 014.295-4.295C17.811 12 19.208 12 22 12' />
    </SvgIcon>
  );
}

export default StickerSmileCircle2Icon;
