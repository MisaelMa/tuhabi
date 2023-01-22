import React from 'react';
import { render } from '@testing-library/react';

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

describe('Icon Component', () => {
  it('should renders Icon correctly', () => {
    /**
     * Icon component with support web/native
     */
    const PackageIcons = (): JSX.Element => {
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

    const { container } = render(<PackageIcons />);
    expect(container.querySelector('svg')).toBeDefined();
  });
});
