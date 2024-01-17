import { Components, Theme } from '@mui/material/styles';

export default function Step(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiStep: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
