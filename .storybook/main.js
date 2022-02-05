module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
     'design-system': {
       title: 'My design system',
       //👇 The url provided by Chromatic when it was deployed
       url: 'https://61fbb5ae28b5d3003adf6036-sbmymaerhp.chromatic.com',
     },
   },
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
};
