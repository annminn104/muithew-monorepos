import { StorybookConfig } from "@storybook/react-vite";

import { addOnGlobalConfigs } from "../global-config";

export const reactConfigStorybook: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [...addOnGlobalConfigs, "storybook-addon-react-router-v6"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
