/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { render, RenderAPI } from '@testing-library/react-native';
import React from 'react';

import {
  Circle,
  ClipPath,
  Defs,
  Ellipse,
  ForeignObject,
  G,
  Image,
  Line,
  LinearGradient,
  Mask,
  Path,
  Pattern,
  Polygon,
  Polyline,
  RadialGradient,
  Rect,
  Stop,
  Svg,
  Symbol,
  Text,
  TextPath,
  TSpan,
  Use,
} from './svgWithProps';

type RendererJSON = ReturnType<RenderAPI['toJSON']>;
type UnionTestRendererJSON = NonNullable<RendererJSON>;
type ElementOf<T> = T extends (infer E)[] ? E : T;
type ReactTestRendererJSON = ElementOf<UnionTestRendererJSON>;

describe('Icon Component', () => {
  it('should renders Icon correctly', () => {
    /**
     * Icon component with support web/native
     */
    const AllIcons = (): JSX.Element => {
      return (
        <Svg>
          <Circle />
          <ClipPath />
          <Defs />
          <Ellipse />
          <ForeignObject />
          <G />
          <Image />
          <Line />
          <LinearGradient />
          <Mask />
          <Path d="m16" />
          <Pattern />
          <Polygon />
          <Polyline />
          <RadialGradient />
          <Rect />
          <Stop />
          <Symbol />
          <TSpan />
          <Text />
          <TextPath />
          <Use />
        </Svg>
      );
    };

    const screen: RenderAPI = render(<AllIcons />);
    const json = screen.toJSON() as ReactTestRendererJSON;
    expect(json?.type).toBe('svg');
  });
});
