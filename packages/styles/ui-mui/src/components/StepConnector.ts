import { Components, Theme } from '@mui/material/styles';

export default function StepConnector(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStepConnector: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
