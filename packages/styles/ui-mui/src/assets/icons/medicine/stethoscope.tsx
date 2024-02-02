import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StethoscopeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeWidth='1.5' d='M9 14.235V17a5 5 0 005 5h.882a4.12 4.12 0 003.964-3'></path>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 00-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 007 7 6.714 6.714 0 006.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 00-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091'
      ></path>
      <circle cx='19' cy='16' r='3' stroke={linearColor} strokeWidth='1.5'></circle>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 2v2M6 2v2'></path>
    </SvgIcon>
  );
}

export default React.memo(StethoscopeIcon);
