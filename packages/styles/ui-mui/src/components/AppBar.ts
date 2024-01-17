import { Components, Theme } from '@mui/material/styles';

export default function AppBar(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAppBar: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
