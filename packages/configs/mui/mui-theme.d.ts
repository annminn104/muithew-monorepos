import { UiMuiFunctions } from '@core/global-types';
import { Color } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    red: Color;
    yellow: Color;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    functions: UiMuiFunctions;
  }
  interface Theme {
    functions: UiMuiFunctions;
  }
}

declare module '@mui/material' {
  interface SvgIconOwnProps {
    linearColor?: string;
  }
}
