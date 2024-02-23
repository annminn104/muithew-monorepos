import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function SIMCardIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
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
        d='M12 12h-.5c-1.405 0-2.107 0-2.611.337a2 2 0 00-.552.552C8 13.393 8 14.096 8 15.5c0 1.404 0 2.107.337 2.611a2 2 0 00.552.552C9.393 19 10.096 19 11.5 19h.5m0-7h.5c1.405 0 2.107 0 2.611.337.218.146.406.334.552.552.337.504.337 1.207.337 2.611M12 12v3.5m0 3.5h.5c1.405 0 2.107 0 2.611-.337.218-.146.406-.334.552-.552C16 17.607 16 16.904 16 15.5M12 19v-3.5m0 0h4'
      />
    </SvgIcon>
  );
}

export default React.memo(SIMCardIcon);
