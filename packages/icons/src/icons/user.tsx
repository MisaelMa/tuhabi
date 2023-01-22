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
 * user component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const user = ({
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
        d="M231.9 212a120.697 120.697 0 0 0-67.1-54.2 71.996 71.996 0 0 0 6.847-119.147 72.003 72.003 0 0 0-87.294 0A72 72 0 0 0 91.2 157.8 120.697 120.697 0 0 0 24.1 212a7.7 7.7 0 0 0 0 8 7.8 7.8 0 0 0 6.9 4h194a7.799 7.799 0 0 0 6.9-4 7.697 7.697 0 0 0 0-8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default user;
