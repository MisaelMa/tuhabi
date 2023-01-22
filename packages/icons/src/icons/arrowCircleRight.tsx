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
 * arrowCircleRight component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowCircleRight = ({
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
        d="M128 24a104 104 0 1 0 104 104A104.202 104.202 0 0 0 128 24Zm47.4 107.1a8.693 8.693 0 0 1-1.8 2.6l-33.9 33.9a7.602 7.602 0 0 1-5.6 2.3 7.802 7.802 0 0 1-5.7-2.3 8.001 8.001 0 0 1 0-11.3l20.3-20.3H88a8.001 8.001 0 0 1 0-16h60.7l-20.3-20.3a7.997 7.997 0 0 1 .272-11.029A8 8 0 0 1 139.7 88.4l33.9 33.9a8.693 8.693 0 0 1 1.8 2.6 8.299 8.299 0 0 1 0 6.2Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowCircleRight;
