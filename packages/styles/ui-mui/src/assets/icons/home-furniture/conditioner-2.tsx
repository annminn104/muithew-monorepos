import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Conditioner2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2 7.571c0-2.414 0-3.62.655-4.441.14-.176.299-.335.475-.475C3.95 2 5.157 2 7.57 2h8.858c2.414 0 3.62 0 4.442.655.175.14.334.299.475.475C22 3.95 22 5.157 22 7.57c0 3.22 0 4.829-.873 5.923-.186.234-.399.447-.633.633C19.4 15 17.79 15 14.571 15H9.43c-3.22 0-4.829 0-5.923-.873a4 4 0 01-.633-.633C2 12.4 2 10.79 2 7.571z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M7 17.5l-.307.46A1.321 1.321 0 007 19.75c.561.42.696 1.206.307 1.79L7 22m5-4.5l-.307.46A1.321 1.321 0 0012 19.75c.561.42.696 1.206.307 1.79L12 22m5-4.5l-.307.46A1.321 1.321 0 0017 19.75c.561.42.696 1.206.307 1.79L17 22M18 14.5c0-.465 0-.697-.038-.89a2 2 0 00-1.572-1.572C16.197 12 15.965 12 15.5 12H9c-.932 0-1.398 0-1.765.152a2 2 0 00-1.083 1.083c-.122.295-.146.653-.15 1.265M6 8.5h12M6 6h12'
      />
    </SvgIcon>
  );
}

export default React.memo(Conditioner2Icon);
