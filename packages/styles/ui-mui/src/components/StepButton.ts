import { Components, Theme } from '@mui/material/styles';

export default function StepButton(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStepButton: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
