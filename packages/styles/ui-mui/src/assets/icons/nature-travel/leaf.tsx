import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LeafIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M12 9l4.5-4.5m-4.5 10L18.5 8M12 19.5l7.5-7.5M12 22c4.418 0 8-3.646 8-8.143 0-4.462-2.553-9.67-6.537-11.531A3.453 3.453 0 0012 2m0 20c-4.418 0-8-3.646-8-8.143 0-4.462 2.553-9.67 6.537-11.531A3.453 3.453 0 0112 2m0 20V2'
      />
    </SvgIcon>
  );
}

export default React.memo(LeafIcon);
