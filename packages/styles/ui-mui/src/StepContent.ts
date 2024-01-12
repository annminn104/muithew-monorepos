import { Components, Theme } from '@mui/material/styles';

export default function StepContent(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStepContent: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
