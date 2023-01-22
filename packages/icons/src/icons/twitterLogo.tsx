import React from 'react';

import { BLACK } from '@ammc/commons/constants/colors';

import {
  HEIGHT_SIZE_DEFAULT,
  VIEWBOX_DEFAULT,
  WIDTH_SIZE_DEFAULT,
} from '../constants/iconSize';
import { Path, Svg } from '../components/Svg/svgWithProps';
import IIconProps from '../components/Icon/IIcon';

/**
 * twitterLogo component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const twitterLogo = ({
  className,
  fill = BLACK,
  height = WIDTH_SIZE_DEFAULT,
  style,
  viewBox = VIEWBOX_DEFAULT,
  width = HEIGHT_SIZE_DEFAULT,
}: IIconProps): JSX.Element => {
  return (
    <Svg
      className={className}
      fill={fill}
      height={height}
      style={style}
      viewBox={viewBox}
      width={width}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m245.7 77.7-30.2 30.1c-6 69.9-65 124.2-135.5 124.2-14.5 0-26.5-2.3-35.6-6.8-7.3-3.7-10.3-7.6-11.1-8.8a7.997 7.997 0 0 1 .917-9.946A7.998 7.998 0 0 1 37.2 204.5c.2-.1 23.8-9.1 39.1-26.4a108.606 108.606 0 0 1-24.7-24.4c-13.7-18.6-28.2-50.9-19.5-99.1a8.1 8.1 0 0 1 5.5-6.2 8 8 0 0 1 8.1 1.9c.3.4 33.6 33.2 74.3 43.8V88a48.289 48.289 0 0 1 14.358-34.066A48.304 48.304 0 0 1 168.6 40a48.197 48.197 0 0 1 41 24H240a8.001 8.001 0 0 1 7.4 4.9 8.401 8.401 0 0 1-1.7 8.8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default twitterLogo;
