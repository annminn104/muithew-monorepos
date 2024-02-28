import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartHomeAngleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M2.011 10c-.044-.874.037-1.527.324-2.125.54-1.127 1.691-1.812 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.082-1.906 6.093-1.069.92-2.591 1.004-5.451 1.011M11 22a9 9 0 00-9-9M8 22a6 6 0 00-6-6M5 22a3 3 0 00-3-3'
      />
    </SvgIcon>
  );
}

export default SmartHomeAngleIcon;
