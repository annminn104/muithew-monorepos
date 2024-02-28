import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FloorLampIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 22h6M12 22V7' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 7a3.001 3.001 0 002.836-2.018C15.016 4.46 14.552 4 14 4h-4c-.552 0-1.016.46-.836.982A3.001 3.001 0 0012 7zM12 2a2 2 0 012 2h-4a2 2 0 012-2z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18v-1.063a4.14 4.14 0 00-1.597-3.272l-3.881-2.774m-3.743-.207l2.532-3.241M2.78 10.684c-.35.448-.274 1.118.26 1.305a3.053 3.053 0 003.483-1.098m-3.743-.207a2.076 2.076 0 01-.34-2.898 2.033 2.033 0 012.872-.343m0 0c.35-.448 1.013-.53 1.318-.05a3.12 3.12 0 01-.107 3.498'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12 18v-1.063c0-1.282.59-2.49 1.597-3.272l3.881-2.774m3.743-.207l-2.532-3.241m2.532 3.241c.35.448.274 1.118-.26 1.305a3.053 3.053 0 01-3.483-1.098m3.743-.207a2.076 2.076 0 00.34-2.898 2.033 2.033 0 00-2.872-.343m0 0c-.35-.448-1.013-.53-1.318-.05a3.12 3.12 0 00.107 3.498'
      />
    </SvgIcon>
  );
}

export default FloorLampIcon;
