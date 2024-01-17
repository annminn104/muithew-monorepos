import { Components, Theme } from '@mui/material/styles';

export default function ListItemText(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListItemText: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
