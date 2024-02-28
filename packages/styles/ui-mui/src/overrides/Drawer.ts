import { Components, Theme } from '@mui/material/styles';

export default function Drawer(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDrawer: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
