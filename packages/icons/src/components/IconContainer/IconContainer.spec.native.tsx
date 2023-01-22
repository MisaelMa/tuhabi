/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable jsdoc/require-jsdoc */
import { render, RenderAPI } from '@testing-library/react-native';
import React from 'react';
import { View } from 'react-native';

import { IconNameEnumForStoriesAndTests } from '../../constants/iconNames';

import IconContainer from './IconContainer.native';

type RendererJSON = ReturnType<RenderAPI['toJSON']>;
type UnionTestRendererJSON = NonNullable<RendererJSON>;
type ElementOf<T> = T extends (infer E)[] ? E : T;
type ReactTestRendererJSON = ElementOf<UnionTestRendererJSON>;

describe('fallback svg Component', () => {
  Object.values(IconNameEnumForStoriesAndTests).forEach(iconName => {
    it(`should renders the icon container correctly for ${iconName} in native`, () => {
      const App = (): JSX.Element => {
        return <IconContainer iconName={iconName} />;
      };
      const screen: RenderAPI = render(<App />);
      const json = screen.toJSON() as ReactTestRendererJSON;
      expect(json?.type).toBe('svg');
    });
  });
  it('not should renders IconContainer correctly', () => {
    const App = (): JSX.Element => {
      const iconName =
        'arrowClockwises' as keyof typeof IconNameEnumForStoriesAndTests;
      return (
        <View>
          <IconContainer iconName={iconName} />
        </View>
      );
    };
    const screen: RenderAPI = render(<App />);
    const json = screen.toJSON() as ReactTestRendererJSON;
    expect(json.children).toBeNull();
  });
});
