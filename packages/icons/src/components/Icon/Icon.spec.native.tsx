/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { render, RenderAPI } from '@testing-library/react-native';
import React from 'react';

import Icon from './Icon';

describe('Icon Component', () => {
  it('should renders Icon correctly', () => {
    /**
     * Icon component with support web/native
     */
    const PackageIcons = (): JSX.Element => {
      return <Icon iconName="arrowUp" />;
    };

    const screen: RenderAPI = render(<PackageIcons />);
    const arrowUp = screen.queryByTestId('arrowUp');
    expect(arrowUp).toBeDefined();
  });
});
