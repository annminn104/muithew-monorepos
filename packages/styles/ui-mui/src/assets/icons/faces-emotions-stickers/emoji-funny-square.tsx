import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EmojiFunnySquareIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M8.913 15.933c1.258.316 2.685.316 4.122-.07 1.437-.384 2.673-1.098 3.605-2'
      />
      <ellipse cx='14.509' cy='9.775' fill={linearColor} rx='1' ry='1.5' transform='rotate(-15 14.51 9.775)' />
      <ellipse cx='8.714' cy='11.328' fill={linearColor} rx='1' ry='1.5' transform='rotate(-15 8.714 11.328)' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M3.204 14.357c-1.112-4.147-1.667-6.22-.724-7.853.943-1.634 3.016-2.19 7.163-3.3 4.147-1.112 6.22-1.667 7.853-.724 1.634.943 2.19 3.016 3.3 7.163 1.111 4.147 1.667 6.22.724 7.853-.943 1.634-3.016 2.19-7.163 3.3-4.147 1.111-6.22 1.667-7.853.724-1.634-.943-2.19-3.016-3.3-7.163z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M13 16l.478.974a1.5 1.5 0 102.693-1.322l-.46-.936' />
    </SvgIcon>
  );
}

export default React.memo(EmojiFunnySquareIcon);
