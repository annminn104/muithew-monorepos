import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Buildings3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H2' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M21 22V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 00-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 01.552-.552C4.393 5 5.096 5 6.5 5'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 22v-3' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M10 12h4M5.5 11H7M5.5 14H7M17 11h1.5M17 14h1.5M5.5 8H7M17 8h1.5M10 15h4'
      />
      <circle cx='12' cy='7' r='2' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(Buildings3Icon);
