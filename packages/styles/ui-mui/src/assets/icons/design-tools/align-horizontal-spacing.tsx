import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AlignHorizontalSpacingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3 2v20M21 2v20' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 4c-1.886 0-2.828 0-3.414.586C8 5.172 8 6.114 8 8v8c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20c1.886 0 2.828 0 3.414-.586C16 18.828 16 17.886 16 16V8c0-1.886 0-2.828-.586-3.414C14.828 4 13.886 4 12 4z'
      />
    </SvgIcon>
  );
}

export default AlignHorizontalSpacingIcon;
