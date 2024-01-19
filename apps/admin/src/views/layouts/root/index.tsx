import React from 'react';
import { Outlet } from 'react-router-dom';

type RootLayoutProps = {
  children?: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <React.Fragment>
      {children}
      <Outlet />
    </React.Fragment>
  );
};

export default RootLayout;
