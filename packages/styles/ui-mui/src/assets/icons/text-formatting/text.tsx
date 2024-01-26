import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TextIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M12 3H8c-1.886 0-2.828 0-3.414.586C4 4.172 4 5.114 4 7v.95M12 3h4c1.886 0 2.828 0 3.414.586C20 4.172 20 5.114 20 7v.95M12 3v18M7 21h10'
      />
    </SvgIcon>
  );
}

export default React.memo(TextIcon);
