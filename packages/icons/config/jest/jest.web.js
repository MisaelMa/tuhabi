const baseConfig = require('../../node_modules/@ammc/jest/jestConfig');

module.exports = {
  ...baseConfig,
  "rootDir": "../../",
  coverageDirectory: '<rootDir>/coverage/web',
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    '!src/**/*.native.tsx',
  ]
};
