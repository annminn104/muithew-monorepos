import React from 'react';
import { RouteObject } from 'react-router-dom';

import { SuspenseLoadable } from './types.d';

const Overview = SuspenseLoadable(React.lazy(() => import('@/views/pages/dashboard/overview')));
const Crypto = SuspenseLoadable(React.lazy(() => import('@/views/pages/dashboard/crypto')));

export const dashboardRoute: RouteObject = {
  path: '',
  handle: {},
  children: [
    { path: '', element: <Overview /> },
    { path: 'crypto', element: <Crypto /> },
    { path: '*', element: <Overview /> }
  ]
};
