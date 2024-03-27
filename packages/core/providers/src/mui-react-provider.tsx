'use client';

import React, { useEffect, useState } from 'react';

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
import { useLocalStorage } from '@utils/hooks';
import { adjustFlex, pxToRem } from '@utils/mui';

export const MuiThemeContext = React.createContext({
  toggleColorMode: () => {}
});

interface MuiProviderProps {
  children?: React.ReactNode;
  themeOptions?: ThemeOptions;
  defaultMode?: PaletteMode;
  keyThemeMode?: string;
}

export const MuiReactProvider: React.FC<MuiProviderProps> = ({ children, themeOptions, defaultMode = 'dark', keyThemeMode = 'APP_MODE' }) => {
  const [value, setValueInLocalStorage] = useLocalStorage(keyThemeMode, defaultMode);
  const [mode, setMode] = useState<PaletteMode>(value || defaultMode);
  const [hydrated, setHydrated] = useState<{ toggleColorMode: () => void }>({ toggleColorMode: () => {} });
  const [customThemeOptions, setCustomThemeOptions] = useState<ThemeOptions>({
    ...themeOptions,
    palette: palette(mode),
    functions: {
      pxToRem: pxToRem,
      adjustFlex: adjustFlex
    }
  });

  useEffect(() => {
    setHydrated({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        setValueInLocalStorage(mode === 'light' ? 'dark' : 'light');
      }
    });
  }, [value]);

  useEffect(() => {
    setCustomThemeOptions({
      ...themeOptions,
      palette: palette(mode),
      functions: {
        pxToRem: pxToRem,
        adjustFlex: adjustFlex
      }
    });
  }, [mode]);

  const theme = createTheme(customThemeOptions);

  theme.components = componentsOverrides(theme);

  return (
    <MuiThemeContext.Provider value={hydrated}>
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
