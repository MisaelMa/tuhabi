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
 * cameraOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const cameraOutline = ({
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
        d="M96 32a8 8 0 0 0-6.656 3.562L75.719 56H48a24 24 0 0 0-24 24v112a24.002 24.002 0 0 0 24 24h160c6.365 0 12.47-2.529 16.971-7.029A24.005 24.005 0 0 0 232 192V80a24.003 24.003 0 0 0-24-24h-27.719l-13.625-20.438A7.998 7.998 0 0 0 160 32H96Zm-9.344 36.438L100.281 48h55.438l13.625 20.438A7.998 7.998 0 0 0 176 72h32a8 8 0 0 1 8 8v112a8 8 0 0 1-8 8H48a8.001 8.001 0 0 1-8-8V80a8 8 0 0 1 8-8h32a8 8 0 0 0 6.656-3.562ZM100 132c0-15.464 12.536-28 28-28s28 12.536 28 28-12.536 28-28 28-28-12.536-28-28Zm28-44c-24.301 0-44 19.699-44 44s19.699 44 44 44 44-19.699 44-44-19.699-44-44-44Z"
        fill={fill}
      />
    </Svg>
  );
};

export default cameraOutline;
