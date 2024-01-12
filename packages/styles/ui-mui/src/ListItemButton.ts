import { Components, Theme } from '@mui/material/styles';

export default function ListItemButton(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListItemButton: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
