import { Components, Theme } from '@mui/material/styles';

export default function SwipeableDrawer(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSwipeableDrawer: {
      defaultProps: {}
    }
  };
}
