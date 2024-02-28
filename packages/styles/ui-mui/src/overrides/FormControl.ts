import { Components, Theme } from '@mui/material/styles';

export default function FormControl(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormControl: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
