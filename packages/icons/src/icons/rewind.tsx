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
 * rewind component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const rewind = ({
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
        d="m10.1 114.5 89.2-57.3A15.999 15.999 0 0 1 124 70.7v42.6l87.3-56.1a15.998 15.998 0 0 1 22.48 5.297A15.998 15.998 0 0 1 236 70.7v114.6a16.095 16.095 0 0 1-8.3 14.1 16.51 16.51 0 0 1-8.28 1.884 16.506 16.506 0 0 1-8.12-2.484L124 142.7v42.6a16.095 16.095 0 0 1-8.3 14.1 16.51 16.51 0 0 1-8.28 1.884 16.508 16.508 0 0 1-8.12-2.484l-89.2-57.3a16.1 16.1 0 0 1 0-27Z"
        fill={fill}
      />
    </Svg>
  );
};

export default rewind;
