import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DiagramDownIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M22 22H12c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12V2' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M19 15l-3.118-3.926c-.477-.602-.716-.903-.99-1.05a1.5 1.5 0 00-1.357-.029c-.28.135-.531.425-1.035 1.005-.503.58-.755.87-1.035 1.005a1.5 1.5 0 01-1.356-.03c-.274-.146-.513-.447-.99-1.048L6 7'
      />
    </SvgIcon>
  );
}

export default React.memo(DiagramDownIcon);
