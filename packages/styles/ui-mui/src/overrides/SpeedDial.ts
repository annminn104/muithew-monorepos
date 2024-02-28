import { Components, Theme } from '@mui/material/styles';

export default function SpeedDial(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSpeedDial: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
