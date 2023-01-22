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
 * airPlayOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const airPlayOutline = ({
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
        d="M42.343 58.343A8 8 0 0 1 48 56h160a8 8 0 0 1 8 8v112a8 8 0 0 1-8 8h-16a8 8 0 0 0 0 16h16c6.365 0 12.47-2.529 16.971-7.029A24.005 24.005 0 0 0 232 176V64a24.003 24.003 0 0 0-24-24H48a24 24 0 0 0-24 24v112a24.002 24.002 0 0 0 24 24h16a8 8 0 0 0 0-16H48a8.001 8.001 0 0 1-8-8V64a8 8 0 0 1 2.343-5.657Zm91.731 96.451a8.002 8.002 0 0 0-12.148 0l-48 56A8 8 0 0 0 80 224h96a8 8 0 0 0 6.074-13.206l-48-56ZM128 172.293 158.606 208H97.394L128 172.293Z"
        fill={fill}
      />
    </Svg>
  );
};

export default airPlayOutline;
