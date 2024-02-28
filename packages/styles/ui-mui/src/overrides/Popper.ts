import { Components, Theme } from '@mui/material/styles';

export default function Popper(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiPopper: {
      defaultProps: {},
      styleOverrides: {}
    }
  };
}
