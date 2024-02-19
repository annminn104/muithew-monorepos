import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TransmissionIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 4a2 2 0 11-4 0 2 2 0 014 0zM6 20a2 2 0 11-4 0 2 2 0 014 0zM14 20a2 2 0 11-4 0 2 2 0 014 0zM14 4a2 2 0 11-4 0 2 2 0 014 0zM22 4a2 2 0 11-4 0 2 2 0 014 0z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M4 6v12M12 6v12M20 6v2c0 1.886 0 2.828-.586 3.414C18.828 12 17.886 12 16 12H4'
      />
      <path
        fill={linearColor}
        d='M18 15v-.75a.75.75 0 00-.75.75H18zm-.75 7a.75.75 0 001.5 0h-1.5zm4.11.392a.75.75 0 101.28-.784l-1.28.784zM18 15.75h2.286v-1.5H18v1.5zm.75 2.75V15h-1.5v3.5h1.5zm2.5-1.75c0 .567-.446 1-.964 1v1.5c1.375 0 2.464-1.134 2.464-2.5h-1.5zm-.964-1c.518 0 .964.433.964 1h1.5c0-1.366-1.089-2.5-2.464-2.5v1.5zm0 2h-.429v1.5h.429v-1.5zm-.429 0H18v1.5h1.857v-1.5zm-.64 1.142l2.143 3.5 1.28-.784-2.143-3.5-1.28.784zM17.25 18.5V22h1.5v-3.5h-1.5z'
      />
    </SvgIcon>
  );
}

export default React.memo(TransmissionIcon);
