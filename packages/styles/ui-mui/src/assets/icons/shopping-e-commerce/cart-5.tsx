import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Cart5Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.555 14.257c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.429 0 5.143 0 6.044 1.114.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076-.825.667-1.987.667-4.311.667h-4.3c-2.324 0-3.486 0-4.31-.667-.826-.667-1.07-1.803-1.556-4.076l-.429-2z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8 12h8M10 15h4M18 9l-3-6M6 9l3-6' />
    </SvgIcon>
  );
}

export default Cart5Icon;
