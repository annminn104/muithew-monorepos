import { Components, Theme } from '@mui/material/styles';

export default function PaginationItem(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiPaginationItem: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
