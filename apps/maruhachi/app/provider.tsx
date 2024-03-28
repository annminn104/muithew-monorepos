'use client';

import { MuiReactProvider } from '@core/providers';
import { PaletteMode } from '@mui/material';

import React from 'react';

interface RootProviderProps {
  children?: React.ReactNode;
  mode?: PaletteMode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children, mode }) => {
  return (
    <MuiReactProvider themeOptions={{}} defaultMode={mode}>
      {children}
    </MuiReactProvider>
  );
};

export default RootProvider;
