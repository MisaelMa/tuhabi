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
 * cornersIn component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const cornersIn = ({
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
        d="M152 96V48a8 8 0 0 1 4.9-7.4 8.4 8.4 0 0 1 8.8 1.7l48 48a8.404 8.404 0 0 1 1.7 8.8 7.998 7.998 0 0 1-7.4 4.9h-48a8.002 8.002 0 0 1-8-8Zm-56 56H48a8 8 0 0 0-7.4 4.9 8.4 8.4 0 0 0 1.7 8.8l48 48A8.3 8.3 0 0 0 96 216a8.505 8.505 0 0 0 3.1-.6 7.998 7.998 0 0 0 4.9-7.4v-48a8 8 0 0 0-8-8Zm3.1-111.4a8.4 8.4 0 0 0-8.8 1.7l-48 48a8.4 8.4 0 0 0-1.7 8.8A8 8 0 0 0 48 104h48a8 8 0 0 0 8-8V48a8 8 0 0 0-4.9-7.4ZM208 152h-48a8.002 8.002 0 0 0-8 8v48a8.002 8.002 0 0 0 4.9 7.4 8.504 8.504 0 0 0 3.1.6 8.3 8.3 0 0 0 5.7-2.3l48-48a8.406 8.406 0 0 0 1.7-8.8 7.998 7.998 0 0 0-7.4-4.9Z"
        fill={fill}
      />
    </Svg>
  );
};

export default cornersIn;
