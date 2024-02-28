import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Buildings2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
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
        d='M21 22V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 00-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 01.552-.552C4.393 8 5.096 8 6.5 8'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 22v-3' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M10 5h4M10 8h4M10 11h4M10 14h4' />
    </SvgIcon>
  );
}

export default Buildings2Icon;
