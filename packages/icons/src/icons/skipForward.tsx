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
 * skipForward component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const skipForward = ({
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
        d="M208 40v176a8 8 0 1 1-16 0v-73.7L72.3 215.4a16.199 16.199 0 0 1-8.3 2.3 15.395 15.395 0 0 1-7.8-2 15.898 15.898 0 0 1-8.2-14V54.3a16 16 0 0 1 24.3-13.7L192 113.7V40a8.001 8.001 0 0 1 13.657-5.657A8.001 8.001 0 0 1 208 40Z"
        fill={fill}
      />
    </Svg>
  );
};

export default skipForward;
