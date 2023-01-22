import { act, render, RenderResult } from '@testing-library/react';
import React from 'react';

import Icon from './Icon';

let renders: RenderResult;

describe('Icon Component', () => {
  it('should renders Icon component correctly', async () => {
    const renderAsync = async (): Promise<void> => {
      const PackageIcons = (): JSX.Element => {
        return (
          <div>
            <Icon iconName="arrowClockwise" />
          </div>
        );
      };
      renders = render(<PackageIcons />);
      return Promise.resolve();
    };

    await act(async () => {
      await renderAsync();
    });

    const { container } = renders;
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
  });
});
