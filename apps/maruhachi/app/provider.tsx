'use client';

import { MuiReactProvider } from '@core/providers';

import React from 'react';

interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return <MuiReactProvider>{children}</MuiReactProvider>;
};

export default RootProvider;
