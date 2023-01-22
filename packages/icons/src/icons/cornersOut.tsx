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
 * cornersOut component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const cornersOut = ({
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
        d="M216 48v40a8 8 0 0 1-4.9 7.4 8.498 8.498 0 0 1-3.1.6 8.301 8.301 0 0 1-5.7-2.3l-40-40a8.404 8.404 0 0 1-1.7-8.8A7.999 7.999 0 0 1 168 40h40a8 8 0 0 1 8 8ZM53.7 162.3a8.404 8.404 0 0 0-8.8-1.7A7.998 7.998 0 0 0 40 168v40a8 8 0 0 0 8 8h40a8 8 0 0 0 7.4-4.9 8.4 8.4 0 0 0-1.7-8.8l-40-40Zm157.4-1.7a8.403 8.403 0 0 0-8.8 1.7l-40 40a8.406 8.406 0 0 0-1.7 8.8 7.998 7.998 0 0 0 7.4 4.9h40a8 8 0 0 0 8-8v-40a8.002 8.002 0 0 0-4.9-7.4ZM88 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 4.9 7.4 8.499 8.499 0 0 0 3.1.6 8.3 8.3 0 0 0 5.7-2.3l40-40a8.4 8.4 0 0 0 1.7-8.8A8 8 0 0 0 88 40Z"
        fill={fill}
      />
    </Svg>
  );
};

export default cornersOut;
