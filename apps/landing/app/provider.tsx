'use client';

import React from 'react';
import { MuiProvider } from '@core/providers';

interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return <MuiProvider>{children}</MuiProvider>;
};

export default RootProvider;
