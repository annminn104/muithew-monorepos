import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function DiplomaVerifiedIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879C22 3.757 22 5.172 22 8v4c0 2.828 0 4.243-.879 5.121-.73.73-1.829.854-3.801.875l-.82.002'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 6h6M7 9.5h10' />
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M10.89 13.945a1.71 1.71 0 012.22 0c.273.234.614.375.973.403a1.71 1.71 0 011.569 1.57c.028.358.17.698.403.973a1.71 1.71 0 010 2.218 1.71 1.71 0 00-.403.973 1.71 1.71 0 01-1.57 1.57c-.358.028-.699.169-.973.402a1.71 1.71 0 01-2.218 0 1.71 1.71 0 00-.974-.403 1.71 1.71 0 01-1.568-1.569 1.71 1.71 0 00-.404-.973 1.71 1.71 0 010-2.219 1.71 1.71 0 00.404-.973 1.71 1.71 0 011.568-1.569c.36-.028.7-.17.974-.403z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M10.5 18.2l.857.8 2.143-2' />
    </SvgIcon>
  );
}

export default React.memo(DiplomaVerifiedIcon);
