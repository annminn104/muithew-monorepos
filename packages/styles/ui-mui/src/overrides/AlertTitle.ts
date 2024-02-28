import { Components, Theme } from '@mui/material/styles';

export default function AlertTitle(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAlertTitle: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
