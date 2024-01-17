import { Parameters } from "@storybook/react";
import { Preset } from "@storybook/types";

export const parameterGlobalConfigs: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};

export const addOnGlobalConfigs: Preset[] = [
  "@storybook/addon-links",
  "@storybook/addon-essentials",
  "@storybook/addon-onboarding",
  "@storybook/addon-interactions",
];
