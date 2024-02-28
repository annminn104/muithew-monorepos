import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ChairIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M17 21v-5M7 21v-5' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M15.5 12h-7c-1.65 0-2.475 0-2.987.586-.286.326-.413.764-.469 1.415-.077.9-.116 1.351.181 1.675C5.523 16 6.015 16 7 16h10c.985 0 1.477 0 1.775-.324.297-.324.258-.774.18-1.675-.055-.65-.182-1.088-.468-1.415C17.975 12 17.15 12 15.5 12zM7 8c0-1.87 0-2.804.402-3.5A3 3 0 018.5 3.402C9.196 3 10.13 3 12 3s2.804 0 3.5.402A3 3 0 0116.598 4.5C17 5.196 17 6.13 17 8v4H7V8z'
      />
    </SvgIcon>
  );
}

export default ChairIcon;
