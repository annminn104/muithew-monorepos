import { Components, Theme } from '@mui/material/styles';

export default function DialogContentText(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiDialogContentText: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
