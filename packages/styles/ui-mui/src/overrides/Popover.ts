import { Components, Theme } from '@mui/material/styles';

export default function Popover(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiPopover: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
