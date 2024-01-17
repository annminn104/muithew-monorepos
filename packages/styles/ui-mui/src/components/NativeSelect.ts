import { Components, Theme } from '@mui/material/styles';

export default function NativeSelect(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiNativeSelect: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
