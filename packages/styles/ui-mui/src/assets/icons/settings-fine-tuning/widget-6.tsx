import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Widget6Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M2.5 6.5a4 4 0 118 0v2.667c0 .31 0 .465-.034.592a1 1 0 01-.707.707c-.127.034-.282.034-.592.034H6.5a4 4 0 01-4-4zM13.5 14.833c0-.31 0-.465.034-.592a1 1 0 01.707-.707c.127-.034.282-.034.592-.034H17.5a4 4 0 11-4 4v-2.667zM2.5 17.5a4 4 0 014-4h2.4c.56 0 .84 0 1.054.109a1 1 0 01.437.437c.109.214.109.494.109 1.054v2.4a4 4 0 01-8 0zM13.5 6.5a4 4 0 114 4h-2.857c-.133 0-.2 0-.255-.006a1 1 0 01-.882-.882c-.006-.056-.006-.122-.006-.255V6.5z'
      />
    </SvgIcon>
  );
}

export default Widget6Icon;
