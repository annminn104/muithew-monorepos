import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LightningIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M13.2 8h-2.4c-2.263 0-3.394 0-4.097.692C6 9.385 6 10.5 6 12.727v2.546c0 2.228 0 3.342.703 4.035C7.406 20 8.537 20 10.8 20h2.4M10.8 8h2.4c2.263 0 3.394 0 4.097.692C18 9.385 18 10.5 18 12.727v2.546c0 2.228 0 3.342-.703 4.035C16.594 20 15.463 20 13.2 20h-2.4M12 20v2'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 12l-1.5 2h3L12 16'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M11 5h2'></path>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15.5 8V5.5c0-1.404 0-2.107-.337-2.611a2 2 0 00-.552-.552C14.107 2 13.404 2 12 2c-1.405 0-2.107 0-2.611.337a2 2 0 00-.552.552C8.5 3.393 8.5 4.096 8.5 5.5V8'
      />
    </SvgIcon>
  );
}

export default React.memo(LightningIcon);
