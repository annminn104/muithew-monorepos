import { StyleBaseEnum, StyleBreakPointDeviceEnum } from '@core/enums';
import { AlignItems, Display, FlexDirection, JustifyContent } from '@core/global-types';

const pxToRem = (pixel: number, defaultFontSizeHtml: number = StyleBaseEnum.fontSizeDefault) => {
  return `${pixel / defaultFontSizeHtml}rem`;
};

const responsiveFontSizes = (sm: number, md: number, lg: number) => {
  return {
    [`@media(min-width:${StyleBreakPointDeviceEnum.small}px)`]: {
      fontSize: pxToRem(sm)
    },
    [`media(min-width:${StyleBreakPointDeviceEnum.medium}px)`]: {
      fontSize: pxToRem(md)
    },
    [`media(min-width:${StyleBreakPointDeviceEnum.large}px)`]: {
      fontSize: pxToRem(lg)
    }
  };
};

const adjustFlex = (
  display: Display = 'flex',
  flexDirection: FlexDirection = 'row',
  justifyContent: JustifyContent = 'center',
  alignItems: AlignItems = 'center'
) => {
  return { display, flexDirection, justifyContent, alignItems };
};

export { adjustFlex, pxToRem, responsiveFontSizes };
