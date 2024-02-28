import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function EraserCircleIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M7.67 11.606l.53.53-.53-.53zM6 13.968h-.75H6zM10.032 18v.75V18zm1.574-10.33l-.53-.53.53.53zm1.045 8.403a.75.75 0 101.06-1.06l-1.06 1.06zm-3.663-5.784a.75.75 0 10-1.061 1.06l1.06-1.06zm6.812 1.574L11.863 15.8l1.061 1.06 3.936-3.936-1.06-1.06zm-7.6.274L12.137 8.2l-1.061-1.06-3.936 3.936 1.06 1.06zm0 3.663c-.571-.572-.946-.949-1.186-1.264-.228-.298-.264-.452-.264-.568h-1.5c0 .576.242 1.046.571 1.478.316.414.777.873 1.319 1.414L8.2 15.8zm-1.06-4.724c-.542.542-1.003 1-1.319 1.414-.329.432-.571.902-.571 1.478h1.5c0-.116.036-.27.264-.568.24-.315.615-.692 1.186-1.263l-1.06-1.061zm4.723 4.724c-.571.571-.948.946-1.263 1.186-.298.228-.452.264-.568.264v1.5c.576 0 1.046-.242 1.478-.571.414-.316.872-.777 1.414-1.319l-1.06-1.06zM7.14 16.86c.541.542 1 1.003 1.414 1.319.432.329.902.571 1.478.571v-1.5c-.116 0-.27-.036-.568-.264-.315-.24-.692-.615-1.264-1.186l-1.06 1.06zM15.8 8.2c.571.572.946.949 1.186 1.264.228.298.264.452.264.568h1.5c0-.576-.242-1.046-.571-1.478-.316-.414-.777-.873-1.319-1.414L15.8 8.2zm1.06 4.724c.542-.542 1.003-1 1.319-1.414.329-.432.571-.902.571-1.478h-1.5c0 .116-.036.27-.264.568-.24.315-.615.692-1.186 1.263l1.06 1.061zm0-5.784c-.541-.542-1-1.003-1.414-1.319-.432-.329-.902-.571-1.478-.571v1.5c.116 0 .27.036.568.264.315.24.692.615 1.264 1.186l1.06-1.06zM12.137 8.2c.571-.571.948-.946 1.263-1.186.298-.228.452-.264.568-.264v-1.5c-.576 0-1.046.242-1.478.571-.414.316-.872.777-1.414 1.319l1.06 1.06zm1.574 6.812L8.988 10.29l-1.061 1.06 4.724 4.724 1.06-1.06z'
      />
      <path stroke={linearColor} strokeWidth='1.5' d='M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z' />
    </SvgIcon>
  );
}

export default EraserCircleIcon;
