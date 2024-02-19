import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ScooterIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <rect width='6' height='6' x='16' y='13' stroke={linearColor} strokeWidth='1.5' rx='3' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11 16v-1.5c0-1.886 0-2.828-.586-3.414C9.828 10.5 8.886 10.5 7 10.5h-.6c-.371 0-.557 0-.714.012a4 4 0 00-3.674 3.674C2 14.343 2 14.53 2 14.9c0 .093 0 .14.003.178a1 1 0 00.919.919A2.5 2.5 0 003.1 16H11zm0 0h5M9.5 16a3 3 0 11-6 0M12 5h.528c1.203 0 1.804 0 2.287.299.484.298.753.836 1.29 1.912L19 13M18.143 11l.681-.502c.263-.194.395-.29.486-.417a1 1 0 00.143-.282c.047-.149.047-.312.047-.638 0-.618 0-.926-.132-1.157a1.001 1.001 0 00-.372-.372c-.23-.132-.54-.132-1.157-.132H16.5'
      />
      <circle cx='19' cy='16' r='3' stroke={linearColor} strokeWidth='1.5' />
    </SvgIcon>
  );
}

export default React.memo(ScooterIcon);
