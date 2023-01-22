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
 * trophy component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const trophy = ({
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
        d="M232 64h-24v-8a16.002 16.002 0 0 0-16-16H64a16 16 0 0 0-16 16v8H23.9a16 16 0 0 0-16 16v16a39.998 39.998 0 0 0 40 40h4c9.7 29.9 36.2 52.3 68.1 55.6V216H96a8.001 8.001 0 0 0-5.657 13.657A8.001 8.001 0 0 0 96 232h64a8.002 8.002 0 0 0 8-8 8 8 0 0 0-8-8h-24v-24.4a79.705 79.705 0 0 0 68.3-55.6h3.7a39.996 39.996 0 0 0 28.284-11.716A39.996 39.996 0 0 0 248 96V80a16.002 16.002 0 0 0-16-16ZM47.9 120a24.003 24.003 0 0 1-24-24V80H48v31.1c.014 2.973.181 5.944.5 8.9h-.6ZM232 96a24.094 24.094 0 0 1-7.059 16.941A24.094 24.094 0 0 1 208 120h-.4c.285-2.657.419-5.328.4-8V80h24v16Z"
        fill={fill}
      />
    </Svg>
  );
};

export default trophy;
