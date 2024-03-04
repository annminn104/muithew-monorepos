import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function VolumeMutedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M16.659 6c-.14-.798-.37-1.315-.792-1.628a2.113 2.113 0 00-.538-.29c-.992-.357-2.172.465-4.534 2.11l-.203.14c-.397.277-.595.415-.809.515a2.676 2.676 0 01-.66.21c-.231.04-.469.04-.944.04-1.276 0-1.914 0-2.47.272-.509.249-1.017.754-1.283 1.275-.291.57-.325 1.162-.394 2.348-.02.35-.032.692-.032 1.008 0 .316.012.658.032 1.008.069 1.186.103 1.778.394 2.348.266.521.774 1.026 1.282 1.275.557.272 1.195.272 2.47.272.476 0 .714 0 .944.04.228.041.45.112.661.21.214.1.412.238.81.514l.203.142c2.36 1.644 3.542 2.466 4.533 2.109.19-.069.374-.168.538-.29.422-.313.652-.83.792-1.628M20 9l-6 6m0-6l6 6'
      />
    </SvgIcon>
  );
}

export default VolumeMutedIcon;
