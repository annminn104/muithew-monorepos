import { Components, Theme } from '@mui/material/styles';

export default function Grid(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiGrid: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
