import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BacteriaIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z'></path>
      <path stroke={linearColor} strokeWidth='1.5' d='M6 15a3 3 0 116 0 3 3 0 01-6 0z'></path>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4.5 11.5l.414-1M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.172 6.465 6.172 6.465M19 13.136s-1.162.473-1.483 1.673c-.322 1.2.448 2.19.448 2.19M13.42 17.772L15 19M14.5 14v-2M12 5h-2M12.5 9.5l-1-1'
      ></path>
    </SvgIcon>
  );
}

export default React.memo(BacteriaIcon);
