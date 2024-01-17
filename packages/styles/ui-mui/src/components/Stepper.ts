import { Components, Theme } from '@mui/material/styles';

export default function Stepper(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStepper: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
