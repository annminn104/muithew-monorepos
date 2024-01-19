import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { ActiveGuard, NonActiveGuard } from '@/common/guards';

import { authRoute } from './auth';
import { dashboardRoute } from './dashboard';
import { SuspenseLoadableLayout } from './types.d';

const RootLayout = SuspenseLoadableLayout(React.lazy(() => import('@/views/layouts/root')));
const DashboardLayout = SuspenseLoadableLayout(React.lazy(() => import('@/views/layouts/dashboard')));
const AuthLayout = SuspenseLoadableLayout(React.lazy(() => import('@/views/layouts/auth')));
const PublicLayout = SuspenseLoadableLayout(React.lazy(() => import('@/views/layouts/public')));

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <ActiveGuard component={<DashboardLayout />} />,
        children: [dashboardRoute]
      },
      {
        path: 'auth',
        element: <NonActiveGuard component={<AuthLayout />} />,
        children: [authRoute]
      },
      {
        path: 'public',
        element: <NonActiveGuard component={<PublicLayout />} />
      },
      {
        path: '*',
        element: <NonActiveGuard component={<PublicLayout />} />
      }
    ]
  }
]);

export default router;
