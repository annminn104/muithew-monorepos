import React from 'react';

type NonActiveGuardProps = {
  component?: React.ReactNode;
};

export const NonActiveGuard: React.FC<NonActiveGuardProps> = ({ component }) => {
  return <React.Fragment>{component}</React.Fragment>;
};
