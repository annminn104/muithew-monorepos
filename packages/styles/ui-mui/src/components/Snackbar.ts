import { Components, Theme } from '@mui/material/styles';

export default function Snackbar(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSnackbar: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
