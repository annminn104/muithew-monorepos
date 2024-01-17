import { Components, Theme } from '@mui/material/styles';

export default function SpeedDialAction(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSpeedDialAction: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
