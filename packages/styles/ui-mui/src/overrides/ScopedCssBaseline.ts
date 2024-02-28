import { Components, Theme } from '@mui/material/styles';

export default function ScopedCssBaseline(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiScopedCssBaseline: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
