import { Components, Theme } from '@mui/material/styles';

export default function Menu(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiMenu: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
