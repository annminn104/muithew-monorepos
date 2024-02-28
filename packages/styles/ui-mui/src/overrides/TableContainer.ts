import { Components, Theme } from '@mui/material/styles';

export default function TableContainer(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableContainer: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
