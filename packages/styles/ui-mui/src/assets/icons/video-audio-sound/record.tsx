import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RecordIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='10' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default RecordIcon;
