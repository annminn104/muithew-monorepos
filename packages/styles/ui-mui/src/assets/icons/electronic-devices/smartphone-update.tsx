import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SmartphoneUpdateIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <g clipPath='url(#clip0_9754_6705)'>
        <path
          stroke={linearColor}
          strokeLinecap='round'
          strokeWidth='1.5'
          d='M13 2.001c3.114.01 4.765.108 5.828 1.17C20 4.344 20 6.23 20 10v4c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-2.999'
        />
        <path
          fill={linearColor}
          d='M2.73 4h-.75.75zm0 .8l-.554.506a.75.75 0 001.108 0L2.73 4.8zm1.284-.294a.75.75 0 10-1.108-1.012l1.108 1.012zm-1.46-1.012a.75.75 0 00-1.108 1.012l1.108-1.012zM10.27 3.2l.554-.506a.75.75 0 00-1.108 0l.554.506zm-1.284.294a.75.75 0 001.108 1.012L8.986 3.494zm1.46 1.012a.75.75 0 001.108-1.012l-1.108 1.012zm-5.87 1.8A.75.75 0 003.461 7.31l1.115-1.003zM8.54 1.83A.75.75 0 009.71.892l-1.17.938zM6.38-.75c-2.494 0-4.4 2.193-4.4 4.75h1.5c0-1.86 1.36-3.25 2.9-3.25v-1.5zM1.981 4v.8h1.5V4h-1.5zm1.303 1.306l.73-.8-1.108-1.012-.73.8 1.108 1.012zm0-1.012l-.73-.8-1.108 1.012.73.8 1.108-1.012zM6.62 8.75c2.494 0 4.4-2.193 4.4-4.75h-1.5c0 1.86-1.36 3.25-2.9 3.25v1.5zm4.4-4.75v-.8h-1.5V4h1.5zM9.717 2.694l-.73.8 1.108 1.012.73-.8-1.108-1.012zm0 1.012l.73.8 1.108-1.012-.73-.8-1.108 1.012zM3.46 7.309c.79.879 1.908 1.441 3.158 1.441v-1.5c-.785 0-1.509-.35-2.043-.944L3.461 7.31zM9.71.892C8.914-.1 7.726-.75 6.381-.75v1.5c.843 0 1.617.404 2.159 1.08L9.71.892z'
        />
        <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M15 19H9' />
      </g>
      <defs>
        <clipPath id='clip0_9754_6705'>
          <path fill={linearColor} d='M0 0H24V24H0z' />
        </clipPath>
      </defs>
    </SvgIcon>
  );
}

export default SmartphoneUpdateIcon;
