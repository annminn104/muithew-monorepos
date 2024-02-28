import { Components, Theme } from '@mui/material/styles';

export default function TableFooter(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableFooter: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
