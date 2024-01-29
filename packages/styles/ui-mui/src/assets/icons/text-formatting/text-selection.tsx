import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextSelectionIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 9h6M12 15V9' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 4a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 11-4 0 2 2 0 014 0zM22 4a2 2 0 11-4 0 2 2 0 014 0zM22 20a2 2 0 11-4 0 2 2 0 014 0z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M6 20h12M18 4H6M20 18V6M4 6v12' />
    </SvgIcon>
  );
}

export default React.memo(TextSelectionIcon);
