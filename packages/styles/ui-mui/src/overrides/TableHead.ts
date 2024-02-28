import { Components, Theme } from '@mui/material/styles';

export default function TableHead(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTableHead: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
