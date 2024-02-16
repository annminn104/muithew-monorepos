import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function CursorIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M16.574 19.2l-3.938-3.938-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702-.662-.146-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.231 4.39 4.391c.84-.84 2.47-.24 5.73.962L15.57 7.36c1.633.602 2.45.903 2.596 1.565.145.662-.47 1.277-1.702 2.508l-1.202 1.203 3.938 3.938c.408.408.612.612.706.84.125.303.125.643 0 .947-.094.227-.298.431-.706.839s-.612.612-.84.706a1.238 1.238 0 01-.947 0c-.227-.094-.43-.298-.839-.706z'
      />
    </SvgIcon>
  );
}

export default React.memo(CursorIcon);
