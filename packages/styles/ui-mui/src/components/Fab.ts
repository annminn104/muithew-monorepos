import { Components, Theme } from '@mui/material/styles';

export default function Fab(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiFab: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
