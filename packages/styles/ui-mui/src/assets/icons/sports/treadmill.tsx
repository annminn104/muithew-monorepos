import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function TreadmillIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='15' cy='4' r='2' stroke={linearColor} strokeWidth='1.5' />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M11 16v-1.633a1.85 1.85 0 00-.666-1.422l-.996-.83a1.59 1.59 0 01-.106-2.346l1.654-1.654a1.067 1.067 0 00-.335-1.736 4.269 4.269 0 00-3.943.304L4.5 8M7 14l-.328.328c-.578.579-.868.867-1.235 1.02-.368.152-.776.152-1.594.152H3M12.5 10h3'
      />
      <path
        stroke={linearColor}
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M19.489 22H3.087a1.087 1.087 0 01-.188-2.157l16.157-2.828A2.511 2.511 0 1119.489 22z'
      />
      <path
        fill={linearColor}
        d='M19.292 8.889l-.742-.111.742.111zm1.585-1.664l.147.735-.147-.735zm1.27.51a.75.75 0 10-.294-1.47l.294 1.47zm-3.405 9.876l1.291-8.61-1.483-.223-1.292 8.61 1.484.223zm2.282-9.651l1.123-.225-.294-1.47-1.123.224.294 1.471zM20.034 9c.052-.352.084-.555.123-.701a.63.63 0 01.046-.128l-1.085-1.035c-.227.238-.34.51-.41.776-.066.246-.11.547-.158.866L20.033 9zm.696-2.51c-.316.062-.614.12-.857.199a1.73 1.73 0 00-.755.447l1.086 1.034.012-.007a.635.635 0 01.113-.046c.145-.046.346-.087.695-.157l-.294-1.47z'
      />
    </SvgIcon>
  );
}

export default React.memo(TreadmillIcon);
