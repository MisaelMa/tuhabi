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
 * queue component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const queue = ({
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
        d="M32 64a8 8 0 0 1 8-8h176a8 8 0 1 1 0 16H40a8 8 0 0 1-8-8Zm104 56H40a8.001 8.001 0 0 0-5.657 13.657A8.001 8.001 0 0 0 40 136h96a8 8 0 1 0 0-16Zm0 64H40a8.001 8.001 0 0 0-5.657 13.657A8.001 8.001 0 0 0 40 200h96a8 8 0 1 0 0-16Zm108.2-30.8-64-40a7.996 7.996 0 0 0-8.095-.179A8.005 8.005 0 0 0 168 120v80a8.102 8.102 0 0 0 4.1 7 8 8 0 0 0 8.1-.2l64-40a8 8 0 0 0 0-13.6Z"
        fill={fill}
      />
    </Svg>
  );
};

export default queue;
