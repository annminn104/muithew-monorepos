import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function BenzeneRingIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M9.98 4.88C10.965 4.292 11.458 4 12 4c.541 0 1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362.27.483.27 1.069.27 2.241v3.518c0 1.172 0 1.758-.27 2.241-.271.483-.765.776-1.75 1.362l-2.96 1.759c-.986.586-1.479.879-2.02.879-.541 0-1.034-.293-2.02-.88l-2.96-1.758c-.985-.586-1.479-.88-1.75-1.362C5 15.517 5 14.931 5 13.759V10.24C5 9.07 5 8.483 5.27 8c.271-.483.765-.776 1.75-1.362l2.96-1.759z'
      ></path>
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M5 8L2 6M19 8l3-2M5 16l-3 2'></path>
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M12 16.884l4-2.384'></path>
    </SvgIcon>
  );
}

export default React.memo(BenzeneRingIcon);
