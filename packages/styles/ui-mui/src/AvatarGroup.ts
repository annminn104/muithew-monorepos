import { Components, Theme } from '@mui/material/styles';

export default function AvatarGroup(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAvatarGroup: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
