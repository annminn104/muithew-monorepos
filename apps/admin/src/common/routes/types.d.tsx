/* eslint-disable @typescript-eslint/no-explicit-any */
import { CircularProgress } from '@mui/material';
import { ElementType, Suspense } from 'react';

export const SuspenseLoadable = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<CircularProgress color='primary' />}>
    <Component {...props} />
  </Suspense>
);

export const SuspenseLoadableLayout = (Component: ElementType) => (props: any) => (
  <Suspense fallback={<CircularProgress color='primary' />}>
    <Component {...props} />
  </Suspense>
);
