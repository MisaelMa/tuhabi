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
 * tiktokLogoOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const tiktokLogoOutline = ({
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
        d="M120 28a8 8 0 0 1 8-8h40a8 8 0 0 1 8 8 47.999 47.999 0 0 0 48 48 8 8 0 0 1 8 8v40a8 8 0 0 1-7.994 8A103.897 103.897 0 0 1 176 120.283v35.713c0 .001 0-.001 0 0a76.024 76.024 0 0 1-11.87 40.822 76.003 76.003 0 0 1-136.567-17.789 76 76 0 0 1 59.025-97.803A8 8 0 0 1 96 89.1v41.6a8 8 0 0 1-4.571 7.228 20.004 20.004 0 0 0-11.392 16.86 20.001 20.001 0 0 0 29.611 18.729A19.993 19.993 0 0 0 120 156V28Zm16 8v120a36.002 36.002 0 0 1-37.09 35.982 35.997 35.997 0 0 1-30.955-19.579A36.002 36.002 0 0 1 80 126.065v-26.6a60.003 60.003 0 0 0-37.99 41.17A60.001 60.001 0 1 0 160 156.004V106a8.001 8.001 0 0 1 12.666-6.498A87.891 87.891 0 0 0 216 115.64V91.498A64.002 64.002 0 0 1 160.502 36H136Z"
        fill={fill}
      />
    </Svg>
  );
};

export default tiktokLogoOutline;
