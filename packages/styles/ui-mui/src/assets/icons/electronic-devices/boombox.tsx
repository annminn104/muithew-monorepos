import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BoomboxIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M6 9.5h12' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14zM16 6c0-1.886 0-2.828-.586-3.414C14.828 2 13.886 2 12 2c-1.886 0-2.828 0-3.414.586C8 3.172 8 4.114 8 6'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M11 16a3 3 0 11-6 0 3 3 0 016 0zM18.121 18.121a3 3 0 11-4.242-4.242 3 3 0 014.242 4.242z' />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8 13v2M18.121 13.879l-1.414 1.414' />
    </SvgIcon>
  );
}

export default BoomboxIcon;
