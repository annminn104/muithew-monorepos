import { Components, Theme } from '@mui/material/styles';

export default function Accordion(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAccordion: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
