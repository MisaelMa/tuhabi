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
 * arrowLeft component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const arrowLeft = ({
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
        d="M224 128a8 8 0 0 1-8 8h-96v64a8.002 8.002 0 0 1-4.9 7.4 8.504 8.504 0 0 1-3.1.6 8.3 8.3 0 0 1-5.7-2.3l-72-72a8.1 8.1 0 0 1 0-11.4l72-72a8.402 8.402 0 0 1 8.8-1.7A8 8 0 0 1 120 56v64h96a8 8 0 0 1 8 8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default arrowLeft;
