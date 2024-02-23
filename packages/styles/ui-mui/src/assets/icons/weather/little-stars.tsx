import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function LittleStarsIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M8.033 3.658c.346-.877 1.588-.877 1.934 0l1.072 2.718c.105.268.317.48.585.585l2.718 1.072c.877.346.877 1.588 0 1.934l-2.718 1.072c-.268.105-.48.317-.585.585l-1.072 2.718c-.346.877-1.588.877-1.934 0l-1.072-2.718a1.039 1.039 0 00-.585-.585L3.658 9.967c-.877-.346-.877-1.588 0-1.934l2.718-1.072a1.04 1.04 0 00.585-.585l1.072-2.718zM16.488 13.348a.55.55 0 011.024 0l.8 2.03a.55.55 0 00.31.31l2.03.8a.55.55 0 010 1.024l-2.03.8a.55.55 0 00-.31.31l-.8 2.03a.55.55 0 01-1.024 0l-.8-2.03a.55.55 0 00-.31-.31l-2.03-.8a.55.55 0 010-1.024l2.03-.8a.55.55 0 00.31-.31l.8-2.03z'
      />
    </SvgIcon>
  );
}

export default React.memo(LittleStarsIcon);
