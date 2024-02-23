import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SunIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='12' cy='12' r='6' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 2v1M12 21v1M22 12h-1M3 12H2M19.07 4.93l-.392.392M5.322 18.678l-.393.393M19.07 19.07l-.392-.392M5.322 5.322l-.393-.393'
      />
    </SvgIcon>
  );
}

export default React.memo(SunIcon);
