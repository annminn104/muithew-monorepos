import { Components, Theme } from '@mui/material/styles';

export default function AccordionActions(theme: Theme): Components<Omit<Theme, 'components'>> {
  return {
    MuiAccordionActions: {
      defaultProps: {},
      styleOverrides: {},
      variants: []
    }
  };
}
