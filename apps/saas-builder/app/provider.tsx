'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { MuiReactProvider } from '@core/providers';
import React from 'react';
interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <MuiReactProvider defaultMode='dark'>{children}</MuiReactProvider>
    </ClerkProvider>
  );
};

export default RootProvider;
