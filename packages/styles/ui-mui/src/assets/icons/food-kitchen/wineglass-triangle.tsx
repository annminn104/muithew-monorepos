import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WineglassTriangleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 14.571l8.516-8.707C21.562 4.794 20.8 3 19.3 3H4.701C3.2 3 2.438 4.794 3.484 5.864L12 14.57zm0 0V21m0 0h4.244M12 21H7.756M7.473 9.75h9.054'
      />
    </SvgIcon>
  );
}

export default React.memo(WineglassTriangleIcon);
