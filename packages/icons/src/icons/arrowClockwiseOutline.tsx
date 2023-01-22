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
 * arrowClockwiseOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill = BLACK] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowClockwiseOutline = ({
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
        d="M97.35 54.083a80 80 0 0 1 87.191 17.372c.122.121.247.24.377.353L212.434 96H184a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V56a8 8 0 0 0-16 0v28.865l-28.328-24.906A95.996 95.996 0 0 0 91.23 39.3a96 96 0 1 0 104.629 156.555 8 8 0 0 0-11.318-11.309 80.004 80.004 0 0 1-87.191 17.371A79.997 79.997 0 0 1 47.95 128a80 80 0 0 1 49.4-73.917Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowClockwiseOutline;
