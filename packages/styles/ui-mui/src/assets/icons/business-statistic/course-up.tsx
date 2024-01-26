import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CourseUpIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M22 7l-7.38 7.335c-.997.991-1.496 1.487-2.115 1.487-.619 0-1.117-.496-2.115-1.488l-.24-.238c-.997-.992-1.497-1.489-2.116-1.489s-1.118.497-2.115 1.49L2 18M22 7v5.546M22 7h-5.582'
      />
    </SvgIcon>
  );
}

export default React.memo(CourseUpIcon);
