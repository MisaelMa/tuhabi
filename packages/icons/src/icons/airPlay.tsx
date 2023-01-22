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
 * airPlay component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const airPlay = ({
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
        d="M182.1 210.8A7.999 7.999 0 0 1 176 224H80a8.001 8.001 0 0 1-6.1-13.2l48-56a8.01 8.01 0 0 1 6.1-2.824 7.993 7.993 0 0 1 6.1 2.824l48 56ZM208 40H48a23.9 23.9 0 0 0-24 24v112a23.901 23.901 0 0 0 24 24h12.3a4.102 4.102 0 0 0 3-1.4l46.5-54.2a23.9 23.9 0 0 1 36.4 0l46.5 54.2a4.095 4.095 0 0 0 3 1.4H208a23.91 23.91 0 0 0 17-7 23.896 23.896 0 0 0 7-17V64a23.894 23.894 0 0 0-7-17 23.895 23.895 0 0 0-17-7Z"
        fill={fill}
      />
    </Svg>
  );
};

export default airPlay;
