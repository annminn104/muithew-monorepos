import { Components, Theme } from '@mui/material/styles';

export default function DialogTitle(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDialogTitle: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
