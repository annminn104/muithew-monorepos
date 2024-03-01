import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function ClapperboardOpenPlayIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M4 11h12c1.886 0 2.828 0 3.414.586C20 12.172 20 13.114 20 15v1c0 2.828 0 4.243-.879 5.121C18.243 22 16.828 22 14 22h-4c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16v-5zM4.001 11c-.483-1.806-.725-2.709-.517-3.485A3 3 0 014.26 6.17c.569-.568 1.471-.81 3.277-1.294l7.003-1.877c.673-.18 1.01-.27 1.305-.29a3 3 0 012.886 1.667c.131.265.221.602.402 1.275.06.225.09.337.096.435a1 1 0 01-.555.962c-.088.044-.2.074-.425.134L4 11z'
      />
      <path
        stroke={linearColor}
        strokeLinecap='round'
        strokeWidth='1.5'
        d='M14.7 2.941l-.637 5.348M8.422 4.624l-.638 5.347M14 16.5c0-.422-.397-.707-1.192-1.277-.805-.577-1.207-.866-1.508-.654-.3.212-.3.785-.3 1.931s0 1.719.3 1.93c.3.212.703-.076 1.508-.654.795-.569 1.192-.854 1.192-1.276z'
      />
    </SvgIcon>
  );
}

export default ClapperboardOpenPlayIcon;
