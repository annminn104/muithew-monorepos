import { Components, Theme } from '@mui/material/styles';

export default function FormLabel(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormLabel: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
