import { Components, Theme } from '@mui/material/styles';

export default function TablePagination(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTablePagination: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
