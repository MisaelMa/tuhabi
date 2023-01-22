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
 * pinterestLogo component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const pinterestLogo = ({
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
        d="M232 131.2c-1.7 54.5-45.8 98.9-100.3 100.7-9.621.366-19.247-.61-28.6-2.9a4.098 4.098 0 0 1-2.9-4.9l8.9-35.4A50.502 50.502 0 0 0 136 196c37 0 66.7-33.5 63.8-73.4-2.6-35.9-32-64.6-68-66.5A72 72 0 0 0 56 128a73.298 73.298 0 0 0 5.2 27 8.029 8.029 0 0 0 10.45 4.45A8.034 8.034 0 0 0 76.1 149a55.497 55.497 0 0 1-4.1-20.1 56.001 56.001 0 1 1 112-.9c0 28.7-21.5 52-48 52-10.5 0-17.8-3.7-22.8-8l14.6-58.1a8.03 8.03 0 0 0-3.059-8.379A8.027 8.027 0 0 0 112.2 110.1L85.4 217.5a3.995 3.995 0 0 1-2.222 2.676 4.002 4.002 0 0 1-3.478-.076A104 104 0 1 1 232 131.2Z"
        fill={fill}
      />
    </Svg>
  );
};

export default pinterestLogo;
