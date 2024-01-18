import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ArrowToTopRightIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M12 4.5l-5 5m5-5l5 5m-5-5v10c0 1.667 1 5 5 5' />
    </SvgIcon>
  );
}

export default React.memo(ArrowToTopRightIcon);
