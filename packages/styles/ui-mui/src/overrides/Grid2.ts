import { Components, Theme } from '@mui/material/styles';

export default function Grid2(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiGrid2: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
