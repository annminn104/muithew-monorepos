import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextUnderlineIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M4 21h16M4 3v6a8 8 0 1016 0V3' />
    </SvgIcon>
  );
}

export default React.memo(TextUnderlineIcon);
