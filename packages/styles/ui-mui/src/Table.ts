import { Components, Theme } from '@mui/material/styles';

export default function Table(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTable: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
