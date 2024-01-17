import { Components, Theme } from '@mui/material/styles';

export default function FormHelperText(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormHelperText: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
