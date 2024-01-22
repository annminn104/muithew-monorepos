import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function UserHeartIcon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <circle cx='10' cy='6' r='4' stroke={linearColor} strokeWidth='1.5' />
      <path stroke={linearColor} strokeWidth='1.5' d='M18 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S5.582 13 10 13s8 2.015 8 4.5z' />
      <path
        fill={linearColor}
        d='M18.088 12.539l.456-.597-.456.597zM19 8.644l-.532.528a.75.75 0 001.064 0L19 8.644zm.912 3.895l-.456-.597.456.597zm-1.368-.597c-.487-.371-.925-.668-1.278-1.053-.327-.357-.516-.725-.516-1.19h-1.5c0 .95.414 1.663.91 2.204.471.513 1.077.93 1.474 1.232l.91-1.193zM16.75 9.7c0-.412.24-.745.547-.881.267-.118.69-.13 1.171.353l1.064-1.057c-.87-.875-1.945-1.065-2.842-.668A2.455 2.455 0 0015.25 9.7h1.5zm.884 3.435c.148.113.342.26.545.376.204.116.487.239.821.239v-1.5c.034 0 .017.011-.082-.044-.1-.056-.212-.14-.374-.264l-.91 1.193zm2.732 0c.397-.303 1.003-.719 1.473-1.232.497-.541.911-1.255.911-2.203h-1.5c0 .464-.189.832-.516 1.19-.353.384-.791.681-1.278 1.052l.91 1.193zM22.75 9.7c0-1-.585-1.875-1.44-2.253-.896-.397-1.973-.207-2.842.668l1.064 1.057c.48-.483.904-.471 1.17-.353.308.136.548.469.548.88h1.5zm-3.294 2.242a3.584 3.584 0 01-.374.264c-.099.056-.116.044-.082.044v1.5c.334 0 .617-.123.82-.239.204-.115.398-.263.546-.376l-.91-1.193z'
      />
    </SvgIcon>
  );
}

export default React.memo(UserHeartIcon);
