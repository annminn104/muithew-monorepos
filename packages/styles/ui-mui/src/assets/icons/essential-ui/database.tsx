import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DatabaseIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M4 18V6M20 6v12' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 10c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4zM20 12c0 2.21-3.582 4-8 4s-8-1.79-8-4M20 18c0 2.21-3.582 4-8 4s-8-1.79-8-4'
      />
    </SvgIcon>
  );
}

export default React.memo(DatabaseIcon);
