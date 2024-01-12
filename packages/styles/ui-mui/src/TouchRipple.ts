import { Components, Theme } from '@mui/material/styles';

export default function TouchRipple(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTouchRipple: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
