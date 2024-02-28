import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function PinListIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M13.632 8.224l-.367-.367c-1.53-1.53-2.295-2.295-3.124-2.294a2 2 0 00-.788.162C8.59 6.053 8.19 7.058 7.39 9.07l-.057.145c-.227.57-.34.855-.523 1.085a1.999 1.999 0 01-.492.444c-.247.158-.542.242-1.132.41-.916.259-1.373.389-1.576.666a1 1 0 00-.186.714c.042.341.379.678 1.051 1.35l3.13 3.13c.673.673 1.01 1.01 1.35 1.052a1 1 0 00.715-.186c.277-.203.407-.66.667-1.576.167-.59.251-.885.409-1.132.12-.188.27-.354.444-.492.23-.182.515-.296 1.085-.523l.145-.058c2.01-.8 3.016-1.2 3.344-1.962a2 2 0 00.162-.788c0-.83-.764-1.594-2.294-3.124z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3.347 18.142l2.694-2.694M22 8h-5M22 12.5h-4M22 17h-9' />
    </SvgIcon>
  );
}

export default PinListIcon;
