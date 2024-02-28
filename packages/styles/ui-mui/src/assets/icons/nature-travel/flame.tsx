import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function FlameIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M20 15c0 4.255-2.618 6.122-4.641 6.751-.432.134-.715-.369-.457-.74.88-1.265 1.898-3.195 1.898-5.01 0-1.951-1.644-4.254-2.928-5.675-.293-.324-.805-.11-.821.328-.053 1.45-.282 3.388-1.268 4.908a.412.412 0 01-.677.036c-.308-.39-.616-.871-.924-1.252-.166-.204-.466-.207-.657-.026-.747.707-1.792 1.809-1.792 3.18 0 .99.472 2.22.958 3.174.22.433-.189.941-.61.698C6.246 20.309 4 18.107 4 15c0-3.146 4.31-7.505 5.956-11.623.26-.65 1.06-.955 1.617-.531C14.943 5.414 20 10.378 20 15z'
      />
    </SvgIcon>
  );
}

export default FlameIcon;
