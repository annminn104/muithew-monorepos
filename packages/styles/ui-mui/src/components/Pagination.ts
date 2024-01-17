import { Components, Theme } from '@mui/material/styles';

export default function Pagination(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiPagination: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
