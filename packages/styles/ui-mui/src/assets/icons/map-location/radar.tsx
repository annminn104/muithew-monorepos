import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RadarIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        d='M12 11.9996L5.00191 6.33546C4.57279 5.98813 3.93863 6.05182 3.63593 6.5135C3.06672 7.38163 2.62407 8.35389 2.34072 9.41136C0.911303 14.746 4.07713 20.2294 9.41179 21.6588C14.7465 23.0882 20.2298 19.9224 21.6592 14.5877C23.0887 9.25308 19.9228 3.76971 14.5882 2.34029C11.9556 1.63489 9.28678 2.04857 7.08684 3.28972'
        stroke={linearColor}
        strokeWidth={1.5}
        strokeLinecap='round'
      />
    </SvgIcon>
  );
}

export default RadarIcon;
