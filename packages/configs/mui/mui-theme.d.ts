import { AdjustFlex } from '@core/global-types';
import { Color } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    red: Color;
    yellow: Color;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    functions: AdjustFlex;
  }
  interface Theme {
    functions: AdjustFlex;
  }
}

declare module '@mui/material' {
  interface SvgIconProps {
    linearColor?: string;
  }
}
