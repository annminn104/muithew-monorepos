import React from 'react';

type ActiveGuardProps = {
  component?: React.ReactNode;
};

export const ActiveGuard: React.FC<ActiveGuardProps> = ({ component }) => {
  return <React.Fragment>{component}</React.Fragment>;
};
