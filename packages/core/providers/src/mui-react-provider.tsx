'use client';

import React, { useMemo, useState } from 'react';

import palette from '@configs/mui/theme';
import {
  createTheme,
  CssBaseline,
  GlobalStyles,
  ThemeProvider as MUIThemeProvider,
  PaletteMode,
  StyledEngineProvider,
  ThemeOptions
} from '@mui/material';
import { componentsOverrides } from '@styles/ui-mui';
import { adjustFlex, pxToRem } from '@utils/mui';

export const MuiThemeContext = React.createContext({
  toggleColorMode: () => {}
});

interface MuiProviderProps {
  children?: React.ReactNode;
  themeOptions?: ThemeOptions;
  defaultMode?: PaletteMode;
}

export const MuiReactProvider: React.FC<MuiProviderProps> = ({ children, themeOptions, defaultMode = 'light' }) => {
  const [mode, setMode] = useState<PaletteMode>(defaultMode);

  const initialTheme = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }
    }),
    [mode]
  );

  const customThemeOptions = useMemo(
    () => ({ ...themeOptions, palette: palette(mode), functions: { pxToRem: pxToRem, adjustFlex: adjustFlex } }),
    [mode]
  );

  const theme = createTheme(customThemeOptions);

  theme.components = componentsOverrides(theme);

  return (
    <MuiThemeContext.Provider value={initialTheme}>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles styles={{}} />
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </MuiThemeContext.Provider>
  );
};
