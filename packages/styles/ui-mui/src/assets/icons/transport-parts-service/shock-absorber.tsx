import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ShockAbsorberIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M14 20a2 2 0 11-4 0 2 2 0 014 0zM6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M8.5 16.5A1.5 1.5 0 0110 15h4a1.5 1.5 0 010 3h-4a1.5 1.5 0 01-1.5-1.5zM14 15.5v-10M10 15.5V6' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8 8l8 2m-8 1.5l8 2M20 11.5h2m-18 0H2m17.071 2.8l.707.7m-14.85-.7l-.706.7m14.85-6.3l.706-.7m-14.85.7L4.223 8'
      />
    </SvgIcon>
  );
}

export default React.memo(ShockAbsorberIcon);
