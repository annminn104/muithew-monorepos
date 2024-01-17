import { Components, Theme } from '@mui/material/styles';

export default function FormGroup(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormGroup: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
