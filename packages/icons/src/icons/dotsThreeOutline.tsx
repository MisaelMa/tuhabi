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
 * dotsThreeOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const dotsThreeOutline = ({
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
        d="M156 128a27.998 27.998 0 0 1-47.799 19.799 27.997 27.997 0 0 1 4.243-43.08A27.998 27.998 0 0 1 128 100a28.1 28.1 0 0 1 28 28ZM48 100a27.998 27.998 0 0 0-27.462 33.463 28.002 28.002 0 0 0 50.743 10.093A28.001 28.001 0 0 0 76 128a28.1 28.1 0 0 0-28-28Zm160 0a27.998 27.998 0 0 0-19.799 47.799 27.997 27.997 0 0 0 43.08-4.243A27.998 27.998 0 0 0 236 128a28.1 28.1 0 0 0-28-28Z"
        fill={fill}
      />
    </Svg>
  );
};

export default dotsThreeOutline;
