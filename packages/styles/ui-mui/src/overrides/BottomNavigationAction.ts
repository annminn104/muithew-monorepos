import { Components, Theme } from '@mui/material/styles';

export default function BottomNavigationAction(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiBottomNavigationAction: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
