import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function MirrorLeftIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 3h-1C7.229 3 5.343 3 4.172 4.172 3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h1'
      />
      <path
        stroke={linearColor}
        strokeDasharray='2.5 3'
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11 3h4c2.828 0 4.243 0 5.121.879C21 4.757 21 6.172 21 9v6c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21h-4'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 2v20' />
    </SvgIcon>
  );
}

export default React.memo(MirrorLeftIcon);
