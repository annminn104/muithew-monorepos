import React from 'react';

import { MuiReactProvider } from '@core/providers';

interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return <MuiReactProvider>{children}</MuiReactProvider>;
};

export default RootProvider;
