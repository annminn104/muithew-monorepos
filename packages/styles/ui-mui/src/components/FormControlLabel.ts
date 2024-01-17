import { Components, Theme } from '@mui/material/styles';

export default function FormControlLabel(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormControlLabel: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
