import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UFO3Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M18.922 12.15c1.603 2.623 2.071 4.999.98 6.091-1.63 1.63-6.118-.215-10.023-4.12C5.974 10.216 4.129 5.73 5.759 4.1c1.092-1.092 3.468-.624 6.092.979'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M11.485 5.444a4.729 4.729 0 016.687 0l.384.384a4.729 4.729 0 010 6.687c-.126.125-.286.21-.46.178-.497-.089-1.72-.559-3.975-2.814-2.255-2.256-2.725-3.478-2.814-3.974-.032-.175.052-.336.178-.46z'
      />
      <circle cx='12' cy='12' r='1' fill={linearColor} transform='rotate(45 12 12)' />
      <circle cx='9.172' cy='7.757' r='1' fill={linearColor} transform='rotate(45 9.172 7.757)' />
      <circle cx='16.243' cy='14.828' r='1' fill={linearColor} transform='rotate(45 16.243 14.828)' />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M3.636 20.364l4.121-4.121M10 22l2.707-2.222M2 14l2.222-2.707' />
    </SvgIcon>
  );
}

export default React.memo(UFO3Icon);
