import { Components, Theme } from '@mui/material/styles';

export default function SvgIcon(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSvgIcon: {
      defaultProps: {},
      styleOverrides: {
        root: {
          '&.linear': {
            fill: 'transparent'
          },
          '&.square-flag': {}
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
          fontSize: 'inherit'
        }
      },
      variants: []
    }
  };
}
