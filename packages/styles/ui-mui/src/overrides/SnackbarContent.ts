import { Components, Theme } from '@mui/material/styles';

export default function SnackbarContent(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSnackbarContent: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
