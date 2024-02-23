import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DisketteIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.464 20.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 00-.921-2.224 8.285 8.285 0 00-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.043 4.043 0 00-2.224-.92C12.512 2 12.34 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535z'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M7 8h6' />
    </SvgIcon>
  );
}

export default React.memo(DisketteIcon);
