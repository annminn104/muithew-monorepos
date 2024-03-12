import { UiMuiFunctions } from '@core/global-types';
import { Color, PaletteOptions } from '@mui/material';

interface IMaruhachiColorPalette {
  contrastText: string;
  main: string;
  dark: string;
  light: string;
}

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    red: Color;
    yellow: Color;
    maruhachi: IMaruhachiColorPalette;
  }
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    functions?: UiMuiFunctions;
  }
  interface Theme {
    functions: UiMuiFunctions;
    palette: PaletteOptions;
  }
}

declare module '@mui/material' {
  interface SvgIconOwnProps {
    linearColor?: string;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    maruhachi: true;
  }
}
