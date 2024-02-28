import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AirbudsCheckIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M18 11.5v-.2a1 1 0 011-1 3 3 0 003-3V5.188c0-.175 0-.262-.004-.335a3 3 0 00-2.849-2.85C19.074 2 18.987 2 18.813 2c-.29 0-.436 0-.558.006a5 5 0 00-4.749 4.749c-.006.122-.006.267-.006.558V13.5'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M10.5 19v.75a2.25 2.25 0 01-4.5 0V19m4.5 0V9.312c0-.29 0-.435-.006-.557a5 5 0 00-4.749-4.749C5.623 4 5.478 4 5.187 4c-.174 0-.26 0-.334.004a3 3 0 00-2.85 2.849C2 6.926 2 7.013 2 7.188V9.3a3 3 0 003 3 1 1 0 011 1V19m4.5 0H6'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M19.5 5v2.5M4.5 7v2.5' />
      <circle cx='18' cy='18' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M16.5 18.2l.857.8 2.143-2' />
    </SvgIcon>
  );
}

export default AirbudsCheckIcon;
