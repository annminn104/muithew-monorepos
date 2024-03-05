import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserCallRoundedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx={12} cy={7} r={3} stroke={linearColor} strokeWidth={1.5} />
      <path d='M6.62924 5.31445L6.78655 6.17962L6.62924 5.31445Z' fill={linearColor} />
      <ellipse cx={12} cy={17} rx={7} ry={4} stroke={linearColor} strokeWidth={1.5} />
      <rect x={6} y={4.84082} width={2} height={2.86364} rx={1} fill={linearColor} />
      <rect x={16} y={4.84082} width={2} height={2.86364} rx={1} fill={linearColor} />
      <path d='M12 11.5227C9.23858 11.5227 7 9.3859 7 6.75' stroke={linearColor} strokeWidth={0.5} />
      <path
        d='M13 11.5227C13 11.7878 12.8048 12 12.5609 12H11.439C11.1951 12 11 11.7878 11 11.5227C11 11.2575 11.1951 11.0454 11.439 11.0454H12.5609C12.8048 11.0454 13 11.2575 13 11.5227Z'
        fill={linearColor}
      />
      <path d='M17 6.27273C17 3.63682 14.7614 1.5 12 1.5C9.23858 1.5 7 3.63682 7 6.27273' stroke={linearColor} />
    </SvgIcon>
  );
}

export default UserCallRoundedIcon;
