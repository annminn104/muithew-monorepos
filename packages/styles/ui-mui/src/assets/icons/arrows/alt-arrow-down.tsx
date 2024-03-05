import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AltArrowDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path d='M19 9L12 15L5 9' stroke={linearColor} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    </SvgIcon>
  );
}

export default AltArrowDownIcon;
