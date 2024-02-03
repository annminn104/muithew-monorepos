import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TestTubeIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M9.749 2.494l8.41 4.826M9.75 2.494L2.65 14.746a4.827 4.827 0 001.776 6.605 4.862 4.862 0 006.629-1.77l1.495-2.58M9.75 2.493L8.913 2m9.246 5.32l-2.257 3.896m2.257-3.896l.841.484m-3.098 3.412l-1.713 2.958m1.713-2.958l-2.558-1.471m.845 4.429L12.55 17m1.638-2.826l-4.203-2.418M12.55 17l-2.613-1.503'
      />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M22 14.917c0 1.15-.895 2.083-2 2.083s-2-.933-2-2.083c0-.72.783-1.681 1.37-2.3a.862.862 0 011.26 0c.587.619 1.37 1.58 1.37 2.3z'
      />
    </SvgIcon>
  );
}

export default React.memo(TestTubeIcon);
