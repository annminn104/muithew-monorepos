import { Components, Theme } from '@mui/material/styles';

export default function TableSortLabel(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableSortLabel: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
