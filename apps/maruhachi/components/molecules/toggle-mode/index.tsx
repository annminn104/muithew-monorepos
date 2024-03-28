import { MuiThemeContext } from '@core/providers';
import { IconButton, useTheme } from '@mui/material';
import { MoonStarsIcon, SunIcon } from '@styles/ui-mui/icons';
import React, { useContext } from 'react';

type ToggleModeProps = {};

const ToggleMode: React.FC<ToggleModeProps> = () => {
  const colorMode = useContext(MuiThemeContext);

  const theme = useTheme();

  const handleToggleMode = async () => {
    try {
      await fetch('/api/theme', { method: 'POST', body: JSON.stringify({}) });
      colorMode.toggleColorMode();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleToggleMode}>{theme.palette.mode === 'light' ? <SunIcon /> : <MoonStarsIcon />}</IconButton>
    </React.Fragment>
  );
};

export default ToggleMode;
