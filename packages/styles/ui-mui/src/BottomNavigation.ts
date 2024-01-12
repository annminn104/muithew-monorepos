import { Components, Theme } from '@mui/material/styles';

export default function BottomNavigation(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiBottomNavigation: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
