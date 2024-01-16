"use client";

import { createTheme } from "@mui/material";
import React from "react";
import palette from "@configs/mui/theme";
import { pxToRem, adjustFlex } from "@utils/mui";
import { componentsOverrides } from "@styles/ui-mui";

interface MuiProviderProps {
  children?: React.ReactNode;
}

export const MuiProvider: React.FC<MuiProviderProps> = ({ children }) => {
  const theme = createTheme({
    palette: palette("light"),
    functions: {
      pxToRem: pxToRem,
      adjustFlex: adjustFlex,
    },
  });

  theme.components = componentsOverrides(theme);

  return <React.Fragment>{children}</React.Fragment>;
};
