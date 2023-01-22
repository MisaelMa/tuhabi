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
 * timer component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const timer = ({
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
        d="M104 16h48a8 8 0 1 0 0-16h-48a8 8 0 1 0 0 16ZM128 32a96 96 0 1 0 96 96 96.2 96.2 0 0 0-96-96Zm45.3 62.1-39.6 39.6a8.198 8.198 0 0 1-11.4 0 8.101 8.101 0 0 1 0-11.4l39.6-39.6a8.097 8.097 0 0 1 9.176-2.419 8.107 8.107 0 0 1 4.643 4.643A8.1 8.1 0 0 1 173.3 94.1Z"
        fill={fill}
      />
    </Svg>
  );
};

export default timer;
