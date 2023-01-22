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
 * facebookLogo component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const facebookLogo = ({
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
        d="M232 128a104.303 104.303 0 0 1-91.5 103.3 4.104 4.104 0 0 1-3.125-1.016A4.105 4.105 0 0 1 136 227.3V152h24a8.005 8.005 0 0 0 5.841-2.517A8.01 8.01 0 0 0 168 143.5a8.2 8.2 0 0 0-8.3-7.5H136v-24c0-4.243 1.686-8.313 4.686-11.314 3.001-3 7.071-4.686 11.314-4.686h16a8.005 8.005 0 0 0 7.541-5.285A8.012 8.012 0 0 0 176 87.5a8.201 8.201 0 0 0-8.3-7.5H152a31.998 31.998 0 0 0-32 32v24H96a8.001 8.001 0 0 0-8 8.5 8.2 8.2 0 0 0 8.3 7.5H120v75.3a3.987 3.987 0 0 1-.338 1.629 4.012 4.012 0 0 1-2.408 2.19 4.015 4.015 0 0 1-1.654.181C62.8 224.9 22 179 24.1 124.1A104 104 0 0 1 232 128Z"
        fill={fill}
      />
    </Svg>
  );
};

export default facebookLogo;
