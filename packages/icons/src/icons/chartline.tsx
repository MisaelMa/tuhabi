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
 * chartline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const chartline = ({
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
        d="M224 200H40v-36.4l56.4-49.3 58.8 44.1a7.998 7.998 0 0 0 10.1-.4l64-56a8.007 8.007 0 0 0 .7-11.3 8.001 8.001 0 0 0-8.6-2.272A8.002 8.002 0 0 0 218.7 90l-59.1 51.7-58.8-44.1a8 8 0 0 0-10.1.4L40 142.4V48a8 8 0 0 0-16 0v160a8 8 0 0 0 8 8h192a8 8 0 1 0 0-16Z"
        fill={fill}
      />
    </Svg>
  );
};

export default chartline;
