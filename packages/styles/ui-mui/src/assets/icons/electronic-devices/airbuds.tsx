import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AirbudsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.5 18v.75a2.25 2.25 0 004.5 0V18m-4.5 0V8.312c0-.29 0-.435.006-.557a5 5 0 014.749-4.749C18.377 3 18.522 3 18.813 3c.174 0 .26 0 .334.004a3 3 0 012.85 2.849c.003.073.003.16.003.335V8.3a3 3 0 01-3 3 1 1 0 00-1 1V18m-4.5 0H18M10.5 18v.75a2.25 2.25 0 01-4.5 0V18m4.5 0V8.312c0-.29 0-.435-.006-.557a5 5 0 00-4.749-4.749C5.623 3 5.478 3 5.187 3c-.174 0-.26 0-.334.004a3 3 0 00-2.85 2.849C2 5.926 2 6.013 2 6.188V8.3a3 3 0 003 3 1 1 0 011 1V18m4.5 0H6'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19.5 6v2.5M4.5 6v2.5' />
    </SvgIcon>
  );
}

export default AirbudsIcon;
