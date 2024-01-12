import { Components, Theme } from '@mui/material/styles';

export default function CssBaseline(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiCssBaseline: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
