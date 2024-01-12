import { Components, Theme } from '@mui/material/styles';

export default function List(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListItemIcon: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
