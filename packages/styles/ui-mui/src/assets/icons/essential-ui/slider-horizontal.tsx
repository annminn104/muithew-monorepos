import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SliderHorizontalIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8 18c-2.828 0-4.243 0-5.121-.879C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121C20.243 18 18.828 18 16 18H8zM19.5 6c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 00-1.092-1.093C17.6 2 16.9 2 15.5 2h-7c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 00-1.093 1.093C4.5 3.9 4.5 4.6 4.5 6M19.5 18c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 01-1.092 1.092C17.6 22 16.9 22 15.5 22h-7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 01-1.093-1.092C4.5 20.1 4.5 19.4 4.5 18'
      />
    </SvgIcon>
  );
}

export default SliderHorizontalIcon;
