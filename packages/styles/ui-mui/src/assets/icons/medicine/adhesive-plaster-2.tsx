import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function AdhesivePlaster2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M12.765 20.416l-9.18-9.181m9.18 9.18a5.41 5.41 0 107.65-7.65m-7.65 7.65l7.65-7.65m0 0l-9.18-9.18m0 0a5.41 5.41 0 00-7.65 7.65m7.65-7.65l-7.65 7.65'
      ></path>
      <circle cx='9.172' cy='12' r='1' fill={linearColor} transform='rotate(-45 9.172 12)'></circle>
      <circle cx='12' cy='14.828' r='1' fill={linearColor} transform='rotate(-45 12 14.828)'></circle>
      <circle cx='12' cy='9.172' r='1' fill={linearColor} transform='rotate(-45 12 9.172)'></circle>
      <circle cx='14.828' cy='12' r='1' fill={linearColor} transform='rotate(-45 14.828 12)'></circle>
    </SvgIcon>
  );
}

export default React.memo(AdhesivePlaster2Icon);
