'use client';

import { MuiProvider } from '@core/providers';
import React from 'react';

interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return <MuiProvider>{children}</MuiProvider>;
};

export default RootProvider;
