import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MirrorIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4.35 17A9.252 9.252 0 013 12.168C3 7.105 7.03 3 12 3s9 4.105 9 9.168A9.252 9.252 0 0119.65 17'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.636 22h12.728A3.636 3.636 0 0022 18.364C22 17.61 21.39 17 20.636 17h-3.808a2 2 0 00-1.414.586l-.828.828a2 2 0 01-1.414.586h-2.344a2 2 0 01-1.414-.586l-.828-.828A2 2 0 007.172 17H3.364C2.61 17 2 17.61 2 18.364A3.636 3.636 0 005.636 22z'
      />
    </SvgIcon>
  );
}

export default React.memo(MirrorIcon);
