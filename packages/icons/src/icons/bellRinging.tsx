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
 * bellRinging component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const bellRinging = ({
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
        d="M207.8 112a79.697 79.697 0 0 0-79.2-80h-.6a79.9 79.9 0 0 0-79.8 80c0 34.3-7.1 53.7-13 63.9a16.202 16.202 0 0 0-.1 16.1 15.9 15.9 0 0 0 13.9 8h39a39.998 39.998 0 0 0 40 40 39.998 39.998 0 0 0 40-40h39a15.893 15.893 0 0 0 13.9-8 16.208 16.208 0 0 0 2.092-8.063 16.213 16.213 0 0 0-2.192-8.037c-5.9-10.2-13-29.6-13-63.9ZM128 224a24.098 24.098 0 0 1-24-24h48a24.103 24.103 0 0 1-24 24Zm96.9-150.7a9.303 9.303 0 0 1-3.5.8 7.9 7.9 0 0 1-7.2-4.5 97.002 97.002 0 0 0-35-38.8 8.028 8.028 0 0 1-3.564-4.997 8.032 8.032 0 0 1 1.014-6.053 8.008 8.008 0 0 1 4.997-3.564A8.017 8.017 0 0 1 187.7 17.2a111.7 111.7 0 0 1 40.8 45.4 7.998 7.998 0 0 1-3.6 10.7Zm-190.3.8a9.3 9.3 0 0 1-3.5-.8 8 8 0 0 1-3.6-10.7 111.7 111.7 0 0 1 40.8-45.4 8.018 8.018 0 1 1 8.5 13.6 97 97 0 0 0-35 38.8 7.9 7.9 0 0 1-7.2 4.5Z"
        fill={fill}
      />
    </Svg>
  );
};

export default bellRinging;
