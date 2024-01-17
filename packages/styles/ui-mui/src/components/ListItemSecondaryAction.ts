import { Components, Theme } from '@mui/material/styles';

export default function ListItemSecondaryAction(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiListItemSecondaryAction: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
