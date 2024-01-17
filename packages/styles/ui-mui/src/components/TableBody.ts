import { Components, Theme } from '@mui/material/styles';

export default function TableBody(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableBody: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
