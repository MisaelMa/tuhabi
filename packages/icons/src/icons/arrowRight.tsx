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
 * arrowRight component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowRight = ({
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
        d="m221.7 133.7-72 72a8.3 8.3 0 0 1-5.7 2.3 8.504 8.504 0 0 1-3.1-.6 7.998 7.998 0 0 1-4.9-7.4v-64H40a8.001 8.001 0 0 1-5.657-13.657A8.001 8.001 0 0 1 40 120h96V56a8 8 0 0 1 4.9-7.4 8.4 8.4 0 0 1 8.8 1.7l72 72a8.101 8.101 0 0 1 0 11.4Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowRight;
