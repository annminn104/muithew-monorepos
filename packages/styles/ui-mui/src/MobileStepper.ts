import { Components, Theme } from '@mui/material/styles';

export default function MobileStepper(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiMobileStepper: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
