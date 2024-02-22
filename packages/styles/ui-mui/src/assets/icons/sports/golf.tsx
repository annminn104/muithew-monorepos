import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function GolfIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <ellipse cx='12' cy='18.5' stroke={linearColor} strokeWidth='1.5' rx='10' ry='3.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18V2M12 3.5l5.422 2.711c1.561.78 2.342 1.171 2.342 1.789 0 .618-.78 1.008-2.342 1.789L12 12.5'
      />
    </SvgIcon>
  );
}

export default React.memo(GolfIcon);
