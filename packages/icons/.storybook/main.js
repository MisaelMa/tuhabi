const baseConfig = require('../../../rigs/storybook-web/storybook.config');

module.exports = {
  ...baseConfig(__dirname),
  features: {
    storyStoreV7: false,
  },
};
