import { Components, Theme } from '@mui/material/styles';

export default function Tab(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTab: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
