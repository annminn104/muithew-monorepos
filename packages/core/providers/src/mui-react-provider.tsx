'use client';

import React from 'react';

import palette from '@configs/mui/theme';
import { CssBaseline, GlobalStyles, ThemeProvider as MUIThemeProvider, StyledEngineProvider, ThemeOptions, createTheme } from '@mui/material';
import { componentsOverrides } from '@styles/ui-mui';
import { adjustFlex, pxToRem } from '@utils/mui';

interface MuiProviderProps {
  children?: React.ReactNode;
  themeOptions?: ThemeOptions;
}

export const MuiReactProvider: React.FC<MuiProviderProps> = ({ children, themeOptions }) => {
  const theme = createTheme({
    ...themeOptions,
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
