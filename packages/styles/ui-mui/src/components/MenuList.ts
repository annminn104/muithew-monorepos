import { Components, Theme } from '@mui/material/styles';

export default function MenuList(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiMenuList: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
