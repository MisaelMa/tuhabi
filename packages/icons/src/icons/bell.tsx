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
 * bell component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const bell = ({
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
        d="M220.8 175.9c-5.9-10.2-13-29.6-13-63.9v-7.1c0-44.3-35.5-80.6-79.2-80.9h-.6a79.898 79.898 0 0 0-79.8 80v8c0 34.3-7.1 53.7-13 63.9A16 16 0 0 0 49 200h39a39.998 39.998 0 0 0 40 40 39.996 39.996 0 0 0 28.284-11.716A39.996 39.996 0 0 0 168 200h39a15.893 15.893 0 0 0 13.9-8 16.206 16.206 0 0 0-.1-16.1ZM128 224a24.098 24.098 0 0 1-24-24h48a24.094 24.094 0 0 1-7.059 16.941A24.094 24.094 0 0 1 128 224Z"
        fill={fill}
      />
    </Svg>
  );
};

export default bell;
