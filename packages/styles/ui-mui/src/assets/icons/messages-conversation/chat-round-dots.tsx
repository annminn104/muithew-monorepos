import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ChatRoundDotsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M8 12h.009m3.982 0H12m3.991 0H16' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 001.591 1.591l2.226-.595a1.634 1.634 0 011.149.133A9.958 9.958 0 0012 22z'
      />
    </SvgIcon>
  );
}

export default ChatRoundDotsIcon;
