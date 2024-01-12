import { Components, Theme } from '@mui/material/styles';

export default function TableRow(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableRow: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
