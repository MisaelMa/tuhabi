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
 * gearSix component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const gearSix = ({
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
        d="M237.5 104.3a8.003 8.003 0 0 0-4-5.3l-23.8-13.2a74.74 74.74 0 0 0-4.2-7.5l.4-27.2a8.308 8.308 0 0 0-2.6-6.1 112 112 0 0 0-41.1-23.7 8.1 8.1 0 0 0-6.6.8l-23.3 14c-2.9-.1-5.7-.1-8.6 0l-23.3-14a8.1 8.1 0 0 0-6.6-.8 111.101 111.101 0 0 0-41.1 23.8 7.9 7.9 0 0 0-2.6 6l.5 27.2c-1.6 2.4-3 4.9-4.4 7.5L22.5 99a7.701 7.701 0 0 0-4 5.3 111.4 111.4 0 0 0 0 47.4 8.008 8.008 0 0 0 4 5.3l23.8 13.2a69.312 69.312 0 0 0 4.3 7.5l-.5 27.2a8.303 8.303 0 0 0 2.6 6.1 112.903 112.903 0 0 0 41.1 23.7 8.101 8.101 0 0 0 6.6-.8l23.3-14h8.6l23.4 14a7.296 7.296 0 0 0 4.1 1.2 9.974 9.974 0 0 0 2.4-.4 111.1 111.1 0 0 0 41.1-23.8 7.904 7.904 0 0 0 2.6-6l-.4-27.2c1.5-2.4 2.9-4.9 4.3-7.5l23.8-13.2a7.891 7.891 0 0 0 3.9-5.3 111.41 111.41 0 0 0 0-47.4ZM172 128a44.006 44.006 0 0 1-52.584 43.155 44.003 44.003 0 0 1-15.861-79.74A44.002 44.002 0 0 1 172 128Z"
        fill={fill}
      />
    </Svg>
  );
};

export default gearSix;
