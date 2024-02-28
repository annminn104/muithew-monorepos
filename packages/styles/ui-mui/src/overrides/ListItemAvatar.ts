import { Components, Theme } from '@mui/material/styles';

export default function ListItemAvatar(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListItemAvatar: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
