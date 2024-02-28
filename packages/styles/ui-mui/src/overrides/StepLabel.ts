import { Components, Theme } from '@mui/material/styles';

export default function StepLabel(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStepLabel: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
