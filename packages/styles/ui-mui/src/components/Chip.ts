import { Components, Theme } from '@mui/material/styles';

export default function Chip(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiChip: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
