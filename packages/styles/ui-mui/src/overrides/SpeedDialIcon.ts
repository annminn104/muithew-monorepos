import { Components, Theme } from '@mui/material/styles';

export default function SpeedDialIcon(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSpeedDialIcon: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
