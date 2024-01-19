import React from 'react';
import { RouteObject } from 'react-router-dom';

import { SuspenseLoadable } from './types.d';

const Login = SuspenseLoadable(React.lazy(() => import('@/views/pages/auth/login')));
const Register = SuspenseLoadable(React.lazy(() => import('@/views/pages/auth/register')));

export const authRoute: RouteObject = {
  path: '',
  handle: {},
  children: [
    { path: '', element: <Login /> },
    { path: 'register', element: <Register /> },
    { path: '*', element: <Login /> }
  ]
};
