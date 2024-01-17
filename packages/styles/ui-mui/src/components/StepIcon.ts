import { Components, Theme } from '@mui/material/styles';

export default function StepIcon(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStepIcon: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
