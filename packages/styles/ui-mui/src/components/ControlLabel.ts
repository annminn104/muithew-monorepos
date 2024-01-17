import { Components, Theme } from '@mui/material/styles';

export default function ControlLabel(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFormControlLabel: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
