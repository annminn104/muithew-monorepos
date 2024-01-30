import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Widget3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2.5 6.5a4 4 0 118 0 4 4 0 01-8 0zM13.5 17.5a4 4 0 118 0 4 4 0 01-8 0zM21.5 6.5a4 4 0 10-8 0 4 4 0 008 0zM10.5 17.5a4 4 0 10-8 0 4 4 0 008 0z'
      />
    </SvgIcon>
  );
}

export default React.memo(Widget3Icon);
