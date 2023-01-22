import { act, render, RenderResult } from '@testing-library/react';
import React from 'react';

import { IconNameEnumForStoriesAndTests } from '../../constants/iconNames';

import IconContainer from './IconContainer';

let renders: RenderResult;
describe('IconContainer Component', () => {
  Object.values(IconNameEnumForStoriesAndTests).forEach(iconName => {
    it(`should renders the icon container correctly for ${iconName}`, async () => {
      const renderAsync = async (): Promise<void> => {
        const PackageIcons = (): JSX.Element => {
          return (
            <div>
              <IconContainer iconName={iconName} />
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
});
