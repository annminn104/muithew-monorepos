import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function HomeWifiIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 12.204c0-2.288 0-3.433.52-4.381.518-.949 1.467-1.537 3.364-2.715l2-1.24C9.889 2.622 10.892 2 12 2c1.108 0 2.11.623 4.116 1.867l2 1.241c1.897 1.178 2.846 1.766 3.365 2.715.519.948.519 2.093.519 4.381v1.521c0 3.901 0 5.851-1.172 7.063C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.212C2 19.576 2 17.626 2 13.725v-1.52z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M6 11.682c3.314-3.576 8.686-3.576 12 0M8 13.841c2.21-2.384 5.79-2.384 8 0M10 16c1.105-1.192 2.896-1.192 4 0'
      />
    </SvgIcon>
  );
}

export default React.memo(HomeWifiIcon);
