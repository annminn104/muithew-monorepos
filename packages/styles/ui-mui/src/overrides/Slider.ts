import { Components, Theme } from '@mui/material/styles';

export default function Slider(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiSlider: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
