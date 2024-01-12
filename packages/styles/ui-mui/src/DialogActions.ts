import { Components, Theme } from '@mui/material/styles';

export default function DialogActions(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDialogActions: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
