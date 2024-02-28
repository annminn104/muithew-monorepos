import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SIMCardMinimalisticIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
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
        d='M14.5 13h-5c-.465 0-.697 0-.89.038a2 2 0 00-1.572 1.572C7 14.803 7 15.035 7 15.5s0 .697.038.89a2 2 0 001.572 1.572c.193.038.425.038.89.038h5c.465 0 .697 0 .89-.038a2 2 0 001.572-1.572c.038-.193.038-.425.038-.89s0-.697-.038-.89a2 2 0 00-1.572-1.572C15.197 13 14.965 13 14.5 13z'
      />
    </SvgIcon>
  );
}

export default SIMCardMinimalisticIcon;
