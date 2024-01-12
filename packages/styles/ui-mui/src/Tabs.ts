import { Components, Theme } from '@mui/material/styles';

export default function Tabs(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiTabs: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
