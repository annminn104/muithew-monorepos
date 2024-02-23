import React from 'react';

import { SvgIcon, SvgIconOwnProps } from '@mui/material';

function Printer2Icon({ linearColor = '#1C274C', ...props }: SvgIconOwnProps) {
  return (
    <SvgIcon {...props} className='linear'>
      <path
        stroke={linearColor}
        strokeWidth='1.5'
        d='M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12c0 2.828 0 4.243-.879 5.121-.641.642-1.567.815-3.121.862'
      />
      <path stroke={linearColor} strokeLinecap='round' strokeWidth='1.5' d='M9 10H6M19 15H5'></path>
      <path
        fill={linearColor}
        d='M17.121 2.879l-.53.53.53-.53zm-10.242 0l.53.53-.53-.53zm0 18.242l.53-.53-.53.53zM18.75 15a.75.75 0 00-1.5 0h1.5zm-12 0a.75.75 0 00-1.5 0h1.5zm10.5 1c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399l1.06 1.06c.603-.601.861-1.36.983-2.26.118-.878.116-1.998.116-3.391h-1.5zM12 22.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L16.59 20.59c-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103v1.5zm0-20c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982-.878-.119-1.998-.117-3.391-.117v1.5zm0-1.5c-1.393 0-2.513-.002-3.392.117-.9.12-1.658.38-2.26.981L7.41 3.41c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103v-1.5zM5.25 16c0 1.393-.002 2.513.117 3.392.12.9.38 1.658.981 2.26L7.41 20.59c-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191h-1.5zM12 21.25c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116v-1.5zm6.732-15.273c-.046-1.542-.208-2.757-1.08-3.629L16.59 3.41c.41.41.595 1.049.642 2.614l1.5-.046zm-11.965.046c.047-1.565.231-2.203.642-2.614l-1.06-1.06c-.873.871-1.035 2.086-1.081 3.628l1.499.046zM18.75 16v-1h-1.5v1h1.5zm-12 0v-1h-1.5v1h1.5z'
      />
      <circle cx='17' cy='10' r='1' fill={linearColor} />
    </SvgIcon>
  );
}

export default React.memo(Printer2Icon);
