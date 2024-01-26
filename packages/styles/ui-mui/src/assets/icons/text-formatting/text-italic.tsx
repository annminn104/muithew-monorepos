import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextItalicIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M3 22h12M9 2h12M9 22l6-20' />
    </SvgIcon>
  );
}

export default React.memo(TextItalicIcon);
