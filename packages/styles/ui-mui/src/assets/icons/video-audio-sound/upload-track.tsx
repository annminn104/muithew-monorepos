import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UploadTrackIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M12 15a2 2 0 11-4 0 2 2 0 014 0zM12 15V9' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.058 11.03l-1.316-.659c-.183-.091-.274-.137-.35-.194a1 1 0 01-.374-.607C12 9.477 12 9.375 12 9.171c0-.486 0-.728.06-.893a1 1 0 011.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 01.374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 01-1.056.652c-.174-.02-.391-.129-.826-.346z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M18 22v-7m0 0l2.5 2.5M18 15l-2.5 2.5' />
    </SvgIcon>
  );
}

export default UploadTrackIcon;
