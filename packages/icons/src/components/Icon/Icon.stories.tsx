import React from 'react';

import { storiesOf } from '@ammc/heft-storybook-web';

import { IconNameEnumForStoriesAndTests } from '../../constants/iconNames';

import Icon from './Icon';

Object.values(IconNameEnumForStoriesAndTests).forEach(iconName => {
  storiesOf(`components/Icons`, module).add(iconName, () => {
    return <Icon iconName={iconName} />;
  });
});
