import { Components, Theme } from '@mui/material/styles';

export default function TableCell(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableCell: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
