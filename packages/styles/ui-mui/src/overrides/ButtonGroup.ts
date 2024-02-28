import { Components, Theme } from '@mui/material/styles';

export default function ButtonGroup(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiButtonGroup: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
