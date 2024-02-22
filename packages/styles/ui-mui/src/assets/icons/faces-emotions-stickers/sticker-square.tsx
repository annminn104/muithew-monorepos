import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function StickerSquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 22h3a7 7 0 007-7v-3c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M15 22c0-1.861 0-2.792.245-3.545a5 5 0 013.21-3.21C19.208 15 20.139 15 22 15' />
    </SvgIcon>
  );
}

export default React.memo(StickerSquareIcon);
