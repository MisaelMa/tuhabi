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
 * baseball component
 *
 * @param props - icon props
 * @param [props.className] - className for icon
 * @param [props.fill] - fill color for icon
 * @param [props.style] - style for icon
 * @param [props.height] - height size for icon
 * @param [props.viewBox] - viewBox size
 * @param [props.width] - width size for icon
 */
const baseball = ({
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
        d="M51.9 63.9a4 4 0 0 0-6 .3 103.9 103.9 0 0 0 0 127.6 4.008 4.008 0 0 0 4.596 1.234 3.993 3.993 0 0 0 1.404-.934l7.3-7.3a7.996 7.996 0 0 1 6.2-2.8 7.9 7.9 0 0 1 5.2 2 8.2 8.2 0 0 1 .6 11.4 100.042 100.042 0 0 1-7.8 8.2 3.9 3.9 0 0 0 .2 6 103.798 103.798 0 0 0 128.8 0 3.906 3.906 0 0 0 1.195-4.623 3.894 3.894 0 0 0-.995-1.377 103.21 103.21 0 0 1-7.9-8.3 8.022 8.022 0 0 1-1.94-5.816 8.01 8.01 0 0 1 14.04-4.684l7.3 7.3a3.991 3.991 0 0 0 3.068 1.207 4.01 4.01 0 0 0 2.932-1.507 103.898 103.898 0 0 0 0-127.6 3.999 3.999 0 0 0-6-.3l-7.3 7.3a8.096 8.096 0 0 1-6.1 2.8 7.601 7.601 0 0 1-5.3-2 8.202 8.202 0 0 1-.6-11.4 99.863 99.863 0 0 1 7.8-8.2 3.895 3.895 0 0 0 .884-4.692A3.901 3.901 0 0 0 192.4 46.4a103.8 103.8 0 0 0-128.8 0 3.9 3.9 0 0 0-.2 6 99.897 99.897 0 0 1 7.8 8.2A8 8 0 0 1 65.3 74a8.102 8.102 0 0 1-6.1-2.8l-7.3-7.3Zm27.3 24.3a9.597 9.597 0 0 1 2.8-.7 8.1 8.1 0 0 1 7.9 5.3c1.91 5.372 3.38 10.89 4.4 16.5a7.998 7.998 0 0 1-5.9 9.4 6.285 6.285 0 0 1-1.9.3 8 8 0 0 1-7.9-6.6 83.809 83.809 0 0 0-3.7-13.9c-1.4-4 .3-8.7 4.3-10.3Zm15.1 58.5a105.683 105.683 0 0 1-4.4 16.5 8.1 8.1 0 0 1-7.6 5.3 7.005 7.005 0 0 1-3.1-.7 8.2 8.2 0 0 1-4.3-10.3 83.809 83.809 0 0 0 3.7-13.9 8.1 8.1 0 0 1 7.7-6.6l2 .2a8.197 8.197 0 0 1 6 9.5Zm82.5 21.1a7.003 7.003 0 0 1-3.1.7 8.103 8.103 0 0 1-7.6-5.3 105.683 105.683 0 0 1-4.4-16.5 8.204 8.204 0 0 1 5.4-9.3 8.094 8.094 0 0 1 6.528.812 8.093 8.093 0 0 1 3.772 5.388 83.878 83.878 0 0 0 3.7 13.9 8.196 8.196 0 0 1-4.3 10.3Zm3.6-68a23.603 23.603 0 0 0-2.9 11.4 7.997 7.997 0 0 1-8 7.8l-1.4-.2c-4.3-.7-7.2-5.3-6.4-9.6a109.066 109.066 0 0 1 4.3-16.1 8.3 8.3 0 0 1 9.8-5.3 8.003 8.003 0 0 1 5.81 8.507 7.994 7.994 0 0 1-1.21 3.493Z"
        fill={fill}
      />
    </Svg>
  );
};

export default baseball;
