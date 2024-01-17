import { Components, Theme } from '@mui/material/styles';

export default function Badge(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiBadge: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
