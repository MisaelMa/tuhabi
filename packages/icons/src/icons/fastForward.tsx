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
 * fastForward component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const fastForward = ({
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
        d="M253.2 128a15.994 15.994 0 0 1-7.3 13.5l-89.2 57.3a16.003 16.003 0 0 1-16.374.612A15.999 15.999 0 0 1 132 185.3v-42.6l-87.3 56.1a16.007 16.007 0 0 1-16.374.612A15.998 15.998 0 0 1 20 185.3V70.7a16 16 0 0 1 24.7-13.5l87.3 56.1V70.7a15.998 15.998 0 0 1 16.598-16.061c2.882.108 5.682.993 8.102 2.561l89.2 57.3a15.994 15.994 0 0 1 7.3 13.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default fastForward;
