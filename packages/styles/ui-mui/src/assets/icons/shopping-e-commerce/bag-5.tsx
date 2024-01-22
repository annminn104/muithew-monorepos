import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Bag5Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.794 14.97c.537 2.687.806 4.03 1.693 4.895.164.16.342.305.53.434C7.04 21 8.41 21 11.149 21h1.704c2.739 0 4.108 0 5.13-.7.19-.13.367-.276.53-.435.888-.865 1.157-2.208 1.694-4.894.771-3.856 1.157-5.784.269-7.15a4.006 4.006 0 00-.56-.683C18.75 6 16.785 6 12.853 6h-1.704C7.216 6 5.25 6 4.085 7.138a4 4 0 00-.559.683c-.888 1.366-.502 3.294.27 7.15z'
      />
      <circle cx='15' cy='10' r='1' fill={linearColor} />
      <circle cx='9' cy='10' r='1' fill={linearColor} />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 6V5a3 3 0 116 0v1' />
    </SvgIcon>
  );
}

export default React.memo(Bag5Icon);
