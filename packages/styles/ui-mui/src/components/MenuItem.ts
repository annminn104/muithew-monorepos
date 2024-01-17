import { Components, Theme } from '@mui/material/styles';

export default function MenuItem(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiMenuItem: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
