'use client';

import React from 'react';

import palette from '@configs/mui/theme';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from '@mui/material';
import { componentsOverrides } from '@styles/ui-mui';
import { adjustFlex, pxToRem } from '@utils/mui';

interface MuiProviderProps {
  children?: React.ReactNode;
}

export const MuiProvider: React.FC<MuiProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: palette('light'),
    functions: {
      pxToRem: pxToRem,
      adjustFlex: adjustFlex
    }
  });

  theme.components = componentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{}} />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};
