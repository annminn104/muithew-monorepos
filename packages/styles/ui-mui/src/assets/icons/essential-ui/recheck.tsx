import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function RecheckIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        fill={linearColor}
        d='M4.852 4.591A.75.75 0 003.784 3.54L4.852 4.59zM8.4 2.777l-.534-.526a.75.75 0 000 1.053l.534-.527zm1.216 2.304a.75.75 0 101.069-1.053L9.616 5.08zm1.069-3.555A.75.75 0 109.616.474l1.069 1.052zM12 20.25c-2.143 0-3.673-.002-4.836-.16-1.14-.156-1.815-.45-2.312-.954l-1.068 1.052c.82.834 1.866 1.209 3.177 1.388 1.288.176 2.94.174 5.039.174v-1.5zm-9.75-8.386c0 2.132-.002 3.806.171 5.11.176 1.326.543 2.382 1.363 3.214l1.068-1.052c-.498-.506-.79-1.195-.944-2.358-.156-1.184-.158-2.74-.158-4.914h-1.5zm18 0c0 2.174-.002 3.73-.158 4.914-.154 1.163-.446 1.852-.944 2.358l1.068 1.052c.82-.832 1.187-1.888 1.363-3.213.172-1.305.171-2.979.171-5.112h-1.5zM12 21.75c2.1 0 3.751.002 5.04-.174 1.31-.179 2.355-.554 3.176-1.388l-1.068-1.052c-.497.504-1.171.798-2.312.954-1.163.158-2.693.16-4.836.16v1.5zm0-18.273c2.143 0 3.673.002 4.836.16 1.14.156 1.815.45 2.312.954l1.068-1.052c-.82-.834-1.866-1.21-3.177-1.388-1.288-.176-2.94-.174-5.039-.174v1.5zm9.75 8.386c0-2.132.002-3.806-.171-5.11-.176-1.326-.543-2.382-1.363-3.214L19.148 4.59c.498.506.79 1.195.944 2.358.157 1.184.158 2.74.158 4.915h1.5zm-18 0c0-2.174.002-3.73.158-4.914.154-1.163.446-1.852.944-2.358L3.784 3.54c-.82.832-1.187 1.888-1.363 3.213-.173 1.305-.171 2.979-.171 5.112h1.5zM12 1.978c-1.415 0-2.62 0-3.638.051l.076 1.498c.972-.049 2.134-.05 3.562-.05v-1.5zM7.866 3.304l1.75 1.777 1.069-1.053-1.75-1.777-1.07 1.053zm1.068 0l1.75-1.778L9.617.474 7.866 2.25l1.068 1.053z'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' d='M8.5 12.5l2 2 5-5' />
    </SvgIcon>
  );
}

export default RecheckIcon;
