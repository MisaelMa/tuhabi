const baseConfig = require('../../node_modules/@ammc/jest/jestConfig');

module.exports = {
  ...baseConfig,
  preset: 'react-native',
  "rootDir": "../../",
  coverageDirectory: '<rootDir>/coverage/native',
  "haste": {
    "defaultPlatform": "android",
    "platforms": ["android"]
  },
  testMatch:[
    '<rootDir>/src/**/*.spec.native.{js,jsx,ts,tsx}',
    '!<rootDir>/src/**/*spec.{js,jsx,ts,tsx}',
  ],
  collectCoverageFrom: [
    ...baseConfig.collectCoverageFrom,
    'src/**/*native.{js,jsx,ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/**/*.stories.native.tsx',
    '!src/**/*spec.tsx',
  ],
};
