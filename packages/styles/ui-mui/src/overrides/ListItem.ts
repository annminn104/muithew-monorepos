import { Components, Theme } from '@mui/material/styles';

export default function ListItem(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListItem: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
