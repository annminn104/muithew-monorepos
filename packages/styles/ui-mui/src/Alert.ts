import { Components, Theme } from '@mui/material/styles';

export default function Alert(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAutocomplete: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
