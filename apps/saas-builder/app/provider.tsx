'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { MuiReactProvider } from '@core/providers';
import { isEmpty } from 'lodash';
import React from 'react';
interface RootProviderProps {
  children?: React.ReactNode;
}

const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
  return hasClerkProvider(<MuiReactProvider defaultMode='dark'>{children}</MuiReactProvider>);
};

export default RootProvider;

const hasClerkProvider = (children?: React.ReactNode): React.JSX.Element => {
  return !isEmpty(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) ? (
    <ClerkProvider appearance={{ baseTheme: dark }} publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      {children}
    </ClerkProvider>
  ) : (
    <React.Fragment>{children}</React.Fragment>
  );
};
