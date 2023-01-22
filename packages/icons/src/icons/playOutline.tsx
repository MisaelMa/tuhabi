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
 * playOutline component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const playOutline = ({
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
        d="M72.21 26.033a16 16 0 0 1 16.19.358l143.832 87.958A15.912 15.912 0 0 1 239.979 128a15.9 15.9 0 0 1-7.747 13.651L88.4 229.609l-.018.011a16.006 16.006 0 0 1-16.172.347A15.998 15.998 0 0 1 64 216.009V39.991a16 16 0 0 1 8.21-13.958ZM228.1 121.2l-4.125 6.746.052-.031a.09.09 0 0 0-.035.035.1.1 0 0 0 .036.136l4.072-6.886Zm-4.215 6.8L80 40.009V215.99l.026-.016L223.885 128Z"
        fill={fill}
      />
    </Svg>
  );
};

export default playOutline;
