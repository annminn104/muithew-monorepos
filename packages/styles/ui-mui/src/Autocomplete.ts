import { Components, Theme } from '@mui/material/styles';

export default function Autocomplete(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAutocomplete: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
