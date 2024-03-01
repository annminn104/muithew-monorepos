import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function WallpaperIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8zM19 19.5c.465 0 .697 0 .891-.03a2.5 2.5 0 002.078-2.079c.031-.194.031-.426.031-.891v-9c0-.465 0-.697-.03-.891A2.5 2.5 0 0019.89 4.53C19.697 4.5 19.465 4.5 19 4.5M5 19.5c-.465 0-.697 0-.891-.03A2.5 2.5 0 012.03 17.39C2 17.197 2 16.965 2 16.5v-9c0-.465 0-.697.03-.891A2.5 2.5 0 014.11 4.53C4.303 4.5 4.535 4.5 5 4.5'
      />
      <circle cx='14.5' cy='6.5' r='1.5' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5 14.816l1.29-1.324c.672-.69 1.684-.65 2.315.09l3.16 3.706c.507.594 1.304.675 1.89.192l.22-.18c.843-.695 1.984-.615 2.75.193l1.901 2.007'
      />
    </SvgIcon>
  );
}

export default WallpaperIcon;
