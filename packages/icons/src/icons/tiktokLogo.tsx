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
 * tiktokLogo component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const tiktokLogo = ({
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
        d="M232 84v40a8 8 0 0 1-8 8 103.198 103.198 0 0 1-48-11.7V156a76 76 0 1 1-89.4-74.8 8 8 0 0 1 6.5 1.7 7.799 7.799 0 0 1 2.9 6.2v41.6a7.902 7.902 0 0 1-4.6 7.2 20.004 20.004 0 0 0-11.364 16.86A20 20 0 1 0 120 156V28a8.001 8.001 0 0 1 8-8h40a8 8 0 0 1 8 8 47.999 47.999 0 0 0 48 48 8 8 0 0 1 8 8Z"
        fill={fill}
      />
    </Svg>
  );
};

export default tiktokLogo;
