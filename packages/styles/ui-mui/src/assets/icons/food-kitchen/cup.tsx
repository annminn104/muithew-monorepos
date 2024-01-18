import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CupIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h6c1.886 0 2.828 0 3.414.586C17 4.172 17 5.114 17 7v5c0 2.828 0 4.243-.879 5.121C15.243 18 13.828 18 11 18H9c-2.828 0-4.243 0-5.121-.879C3 16.243 3 14.828 3 12V7zM17 13h1a4 4 0 000-8h-1M17 13H3'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 21H2' />
    </SvgIcon>
  );
}

export default React.memo(CupIcon);
